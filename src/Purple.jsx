import style from "./global.module.scss";
import PurpleTheme from "./components/PurpleTheme/PurpleTheme";
import Header1 from "./components/PurpleTheme/header1/headet1";

const Purple = () => (
  <div>
    <Header1/>
    <div className={style.wrapper}>
      <PurpleTheme/>
      
    </div>
  </div>
);

export default Purple;