import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

const SignIn = React.lazy(() => import("src/page/sign-in"));
const List = React.lazy(() => import("src/page"));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="signIn">
          <SignIn />
        </Route>
        <Route>
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
