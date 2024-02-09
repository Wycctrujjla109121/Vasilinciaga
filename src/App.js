import { Footer, Header } from "./modules";
import { Collection, Form, Gallery, Preview } from "./modules/page/main";

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Preview />
      <Collection />
      <Collection />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
