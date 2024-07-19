import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { img1, img2, img3, img4, img5, img6 } from "../assets/images/images";


const Banner = () => {
    const slides = [
        {
            url: img3,
        },
        {
            url: img5,
        },
        {
            url: img4,
        },

        {
            url: img1,
        },
        {
            url: img2,
        },
        {
            url: img6,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // set the interval to 5 minutes (300000 milliseconds)

        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    return (
        <div className='max-w-[1600px] h-[450px] w-full m-auto relative group bg-transparent'>

            <img className="object-cover object-center absolute w-full h-full -z-1" src={slides[currentIndex].url} alt="Hero_Section_Image" />
            <div style={{ backgroundImage: 'linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.4))' }} className='relative w-full h-full bg-transparent transition-all duration-500 ease-in-out text-Green m-auto  z-10'>
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Empowering Transportation and Construction Solutions</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 xl:px-48">We offer heavy vehicles and contracting services for construction projects. Our experienced team provides reliable and cost-effective solutions to meet your transportation and construction needs.</p>
                    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <div className="inline-flex justify-center items-center py-3 px-5 text-base font-semibold text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                            Contact us to learn more
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                        <Link to="/ContactUs" className="inline-flex justify-center items-center py-3 px-5 text-base font-semibold text-center text-white rounded-lg border border-Green bg-Green focus:white focus:ring-Green ">
                            {/* <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg> */}
                            Contact US
                        </Link>
                    </div>
                </div>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20'>
                {/* <BsChevronCompactLeft /> */}
                < FontAwesomeIcon icon={faChevronCircleLeft} onClick={prevSlide} size='sm' />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer z-20'>
                {/* <BsChevronCompactRight onClick={nextSlide} size={30} /> */}
                <FontAwesomeIcon icon={faChevronCircleRight} onClick={nextSlide} size='sm' />
            </div>
        </div>
    );
}
export default Banner;