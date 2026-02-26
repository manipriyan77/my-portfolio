import { ReactNode } from "react";

import SectionFlower from "./SectionFlower";

interface Props {
  title: string;
  icon?: ReactNode;
  className?: string;
}

export default function SectionTitle({ title, icon, className }: Props) {
  return (
    <div className={`mb-10 flex items-center gap-4 ${className ?? ""}`}>
      {icon ? (
        icon
      ) : (
        <SectionFlower
          width={25}
          style={{ animation: "spin 7s linear infinite" }}
        />
      )}
      <h2 className="text-xl leading-none uppercase">{title}</h2>
    </div>
  );
}
