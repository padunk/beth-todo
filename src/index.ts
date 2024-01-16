import { Elysia, t } from "elysia";

import cors from "@elysiajs/cors";
import html from "@elysiajs/html";

import { getCountHandler } from "./handlers/count/count";
import { homeHandler } from "./handlers/home/home";
import {
  createTodoHandler,
  deleteTodoHandler,
  getTodoHandler,
  postTodoToggleHandler,
} from "./handlers/todo/todo";

const app = new Elysia();
app.use(cors());
app.use(html());

// path
app.get("/", homeHandler);

app.get("/todos", getTodoHandler);

// service API
app.get("/clicked", getCountHandler);

app.post("/todos", ({ body }) => createTodoHandler({ body }), {
  body: t.Object({
    content: t.String(),
  }),
});

app.post(
  "/todos/toggle/:id",
  ({ params }) => postTodoToggleHandler({ params }),
  {
    params: t.Object({
      id: t.Numeric(),
    }),
  }
);

app.delete("/todos/:id", ({ params }) => deleteTodoHandler({ params }), {
  params: t.Object({
    id: t.Numeric(),
  }),
});

app.listen(3300);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export { app };
