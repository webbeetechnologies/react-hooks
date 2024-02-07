/**
 *
 * @typedef {React.MutableRefObject<T> | React.LegacyRef<T> | undefined} RefType<T>
 * @template {unknown} T
 *
 * */
/**
 *
 * @function
 * @template T
 * @param {...(RefType<T> | RefType<T>[])} refs
 * @returns {(value: T) => void}
 */
export function mergeRefs<T>(...refs: (RefType<T> | RefType<T>[])[]): (value: T) => void;
export function useMergedRefs<T>(...refs: (RefType<T> | RefType<T>[])[]): (value: T) => void;
/**
 * <T>
 */
export type RefType<T extends unknown> = React.MutableRefObject<T> | React.LegacyRef<T> | undefined;
//# sourceMappingURL=index.d.ts.map