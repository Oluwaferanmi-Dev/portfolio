import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="lg:px-8 pt-52 lg:pt-10">
      <h1
        className={`text-2xl font-normal leading-[30px] font-sans mb-5`}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Hello! I'm Samuel.
      </h1>
      <h2
        className={`font-medium text-5xl md:text-[55px] lg:text-[89px] leading-snug lg:leading-[111px] mb-5`}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        A Freelance Full stack web developer with keen interest in front-end
        development.
      </h2>
      <Link
        href={"mailto:fiyinfoluwasamuel580@gmail.com"}
        target="_blank"
        className="flex gap-2 items-center text-sm border border-[#7e7e97] rounded-md px-6 py-3 hover:bg-[#7e7e97] hover:text-[#09090B] transition-all duration-300 mb-10 ease-in w-32"
      >
        Hire Me <AiOutlineArrowRight />
      </Link>
    </section>
  );
}
