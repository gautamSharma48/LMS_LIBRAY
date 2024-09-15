import React from "react";
import Link from "next/link";
import { footerData, imageUrlConstant } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-[#248de4] text-white-10 py-10">
      <div className="container mx-auto px-4">
        <Link href="/" className="mr-6 flex items-center">
          <img
            loading="lazy"
            src={imageUrlConstant?.logoUrl}
            alt="logo"
          />
        </Link>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-16 mt-10">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="text-xl font-bold">{section.title}</h4>
              <ul className="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
                {section?.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:underline">
                    <Link href={item.url}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-5">
        © 2022 Teclearns All rights Reserved.&nbsp; Terms & Conditions
        &nbsp;Legal & Privacy
      </div>
    </footer>
  );
};

export default Footer;
