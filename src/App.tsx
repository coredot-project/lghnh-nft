import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Gallery from "./views/Gallery/";
import Home from "./views/Home/";
import Minting from "./views/Minting/";
import MyBenefit from "./views/MyBenefit/";
import MyNft from "./views/MyNft/";
import NftDetail from "./views/NftDetail";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/minting" component={Minting} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/my-nft" component={MyNft} />
        <Route exact path="/my-benefit" component={MyBenefit} />
        <Route exact path="/nft/:id" component={NftDetail} />
      </Switch>
    </Router>
  );
}

export default App;
