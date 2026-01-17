import { useSearchParams } from 'react-router';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page') ?? '1';
  let page = isNaN(+queryPage) ? 1 : +queryPage;
  if (page < 1) page = 1;

  const queryLimit = searchParams.get('limit') ?? '6';
  let limit = isNaN(+queryLimit) ? 6 : +queryLimit;
  if (limit < 1 || limit > 50) limit = 6;

  const status = searchParams.get('status') ?? '';
  const role = searchParams.get('role') ?? '';
  const plan = searchParams.get('plan') ?? '';

  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    });
  };

  const handleSelect = (name: string, value: string) => {
    setQueryParams(name, value);
  };

  const handlePageChange = (page: number, totalPages: number) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  return {
    page,
    limit,
    onPageChange: handlePageChange,
    status,
    role,
    plan,
    onSelect: handleSelect,
  };
};
