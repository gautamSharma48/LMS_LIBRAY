import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerData = [
    {
      title: "Trending Certification Courses",
      items: [
        { text: "Microsoft Project", url: "/microsoft-project" },
        { text: "Microsoft Excel", url: "/microsoft-excel" },
        { text: "PRINCE2 Foundation", url: "/prince2-foundation" },
        { text: "PRINCE2 Practitioner", url: "/prince2-practitioner" },
        { text: "PMI RMP", url: "/pmi-rmp" },
        { text: "PMP Certification", url: "/pmp-certification" },
        { text: "CBAP", url: "/cbap" },
        { text: "PMI-ACP", url: "/pmi-acp" },
      ],
    },
    {
      title: "Trending Master Courses",
      items: [
        { text: "Leading SAFe 5.1", url: "/leading-safe-5-1" },
        { text: "Agile Scrum Master", url: "/agile-scrum-master" },
        { text: "Six Sigma Yellow", url: "/six-sigma-yellow" },
        { text: "Six Sigma Green", url: "/six-sigma-green" },
        { text: "Six Sigma Black", url: "/six-sigma-black" },
        { text: "Business Case Writing", url: "/business-case-writing" },
      ],
    },
    {
      title: "Company",
      items: [
        { text: "About us", url: "/about-us" },
        { text: "Reviews", url: "/reviews" },
        { text: "Contact us", url: "/contact-us" },
        { text: "Blog", url: "/blog" },
      ],
    },
    {
      title: "Categories",
      items: [
        { text: "PMI PBA", url: "/pmi-pba" },
        { text: "Financial Modeling", url: "/financial-modeling" },
        { text: "ITIL 4 Foundation", url: "/itil-4-foundation" },
      ],
    },
  ];

  return (
    <footer className="bg-[#248de4] text-white-10 py-10">
      <div className="container mx-auto px-4">
        <Link to="/" className="mr-6 flex items-center" prefetch={false}>
          <img
            loading="lazy"
            src="https://teclearns.com/images/logo.png"
            alt="logo"
          />
        </Link>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between md:space-x-16 mt-10">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <h4 className="text-xl font-bold">{section.title}</h4>
              <ul className="list-disc pl-6 flex flex-col gap-2 cursor-pointer">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="hover:underline">
                    <Link to={item.url}>{item.text}</Link>
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
