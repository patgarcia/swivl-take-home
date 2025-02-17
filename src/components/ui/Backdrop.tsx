import { FC, ReactNode } from "react";

type BackdropProps = {
  children: ReactNode;
};

const Backdrop: FC<BackdropProps> = ({ children }) => {
  return <div className="min-h-screen bg-stone-200 flex flex-col">{children}</div>;
};

export default Backdrop;
