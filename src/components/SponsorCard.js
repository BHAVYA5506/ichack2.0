import react, {useEffect, useState} from 'react';
import React from "react";
import {SponsorData} from "../assets/SponsorData";
import CustomButton from "./CustomButton";

const SponsorCard = () => {

return(
  <>
      {SponsorData.map((sponsor, index) => (
          <div key={index}>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:mx-[15vw] lg:mx-[5vh] mx-2 justify-around align-middle'>
              <div className='lg:h-[50vh] md:my-0 xl:mt-0 md:mt-[20%] lg:mt-0 justify-center xsm:h-[25vh] align-middle'>
                  <img className='inline max-h-full max-w-full align-middle justify-between' src={sponsor.sponsorImage} alt=""/>
              </div>
              <div>
                  <div className='max-w-full w-full lg:max-w-full lg:flex align-middle'>
                      <div className='p-4 flex flex-col justify-between leading-normal align-middle'>
                          <div className='mb-8 align-middle'>
                              <div className='text-black font-bold text-3xl mb-6'>{sponsor.sponsorName}</div>
                              <p className='text-black text-lg text-justify font-semibold'>{sponsor.sponsorAbout}</p>
                          </div>
                          <div className='flex items-center'>
                              {/*<button className='button py-2 px-4 bg-[#00629b] text-white rounded-lg font-semibold'>Know More</button>*/}
                            <a href="/">
                              <CustomButton
                                  backgroundColor="#0F1B4C"
                                  color="#fff"
                                  buttonText="Read More"
                                  heroBtn={true}
                              />
                              {/*<button type = "button" className='button py-2 px-4 bg-gradient-to-tl from-blue-950 to-blue-500 text-white rounded-lg font-semibold'>Read More</button>*/}
                            </a>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      ))}
  </>
);
}

export default SponsorCard;