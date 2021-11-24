import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const withLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    const { currentUser } = useSelector((state) => state.authReducer);

    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );
    if (isPrivate) {
      if (currentUser) {
        return content;
      } else {
        return <Redirect to="/Login" />;
      }
    }
    return content;
  };
};

export default withLayout;
