import { toUtc, toLocal } from '../../src/lib/time'

test('Convert time local to utc', () => {

  const dateLocal = '14:00:00'
  const expected = '17:00:00'

  expect(
    toUtc(dateLocal)
  ).toEqual(expected);
});

test('Convert time local to utc', () => {

  const dateUTC = '17:00:00'
  const expected = '14:00:00'

  expect(
    toLocal(dateUTC)
  ).toEqual(expected);
});

