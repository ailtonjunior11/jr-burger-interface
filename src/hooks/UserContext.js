/* eslint-disable no-console */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/require-default-props */
import React, { createContext, useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  const putUserData = async userInfo => {
    setUserData(userInfo);

    await localStorage.setItem('jrburger:userData', JSON.stringify(userInfo));
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('jrburger:userData');

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo));
      }
    };

    loadUserData();
  }, []);

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used with UserContext');
  }

  return context;
}

UserProvider.propTypes = {
  children: PropTypes.node
};
