import matchSwitch, { $, _ } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(matchSwitch(1, { 1: 'hello', [_]: 5 })).toEqual('hello');
    expect(matchSwitch(1, { 1: () => 'hello', [_]: 5 })).toEqual('hello');
    expect(
      matchSwitch(1, { 1: (_, next) => next(2), 2: 'hello', [_]: 5 })
    ).toEqual('hello');
    expect(matchSwitch(1, { 12: 'hello', [_]: 5 })).toEqual(5);
    expect(matchSwitch(1, { 12: 'hello', [_]: () => 5 })).toEqual(5);
    expect(matchSwitch(1, { 12: 'hello', [_]: 5 })).toEqual(5);
    expect(matchSwitch(1, { 12: 'hello', _: 5, [_]: 6 })).toEqual(6);
    expect(matchSwitch(1, { [$]: '$', [_]: '_', 1: '1' })).toEqual('$');
    expect(
      matchSwitch(1, { [$]: (_, next) => next(2), [_]: '_', 1: '1', 2: '2' })
    ).toEqual('2');
  });
});
