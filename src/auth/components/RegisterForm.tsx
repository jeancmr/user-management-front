import { useState } from 'react';
import { ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ContinueWith } from './ContinueWith';

interface Props {
  title: string;
  description?: string;
}

export const RegisterForm = ({ title }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-foreground font-medium">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              required
              className="h-11 bg-background border-input"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-foreground font-medium">
              Last name
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              required
              className="h-11 bg-background border-input"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground font-medium">
            Company
          </Label>
          <Input id="company" placeholder="Acme Inc." className="h-11 bg-background border-input" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="registerEmail" className="text-foreground font-medium">
            Work email
          </Label>
          <Input
            id="registerEmail"
            type="email"
            placeholder="you@company.com"
            required
            className="h-11 bg-background border-input"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="registerPassword" className="text-foreground font-medium">
            Password
          </Label>
          <div className="relative">
            <Input
              id="registerPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              required
              className="h-11 bg-background border-input pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-xs text-muted-foreground">
            Must be at least 8 characters with a number and symbol
          </p>
        </div>

        <Button type="submit" className="w-full h-11 font-medium" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Create Account'}
          {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </form>

      <ContinueWith text="Or sign up with" />
    </div>
  );
};
