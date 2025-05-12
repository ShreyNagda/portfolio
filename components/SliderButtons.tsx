"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function SliderButtons() {
  const swiper = useSwiper();
  return (
    <div className="w-full absolute bottom-[calc(50%_-_15px)] lg:bottom-0 right-0 z-20 flex justify-between lg:justify-end items-center lg:gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="rounded-sm bg-accent p-2 md:p-4 text-primary md:text-xl"
      >
        <PiCaretLeftBold />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="rounded-sm bg-accent p-2 md:p-4 text-primary md:text-xl"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}
