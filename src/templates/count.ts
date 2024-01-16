export function Count({ count }: { count: number }) {
  return `
    <div>
      <button
        hx-get="/clicked"
        hx-target="#count"
        hx-swap="innerHTML"
        class="px-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-md text-lg"
      >
        Click me!
        <span id="count">${count}</span>
      </button>
    </div>
  `;
}
