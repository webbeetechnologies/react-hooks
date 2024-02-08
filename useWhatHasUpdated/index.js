import useLatest from '@bambooapp/react-hooks/useLatest';
import { useEffect, useMemo } from 'react';

const map = new Map();

/**
 * @typedef { Object } Config
 * @property { boolean } [debug=false]
 * @property { boolean } [useCached=false]
 */

/**
 *
 * @template { Record<string, unknown> } T
 *
 * @param {string} name
 * @param {T} initialObject
 * @param {Config} [config]
 * @returns {(nextObject: T) => void}
 */

export const whatHasUpdatedFactory = (
    name,
    initialObject,
    { debug = false, useCached = false } = {},
) => {
    const getPrev = () => {
        if (!map.has(name)) map.set(name, initialObject);
        return useCached ? map.get(name) : initialObject;
    };

    /**
     *
     * @param {T} value
     */
    const setPrev = value => {
        if (useCached) map.set(name, value);
        else initialObject = value;
    };

    return nextObject => {
        const old = getPrev();
        const changes = Object.keys({ ...nextObject, ...old }).reduce((all, key) => {
            const newValue = nextObject?.[key];
            const oldValue = old[key];
            if (oldValue === newValue) return all;
            return { ...all, [key]: { newValue, oldValue } };
        }, {});

        setPrev(nextObject);

        if (!debug && !Object.keys(changes).length) return;
        // eslint-disable-next-line no-console
        console.log('🚨🕵️ UPDATED', name, changes);
    };
};

/**
 *
 * @template { Record<string, unknown> } Props;
 * @param {string} name
 * @param {Props} props
 * @returns { void }
 */
export const useWhatHasUpdated = (name, props) => {
    const argRef = useLatest({ name, props });
    const checkFunc = useMemo(
        () => whatHasUpdatedFactory(argRef.current.name, argRef.current.props),
        [argRef],
    );
    useEffect(() => {
        checkFunc(props);
    });
};

export default useWhatHasUpdated;
