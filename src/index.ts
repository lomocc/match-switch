export default function matchSwitch<
  K extends PropertyKey,
  T extends Record<PropertyKey, any>,
  R =
    | Exclude<T[keyof T], (...args: any[]) => any>
    | ReturnType<Extract<T[keyof T], (...args: any[]) => any>>
>(value: K | null | undefined, branches: T): R {
  if (value != null && value in branches) {
    return branches[value];
  } else {
    return branches[_];
  }
}
/**
 * defaultPropertyKey
 */
export const _ = Symbol();
