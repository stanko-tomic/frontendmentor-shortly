import React, { createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
  linksArray: any[];
  setLinksArray: React.Dispatch<React.SetStateAction<any[]>>;
}

const Context = createContext<ContextProps>({
  linksArray: [],
  setLinksArray: () => {},
});

interface StateContextProps {
  children: React.ReactNode;
}

export const StateContext = ({ children }: StateContextProps) => {
  let initialValue: any[] = [];
  if (typeof window !== "undefined" && window.localStorage) {
    initialValue = JSON.parse(localStorage.getItem("linksArray") ?? "[]") || [];
  }

  const [linksArray, setLinksArray] =
    useState<Array<{ shortLink: string; originalLink: string }>>(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("linksArray", JSON.stringify(linksArray));
    }
  }, [linksArray]);

  return (
    <Context.Provider
      value={{
        linksArray,
        setLinksArray,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = (): ContextProps => useContext(Context);
