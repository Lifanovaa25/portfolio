import { SetStateAction, useState } from "react";
import s from "./WorksGallery.module.scss";
import PetProjects from "./PetProjects";
import CompletedProjects from "./CompletedProjects";

export const Tabs = () => {
  const [active, setActive] = useState(0);
  const [isPet, setPet] = useState(true);
  function changeGallery(i: SetStateAction<number>) {
    setActive(i);
    i === 0 ? setPet(true) : setPet(false);
  }
  const tabs = [
    {
      value: "Completed projects",
      id: "1",
    },
    {
      value: "Pet-projects",
      id: "0",
    },
  ];
  return (
    <>
      <div className={s.tabs}>
        <div className={s.tabs_wrapper}>
          {tabs.map((tab, i) => (
            <div
              key={tab.value}
              data-index={i}
              onClick={() => {
                changeGallery(i);

                // alert(i);
              }}
              className={i === active ? [s.tab, s.active].join(" ") : s.tab}
            >
              <span>{tab.value}</span>
            </div>
          ))}
        </div>
        {/* <div className={s.cancel}>Отменить</div> */}
      </div>
      {!isPet && <PetProjects />}
      {isPet && <CompletedProjects />}
      {/* {!isPet && (<PetProjects/>)} */}
    </>
  );
};
