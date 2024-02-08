# React Hooks

A easy to use, fully type-safe, react hooks library to easy your day to day react development.

## Installation
Use a bundler of your choice to import the library.
eg: `yarn add @bambooapp/react-hooks`


### Ref Hooks
1. [useLatest](./useLatest/index.js)
    Use the most recent value of the argument, but as a ref.
1. [usePrevious](./usePrevious/index.js)
    Use the last value of the argument, returns a ref
1. [useMergeRefs](./useMergeRefs//index.js)
    Use this hook to merge different refs, legacyRefs or RefCallbacks into one.
    The reference of the returned value never changes.

### Callback Hooks
1. [useSafeCallback](./useSafeCallback/index.js)
    Use a safe callback, the reference function never changes, yet always has access to the most recent state.
    Write your code without worrying about writing a single useCallback.

### Detective mode on
1. [useWhatHasUpdated](./useWhatHasUpdated/index.js)
    Use a hook to investigate what has changed. It will log to the console if the value of the object changes.