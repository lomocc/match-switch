import matchSwitch from '../src';

describe('blah', () => {
  it('works', () => {
    expect(matchSwitch(1, { 1: 'hello', default: 5 })).toEqual('hello');
    expect(matchSwitch(1, { 1: () => 'hello', default: 5 })).toEqual('hello');
    expect(
      matchSwitch(1, { 1: next => next(2), 2: 'hello', default: 5 })
    ).toEqual('hello');
    expect(matchSwitch(1, { 12: 'hello', default: 5 })).toEqual(5);
    expect(matchSwitch(1, { 12: 'hello', _: 5 })).toEqual(5);
    expect(matchSwitch(1, { 12: 'hello', _: 5 }, 6)).toEqual(6);
  });
});
