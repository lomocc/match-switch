export default function matchSwitch<
  P extends Record<
    PropertyKey,
    ((value: (value: PropertyKey) => Object) => Object) | Object
  >
>(
  value: PropertyKey,
  branches: P,
  defaultBranch?: ((value: (value: PropertyKey) => Object) => Object) | Object
) {
  const target =
    value in branches
      ? // @ts-ignore
        branches[value]
      : defaultBranch ?? branches.default ?? branches._;
  if (typeof target == 'function') {
    return target((value: PropertyKey) =>
      matchSwitch(value, branches, defaultBranch)
    );
  } else {
    return target;
  }
}
