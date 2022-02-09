import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

import { PageAbout } from "./pages/about/about";
import { PageHome } from "./pages/home/home";
import { PageCatalog } from "./pages/catalog/catalog";
import { PageDelivery } from "./pages/delivery/delivery";
import { PageContact } from "./pages/contact/contact";
import { PageNotFound } from "./pages/not-found/not-found";
import "./assets/style/main.scss";

/*
Componente wrapper
*/
export function App() {
  return (
    <Router>
      <div className="wrapper flex-col items-center flex">
        <Header />
        <Main>
          <Switch>
            <Route path="/home">
              <PageHome />
            </Route>
            <Route path="/catalog">
              <PageCatalog />
            </Route>
            <Route path="/delivery">
              <PageDelivery />
            </Route>
            <Route path="/contact">
              <PageContact />
            </Route>
            <Route path="/about">
              <PageAbout />
            </Route>
            <Redirect exact from="/" to="/home" />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
