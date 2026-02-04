/**
 * Builds a log statement based on the language ID and selected text.
 * @param languageId The language ID of the current document (e.g., 'typescript', 'javascript'). see http://code.visualstudio.com/docs/languages/identifiers for more details.
 * @param selectedText The text that has been selected in the editor.
 * @param indentation The indentation string to prepend to the log statement.
 * @returns A log statement string based on the language ID and selected text, with proper indentation.
 */
export function getLogStatementByLanguageId(
  languageId: string,
  selectedText: string,
  indentation: string,
): string {
  let logStatement = '';

  switch (languageId) {
    case 'typescript':
    case 'typescriptreact':
    case 'javascript':
    case 'javascriptreact':
      logStatement = `console.log('${selectedText}: ', ${selectedText});`;
      break;
    default:
      throw new Error(`Unsupported language: ${languageId}`);
  }

  return `${indentation}${logStatement}`;
}
