
import { groupById, objToArray, renameKeys, trunk } from '../../src/lib/utils'


describe('Group', () => {
  test('groupById', () => {
    const data = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }]
    const expected = { 1: { id: 1, name: 'one' }, 2: { id: 2, name: 'two' } }
    expect(groupById(data)).toEqual(expected);
  });

})

describe('Objects', () => {
  test('objToArray', () => {
    const data = { 1: { id: 1, name: 'one' }, 2: { id: 2, name: 'two' } }
    const expected = [{ id: 1, name: 'one' }, { id: 2, name: 'two' }]
    expect(objToArray(data)).toEqual(expected);
  });

  test('renameKeys', () => {
    const data = { undefined: { id: 1, name: 'one' }, 2: { id: 2, name: 'two' } }
    const expected = { 'Sin categoria': { id: 1, name: 'one' }, 2: { id: 2, name: 'two' } }
    expect(renameKeys({undefined: 'Sin categoria'})(data)).toEqual(expected);
  });
})

describe('Strings', () => {
  test('trunk', () => {
    const data = 'Api for all people'
    const expected = 'Api for...'
    expect(trunk(data, 7)).toEqual(expected);
  });
})


