import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import { LuArrowLeftSquare, LuArrowRightSquare } from "react-icons/lu";
import "swiper/css";

const Testimonial = () => {
  const testimonials = [
    {
      text: "“I’ve been using wizia to for my business, and I’ve been extremely satisfied with the quality and variety available.The transactions have been smoot.“",
      name: "John Doe",
      designation: "Chief Strategy Officer @ Company",
    },
    {
      text: "“I stumbled upon wizia while searching for a reliable source to for my marketing campaigns.been using wizia to for my business“",
      name: "Foo Bar",
      designation: "Chief Strategy Officer @ Company",
    },
    {
      text: "“I’ve used wizia for personal use, and I couldn’t be happier with the experience.The platform offers a seamless buying process.“",
      name: "Jamal Njoku",
      designation: "Chief Strategy Officer @ Company",
    },
  ];

  return (
    <section
      id="Customers"
      className="px-6 md:px-0 py-20 md:py-24 container flex items-center"
    >
      <button className="swiper-testimonial-prev hidden md:block">
        <LuArrowLeftSquare className="text-bgSky text-3xl" />
      </button>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-testimonial-next",
          prevEl: ".swiper-testimonial-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="h-full">
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-testimonial-next hidden md:block">
        <LuArrowRightSquare className="text-bgSky text-3xl" />
      </button>
    </section>
  );
};

export default Testimonial;
