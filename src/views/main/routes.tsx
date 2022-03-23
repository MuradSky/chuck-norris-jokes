import React from "react";
import type { RouteObject } from "react-router-dom";

import { Loader } from "components/Loader";

const Main = React.lazy(() => import("views/main/page/Main"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loader />}>
        <Main />
      </React.Suspense>
    )
  }
];

export default routes;
