# InstaLog

Instantly insert labeled log statements for your selected variables with simple keyboard shortcuts.

## Features

- **Log After Selection**: Insert a log statement on the line after your selection
- **Log Before Selection**: Insert a log statement on the line before your selection
- **Smart Indentation**: Automatically matches the indentation of your selected code
- **Labeled Output**: Includes variable name in the log for easier debugging
- **Multi-Language Support**: Works with JavaScript, TypeScript, Python, and Jupyter Notebooks

## Usage

1. Select a variable or expression in your code
2. Press `Alt+-` to log after selection or `Alt+.` to log before selection
3. Or use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P`) and search for:
   - `InstaLog: Log After Selection` - Inserts log statement below the current line
   - `InstaLog: Log Before Selection` - Inserts log statement above the current line

### Examples

**JavaScript/TypeScript:**

```typescript
const userName = 'John';
```

After selecting `userName` and pressing `Alt+-`:

```typescript
const userName = 'John';
console.log('userName: ', userName);
```

**Python:**

```python
user_name = 'John'
```

After selecting `user_name` and pressing `Alt+-`:

```python
user_name = 'John'
print(f'user_name: {user_name}')
```

## Supported Languages

- JavaScript (`.js`)
- TypeScript (`.ts`)
- JavaScript React (`.jsx`)
- TypeScript React (`.tsx`)
- Python (`.py`)
- Jupyter Notebook (`.ipynb`)

## Default Keybindings

- **Log After Selection**: `Alt+-` (Insert log statement after current line)
- **Log Before Selection**: `Alt+.` (Insert log statement before current line)

You can customize these keybindings in VS Code:

1. Open Keyboard Shortcuts (`Ctrl+K Ctrl+S` or `Cmd+K Cmd+S`)
2. Search for `instalog`
3. Assign your preferred shortcuts

## Requirements

No additional requirements or dependencies.

## Known Issues

Please report issues on [GitHub](https://github.com/ynkf/InstaLog/issues).

## Release Notes

### 1.1.0

- Added Python support (`.py`)
- Added Jupyter Notebook support (`.ipynb`)
- Changed getLogStatement to use File Extensions instead of Language Ids

(see [CHANGELOG.md](CHANGELOG.md) for all release notes)

---

**Enjoy!**
