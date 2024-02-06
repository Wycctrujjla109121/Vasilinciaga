import { Header } from "./modules";
import { Collection, Preview } from "./modules/page/main";

import collectionImg from './public/img/collection.png'
import collectionRightImg from './public/img/collectionRight.png'

import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Preview />
      <Collection title='MAIN' collectionImg={collectionImg} />
      <Collection title='MINIMALISM' collectionImg={collectionRightImg} reverse />
    </div>
  );
}

export default App;
