export default function matchSwitch<
  K extends PropertyKey,
  T extends Record<PropertyKey, any>,
  R =
    | Exclude<T[keyof T], (...args: any[]) => any>
    | ReturnType<Extract<T[keyof T], (...args: any[]) => any>>
>(value: K | null | undefined, branches: T): R {
  if (value != null && value in branches) {
    return branches[value] as R;
  } else {
    return branches[_ as K];
  }
}
/**
 * defaultPropertyKey
 */
export const _ = Symbol('default');
