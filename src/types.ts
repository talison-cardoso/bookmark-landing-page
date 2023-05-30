import { ReactNode } from "react";

export type ChildrenPropsType = {
  children: ReactNode;
};

export type Props = {
  [key: string]: (event: React.MouseEvent<HTMLElement>) => void;
};
