import React, { use } from 'react';
import { LogOut, Plus, Sun, Users, Moon } from 'lucide-react';
import { useTheme } from '@/context/useTheme';
import { AuthContext } from '@/auth/context/AuthContext';
import { Button } from '@/components/ui/button';

export const Header = React.memo(() => {
  const { toggleTheme, theme } = useTheme();
  const { logout } = use(AuthContext);

  const isThemeLight = theme === 'light';

  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-chart-1">
            <Users className="h-5 w-5 text-white" />
          </div>

          <div>
            <h1 className="text-lg font-semibold text-foreground">User Management</h1>
            <p className="text-sm text-muted-foreground">Manage users, roles & subscriptions</p>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <Button onClick={() => console.log('create user action')} className="gap-2">
            <Plus className="h-4 w-4" />
            Add User
          </Button>

          <Button
            variant="outline"
            className="gap-2 text-muted-foreground hover:text-foreground bg-transparent"
            onClick={logout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>

          <Button
            variant="outline"
            className="gap-2 text-muted-foreground hover:text-foreground bg-transparent"
            onClick={toggleTheme}
          >
            {isThemeLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </nav>
      </div>
    </header>
  );
});
