import { Header } from "./modules";
import { Preview } from "./modules/page/main";

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Preview />
    </div>
  );
}

export default App;
