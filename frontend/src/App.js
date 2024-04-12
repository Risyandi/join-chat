import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import ProtectedRoute from "./components/ProtectedRoute";
import { isLogin } from "./utils";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((data, index) =>
            data.component ? (
              <Route
                key={index}
                path={data.path}
                element={
                  <Suspense fallback={<></>}>
                    {data.restricted !== false ? (
                      <ProtectedRoute user={isLogin()}>
                        <data.component socket={socket}/>
                      </ProtectedRoute>
                    ) : (
                      <data.component socket={socket}/>
                    )}
                  </Suspense>
                }
              />
            ) : null
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
