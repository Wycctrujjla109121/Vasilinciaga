import { Cookie, Footer, Header, Sorted } from "./modules";
import { Collection, Form, Gallery, Preview } from "./modules/page/main";

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      {/* 
      Главная страница
      <Header />
      <Preview />
      <Collection />
      <Collection />
      <Gallery />
      <Form />
      <Footer />
      <Cookie /> 
      Главная страница
      */}

      <Sorted />
    </div>
  );
}

export default App;
