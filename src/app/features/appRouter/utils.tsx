import { Route } from "react-router-dom";
import Buyer from "../containers/Buyer";
import { PublicUser, PrivateUser } from "./User";

/** check weather page needs authentication */

export const isProtectedRoute = (route: any) => {
  if (route.protected) {
    return (
      <Route
        key={route.path}
        element={
          <Buyer isSideBarDisabled={route.isSideBarDisabled}>
            <PrivateUser
              routeKey={route.routeKey}
              allowedRoles={["user", "system_admin"]}
            />
          </Buyer>
        }
      >
        <Route path={route.path} element={route.element} />
      </Route>
    );
  } else {
    return (
      <Route key={route.path} element={<PublicUser route={route} />}>
        <Route key={route.path} path={route.path} element={route.element} />
      </Route>
    );
  }
};
