"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function SliderButtons() {
  const swiper = useSwiper();

  return (
    <div className="w-full absolute bottom-[calc(50%_-_15px)] lg:bottom-1 lg:right-1 z-20 flex justify-between lg:justify-end items-center lg:gap-2 px-1 lg:px-0">
      <button
        onClick={() => swiper.slidePrev()}
        disabled={swiper.isBeginning}
        className="rounded-sm bg-accent p-2 lg:p-4 text-primary md:text-xl disabled:bg-accent/40 shadow-md"
      >
        <PiCaretLeftBold />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={swiper.isEnd}
        className="rounded-sm bg-accent p-2 lg:p-4 text-primary md:text-xl disabled:bg-accent/40 shadow-md"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}
