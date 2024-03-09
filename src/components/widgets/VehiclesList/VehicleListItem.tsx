import { Vehicle } from '@/api/gql';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui';
import { convertToRoman } from '@/lib/convertToRoman';
import { Link } from '@tanstack/react-router';
import { FC } from 'react';

export const VehicleListItem: FC<Vehicle> = ({
  icons,
  id,
  title,
  nation,
  level,
  isClan,
  isSpecial,
  isPremium,
  hasGoldPrice
}) => {
  return (
    <Card className={'group max-w-[300px]  outline-slate-800 delay-0 hover:outline'}>
      <CardHeader className='text-center'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {nation?.title} - {convertToRoman(level!)}
        </CardDescription>
      </CardHeader>
      <CardContent className='relative h-[190px]'>
        <img
          alt={title}
          src={icons?.small}
          width={200}
          height={141}
          className='max-h-[141px] min-h-[141px] transition-all group-hover:scale-110 group-hover:drop-shadow-xl'
        />
        <img
          src={nation?.icons?.tiny}
          className='absolute right-4 top-0'
          alt='nation_icon'
          width={27}
        />
        <VehicleItemTags
          isClan={!!isClan}
          isSpecial={!!isSpecial}
          isPremium={!!isPremium}
          hasGoldPrice={!!hasGoldPrice}
        />
      </CardContent>
      <CardFooter className='flex content-end justify-end'>
        <Link to={id}>
          <Button className='p-0' variant='link'>
            Подробнее
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export const VehicleItemTags: FC<{
  isClan?: boolean;
  isSpecial?: boolean;
  isPremium?: boolean;
  hasGoldPrice?: boolean;
  isVehiclePage?: boolean;
}> = ({ isClan, isSpecial, hasGoldPrice, isPremium, isVehiclePage }) => {
  return (
    <div className='flex gap-1'>
      {isPremium && <Badge variant='destructive'>Premium</Badge>}
      {isSpecial && <Badge variant='default'>Special</Badge>}
      {hasGoldPrice && <Badge variant='secondary'>Gold</Badge>}
      {isClan && <Badge variant='outline'>Clan</Badge>}
      {isVehiclePage && !isPremium && !isSpecial && !hasGoldPrice && !isClan && <>-</>}
    </div>
  );
};
