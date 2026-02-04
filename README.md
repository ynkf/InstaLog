# QuickLog

Quickly insert labeled console.log statements for your selected variables with simple keyboard shortcuts.

## Features

- **Log After Selection**: Insert a console.log statement on the line after your selection
- **Log Before Selection**: Insert a console.log statement on the line before your selection
- **Smart Indentation**: Automatically matches the indentation of your selected code
- **Labeled Output**: Includes variable name in the log for easier debugging
- **Multi-Language Support**: Works with JavaScript, TypeScript, and their React variants

## Usage

1. Select a variable or expression in your code
2. Press `Alt+-` to log after selection or `Alt+.` to log before selection
3. Or use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for:
   - `QuickLog: Log After Selection` - Inserts console.log below the current line
   - `QuickLog: Log Before Selection` - Inserts console.log above the current line

### Example

**Before:**

```typescript
const userName = 'John';
```

**After selecting `userName` and pressing `Alt+-`:**

```typescript
const userName = 'John';
console.log('userName: ', userName);
```

## Supported Languages

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JavaScript React (`.jsx`)
- TypeScript React (`.tsx`)

## Default Keybindings

- **Log After Selection**: `Alt+-` (Insert log statement after current line)
- **Log Before Selection**: `Alt+.` (Insert log statement before current line)

You can customize these keybindings in VS Code:

1. Open Keyboard Shortcuts (`Ctrl+K Ctrl+S` or `Cmd+K Cmd+S`)
2. Search for `quicklog`
3. Assign your preferred shortcuts

## Requirements

No additional requirements or dependencies.

## Known Issues

Please report issues on [GitHub](https://github.com/ynkf/QuickLog/issues).

## Release Notes

### 1.0.0

First stable release! 🎉

- Console.log insertion with labeled output
- Default keybindings (`Alt+.` and `Alt+-`)
- Smart indentation handling
- Support for JS/TS/JSX/TSX files

---

**Enjoy!**
