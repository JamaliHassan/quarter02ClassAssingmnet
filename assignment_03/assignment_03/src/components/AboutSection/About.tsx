'use client';
const About = () => {
  return (
    <div className="flex justify-center  items-center gap-6 my-20 flex-wrap">
        <div className="max-w-600px">
            <img src="/About.webp" alt="About Image" width={600}/>
        </div>
        <div className="max-w-[600px] ">
            <h1 className="text-[2.5rem] font-bold mb-6 ">About Us</h1>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem asperiores, eaque unde, voluptates, fugiat quo qui similique quod eum voluptas eveniet maxime harum delectus odit numquam exercitationem. Quam, ut sapiente.</p>
            <button className=" mt-6 p-3 col-start-2 rounded border-2  border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white transition ease-linear">Read More</button>
        </div>
    </div>
  )
}

export default About