import * as vscode from 'vscode';
import { getLogStatementByFileExtension } from './helpers/log-statement-mapping';

export function logAfterSelection(): void {
  logSelection('after');
}

export function logBeforeSelection(): void {
  logSelection('before');
}

/**
 * Logs the selected text either before or after the selection.
 * @param position Determines whether to log before or after the selection ('before' | 'after').
 * @returns void
 */
function logSelection(position: 'before' | 'after'): void {
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

    const targetLineNumber =
      position === 'before'
        ? selectedLineNumber
        : getNonChainedLineNumber(editor, selectedLineNumber + 1);

    editor.edit((editBuilder) => {
      editBuilder.insert(
        new vscode.Position(targetLineNumber, 0),
        logStatement,
      );
    });
  }
}

function getNonChainedLineNumber(
  editor: vscode.TextEditor,
  lineNumber: number,
): number {
  const isChained = editor.document
    .lineAt(lineNumber)
    .text.trimStart()
    .startsWith('.');

  return isChained
    ? getNonChainedLineNumber(editor, lineNumber + 1)
    : lineNumber;
}
