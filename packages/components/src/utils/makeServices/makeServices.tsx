import React, { useContext } from 'react';

interface MakeServicesResponse<T> {
  ServicesProvider: React.FC<{ contextProps?: T }>;
  useServices: () => T;
  ServicesContext: React.Context<T>;
}

export function makeServices<T>(services: T): MakeServicesResponse<T> {
  /**
   * Create default (empty) services context.
   * Eslint usually will block casting an Object Literal, we are disabling this
   * for the createContext call in the schematic.
   */
  const ServicesContext = React.createContext({} as T);

  /**
   * Convenience component to provide services context.
   * @param contextProps - Allows for override of injected service dependencies.
   */
  const ServicesProvider: React.FC<{ contextProps?: T }> = ({ contextProps = services, children }) => (
    <ServicesContext.Provider value={contextProps}>{children}</ServicesContext.Provider>
  );

  const useServices = (): T => useContext(ServicesContext);

  return { ServicesProvider, useServices, ServicesContext };
}
