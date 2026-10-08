const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
function load(path, env = process.env) {
  const code = ts.transpileModule(fs.readFileSync(path, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2017 },
  }).outputText;
  const exports = {};
  new Function('exports', 'process', code)(exports, { env });
  return exports;
}
const { getPublicationDate, formatPublicationDate } = load('app/lib/publicationSchedule.ts');
for (const [input, expected] of [
  ['2026-10-08T12:00:00+09:00', '2026-10-14'],
  ['2026-10-12T12:00:00+09:00', '2026-10-21'],
  ['2026-10-14T12:00:00+09:00', '2026-10-21'],
  ['2026-10-15T12:00:00+09:00', '2026-10-21'],
  ['2026-10-11T23:59:59+09:00', '2026-10-14'],
  ['2026-10-12T00:00:00+09:00', '2026-10-21'],
  ['2026-12-31T23:59:59+09:00', '2027-01-06'],
  ['2027-01-03T23:59:59+09:00', '2027-01-06'],
  ['2027-01-04T00:00:00+09:00', '2027-01-13'],
  ['2026-10-11T14:59:59Z', '2026-10-14'],
  ['2026-10-11T15:00:00Z', '2026-10-21'],
  ['2028-02-29T12:00:00+09:00', '2028-03-08'],
]) test(input, () => assert.equal(getPublicationDate(new Date(input)), expected));
test('all seven weekdays schedule the following calendar week Wednesday', () => {
  for (let day = 12; day <= 18; day++) {
    assert.equal(getPublicationDate(new Date(`2026-10-${day}T12:00:00+09:00`)), '2026-10-21');
  }
});
test('English publication date', () => assert.equal(formatPublicationDate('2026-10-14'), 'Wednesday, October 14, 2026'));
test('invalid timestamp fails rather than inventing a date', () => assert.throws(() => getPublicationDate(new Date('invalid'))));
test('preview environment fails closed outside development/Preview', () => {
  for (const [NODE_ENV, VERCEL_ENV, expected] of [
    ['development', undefined, true], ['production', undefined, false],
    ['test', undefined, false], ['production', 'preview', true],
    ['development', 'production', false], ['production', 'production', false],
    ['development', 'development', false],
  ]) assert.equal(load('app/lib/confirmationPreview.ts', { NODE_ENV, VERCEL_ENV }).isConfirmationPreviewEnabled(), expected);
});
