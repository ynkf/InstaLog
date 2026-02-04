import * as vscode from 'vscode';
import { logAfterSelection, logBeforeSelection } from './commands';

export function activate(context: vscode.ExtensionContext) {
  const commandMap = {
    'instalog.logAfterSelection': logAfterSelection,
    'instalog.logBeforeSelection': logBeforeSelection,
  };

  Object.entries(commandMap).forEach(([command, handler]) => {
    context.subscriptions.push(
      vscode.commands.registerCommand(command, handler),
    );
  });
}

export function deactivate() {}
