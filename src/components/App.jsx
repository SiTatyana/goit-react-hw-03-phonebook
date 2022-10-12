import React from "react";
import Contacts from "./Contacts/Contacts";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 23,
        color: '#010101'
      }}
    >
      <ErrorBoundary>
      <Contacts />
      </ErrorBoundary>
    </div>
  );
};
