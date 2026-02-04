# QuickLog

Quickly insert console.log statements for your selected variables with simple keyboard shortcuts.

## Features

- **Log After Selection**: Insert a console.log statement on the line after your selection
- **Log Before Selection**: Insert a console.log statement on the line before your selection
- **Smart Indentation**: Automatically matches the indentation of your selected code
- **Multi-Language Support**: Works with JavaScript, TypeScript, and their React variants

## Usage

1. Select a variable or expression in your code
2. Use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for:
   - `Log After Selection` - Inserts console.log below the current line
   - `Log Before Selection` - Inserts console.log above the current line

### Example

**Before:**

```typescript
const userName = 'John';
```

**After selecting `userName` and running "Log After Selection":**

```typescript
const userName = 'John';
console.log(userName);
```

## Supported Languages

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JavaScript React (`.jsx`)
- TypeScript React (`.tsx`)

## Keybindings

You can set custom keybindings in VS Code:

1. Open Keyboard Shortcuts (`Ctrl+K Ctrl+S` or `Cmd+K Cmd+S`)
2. Search for `quicklog`
3. Assign your preferred shortcuts

## Requirements

No additional requirements or dependencies.

## Known Issues

Please report issues on [GitHub](https://github.com/ynkf/QuickLog/issues).

## Release Notes

### 0.0.1

Initial release of QuickLog

- Basic console.log insertion
- Support for JavaScript and TypeScript
- Smart indentation handling

---

**Enjoy!**
