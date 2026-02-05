# Change Log

All notable changes to the "InstaLog" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-05

### Changed

- getLogStatement to use File Extensions instead of Language Ids

### Added

- Support for Python (.py) files using `print(f'var: {var}')`
- Support for Jupyter Notebook (.ipynb) files

## [1.0.0] - 2026-02-04

### Added

- Initial stable release
- Console.log insertion after selection with `Alt+-` keybinding
- Console.log insertion before selection with `Alt+.` keybinding
- Labeled console.log output (e.g., `console.log('varName: ', varName)`)
- Smart indentation matching
- Support for JavaScript (.js)
- Support for TypeScript (.ts)
- Support for JavaScript React (.jsx)
- Support for TypeScript React (.tsx)
- Command palette commands: "InstaLog: Log After Selection" and "InstaLog: Log Before Selection"
