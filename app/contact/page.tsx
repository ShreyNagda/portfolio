"use client";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const info = [
    { icon: <FaPhoneAlt />, title: "Phone", desc: "(+91) 940 532 1984" },
    { icon: <FaEnvelope />, title: "Email", desc: "shreynagda2714@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "Thane, Maharashtra" },
  ];

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="order-2 lg:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              action="https://formsubmit.co/shreynagda2714@gmail.com"
              method="POST"
            >
              <h3 className="text-2xl text-accent">Lets work together</h3>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
                onChange={handleChange}
              >
                <Input type="text" placeholder="First Name" name="fname" />
                <Input type="text" placeholder="Last Name" name="lname" />
                <Input type="email" placeholder="Email Address" name="email" />
                <Input type="tel" placeholder="Phone Number" name="phone" />
                <Textarea
                  className="col-span-1 md:col-span-2 lg:col-span-2"
                  placeholder="Type your message"
                  name="message"
                />
                <div className="flex justify-center col-span-1 md:col-span-2 lg:col-span-2">
                  <Button type="submit">Send Message</Button>
                </div>
              </div>
            </form>
          </div>
          <div className="order-1 lg:order-none flex flex-col gap-4">
            {info.map((i, _) => (
              <div key={_} className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-white/60">
                  {i.icon} {i.title}:
                </div>
                <div className="text-accent">{i.desc}</div>
              </div>
            ))}
            <Socials className={"flex gap-4"} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
