import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { app } from "./firebase";
import { login } from "./reducer/auth";
import { useAppDispatch } from "./store/hooks";

const SignIn = React.lazy(() => import("src/page/sign-in"));
const List = React.lazy(() => import("src/page/home"));

function App() {
  const dispatch = useAppDispatch();
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid));
      } else {
        dispatch(login(null));
      }

      setReady(true);
    });
  }, []);

  if (!isReady) return null;
  return (
    <Router>
      <Switch>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route>
          <List />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
