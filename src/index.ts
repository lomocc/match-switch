export default function matchSwitch<
  Autorun extends boolean,
  K extends PropertyKey,
  T extends Record<PropertyKey, any>,
  R = Autorun extends true
    ?
        | Exclude<T[keyof T], (...args: any[]) => any>
        | ReturnType<Extract<T[keyof T], (...args: any[]) => any>>
    : T[keyof T]
>(value: K | null | undefined, branches: T, autorun?: Autorun): R {
  const target =
    value != null && value in branches ? branches[value] : branches[_ as K];
  if (autorun && typeof target === 'function') {
    return target();
  } else {
    return target;
  }
}
/**
 * defaultPropertyKey
 */
export const _ = Symbol('default');
