export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

/**
 * Represents the state of a network fetch operation.
 * @template DataType The type of data returned by the fetch operation.
 */
export type NetworkFetchState<DataType> = {
  /** The data returned by the fetch operation. */
  data: null | DataType;
  /** The status of the fetch operation. */
  status: Status;
  /** The error, if any, that occurred during the fetch operation. */
  error: null | Error;
};
