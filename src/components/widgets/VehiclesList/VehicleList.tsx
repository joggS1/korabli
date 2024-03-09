/* eslint-disable @typescript-eslint/no-explicit-any */
import { VehiclesListQuery } from '@/api/gql';
import { FC, memo } from 'react';
import { VehicleListItem } from './VehicleListItem';

interface Props {
  vehicles: VehiclesListQuery['vehicles'];
}

export const VehicleList: FC<Props> = memo(({ vehicles }) => {
  return <>{vehicles?.map((vehicle) => <VehicleListItem key={vehicle.id} {...vehicle} />)}</>;
});
