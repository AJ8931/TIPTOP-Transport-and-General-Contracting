import React from 'react'
import TeamData from "../assets/contents/team.json";
import { Khanzala, Abdur_Rehman, Zafar_Iqbal } from '../assets/images/images';



const Team = () => {
    const slides = [
        {
            p: Zafar_Iqbal,
        },
        {
            p: Khanzala,
        },
        {
            p: Abdur_Rehman,
        }
    ];
    return (
        <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-Light_Green text-lg text-center font-normal pb-3">OUR TEAM</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-Dark_Green font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className="w-full bg-gray-100 px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        {TeamData.TeamObject.map((data) => (
                            <div key={data.id} className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            {console.log(data.img.replace('"', ''))}
                                            <img src={slides[data.id].p} alt="Client_Image" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <div className="font-bold text-3xl text-center pb-1 text-Dark_Green">{data.name}</div>
                                        <p className="text-Light_Green text-sm text-center">{data.Rank}</p>
                                        <p className="text-center text-Dark_Green text-base pt-3 font-normal">{data.des}</p>
                                        <div className="text-Light_Green text-sm text-center underline pt-5 pb-5 hover:cursor-pointer" onClick={(e)=>{window.location.href=`mailto:${data.email}`}}>
                                            {data.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team