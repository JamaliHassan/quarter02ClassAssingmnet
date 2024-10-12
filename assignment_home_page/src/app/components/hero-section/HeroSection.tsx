import WordPullUp from "@/components/ui/word-pull-up";

const HeroSection = () => {
  return (
    <div className="flex justify-evenly items-center h-screen gap-6 bg-green ">
      <div className="w-[600px] p-4">
        {
          <WordPullUp
            className="text-4xl text-[#FF5733] font-bold tracking-[-0.02em] text-black dark:text-white md:text-6xl md:leading-[5rem] mb-4"
            words="Explore the Future of Web Development"
          />
        }
        <p className="font-medium text-2xl leading-9 tracking-widest">
          Stay ahead with in-depth articles, tutorials, and insights on Next.js,
          React, and cutting-edge technologies. Whether you&apos;re a beginner
          or a seasoned developer, our blog brings you the latest trends and
          best practices to level up your skills.
        </p>
      </div>
      <div className="w-[600px]">
        <img src="/images/heroImage.png" alt="blogImage" className="w-[90%]" />
      </div>
    </div>
  );
};

export default HeroSection;
