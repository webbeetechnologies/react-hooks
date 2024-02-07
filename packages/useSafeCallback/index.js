import React from 'react';
import useLatest from '../useLatest';

/**
 *
 * @template Args
 * @template Returns
 * @param {(...args: Args[]) => Returns} func
 * @returns {(...args: Args[]) => Returns}
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
