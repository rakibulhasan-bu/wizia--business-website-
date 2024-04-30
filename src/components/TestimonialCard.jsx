/* eslint-disable react/prop-types */
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-5xl mx-auto text-center">
      <img src="/comma.png" alt="" className="mx-auto" />
      <h1 className="font-light font-sans text-2xl md:text-[32px] md:leading-10 pt-11">
        {testimonial?.text}
      </h1>
      <h4 className="font-semibold text-textSky text-lg md:text-2xl pt-10">
        {testimonial?.name}
      </h4>
      <p className="font-light md:text-xl text-textSkySecondary pt-1">
        {testimonial?.designation}
      </p>
    </div>
  );
};

export default TestimonialCard;
