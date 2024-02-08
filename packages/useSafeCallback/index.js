import React from 'react';
import useLatest from '../useLatest';

/**
 *
 * @template  {function} T
 * @param {T} func
 * @returns {T}
 */

export const useSafeCallback = func => {
    const latestFunc = useLatest(func);
    if (typeof func !== 'function')
        throw new Error('useSafeCallback accepts exactly one argument of type function');

    return React.useCallback((...args) => {
        return latestFunc.current(...args);
    }, []);
};

export default useSafeCallback;
