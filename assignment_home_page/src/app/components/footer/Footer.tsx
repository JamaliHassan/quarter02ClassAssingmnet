const Footer = () => {
  return (
    <>
      <div className=" flex justify-center flex-col items-center max-w-screen h-[200px] border-t-2 p-[8rem] max-md:w-full ">
        <div className="max-w-[700px] p-2 max-md:w-[450px] max-md:ml-[50px] max-md:mt-[100px] max-sm:ml-[100px]">
          <h1 className="font-bold text-3xl mb-4 leading-8 mt-4 text-center">
            About Tech Blogging
          </h1>
          <p className="leading-7 tracking-wider font-semibold xl max-w-[700px] max-md:leaading-2 max-md:tracking-none max-md:w-full">
            Tech Blogging is your go-to source for the latest in technology, web
            development, AI, and programming. We provide tutorials, news, and
            insightful articles to help you stay ahead in the tech world.
          </p>
        </div>
        <hr className="w-full  mb-4 mt-4 border-2 " />
        <div className="max-sm:w-[400px] max-sm:text-center">
          <p className="mb-4">
            &copy; 2024 Tech Blogging. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
