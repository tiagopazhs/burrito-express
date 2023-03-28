import React, { useRef } from "react";
import CardCategory from "./CardCategory";

function CategoryList() {
  const containerRef = useRef<HTMLDivElement>(null);

  const items = [
    { id: 1, icon: 'https://cdn-icons-png.flaticon.com/512/6121/6121438.png', name: 'Burritos' },
    { id: 2, icon: 'https://cdn-icons-png.flaticon.com/512/6228/6228350.png', name: 'Nachos' },
    { id: 3, icon: 'https://cdn-icons-png.flaticon.com/512/8803/8803824.png', name: 'Tacos' },
    { id: 4, icon: 'https://cdn-icons-png.flaticon.com/512/4177/4177697.png', name: 'Quesadilas' },
    { id: 5, icon: 'https://cdn-icons-png.flaticon.com/512/4727/4727290.png', name: 'Guacamoles' },
    { id: 6, icon: 'https://cdn-icons-png.flaticon.com/512/5426/5426465.png', name: 'Enchiladas' },
    { id: 7, icon: 'https://cdn-icons-png.flaticon.com/512/1375/1375228.png', name: 'Postres' },
    { id: 8, icon: 'https://cdn-icons-png.flaticon.com/512/2738/2738730.png', name: 'Bebidas' }
  ];

  const handleSlide = (direction: "left" | "right") => {


    const container = containerRef.current;

    if (container) {
      const step = 10;
      const distance = 100;
      const speed = 25;

      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        if (direction === "left") {
          container.scrollLeft -= step;
        } else {
          container.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer);
        }
      }, speed);
    }
  };

  return (

    <div className="relative bg-white p-3">
      <div
        className="overflow-hidden w-screen pb-2"
        ref={containerRef}
      >
        <CardCategory items={items} />
      </div>
      <button onClick={() => handleSlide("left")} className="absolute top-9 left-3 text-4xl bg-transparent hover:bg-slate-300 text-slate-300 hover:text-white font-semibold py-2 px-4 border-gray rounded-full">
        {'<'}
      </button>
      <button onClick={() => handleSlide("right")} className="absolute top-5 right-3 text-4xl bg-transparent hover:bg-slate-300 text-slate-300 hover:text-white font-semibold py-2 px-4 border-gray rounded-full">
        {'>'}
      </button>
    </div>



  );
}

export default CategoryList;
