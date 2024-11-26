import teamsData from "@/Data/Teams.json";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";
import { Button } from "./ui/button";

const Teams = () => {
  return (
    <section className="flex flex-wrap flex-col items-center gap-12 bg-[#F7F7F7]">
      <div className="text-center py-12 px-6">
        <h1 className="text-[32px] leading-[41px] font-bold mb-[24px]">
          Our team
        </h1>
        <p className="text-lg leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <div className="flex flex-wrap justify-center gap-12">
          {teamsData.teamsData.map((items) => (
            <div key={items.id} className="flex text-center flex-col w-[394px] gap-6">
              <Image
                src={items.Image}
                alt="profile image"
                width={80}
                height={80}
                className="mx-auto"
              ></Image>
              <div>
                <h1 className="text-xl leading-[30px] font-semibold mb-1">
                  {items.Name}
                </h1>
                <p className="text-lg leading-[27px]">{items.Designation}</p>
              </div>
              <div className="flex justify-center gap-[14px]">
                <FaLinkedin />
                <FaTwitter />
                <FaDribbble />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center my-[64px]">
        <Button
          variant={"outline"}
          className="rounded px-3 py-6 text-base font-normal bg-inherit"
        >
          View All
        </Button>
      </div>
    </section>
  );
};

export default Teams;
