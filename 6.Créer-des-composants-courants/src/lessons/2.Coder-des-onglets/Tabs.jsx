const tabsData = [
  {
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quam adipisci saepe sit reiciendis sint voluptatibus fuga officiis quod eaque.",
  },
  {
    txt: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio provident voluptatem ipsam exercitationem doloribus! Totam ab nihil ipsum voluptas aperiam beatae expedita quae facilis ducimus. Asperiores officia, suscipit accusantium nisi nam modi, rerum nostrum esse enim earum dolor architecto quos?",
  },
  {
    txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo a quibusdam voluptatem praesentium repellendus ab reiciendis iusto! Quod hic aliquam, voluptates expedita iure eius corrupti incidunt quos unde doloremque earum, eligendi sequi, nam praesentium. Eius voluptates ullam est omnis similique tempora enim. Aut necessitatibus nesciunt et voluptatibus excepturi. Magni totam modi, similique atque recusandae blanditiis ut necessitatibus explicabo qui?",
  },
];

import { useState } from 'react';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='max-w-xl min-h-[300px] mx-auto rounded-md bg-slate-800 text-white p-4'>
      <div className='flex divide-x divide-slate-700'>
        {tabsData.map((tab, index) => (
          <button 
            key={index} 
            disabled={selectedTab === index}
            className={`p-4 w-full hover:bg-slate-300 ${selectedTab === index ? 'bg-slate-300' : ''}`} 
            onClick={() => setSelectedTab(index)}>
            Tab {index + 1}
          </button>
        ))}
      </div>
        <div className='grid grid-cols-1 p-4 text-slate-100'>
          <div className='col-[1/2] row-[1/2]'>
            <p>{tabsData[selectedTab].txt}</p>
          </div>
        </div>
    </div>
  )
}
