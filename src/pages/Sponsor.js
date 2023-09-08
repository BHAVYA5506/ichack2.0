import React from 'react'
import SponsorCard from "../components/SponsorCard";
import Navbar from "../components/Navbar";

function Sponsor() {
  return (
    <>
        <div className='bg-[#e3ebfa]'>
            <Navbar />
            <div className='flex flex-col items-center justify-center my-[2%]'>
                <div>
                    <h1 className='text-6xl text-center text-transparent bg-clip-text bg-gradient-to-tl from-blue-950 to-blue-500 font-extrabold pb-[5%]'>
                        SPONSORS
                    </h1>
                </div>
                <SponsorCard/>
            </div>
        </div>
    </>
  )
}

export default Sponsor;