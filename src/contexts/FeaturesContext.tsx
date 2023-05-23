import { createContext } from "react";
import { features } from "../data/data";
import { ChildrenPropsType } from "../types";

export const FeaturesContext = createContext(features);

export const FeaturesProvider = ({ children }: ChildrenPropsType) => {
  return <FeaturesContext.Provider value={features} children={children} />;
};
