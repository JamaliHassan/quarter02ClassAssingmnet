'use client'
const Achievements = () => {
  return (
    <section className=" flex justify-center  items-center w-full py-8 px-5">
      <div className="flex flex-col justify-center items-center w-[380px] md:w-full  gap-8">
        <div>
          <h1 className="text-[32px] leading-[41px] md:text-[48px] md:leading-[57px] font-bold mb-4 text-center">
            Our Achivements
          </h1>
          <p className="text-[18px] leading-[27px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.{" "}
          </p>
        </div>
        <div className="flex flex-wrap text-center md:mx-auto">
          <div className="h-[60px] w-[182px] mr-4 mb-6">
            <p className="font-bold text-[20px] leading-[28px]">+200</p>
            <p className="text-[16px] leading-[24px]">Courses</p>
          </div>
          <div className="h-[60px] w-[182px]  mb-6">
            <p className="font-bold text-[20px] leading-[28px]">50K</p>
            <p className="text-[16px] leading-[24px]">Mentors</p>
          </div>
          <div className="h-[60px] w-[182px] mr-4 mb-6">
            <p className="font-bold text-[20px] leading-[28px]">370k</p>
            <p className="text-[16px] leading-[24px]">Students</p>
          </div>
          <div className="h-[60px] w-[182px]  mb-6">
            <p className="font-bold text-[20px] leading-[28px]">100+</p>
            <p className="text-[16px] leading-[24px]">Recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
