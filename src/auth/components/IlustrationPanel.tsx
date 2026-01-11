import { Users } from 'lucide-react';
import { FeatureItem } from './FeatureItem';

export const IlustrationPanel = () => {
  return (
    <div className="hidden lg:flex lg:w-[55%] bg-indigo-950 p-12 flex-col justify-between relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-20">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">User Management</span>
        </div>

        <h1 className="text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Manage your users
          <br />
          with confidence
        </h1>
        <p className="text-white/80 text-lg max-w-lg leading-relaxed">
          The complete platform for user management, authentication, and access control. Built for
          modern teams.
        </p>
      </div>

      <div className="relative z-10 space-y-4">
        <FeatureItem text="Role-based access control" />
        <FeatureItem text="Real-time activity monitoring" />
        <FeatureItem text="Advanced security features" />
        <FeatureItem text="Seamless integrations" />
      </div>

      <div className="relative z-10 flex items-center gap-8">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-white text-sm font-medium"
            >
              {String.fromCharCode(64 + i)}
            </div>
          ))}
        </div>
        <div className="text-white/80 text-sm">
          <span className="font-semibold text-white">10,000+</span> teams trust User Management
        </div>
      </div>
    </div>
  );
};
