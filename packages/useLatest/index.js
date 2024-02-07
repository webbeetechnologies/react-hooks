import React from "react";

/**
 * @function
 * @template T
 * @param {T} value
 * @returns {React.MutableRefObject<T>}
 */

export const useLatest = (value) => {
    const ref = React.useRef(value);
    ref.current = value;

    React.useEffect(() => () => {

        ref.current = /** @type {T} */ (null);
    });

    return ref;
}

export default useLatest;