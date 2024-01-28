import MailIcon from "@/common/svg/MailIcon";
import MapIcon from "@/common/svg/MapIcon";

const Contact = () => {
  return (
    <section className="w-full h-full container mx-auto lg:px-0 px-[10px]">
      <div className="uppercase font-bold w-full py-[80px] text-4xl text-center">
        Get In{" "}
        <span className="text-primary-yellow font-bold uppercase">Touch</span>
      </div>
      <div className="grid grid-cols-5 gap-5">
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
        <div className="col-span-5 lg:col-span-3 grid grid-cols-2 gap-3  lg:gap-2">
          <input className="col-span-2 sm:col-span-1 outline-0 rounded-[20px] bg-[#252525] max-h-[50px] p-[15px] " placeholder="YOUR NAME" type="text" />
          <input className="col-span-2 sm:col-span-1 outline-0 rounded-[20px] bg-[#252525] max-h-[50px] p-[15px] " placeholder="YOUR EMAIL" type="text" />
          <input
            className="col-span-2 outline-0 rounded-[20px] bg-[#252525] max-h-[50px] p-[15px]"
            placeholder="YOUR SUBJECT"
            type="text"
          />
          <textarea className="col-span-2 outline-0 rounded-[20px] min-h-[120px] bg-[#252525] p-[15px]" placeholder="YOUR MESSAGE" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
