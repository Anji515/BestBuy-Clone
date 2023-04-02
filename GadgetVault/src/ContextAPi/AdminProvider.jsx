import React, { createContext, useState } from "react";
export const AdminSide = createContext();
export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(true);
  return (
    <AdminSide.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminSide.Provider>
  );
};
