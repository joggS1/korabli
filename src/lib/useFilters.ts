import { useNavigate, useSearch } from '@tanstack/react-router';
import { PaginationType } from './types';
import { useCallback, useEffect, useState } from 'react';

interface ReturnType<T> {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  setCount: (count: PaginationType['count']) => void;
  setPageSize: (pageSize: PaginationType['pageSize']) => void;
  setFilters: (filters: Partial<T>) => void;
  resetFilters: () => void;
  search: T;
  pagination: PaginationType;
}

export const useFilters = <T = Record<string, string | number>>({
  initialFilters,
  initialPagination
}: {
  initialFilters?: T;
  initialPagination?: Partial<PaginationType>;
}): ReturnType<T> => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ search: (prev) => ({ ...prev, ...initialFilters }) });
  }, []);
  const search = useSearch({
    strict: false
  }) as T & Partial<PaginationType>;
  const [pagination, setPagination] = useState<PaginationType>({
    page: initialPagination?.page || search.page || 0,
    pageSize: initialPagination?.pageSize || 8,
    count: initialPagination?.count || 0,
    hasNext: initialPagination?.hasNext || true,
    hasPrev: initialPagination?.hasPrev || false
  });
  const handleNextPage = () => {
    if (pagination.hasNext) {
      setPagination((prev) => {
        navigate({ search: (prevSearch) => ({ ...prevSearch, page: prev.page + 1 }) });
        return {
          ...prev,
          page: prev.page + 1,
          hasNext: prev.page * prev.pageSize < prev.count,
          hasPrev: true
        };
      });
    }
  };
  const handlePrevPage = () => {
    if (pagination.hasPrev) {
      setPagination((prev) => {
        navigate({ search: (prevSearch) => ({ ...prevSearch, page: prev.page - 1 }) });
        return {
          ...prev,
          page: prev.page - 1,
          hasNext: prev.page * prev.pageSize < prev.count,
          hasPrev: prev.page > 1
        };
      });
    }
  };

  const setCount = useCallback((count: PaginationType['count']) => {
    setPagination((prev) => ({
      ...prev,
      count,
      hasNext: (prev.page + 1) * prev.pageSize < count,
      hasPrev: prev.page > 0
    }));
  }, []);

  const setPageSize = useCallback((pageSize: PaginationType['pageSize']) => {
    setPagination((prev) => ({ ...prev, pageSize }));
  }, []);

  const setFilters = useCallback((filters: Partial<T>) => {
    navigate({ search: (prev) => ({ ...prev, ...filters }) });
    setPagination((prev) => ({
      ...prev,
      page: 0,
      hasPrev: false,
      hasNext: prev.count > prev.pageSize
    }));
  }, []);

  const resetFilters = useCallback(() => {
    navigate({ search: {} });
    setPagination((prev) => ({
      ...prev,
      page: 0,
      hasPrev: false,
      hasNext: prev.count > prev.pageSize
    }));
  }, []);
  console.log(pagination);

  return {
    search: search,
    handleNextPage,
    handlePrevPage,
    setCount,
    setPageSize,
    setFilters,
    resetFilters,
    pagination
  };
};
