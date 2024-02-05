import s from "./WorksGallery.module.scss";
import SJ from "./../../assets/images/SJ.webp";
import GPT from "./../../assets/images/chatgpt-trading.io_.webp";
import DBP from "./../../assets/images/dapp.borb.fi_.webp";
import MMNA from "./../../assets/images/mmnalaunch.com_.webp";
import ST from "./../../assets/images/tud-staking.com_.webp";
import BU from "./../../assets/images/richharvest.bestlife27.ru_.webp";

export const CompletedProjects = () => {
  return (
    <>
      <div className={s.gallery_items}>
        <a href="https://chatgpt-trading.io" className={s.item}>
          <img src={GPT} alt="" className={s.preview} />
          <div className={s.project_name}>Chat GPT 4 Trading</div>
        </a>
        <a href="https://dapp.borb.fi" className={s.item}>
          <img src={DBP} alt="" className={s.preview} />
          <div className={s.project_name}>BorB</div>
        </a>
        <a href="https://mmnalaunch.com" className={s.item}>
          <img src={MMNA} alt="" className={s.preview} />
          <div className={s.project_name}>MMNA Launch</div>
        </a>
        <a href="https://sj-landing.vercel.app/" className={s.item}>
          <img src={SJ} alt="" className={s.preview} />
          <div className={s.project_name}>Space Jam</div>
        </a>
        <a href="https://tud-staking.com" className={s.item}>
          <img src={ST} alt="" className={s.preview} />
          <div className={s.project_name}>TUD & STUDSY</div>
        </a> <a href="https://richharvest.bestlife27.ru/" className={s.item}>
          <img src={BU} alt="" className={s.preview} />
          <div className={s.project_name}>Богатый урожай</div>
        </a>
      </div>
    </>
  );
};
export default CompletedProjects;
