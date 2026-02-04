/**
 * Builds a log statement based on the file extension and selected text.
 * @param fileExtension The file extension of the current document (e.g., 'ts', 'js', 'py', ...).
 * @param selectedText The text that has been selected in the editor.
 * @param indentation The indentation string to prepend to the log statement.
 * @returns A log statement string based on the file extension and selected text, with proper indentation.
 */
export function getLogStatementByFileExtension(
  fileExtension: string,
  selectedText: string,
  indentation: string,
): string {
  switch (fileExtension) {
    case 'ts':
    case 'tsx':
    case 'js':
    case 'jsx':
      return `${indentation}console.log('${selectedText}: ', ${selectedText});\n`;
    case 'py':
      return `${indentation}print(f'${selectedText}: {${selectedText}}')\n`;
    case 'ipynb':
      return `\n${indentation}print(f'${selectedText}: {${selectedText}}')\n`;
    default:
      throw new Error(`Unsupported file extension: ${fileExtension}`);
  }
}
