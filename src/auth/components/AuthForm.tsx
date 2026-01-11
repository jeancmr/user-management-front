import { useState } from 'react';
import { EyeOff, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ContinueWith } from './ContinueWith';
import { getTextFormSubmit } from '../utils/get-text-form-submit';

interface Props {
  title: string;
  description?: string;
  isLogin: boolean;
}

export const AuthForm = ({ title, description, isLogin }: Props) => {
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
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {!isLogin && (
          <>
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
              <Input
                id="company"
                placeholder="Acme Inc."
                className="h-11 bg-background border-input"
              />
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            required
            className="h-11 bg-background border-input"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>

            {isLogin && (
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Forgot password?
              </button>
            )}
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={isLogin ? 'Enter your password' : 'Create a strong password'}
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
        </div>

        <Button type="submit" className="w-full h-11 font-medium" disabled={isLoading}>
          {getTextFormSubmit(isLoading, isLogin)}
          {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </form>

      <ContinueWith text={isLogin ? 'Or continue with' : 'Or sign up with'} />
    </div>
  );
};
