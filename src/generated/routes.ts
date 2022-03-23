
import type { RouteObject } from "react-router-dom";
import mainRoutes from "views/main/routes";
import listRoutes from "views/list/routes";

const routes: RouteObject[] = [...mainRoutes, ...listRoutes]



export default routes;
