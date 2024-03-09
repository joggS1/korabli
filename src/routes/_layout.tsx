import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui';
import { Link, Outlet, createFileRoute, useParams, useSearch } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent
});

function LayoutComponent() {
  const catalogueSearch = useSearch({
    from: '/_layout'
  });
  const params = useParams({
    from: '/_layout/$vehicleId'
  });
  return (
    <div className='mx-auto my-0 h-full max-w-[1200px] content-center self-center'>
      <Breadcrumb className='p-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to='/' search={catalogueSearch}>
                Каталог кораблей
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {params.vehicleId && (
            <>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={params.vehicleId}>Корабль</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
      <div className='px-4'>
        <Outlet />
      </div>
    </div>
  );
}
