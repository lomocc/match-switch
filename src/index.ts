import { omit } from 'lodash';

export default function matchSwitch<
  K extends PropertyKey,
  T extends Record<
    PropertyKey,
    | Object
    | null
    | undefined
    | (() => Object)
    | ((value: PropertyKey, next: (value: PropertyKey) => never) => void)
  >,
  R =
    | ReturnType<Extract<T[keyof T], (...args: any[]) => any>>
    | Exclude<T[keyof T], (...args: any[]) => any>
>(value: K | null | undefined, branches: T): R {
  const target =
    $ in branches
      ? branches[$ as K]
      : value != null && value in branches
      ? branches[value]
      : branches[_ as K];
  if (typeof target == 'function') {
    // @ts-ignore
    return target(value, value => matchSwitch(value, omit(branches, [$])));
  } else {
    // @ts-ignore
    return target;
  }
}
/**
 * defaultPropertyKey
 */
export const _ = Symbol();
/**
 * allPropertyKey
 */
export const $ = Symbol();
