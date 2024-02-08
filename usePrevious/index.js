import { useEffect, useRef } from 'react';

/**
 * @function
 * @template T
 * @param {T} value
 * @returns {import('react').MutableRefObject<T>}
 */

export const usePrevious = value => {
    const ref = useRef(value);

    useEffect(() => {
        requestIdleCallback(
            () => {
                ref.current = value;
            },
            { timeout: 1 },
        );
    });

    useEffect(() => () => {
        ref.current = /** @type {T} */ (null);
    });

    return ref;
};

export default usePrevious;
