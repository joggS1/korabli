import { Vehicle, useVehicleQuery } from '@/api/gql';
import { PageLoader, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import { VehicleInfoAccordionList } from '@/components/widgets/VehicleInfo';
import { VehicleMainInfo } from '@/components/widgets/VehicleInfo/VehicleMainInfo';
import { convertToRoman } from '@/lib/convertToRoman';
import { cn } from '@/lib/utils';
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
  if (loading) return <PageLoader />;
  const vehicle = data?.vehicles?.[0] as Vehicle;
  const ttc = vehicle?.ttc;
  const modifications = vehicle?.modernizations;
  const consumables = vehicle?.consumables;
  const count = +!!ttc?.length + +!!modifications?.length + +!!consumables?.length + 1;
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
          <TabsList key={count} className={cn(`grid w-full`, {
            'grid-cols-1': count === 1,
            'grid-cols-2': count === 2,
            'grid-cols-3': count === 3,
            'grid-cols-4': count === 4
          })}>
            <TabsTrigger value='info'>Основное</TabsTrigger>
            {!!ttc?.length && <TabsTrigger value='ttc'>ТТХ</TabsTrigger>}
            {!!modifications?.length && (
              <TabsTrigger value='modifications'>Модификации</TabsTrigger>
            )}
            {!!consumables?.length && <TabsTrigger value='consumables'>Расходники</TabsTrigger>}
          </TabsList>
          <TabsContent value='info'>
            <VehicleMainInfo vehicle={vehicle} />
          </TabsContent>
          {!!ttc?.length && (
            <TabsContent value='ttc'>
              <VehicleInfoAccordionList items={ttc.map((item) => ({ title: `${item.title} - ${item.value}` , description: item.description }))} />
            </TabsContent>
          )}
          {!!modifications?.length && (
            <TabsContent value='modifications'>
              <VehicleInfoAccordionList items={modifications} />
            </TabsContent>
          )}
          {!!consumables?.length && (
            <TabsContent value='consumables'>
              <VehicleInfoAccordionList items={consumables} />
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
}
