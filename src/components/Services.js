import React from 'react'
import Servicesdata from "../assets/contents/services.json";
import img1 from "../assets/images/SErvices Images/interlock.jpg";
import img2 from "../assets/images/SErvices Images/floor.jpg";
import img3 from "../assets/images/SErvices Images/wall.jpg";
import img4 from "../assets/images/SErvices Images/Ceramic.jpg";
import img5 from "../assets/images/SErvices Images/plumbing.jpg";
import img6 from "../assets/images/SErvices Images/Drainage.jpg";
import img7 from "../assets/images/SErvices Images/Transport.jpg";


const Services = () => {
    const slides = [
        
         img1,
    
        
         img2,
    
        
         img3,
    
        
         img4,
    
        
         img5,
    
        
         img6,
    
        
         img7,
    
    ];
    return (
        <div className="container py-10 px-6 mx-auto">
            <h2 className="my-4 text-4xl tracking-tight font-extrabold text-center text-Green">OUR <span className='text-Dark_Green underline decoration-Dark_Green'>SERVICES</span></h2>
            {Servicesdata.Services.map((service, k) => (
                <section key={service.id} className="text-Dark_Green pt-6 pb-12">
                    <img src={slides[k]} className="w-full shadow-lg rounded-lg mb-4" alt="" />



                    <h1 className="lg:font-bold text-3xl mb-2 font-semibold text-center text-Green underline decoration-Green">{service.heading}</h1>

                    <p className='text-Light_Green lg:font-semibold text-center'>{service.Paragraph}</p>
                </section>
            ))}
        </div>
    )
}

export default Services