import * as React from "react";
import ErrorBoundary from "./components/ErrorBoundry";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// @ts-ignore
const App1 = React.lazy(() => import("app1/App").catch(() => {
    // @ts-ignore
    return import("./components/Fallback");
  }));

// @ts-ignore
const App2 = React.lazy(() => import("app2/App").catch(() => {
    // @ts-ignore
    return import("./components/Fallback");
  }));
  // @ts-ignore
  const Test = React.lazy(() => import("app1/Test").catch(() => {
    // @ts-ignore
    return import("./components/Fallback");
  }));

  interface AppProps {
    title: string
  }

const router = createBrowserRouter([
    {
        path: "/",
        element: <Test />,
    },
]);

  const App: React.FC<AppProps> = ({ title }) => (
    <div>
      <h1><center>{title}</center></h1>
      <ErrorBoundary appName="App 1">
        <React.Suspense fallback="Loading App1">
          <App1 />
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary appName="App 2">
        <React.Suspense fallback="Loading App2">
          <App2 />
        </React.Suspense>
      </ErrorBoundary>
      <ErrorBoundary appName="Test">
        <React.Suspense fallback="Loading Test">
          <RouterProvider router={router} />
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
  
  export default App;