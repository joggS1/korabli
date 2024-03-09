import { Vehicle } from '@/api/gql';
import { FC, ReactNode } from 'react';
import { VehicleItemTags } from '../VehiclesList/VehicleListItem';

interface Props {
  vehicle: Vehicle;
}

const Row: FC<{ title: ReactNode; value: ReactNode }> = ({ title, value }) => {
  return (
    <div className='grid grid-cols-12 '>
      <span className='col-span-2 font-semibold'>{title}:</span>
      <span className='col-span-10'>{value}</span>
    </div>
  );
};

export const VehicleMainInfo: FC<Props> = ({ vehicle }) => {
  return (
    <>
      <div className='flex flex-col gap-1'>
        <Row
          title='Нация'
          value={
            <span className={`text-[${vehicle.nation?.color}] flex gap-4`}>
              {vehicle.nation?.title} <img src={vehicle.nation?.icons?.tiny} alt='флаг' />
            </span>
          }
        />
        <Row
          title='Особенности'
          value={
            <VehicleItemTags
              isClan={vehicle.isClan}
              isSpecial={vehicle.isSpecial}
              isPremium={vehicle.isPremium}
              hasGoldPrice={vehicle.hasGoldPrice}
              isVehiclePage
            />
          }
        />
        <Row title='Класс' value={vehicle.type?.title} />
      </div>
      <p className='mt-4 w-full text-justify'>{vehicle.description}</p>
    </>
  );
};
