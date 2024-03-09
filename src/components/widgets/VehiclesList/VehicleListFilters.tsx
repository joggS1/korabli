import { useVehicleListFiltersQuery } from '@/api/gql';
import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui';
import { vehiclesLevels } from '@/lib/constants';
import { convertToRoman } from '@/lib/convertToRoman';
import { debounce } from '@/lib/debounce';
import { cn } from '@/lib/utils';
import { ComponentProps, FC, memo, useCallback, useState } from 'react';

export interface VehicleFilters {
  search: string;
  nation: string;
  type: string;
  level: number;
}

interface VehicleFiltersProps extends ComponentProps<'div'> {
  filters: VehicleFilters;
  setFilters: (filters: Partial<VehicleFilters>) => void;
  resetFilters: () => void;
}

export const VehicleListFilters: FC<VehicleFiltersProps> = memo(
  ({ className, filters, setFilters, resetFilters, ...rest }) => {
    const { data, loading } = useVehicleListFiltersQuery();
    const [search, setSearch] = useState(filters.search);
    const debouncedSearch = useCallback(
      debounce((value: string) => {
        setFilters({ search: value ? value : undefined });
      }, 400),
      [setFilters]
    );
    const clearFilters = () => {
      resetFilters();
      setSearch('');
    };

    return (
      <div {...rest} className={cn('flex flex-wrap gap-4', className)}>
        <Input
          className='w-[360px]'
          value={search || ''}
          onChange={(e) => {
            setSearch(e.target.value);
            debouncedSearch(e.target.value);
          }}
          type='text'
          placeholder='Поиск'
        />
        <Select
          disabled={loading}
          value={filters.nation || ''}
          onValueChange={(value) => setFilters({ nation: value })}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Нация' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Нация</SelectLabel>
              {data?.nations?.map((nation) => (
                <SelectItem key={nation.name} value={nation.name || ''}>
                  {nation.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          disabled={loading}
          value={filters.type || ''}
          onValueChange={(value) => setFilters({ type: value })}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Класс' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Класс</SelectLabel>
              {data?.vehicleTypes?.map((type) => (
                <SelectItem key={type.name} value={type.name || ''}>
                  {type.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select
          disabled={loading}
          value={filters.level ? filters.level + '' : ''}
          onValueChange={(value) => setFilters({ level: Number(value) })}
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Уровень' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Уровень</SelectLabel>
              {vehiclesLevels.map((level) => (
                <SelectItem key={level} value={level + ''}>
                  {convertToRoman(level)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button onClick={clearFilters}>Сбросить</Button>
      </div>
    );
  }
);
