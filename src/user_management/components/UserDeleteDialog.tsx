import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import type { User } from '../types/user';
import { deleteUserAction } from '../actions/delete-user.action';

interface EditUserModalProps {
  user: User;
  open: boolean;
  onCancelDelete: (open: boolean) => void;
  onUserUpdated: () => void;
}

export const UserDeleteDialog = ({
  user,
  open: deleteDialogOpen,
  onCancelDelete: setDeleteDialogOpen,
  onUserUpdated,
}: EditUserModalProps) => {
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
    <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
      <AlertDialogContent className="bg-card border-border">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-foreground">Delete User</AlertDialogTitle>
          <AlertDialogDescription className="text-muted-foreground">
            Are you sure you want to delete{' '}
            <span className="font-semibold text-foreground">{user.name}</span>? This action cannot
            be undone and all associated data will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleUserDelete(user.id)}
            className="bg-destructive hover:bg-destructive/80"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
