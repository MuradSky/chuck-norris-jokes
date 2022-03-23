import React from "react";
import type { RouteObject } from "react-router-dom";

import { Loader } from "components/Loader";

const List = React.lazy(() => import("views/list/page/List"));

const routes: RouteObject[] = [
  {
    path: "/list",
    element: (
      <React.Suspense fallback={<Loader />}>
        <List />
      </React.Suspense>
    )
  }
];

export default routes;
