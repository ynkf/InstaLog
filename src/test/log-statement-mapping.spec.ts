import * as assert from 'assert';
import { getLogStatementByFileExtension } from '../helpers/log-statement-mapping';

suite('getLogStatementByFileExtension Tests', () => {
  test('should generate console.log for TypeScript', () => {
    const result = getLogStatementByFileExtension('ts', 'myVar', '');
    assert.strictEqual(result, "console.log('myVar: ', myVar);\n");
  });

  test('should generate console.log for TypeScript React', () => {
    const result = getLogStatementByFileExtension('tsx', 'myVar', '');
    assert.strictEqual(result, "console.log('myVar: ', myVar);\n");
  });

  test('should generate console.log for JavaScript', () => {
    const result = getLogStatementByFileExtension('js', 'myVar', '');
    assert.strictEqual(result, "console.log('myVar: ', myVar);\n");
  });

  test('should generate console.log for JavaScript React', () => {
    const result = getLogStatementByFileExtension('jsx', 'myVar', '');
    assert.strictEqual(result, "console.log('myVar: ', myVar);\n");
  });

  test('should preserve indentation with spaces for TypeScript', () => {
    const result = getLogStatementByFileExtension('ts', 'myVar', '  ');
    assert.strictEqual(result, "  console.log('myVar: ', myVar);\n");
  });

  test('should preserve indentation with tabs for TypeScript', () => {
    const result = getLogStatementByFileExtension('ts', 'myVar', '\t\t');
    assert.strictEqual(result, "\t\tconsole.log('myVar: ', myVar);\n");
  });

  test('should handle complex expressions', () => {
    const result = getLogStatementByFileExtension('ts', 'obj.prop', '');
    assert.strictEqual(result, "console.log('obj.prop: ', obj.prop);\n");
  });

  test('should throw error for unsupported file extension', () => {
    assert.throws(
      () => getLogStatementByFileExtension('unknown', 'myVar', ''),
      /Unsupported file extension: unknown/,
    );
  });
});
