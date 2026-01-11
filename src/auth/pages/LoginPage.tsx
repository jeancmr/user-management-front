import { IlustrationPanel } from '../components/IlustrationPanel';
import { AuthPanel } from '../components/AuthPanel';

export const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <IlustrationPanel />
      <AuthPanel />
    </div>
  );
};
