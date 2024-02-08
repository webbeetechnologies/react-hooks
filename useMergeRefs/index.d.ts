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
export function mergeRefs<T>(...refs: (RefType<T> | RefType<T>[])[]): (value: T) => void;
export function useMergedRefs<T>(...refs: (RefType<T> | RefType<T>[])[]): (value: T) => void;
export default useMergedRefs;
/**
 * <T>
 */
export type RefType<T extends unknown> = import('react').MutableRefObject<T> | import('react').LegacyRef<T> | undefined | null;
import React from "react";
