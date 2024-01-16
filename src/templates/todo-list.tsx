import { tw } from "twind";

import { Todo } from "../types";

export function TodoItem({ id, content, completed }: Todo) {
  return (
    <div class="grid grid-cols-3 mb-3 fade-out" id={id + content}>
      <p>{content}</p>
      <input
        type="checkbox"
        id={id + ""}
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
      />
      <button
        class="text-red-500"
        hx-delete={`/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML swap:1s"
      >
        X
      </button>
    </div>
  );
}

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div class="flex justify-evenly gap-6">
      <div>
        <h2 class="m-6 text-xl font-bold">Add Todo</h2>
        <form
          hx-post="/todos"
          hx-target="#list"
          hx-swap="beforeend"
          hx-target-5x="#server-error"
          _="on submit target.reset()"
          class="flex flex-col gap-6"
        >
          <div class="flex flex-col gap-3">
            <label htmlFor="content">Content</label>
            <input
              class="px-4 py-2 rounded-md"
              type="text"
              name="content"
              id="content"
              autocomplete="off"
            />
          </div>
          <button class="rounded-md bg-blue-300 px-4 py-2" type="submit">
            Submit
          </button>
          <div id="server-error" class="text-red-500">
            Server Error
          </div>
        </form>
      </div>
      <div>
        <h2 class="m-6 text-xl font-bold">Todo list</h2>
        <div id="list">
          {todos.map((todo) => {
            return <TodoItem {...todo} />;
          })}
        </div>
      </div>
    </div>
  );
}
