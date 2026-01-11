import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users } from 'lucide-react';
import { AuthForm } from './AuthForm';

export const AuthPanel = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
      <div className="w-full max-w-md">
        {/* Mobile Logo */}
        <div className="flex items-center gap-3 mb-8 lg:hidden">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">User Management</span>
        </div>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12 p-1 bg-muted">
            <TabsTrigger
              value="login"
              className="h-full text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg"
            >
              Sign In
            </TabsTrigger>

            <TabsTrigger
              value="register"
              className="h-full text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <AuthForm
              title="Welcome back"
              isLogin={true}
              description="Enter your credentials to access your dashboard"
            />
          </TabsContent>

          <TabsContent value="register">
            <AuthForm title="Create an account" isLogin={false} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
