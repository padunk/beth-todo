import { BaseHTML } from "../../templates/base";

export function homeHandler() {
  return (
    <BaseHTML>
      <body
        class="flex w-full h-screen justify-center items-center bg-gray-100"
        hx-get="/todos"
        hx-trigger="load"
        hx-swap="innerHTML"
      />
    </BaseHTML>
  );
}
