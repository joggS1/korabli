import { Vehicle, useVehicleQuery } from '@/api/gql';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { VehicleInfoAccordionList } from '@/components/widgets/VehicleInfo';
import { VehicleMainInfo } from '@/components/widgets/VehicleInfo/VehicleMainInfo';
import { convertToRoman } from '@/lib/convertToRoman';
import { createLazyFileRoute, useParams } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/_layout/$vehicleId')({
  component: PostPage
});

function PostPage() {
  const vehicleId = useParams({
    from: '/_layout/$vehicleId'
  }).vehicleId;

  const { data, loading } = useVehicleQuery({
    variables: {
      id: vehicleId
    }
  });
  console.log(data);
  if (loading) return <div>Loading...</div>;
  const vehicle = data?.vehicles?.[0] as Vehicle;
  const ttc = vehicle?.ttc;
  const modifications = vehicle?.modernizations;
  const consumables = vehicle?.consumables;
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-5'>
        <img
          alt='Фото машины'
          className='shadow-slate-950 drop-shadow-2xl'
          src={data?.vehicles?.[0].icons?.large}
        />
      </div>

      <div className='col-span-7'>
        <h1 className='mb-4 h-min w-full text-3xl'>
          {vehicle?.title} - {convertToRoman(vehicle?.level || 1)}
        </h1>
        <Tabs defaultValue='info' className='w-full'>
          <TabsList className='grid w-full grid-cols-4'>
            <TabsTrigger value='info'>Основное</TabsTrigger>
            <TabsTrigger value='ttc'>ТТХ</TabsTrigger>
            <TabsTrigger value='modifications'>Модификации</TabsTrigger>
            <TabsTrigger value='consumables'>Расходники</TabsTrigger>
          </TabsList>
          <TabsContent value='info'>
            <VehicleMainInfo vehicle={vehicle} />
          </TabsContent>
          <TabsContent value='ttc'>
            {!!ttc?.length && <VehicleInfoAccordionList items={ttc} />}
          </TabsContent>
          <TabsContent value='modifications'>
            {!!modifications?.length && <VehicleInfoAccordionList items={modifications} />}
          </TabsContent>
          <TabsContent value='consumables'>
            {!!consumables?.length && <VehicleInfoAccordionList items={consumables} />}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
