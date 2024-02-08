import useSafeCallback from '@bambooapp/react-hooks/useSafeCallback';
/**
 *
 * @typedef {import('react').MutableRefObject<T> | import('react').LegacyRef<T> | undefined | null} RefType<T>
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
export function mergeRefs(...refs) {
    return value => {
        [refs].flat().forEach(ref => {
            if (!ref) return;
            if (typeof ref === 'function') {
                ref(value);
            } else if (ref != null) {
                /** @type {import('react').MutableRefObject<T | null>}*/ ref.current = value;
            }
        });
    };
}

/**
 *
 * @function
 * @template T
 * @param {...(RefType<T> | RefType<T>[])} refs
 * @returns {(value: T) => void}
 */
export const useMergedRefs = (...refs) => {
    return useSafeCallback(value => {
        mergeRefs(...[refs].flat())(value);
    });
};

export default useMergedRefs;
