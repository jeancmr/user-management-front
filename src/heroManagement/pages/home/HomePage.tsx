import { Button } from '@/components/ui/button';

export const HomePage = () => {
  return (
    <div className="h-full bg-indigo-950">
      <h1 className="text-2xl text-white mb-12">User Management</h1>
      <Button variant="destructive" className="text-2xl">
        Click
      </Button>
    </div>
  );
};
