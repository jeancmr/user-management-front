import { Check } from "lucide-react";

export const FeatureItem = ({ text }: {text:string}) => {
  return (
    <div className="flex items-center gap-3 text-white/90">
      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
        <Check className="w-3 h-3 text-white" />
      </div>
      <span>{text}</span>
    </div>
  );
};
