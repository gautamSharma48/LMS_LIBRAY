import { FadeIn } from "@/components/animation";
import { headerItems } from "@/constants";
import React from "react";

const StickyHeader = ({ isSticky = false }) => {
  return (
    <FadeIn delay={0.2}>
      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 w-full bg-white-10 shadow-md shadow-green-700  flex items-center justify-center gap-4 border-b   px-7 py-4 none z-50"
            : "hidden"
        }`}
      >
        {headerItems.map((item) => (
          <div
            key={item.id}
            className="text-sm pl-6 text-black-50 cursor-pointer"
            onClick={() => (window.location.href = item.link)} 
          >
            {item.label}
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default StickyHeader;
