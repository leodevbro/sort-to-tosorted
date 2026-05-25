const a = [...items].sort();
const b = [...getItems()].sort((x, y) => x - y);
const c = [...arr].sort(compareFn);
const keep = [...a, b].sort();
const keep2 = items.sort();
