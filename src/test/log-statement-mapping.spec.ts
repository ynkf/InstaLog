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

  test('should generate print for Python', () => {
    const result = getLogStatementByFileExtension('py', 'my_var', '');
    assert.strictEqual(result, "print(f'my_var: {my_var}')\n");
  });

  test('should generate print for Jupyter Notebook with extra newline', () => {
    const result = getLogStatementByFileExtension('ipynb', 'my_var', '');
    assert.strictEqual(result, "\nprint(f'my_var: {my_var}')\n");
  });

  test('should preserve indentation with spaces for TypeScript', () => {
    const result = getLogStatementByFileExtension('ts', 'myVar', '  ');
    assert.strictEqual(result, "  console.log('myVar: ', myVar);\n");
  });

  test('should preserve indentation with tabs for TypeScript', () => {
    const result = getLogStatementByFileExtension('ts', 'myVar', '\t\t');
    assert.strictEqual(result, "\t\tconsole.log('myVar: ', myVar);\n");
  });

  test('should preserve indentation for Python', () => {
    const result = getLogStatementByFileExtension('py', 'my_var', '    ');
    assert.strictEqual(result, "    print(f'my_var: {my_var}')\n");
  });

  test('should preserve indentation for Jupyter Notebook', () => {
    const result = getLogStatementByFileExtension('ipynb', 'my_var', '  ');
    assert.strictEqual(result, "\n  print(f'my_var: {my_var}')\n");
  });

  test('should handle complex expressions', () => {
    const result = getLogStatementByFileExtension('ts', 'obj.prop', '');
    assert.strictEqual(result, "console.log('obj.prop: ', obj.prop);\n");
  });

  test('should handle expressions with underscores', () => {
    const result = getLogStatementByFileExtension('py', 'user_name', '');
    assert.strictEqual(result, "print(f'user_name: {user_name}')\n");
  });

  test('should throw error for unsupported file extension', () => {
    assert.throws(
      () => getLogStatementByFileExtension('unknown', 'myVar', ''),
      /Unsupported file extension: unknown/,
    );
  });
});
