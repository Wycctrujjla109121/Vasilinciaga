import { Cookie, Footer, Header, Preloader, ProductList, Sorted } from "./modules";
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

      {/* 
      Страница магазин
      Страница магазин
      */}
      <div className={s.app__shop}>
        <Sorted />
        <ProductList />
      </div>
      <Preloader />
    </div>
  );
}

export default App;
