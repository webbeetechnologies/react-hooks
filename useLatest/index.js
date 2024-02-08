import { useRef, useEffect } from 'react';

/**
 * @function
 * @template T
 * @param {T} value
 * @returns {import('react').MutableRefObject<T>}
 */

export const useLatest = value => {
    const ref = useRef(value);
    ref.current = value;

    useEffect(
        () => () => {
            ref.current = /** @type {T} */ (null);
        },
        [],
    );

    return ref;
};

export default useLatest;
