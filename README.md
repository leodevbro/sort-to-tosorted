# sort-to-tosorted

Codemod to convert `[...array].sort()` into `array.toSorted()` (ES2023)

## Run the script directly from the Codemod Registry

```bash
npx codemod@latest sort-to-tosorted
```


## Examples

Before:
```ts
const a = [...items].sort();
const b = [...getItems()].sort((x, y) => x - y);
const c = [...arr].sort(compareFn);
const keep = [...a, b].sort();
const keep2 = items.sort();

```

After:
```ts
const a = items.toSorted();
const b = getItems().toSorted((x, y) => x - y);
const c = arr.toSorted(compareFn);
const keep = [...a, b].sort();
const keep2 = items.sort();
```

## Installation

```bash
# Install from registry
codemod run sort-to-tosorted

# Or run locally
codemod run -w workflow.yaml
```

## Usage

Document the exact migration this codemod performs before publishing. At minimum, cover:

- The concrete syntax or API patterns it rewrites
- The file types or paths it targets
- Important preserve/no-op cases and exclusions

## Development

```bash
# Test the transformation
npm test

# Validate the workflow
codemod workflow validate -w workflow.yaml

# Publish to registry
codemod login
codemod publish
```

## License

MIT


