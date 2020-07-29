export type Status = 'idle' | 'loading' | 'error' | 'success';

export interface QueryResult<Result> {
  status: Status;
  data?: Result;
  error?: Error & { response?: Response };
}
