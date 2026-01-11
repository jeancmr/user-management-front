import { AuthForm } from '../components/AuthForm';
import { IlustrationPanel } from '../components/IlustrationPanel';

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <IlustrationPanel />
      <AuthForm />
    </div>
  );
};
