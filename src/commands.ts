import * as vscode from 'vscode';
import { getLogStatementByFileExtension } from './helpers/log-statement-mapping';

export function logAfterSelection(): void {
  logSelection(1);
}

export function logBeforeSelection(): void {
  logSelection(0);
}

/**
 * Logs the selected text either before or after the selection.
 * @param position 0 for before, 1 for after
 * @returns void
 */
function logSelection(position: number): void {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const selection = editor.selection;
    const selectedText = editor.document.getText(selection);

    if (!selectedText) {
      vscode.window.showWarningMessage('Please select something to log.');
      return;
    }

    const fileExtension = editor.document.uri.path.split('.').pop() || '';
    const selectedLineNumber = selection.active.line;
    const indentation =
      editor.document.lineAt(selectedLineNumber).text.match(/^\s*/)?.[0] || '';

    let logStatement = '';
    try {
      logStatement = getLogStatementByFileExtension(
        fileExtension,
        selectedText,
        indentation,
      );
    } catch (e) {
      if (e instanceof Error) {
        vscode.window.showErrorMessage(e.message);
        return;
      }
    }

    editor.edit((editBuilder) => {
      editBuilder.insert(
        new vscode.Position(selectedLineNumber + position, 0),
        logStatement,
      );
    });
  }
}
