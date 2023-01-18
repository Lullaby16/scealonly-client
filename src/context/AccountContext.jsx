import { createContext, useEffect, useState } from "react";

export const AccountContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BE_URL}/auth/login`, {
      credentials: "include",
    })
      .catch((err) => {
        return setUser({ loggedIn: false });
      })
      .then((r) => {
        if (!r || !r.ok || r.status >= 400) {
          return setUser({ loggedIn: false });
        }
        return r.json();
      })
      .then((data) => {
        if (!data) {
          return setUser({ loggedIn: false });
        }
        setUser({ ...data });
      });
  }, []);
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};

export default UserContext;
