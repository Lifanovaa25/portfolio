import s from "./WorksGallery.module.scss";
import chess from "./../../assets/images/webp/preview_chess.webp";
import weather from "./../../assets/images/webp/weather.webp";
import { Tabs } from "./Tabs";

export const PetProjects = () => {
  return (
    <>
      
          <div className={s.gallery_items}>
            <a href="/chess" className={s.item}>
              <img src={chess} alt="" className={s.preview} />
              <div className={s.project_name}>Шахматы</div>
            </a>

            <a href="https://weather-qg1a.vercel.app/" className={s.item}>
              <img src={weather} alt="" className={s.preview} />
              <div className={s.project_name}>Прогноз погода</div>
            </a>
          </div>
    </>
  );
};
export default PetProjects;
