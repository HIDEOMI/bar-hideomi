// src/App.tsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="App">
        <div>
          <h1>Hello, Firebase React App!</h1>
        </div>
        <Login />
        {/* 他のコンポーネント */}
      </div>
    </AuthProvider>
  );
};

export default App;