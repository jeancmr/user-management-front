import { useState } from 'react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import type { User, UserRole, UserStatus, UserPlan } from '../types/user';
import { getInitials } from '../utils/get-initials-name';
import { updateUserAction } from '@/user_management/actions/update-user.action';

interface EditUserModalProps {
  user: User;
  open: boolean;
  onCancelEdit: (open: boolean) => void;
  onUserUpdated: () => void;
}

export const UserEditForm = ({ user, open, onCancelEdit, onUserUpdated }: EditUserModalProps) => {
  const [role, setRole] = useState<UserRole>(user.role);
  const [status, setStatus] = useState<UserStatus>(user.status);
  const [plan, setPlan] = useState<UserPlan>(user.plan);

  const handleSave = async () => {
    const data = {
      role,
      status,
      plan,
    };

    try {
      await updateUserAction(data, user.id);
      toast.success('User updated succesfully');
      onUserUpdated();
      onCancelEdit(false);
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onCancelEdit}>
      <DialogContent className="bg-card text-foreground border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Update user role, status, and plan.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="mb-6 flex items-center gap-4 rounded-lg bg-secondary p-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-chart-1/20 text-chart-1">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-foreground">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={role} onValueChange={(v) => setRole(v as UserRole)}>
                <SelectTrigger className="bg-secondary text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground">
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={status} onValueChange={(v) => setStatus(v as UserStatus)}>
                <SelectTrigger className="bg-secondary text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground">
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Plan</Label>
              <Select value={plan} onValueChange={(v) => setPlan(v as UserPlan)}>
                <SelectTrigger className="bg-secondary text-foreground">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover text-popover-foreground">
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="pro">Pro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onCancelEdit(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
