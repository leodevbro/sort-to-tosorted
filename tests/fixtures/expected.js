const a = items.toSorted();
const b = getItems().toSorted((x, y) => x - y);
const c = arr.toSorted(compareFn);
const keep = [...a, b].sort();
const keep2 = items.sort();
