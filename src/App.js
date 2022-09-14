import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import PosesPage from "./pages/poses/PosesPage";
import PoseDetailPage from "./pages/poses/PoseDetailPage";
import GamesPage from "./pages/games/GamesPage";
import MemoryGamePage from "./pages/games/MemoryGamePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/poses" exact>
          <PosesPage />
        </Route>
        <Route path="/poses/:poseId">
          <PoseDetailPage />
        </Route>
        <Route path="/games" exact>
          <GamesPage />
        </Route>
        <Route path="/games/:gameId">
          <MemoryGamePage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
