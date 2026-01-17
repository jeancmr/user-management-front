import { useSearchParams } from 'react-router';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { plans, roles, statutes } from '../utils/filters-options';

export const UserFilters = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get('status') ?? '';
  const rol = searchParams.get('rol') ?? '';
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

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-50 bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Select value={status} onValueChange={(value) => handleSelect('status', value)}>
        <SelectTrigger className="w-30 bg-secondary text-foreground">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent className="bg-popover text-popover-foreground" position="popper">
          {statutes.map((status) => (
            <SelectItem value={status.value} key={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={rol} onValueChange={(value) => handleSelect('rol', value)}>
        <SelectTrigger className="w-27 bg-secondary text-foreground">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent className="bg-popover text-popover-foreground" position="popper">
          {roles.map((rol) => (
            <SelectItem value={rol.value} key={rol.label}>
              {rol.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={plan} onValueChange={(value) => handleSelect('plan', value)}>
        <SelectTrigger className="w-25 bg-secondary text-foreground">
          <SelectValue placeholder="Plan" />
        </SelectTrigger>
        <SelectContent className="bg-popover text-popover-foreground" position="popper">
          {plans.map((plan) => (
            <SelectItem value={plan.value} key={plan.label}>
              {plan.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="gap-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      )} */}
    </div>
  );
};
