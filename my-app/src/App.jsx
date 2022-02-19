import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
<<<<<<< HEAD

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
=======
import { Provider } from "react-redux";
>>>>>>> bd564c1c0a76959924860d548a9838bb68c7792e
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";

import { PageAbout } from "./pages/about/about";
import { PageHome } from "./pages/home/home";
import { PageCatalog } from "./pages/catalog/catalog";
import { PageCatalogoDetalle } from "./pages/catalog/detalle/catalogo-detalle";
import { PageDelivery } from "./pages/delivery/delivery";
import { PageContact } from "./pages/contact/contact";
import { PageLogin } from "./pages/login/login";
import { PageRegister } from "./pages/register/register";
import { PageNotFound } from "./pages/not-found/not-found";
import { store } from "./store/store";
import "antd/dist/antd.css";
import "./assets/style/main.scss";

import { store, persistor } from "./store/store";

/*
Componente wrapper
*/
export function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
    <PersistGate loading={null} persistor={persistor}>
    <Router>
      <div className="wrapper flex-col items-center flex">
        <Header />
        <Main>
          <Switch>
            <Route path="/home">
              <PageHome />
            </Route>
            <Route exact path="/catalog">
              <PageCatalog />
            </Route>
            <Route path="/catalog/:id">
              <PageCatalogoDetalle />
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
            <Route path="/login">
              <PageLogin />
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
    </PersistGate>
=======
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
              <Route path="/login">
                <PageLogin />
              </Route>
              <Route path="/register">
                <PageRegister />
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
>>>>>>> bd564c1c0a76959924860d548a9838bb68c7792e
    </Provider>
  );
}
