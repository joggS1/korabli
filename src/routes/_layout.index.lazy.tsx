import { VehiclesListQuery, useVehiclesListQuery } from '@/api/gql';
import { PageLoader } from '@/components/ui';

import { VehicleList } from '@/components/widgets';
import { VehicleListFilters, VehicleListPagination } from '@/components/widgets/VehiclesList';
import { VehicleFilters } from '@/components/widgets/VehiclesList/VehicleListFilters';
import { useFilters } from '@/lib/useFilters';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createLazyFileRoute('/_layout/')({
  component: VehiclesListPage
});

const filterVehicles = (vehicles: VehiclesListQuery['vehicles'], filters: VehicleFilters) => {
  return vehicles?.filter((vehicle) => {
    if (filters.search) {
      if (!vehicle.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
    }
    if (filters.nation) {
      if (vehicle.nationName !== filters.nation) return false;
    }
    if (filters.type) {
      if (vehicle.typeName !== filters.type) return false;
    }
    if (filters.level) {
      if (vehicle.level != +filters.level) return false;
    }
    return true;
  });
};

function VehiclesListPage() {
  const { data, loading } = useVehiclesListQuery();

  const [filteredVehicles, setFilteredVehicles] = useState<VehiclesListQuery['vehicles']>([]);

  const {
    handleNextPage,
    handlePrevPage,
    pagination,
    setCount,
    search,
    setFilters,
    resetFilters,
    setPageSize
  } = useFilters<VehicleFilters>({});

  useEffect(() => {
    if (data) {
      const filteredVehicles = filterVehicles(data.vehicles, search);
      setCount(filteredVehicles?.length || 0);
      setFilteredVehicles(filteredVehicles);
    }
  }, [data, search]);

  if (loading) return <PageLoader />;

  return (
    <>
      <VehicleListFilters
        filters={search}
        setFilters={setFilters}
        resetFilters={resetFilters}
        className='mb-4'
      />
      <VehicleListPagination
        setPageSize={setPageSize}
        className='mb-4'
        pagination={pagination}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
      <div className='flex flex-wrap content-center justify-center gap-4 pb-4'>
        <VehicleList
          vehicles={filteredVehicles?.slice(
            pagination.page * pagination.pageSize,
            pagination.page * pagination.pageSize + pagination.pageSize
          )}
        />
      </div>
      {(filteredVehicles?.length || 0) >= 12 ? (
        <VehicleListPagination
          setPageSize={setPageSize}
          className='pb-4'
          pagination={pagination}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      ) : null}
    </>
  );
}
