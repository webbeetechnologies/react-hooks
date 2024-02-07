import React from 'react';

/**
 * @function
 * @template T
 * @param {T} value
 * @returns {React.MutableRefObject<T>}
 */

export const usePrevious = value => {
    const ref = React.useRef(value);

    React.useEffect(() => {
        requestIdleCallback(
            () => {
                ref.current = value;
            },
            { timeout: 1 },
        );
    });

    React.useEffect(() => () => {
        ref.current = /** @type {T} */ (null);
    });

    return ref;
};

export default usePrevious;
