import React from "react";


import Image from "next/image";

function Home() {
  return (
   
      <div className=" h-screen">
        <div className="flex h-[189px] pt-[198px] gap-14">
   {/* left side */}
        <div className="w-1/2 flex flex-col justify-center items-start m-12  ">
        <h1 className="font-bold text-[40px]  leading-[65.8px] tracking-wide   text-left pt-[316px] ">IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
        </h1>

        <p className="w-[902px]  font-medium text-[30px] leading-[49.35px] tracking-wide text-left ">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

         <button className="text-[#FFFFFF] font-medium  bg-[#A29875] flex justify-center items-center rounded-md w-[20%] h-[30px] mt-6 ">Explore Now</button>
        
        </div>
     
     

        {/* figma img nad right side */}
        
        <div className="w-1/2 flex justify-center items-center pt-[198px] ">
          <Image
            src="\img\imge figma.svg"
            alt="figma-img"
            width={462}
            height={647}
          ></Image>
        </div>
      </div>
      </div>
  );
}

export default Home;
