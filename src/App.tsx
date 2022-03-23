import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "generated/Router";

import GlobalStyles from "styles/global";

const App = () => {
  return (
    <section>
      <h1>&lt;InCodeWeTrust /&gt;</h1>
      <h2>Клуб Фронтенд Джентельменов</h2>

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </section>
  );
};

export default App;
