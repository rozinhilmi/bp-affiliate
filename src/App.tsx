import {
  // Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense, lazy } from "react";
const Dashboard = lazy((): any => import("./pages/Dashboard"));
import Middleware from "./utils/routes/Middleware";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Middleware />}>
          <Route path="/">
            <Route index element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>not found</h1>} />
        <Route path="/error" element={<h1>error</h1>} />
      </>
    )
  );
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
