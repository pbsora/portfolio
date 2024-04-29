import { ReactNode } from "react";

const SkillIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="group relative flex items-center justify-center">
      <div className="cursor-pointer">{children}</div>
    </div>
  );
};
export default SkillIcon;
