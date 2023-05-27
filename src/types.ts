import { ReactNode } from "react";

export type ChildrenPropsType = {
  children: ReactNode,
}

export type Props = {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
