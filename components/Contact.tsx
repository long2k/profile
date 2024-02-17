import React, { useState } from "react";

import ArrowCircleIcon from "@/common/svg/ArrowCircleIcon";
import MailIcon from "@/common/svg/MailIcon";
import MapIcon from "@/common/svg/MapIcon";
import { ContactFormInterface } from "@/common/interface/DataInterface";
import axios from "axios";

const Contact = () => {
  const [formValue, setFormValue] = useState<ContactFormInterface>({
    email: "",
    name: "",
    subject: "",
    content: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValue((periodValue) => {
      return {
        ...periodValue,
        [name]: value,
      };
    });
  };
  const handleContact = async () => {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValue)
      });

    } catch (error) {}
  };
  return (
    <section
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
      className="w-full h-full container mx-auto lg:px-0 px-[10px] py-[20px]"
    >
      <div className="uppercase font-bold w-full py-[80px] text-4xl text-center">
        Get In{" "}
        <span className="text-primary-yellow font-bold uppercase">Touch</span>
      </div>
      <div className="grid grid-cols-5 gap-5 pb-[80px]">
        <div className="col-span-5 lg:col-span-2 flex flex-col gap-5">
          <div className="uppercase text-2xl">Don&lsquo;t Be Shy!</div>
          <div>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </div>
          <div className="w-full flex gap-2">
            <div>
              <MapIcon width="64" height="64" style="fill-primary-yellow" />
            </div>
            <div>
              <div className="uppercase text-lg text-primary-gray font-semibold">
                Address point
              </div>
              <div>
                123 Stree New York City , United States Of America 750065.
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <MailIcon width="64" height="64" style="fill-primary-yellow" />
            </div>
            <div>
              <div className="uppercase text-lg text-primary-gray font-semibold">
                Mail Me
              </div>
              <div>truongquanglong777@gmail.com</div>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <MapIcon width="64" height="64" style="fill-primary-yellow" />
            </div>
            <div>
              <div className="uppercase text-lg text-primary-gray font-semibold">
                Call me
              </div>
              <div>+8433 247 7490</div>
            </div>
          </div>
        </div>
        <form className="col-span-5 lg:col-span-3 grid grid-cols-2 gap-3  lg:gap-2">
          <input
            className="col-span-2 sm:col-span-1 outline-0 rounded-[20px] bg-[#252525] max-h-[50px] p-[15px] "
            placeholder="YOUR NAME"
            type="text"
            name="name"
            value={formValue.name}
            onChange={handleChange}
            required
          />
          <input
            className="col-span-2 sm:col-span-1 outline-0 rounded-[20px] bg-[#252525] max-h-[50px] p-[15px] "
            placeholder="YOUR EMAIL"
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            required
          />
          <input
            className="col-span-2 outline-0 rounded-[20px] bg-[#252525] max-h-[50px] p-[15px]"
            placeholder="YOUR SUBJECT"
            type="text"
            name="subject"
            value={formValue.subject}
            onChange={handleChange}
            required
          />
          <textarea
            className="col-span-2 outline-0 rounded-[20px] min-h-[120px] bg-[#252525] p-[15px]"
            placeholder="YOUR MESSAGE"
            value={formValue.content}
            name="content"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            onClick={handleContact}
            className="max-w-fit mt-[3px] bg-transparent rounded-[25px] leading-[1.4] py-2 px-[10px] border-2 border-amber-500"
          >
            <div className="flex gap-x-[15px] items-center">
              <div className="font-semibold text-[15px] text-center">
                Send Me
              </div>
              <div className="">
                <ArrowCircleIcon width="24" height="24" style="fill-white" />
              </div>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
