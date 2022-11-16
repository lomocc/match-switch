export default function matchSwitch<
  K extends PropertyKey,
  T extends Record<
    PropertyKey,
    Object | (() => Object) | ((next: (value: PropertyKey) => never) => void)
  >,
  R =
    | ReturnType<Extract<T[keyof T], (...args: any[]) => any>>
    | Exclude<T[keyof T], (...args: any[]) => any>
>(value: K | null | undefined, branches: T): R {
  const target =
    value != null && value in branches ? branches[value] : branches[_ as K];
  if (typeof target == 'function') {
    // @ts-ignore
    return target(value => matchSwitch(value, branches));
  } else {
    // @ts-ignore
    return target;
  }
}
/**
 * defaultPropertyKey
 */
export const _ = Symbol();
