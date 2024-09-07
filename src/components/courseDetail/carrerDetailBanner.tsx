import React from "react";

interface CareerDetail {
  carrer?: string;
  value?: string;
}

interface CareerDetailBannerProps {
  data?: CareerDetail[];
}

const CarrerDetailBanner: React.FC<CareerDetailBannerProps> = ({ data= [] }) => {
  return (
    <div className="flex relative overflow-hidden p-9 bg-cream-10  justify-between w-full rounded-xl ">
      {data.map((element: any, index: number) => (
        <div key={index} className="">
          <p className="text-2xl font-bold text-brown-10 mb-spacing2">
            {element?.value}+
          </p>
          <p className="text-sm  leading-5.5 font-normal text-brown-20">
            {element.carrer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CarrerDetailBanner;
