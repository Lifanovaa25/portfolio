

import s from './WorksGallery.module.scss';



export const Tabs = () => {
  const tabs = [
    {
      value: 'Pet-projects',
    },
    {
      value: 'Completed projects',
    },
 
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs_wrapper}>
        {tabs.map(tab => (
          <div className={s.tab} key={tab.value}>
            {tab.value}
          </div>
        ))}
      </div>
      {/* <div className={s.cancel}>Отменить</div> */}
    </div>
  );
};
