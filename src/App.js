import { Header } from "./modules";
import { Collection, Form, Gallery, Preview } from "./modules/page/main";

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Header />
      {/* <Preview /> */}
      <Collection />
      <Collection />
      <Gallery />
      <Form />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
