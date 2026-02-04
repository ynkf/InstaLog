import * as assert from 'assert';
import { getLogStatementByLanguageId } from '../helpers/log-statement-mapping';

suite('getLogStatementByLanguageId Tests', () => {
  test('should generate console.log for TypeScript', () => {
    const result = getLogStatementByLanguageId('typescript', 'myVar', '');
    assert.strictEqual(result, 'console.log(myVar);');
  });

  test('should generate console.log for TypeScript React', () => {
    const result = getLogStatementByLanguageId('typescriptreact', 'myVar', '');
    assert.strictEqual(result, 'console.log(myVar);');
  });

  test('should generate console.log for JavaScript', () => {
    const result = getLogStatementByLanguageId('javascript', 'myVar', '');
    assert.strictEqual(result, 'console.log(myVar);');
  });

  test('should generate console.log for JavaScript React', () => {
    const result = getLogStatementByLanguageId('javascriptreact', 'myVar', '');
    assert.strictEqual(result, 'console.log(myVar);');
  });

  test('should preserve indentation with spaces', () => {
    const result = getLogStatementByLanguageId('typescript', 'myVar', '  ');
    assert.strictEqual(result, '  console.log(myVar);');
  });

  test('should preserve indentation with tabs', () => {
    const result = getLogStatementByLanguageId('typescript', 'myVar', '\t\t');
    assert.strictEqual(result, '\t\tconsole.log(myVar);');
  });

  test('should handle complex expressions', () => {
    const result = getLogStatementByLanguageId('typescript', 'obj.prop', '');
    assert.strictEqual(result, 'console.log(obj.prop);');
  });

  test('should throw error for unknown language', () => {
    assert.throws(
      () => getLogStatementByLanguageId('unknown', 'myVar', ''),
      /Unsupported language: unknown/,
    );
  });
});
