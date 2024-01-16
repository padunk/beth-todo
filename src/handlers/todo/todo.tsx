import { eq } from "drizzle-orm";

import { db as todoDb } from "../../db";
import { Todo, todos } from "../../db/schema";
import { BaseHTML } from "../../templates/base";
import { TodoItem, TodoList } from "../../templates/todo-list";

export async function getTodoHandler() {
  const data = await todoDb.select().from(todos).all();
  return (
    <BaseHTML>
      <TodoList todos={data} />
    </BaseHTML>
  );
}

export async function postTodoToggleHandler({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const oldTodo = await todoDb
    .select()
    .from(todos)
    .where(eq(todos.id, params.id))
    .get();

  const newTodo = await todoDb
    .update(todos)
    .set({ completed: !oldTodo?.completed })
    .where(eq(todos.id, params.id))
    .returning()
    .get();

  return <TodoItem {...newTodo} />;
}

export async function deleteTodoHandler({
  params,
}: {
  params: {
    id: number;
  };
}) {
  await todoDb.delete(todos).where(eq(todos.id, params.id)).run();
}

export async function createTodoHandler({
  body,
}: {
  body: { content: string };
}) {
  if (body.content.length === 0) {
    throw new Error("content cannot be empty");
  }

  const newTodo = await todoDb.insert(todos).values(body).returning().get();

  return <TodoItem {...newTodo} />;
}
