import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, X } from 'lucide-react';
import { useQueryParams } from '../hooks/useQueryParams';
import { plans, roles, statutes } from '../utils/filters-options';

export const UserFilters = () => {
  const { inputRef, plan, role, search, status, onSelect, onClearAllFilters, onKeyDown } =
    useQueryParams();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={inputRef}
          placeholder="Search users..."
          onKeyDown={onKeyDown}
          defaultValue={search}
          className="w-50 bg-secondary pl-9 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Select value={status} onValueChange={(value) => onSelect('status', value)}>
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

      <Select value={role} onValueChange={(value) => onSelect('role', value)}>
        <SelectTrigger className="w-27 bg-secondary text-foreground">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent className="bg-popover text-popover-foreground" position="popper">
          {roles.map((role) => (
            <SelectItem value={role.value} key={role.label}>
              {role.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={plan} onValueChange={(value) => onSelect('plan', value)}>
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

      {(plan || role || status) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearAllFilters}
          className="gap-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
          Clear
        </Button>
      )}
    </div>
  );
};
