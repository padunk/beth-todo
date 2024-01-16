import * as elements from "typed-html";

export function BaseHTML({ children }: elements.Children) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Elysia HTMX</title>
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        <script src="https://cdn.twind.style" crossorigin></script>
        <script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
        <style>
          .fade-out.htmx-swapping {
            opacity: 0;
            transition: opacity 1s ease-out;
          }
        </style>
      </head>
      ${children}
    </html>
  `;
}
