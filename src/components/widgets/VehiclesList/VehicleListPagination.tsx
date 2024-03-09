import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  Input
} from '@/components/ui';
import { debounce } from '@/lib/debounce';
import { PaginationType } from '@/lib/types';
import { ComponentProps, FC, memo, useCallback, useState } from 'react';

interface Props extends ComponentProps<typeof Pagination> {
  handleNextPage: () => void;
  handlePrevPage: () => void;
  setPageSize: (pageSize: number) => void;
  pagination: PaginationType;
}

export const VehicleListPagination: FC<Props> = memo(
  ({
    pagination: { hasNext, hasPrev, pageSize: filtersPageSize },
    handleNextPage,
    handlePrevPage,
    setPageSize: setFilterPageSize,
    ...rest
  }) => {
    const [pageSize, setPageSize] = useState(filtersPageSize);

    const handleSetPageSize = useCallback(
      debounce((value: number) => {
        setFilterPageSize(value);
      }, 400),
      [setPageSize]
    );
    return (
      <Pagination {...rest}>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious disabled={!hasPrev} onClick={handlePrevPage} />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext disabled={!hasNext} onClick={handleNextPage} />
          </PaginationItem>
          <PaginationItem>
            <Input
              type='number'
              className='w-16 text-center'
              value={pageSize}
              onChange={(e) => {
                setPageSize(+e.target.value || 1);
                handleSetPageSize(+e.target.value || 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  }
);
