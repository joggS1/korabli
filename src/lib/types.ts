export type PaginationType = {
  page: number;
  pageSize: number;
  count: number;
  totalPages?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
};
