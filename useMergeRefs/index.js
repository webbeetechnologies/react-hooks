import { useCallback } from 'react';
import useLatest from '@bambooapp/react-hooks/useLatest';
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
                /** @type {import('react')MutableRefObject<T | null>}*/ ref.current = value;
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
    const latestRefs = useLatest([refs].flat());
    return useCallback(
        value => {
            mergeRefs(latestRefs.current)(value);
        },
        [latestRefs],
    );
};

export default useMergedRefs;
