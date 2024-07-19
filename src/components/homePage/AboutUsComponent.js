import React from 'react'

const AboutUs = () => {
    return (<section className="bg-white m-auto">
        <div className="gap-16 items-center py-8 px-4 mx-auto xl:max-w-screen-xl max-w-[1210px] lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-Green sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-Green">About <span className='text-Dark_Green underline decoration-Dark_Green'>TIPTOP</span></h2>
                <p className="mb-4 font-semibold">At TIP TOP TransPort, we provide public transportation and contracting services for construction projects. We offer a range of heavy vehicles and cars for construction purposes, as well as comprehensive contracting services, to meet your unique needs.we're committed to delivering reliable and efficient solutions that exceed your expectations.</p>
                <p className='font-semibold'> Contact us today to learn more about how we can help you achieve your transportation and construction goals.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
        </div>
    </section>
    )
}

export default AboutUs