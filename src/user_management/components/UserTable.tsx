import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDistanceToNow } from 'date-fns';
import { ArrowUpDown, Pencil, Trash2 } from 'lucide-react';

import { CustomPagination } from '@/components/custom/CustomPagination';
import type { User } from '../types/user';
import { getInitials } from '../utils/get-initials-name';
import { deleteUserAction } from '../actions/delete-user.action';
import { toast } from 'sonner';

interface Props {
  users: User[];
  totalPages: number;
  totalUsers: number;
  onEditUser: (user: User) => void;
  onUserUpdated: () => void;
}
export const UserTable = ({ users, totalPages, totalUsers, onEditUser, onUserUpdated }: Props) => {
  const handleUserDelete = async (id: string) => {
    try {
      await deleteUserAction(id);
      toast.success('User has been deleted');
      onUserUpdated();
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-foreground">Users ({totalUsers})</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">User</TableHead>
                <TableHead className="text-muted-foreground">Role</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Plan</TableHead>
                <TableHead className="text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto gap-1 p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Last Login
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </Button>
                </TableHead>
                <TableHead className="text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-auto gap-1 p-0 font-medium text-muted-foreground hover:text-foreground"
                  >
                    Created
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </Button>
                </TableHead>
                <TableHead className="text-right text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="border-border hover:bg-secondary/50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-chart-1/20 text-sm text-chart-1">
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === 'admin' ? 'default' : 'secondary'}
                      className={
                        user.role === 'admin'
                          ? 'bg-chart-4/20 text-chart-4 hover:bg-chart-4/30'
                          : 'bg-secondary text-muted-foreground'
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.status === 'active'
                          ? 'bg-chart-2/20 text-chart-2 hover:bg-chart-2/30'
                          : 'bg-secondary text-destructive hover:bg-secondary'
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.plan === 'pro'
                          ? 'bg-chart-1/20 text-chart-1 hover:bg-chart-1/30'
                          : 'bg-secondary text-muted-foreground hover:bg-secondary'
                      }
                    >
                      {user.plan}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {user.lastLogin ? formatDistanceToNow(user.lastLogin, { addSuffix: true }) : ''}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {formatDistanceToNow(user.createdAt, { addSuffix: true })}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      onClick={() => onEditUser(user)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => handleUserDelete(user.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {users.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            No users found matching your filters.
          </div>
        )}

        <CustomPagination totalPages={totalPages} />
      </CardContent>
    </Card>
  );
};
