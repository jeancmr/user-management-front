import { useRef, type KeyboardEvent } from 'react';
import { useSearchParams } from 'react-router';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const queryPage = searchParams.get('page') ?? '1';
  let page = isNaN(+queryPage) ? 1 : +queryPage;
  if (page < 1) page = 1;

  const queryLimit = searchParams.get('limit') ?? '6';
  let limit = isNaN(+queryLimit) ? 6 : +queryLimit;
  if (limit < 1 || limit > 50) limit = 6;

  const plan = searchParams.get('plan') ?? '';
  const role = searchParams.get('role') ?? '';
  const search = searchParams.get('search') ?? '';
  const status = searchParams.get('status') ?? '';

  const setQueryParams = (name: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(name, value);
      return prev;
    });
  };

  const handleSelect = (name: string, value: string) => {
    searchParams.set('page', '1');
    setQueryParams(name, value);
  };

  const handlePageChange = (page: number, totalPages: number) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const inputElement = inputRef.current;
    if (event.key === 'Enter' && inputElement) {
      const cleanedInput = inputElement.value.trim();
      setQueryParams('search', cleanedInput);
    }
  };

  const handleClearAllFilters = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }

    setSearchParams((prev) => {
      prev.set('plan', '');
      prev.set('role', '');
      prev.set('search', '');
      prev.set('status', '');
      prev.set('page', '1');
      return prev;
    });
  };

  return {
    inputRef,
    limit,
    page,
    plan,
    role,
    search,
    status,
    onClearAllFilters: handleClearAllFilters,
    onKeyDown: handleKeyDown,
    onPageChange: handlePageChange,
    onSelect: handleSelect,
  };
};
