import { useCallback } from 'react';
import useLatest from '@bambooapp/react-hooks/useLatest';

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

    return useCallback((...args) => {
        return latestFunc.current(...args);
    }, []);
};

export default useSafeCallback;
