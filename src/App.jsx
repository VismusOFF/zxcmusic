import MainPage from "./pages/MainPage/MainPage";
import style from "./global.module.scss";
import Header from "./components/header/headet";

const App = () => (
  <div>
    <Header/>
    <div className={style.wrapper}>
      <MainPage/>
      
    </div>
  </div>
);

export default App;