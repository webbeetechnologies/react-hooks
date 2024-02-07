export function whatHasUpdatedFactory<T extends Record<string, unknown>>(name: string, initialObject: T, { debug, useCached }?: Config): (nextObject: T) => void;
export function useWhatHasUpdated<Props extends Record<string, unknown>>(name: string, props: Props): void;
export default useWhatHasUpdated;
export type Config = {
    debug?: boolean;
    useCached?: boolean;
};
//# sourceMappingURL=index.d.ts.map