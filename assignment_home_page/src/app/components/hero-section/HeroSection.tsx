import WordPullUp from "@/components/ui/word-pull-up";

const HeroSection = () => {
  return (
    <div className="flex justify-evenly max-w-full mt-[90px] md:text-center lg:gap-2 max-md:flex-col max-md:text-center   items-center max-sm:mt-[200px] max-md:mt-[200px] max-md:p-x-16 max-md:ml-16 p-4 xl:p-10 gap-6">
      <div className="w-[600px] p-4">
        {
          <WordPullUp
            className="text-4xl max-md-text-[30px] max-sm:ml-20 font-bold tracking-[-0.02em] text-black dark:text-white md:text-6xl md:leading-[5rem] mb-4"
            words="Explore the Future of Web Development"
          />
        }
        <p className="font-medium text-2xl leading-9 tracking-widest max-md:text-xl max-xl:text-2xl max-sm:ml-[100px]">
          Stay ahead with in-depth articles, tutorials, and insights on Next.js,
          React, and cutting-edge technologies. Whether you&apos;re a beginner
          or a seasoned developer, our blog brings you the latest trends and
          best practices to level up your skills.
        </p>
      </div>
      <div className="max-w-[600px] max-sm:ml-[100px] max-sm:w-full">
        <img src="./images/heroImage.png" alt="blogImage" className="w-[100%]" />
      </div>
    </div>
  );
};

export default HeroSection;
