export let initialCount = 0;

function count() {
  return initialCount;
}

export function getCountHandler() {
  initialCount = count() + 1;
  return initialCount;
}
