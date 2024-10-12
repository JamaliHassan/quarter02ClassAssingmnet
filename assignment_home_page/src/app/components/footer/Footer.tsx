const Footer = () => {
  return (
    <>
      <div className=" flex justify-center flex-col items-center h-[200px] border-t-2 p-[8rem]">
        <div className="w-[700px] p-2">
          {" "}
          <h1 className="font-bold text-3xl mb-4 leading-8 mt-4 text-center">
            About Tech Blogging
          </h1>
          <p className="leading-7 tracking-wider font-semibold xl">
            Tech Blogging is your go-to source for the latest in technology, web
            development, AI, and programming. We provide tutorials, news, and
            insightful articles to help you stay ahead in the tech world.
          </p>
        </div>
        <hr className="w-[1000px]  mb-4 mt-4 border-2 " />
        <div>
          <p className="mb-4">
          &#39; 2024 Tech Blogging. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
