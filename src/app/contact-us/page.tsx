"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React from "react";
import { motion } from "framer-motion";
import { CalculatorIcon, MailIcon, MapPin, MessageCircleIcon, PhoneCall, PhoneCallIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Phone } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        className="w-full mt-10 mb-20 z-10"
      >
        <div className="text-black-60 text-xl text-center">Contact Us</div>
        <div className="text-black-70 text-center text-lg mt-2">
          Any question or remarks? Just write us a message!
        </div>

        <div className="flex flex-col  md:flex-row items-cneter max-w-[1196px] mx-auto mt-10 px-3 lg:px-0">
          <div className="bg-black-60 p-4 flex-1 rounded-xl md:rounded-tl md:rounded-bl shadow-2xl drop-shadow relative z-10 ">
            <p className="text-white-10 text-xl lg:text-3xl font-bold">Contact information</p>
            <p className="text-grey-30 text-sm mt-2">
              Say something to start a live chat!
            </p>

            <div className="mt-29 flex flex-col items-start gap-10">
              <div className="flex items-center gap-3">
                <PhoneCallIcon className="text-white-10" />
                <p className="text-grey-30">+1012 3456 789</p>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="text-white-10" />
                <p className="text-grey-30">demo@gmail.com</p>
              </div>
              <div className="flex items-center gap-3 ]">
                <MapPin  className="text-white-10" />
                <p className="text-grey-30 max-w-[300px] text-ellipsis">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </p>
              </div>

            </div>

            {/* <div className="w-36 h-36 rounded-full bg-grey-40 shadow-2xl -right-10 -bottom-9 z-3 absolute" /> */}
          </div>
          <div className="flex-1 bg-white-10 shadow-2xl drop-shadow lg:rounded-tr rounded-xl mt-5 lg:mt-0 lg:rounded-br p-4 z-10">
            <div className="flex items-center gap-3 w-full  ">
                <div className="flex-1">
                <label htmlFor="email">First Name</label>
                <Input type="text" id="email" placeholder="Enter your first name" className="w-full" />
                </div>
                <div className="flex-1">
                <label htmlFor="lastName">Last Name</label>
                <Input type="text" id="lastName" placeholder="Enter your last Name" />
                </div>
            </div>

            <div className="flex items-center gap-3 w-full mt-5 ">
                <div className="flex-1">
                <label htmlFor="email">Email</label>
                <Input type="text" id="email" placeholder="Enter your email" className="w-full" />
                </div>
                <div className="flex-1">
                <label htmlFor="lastName">Phone Number</label>
                <Input type="text" id="lastName" placeholder="+ 123-456-7890" />
                </div>
            </div>

            <div className="mt-5">
               <label htmlFor="message">Message</label>
                <textarea id="message" className="min-h-[200px] w-full border border-grey-40 shadow drop-shadow-2xl outline-none rounded-xl resize-none mt-3" />
            </div>

            <motion.button whileTap={{ scale: 0.85}} className="bg-black-60 text-white-10 h-10 rounded-xl p-2 float-right my-10 ">Send Message</motion.button>
           
          </div>
        </div>
      </motion.div>
      <Footer />
    </section>
  );
};

export default ContactPage;
