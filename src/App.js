import { Header } from "./modules";
import { Collection, Preview } from "./modules/page/main";

import s from './App.module.scss'

function App() {
  return (
    <div class={s.app}>
      <Header />
      <Preview />
      <Collection />
      <Collection />
    </div>
  );
}

export default App;
