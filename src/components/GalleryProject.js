import img1 from "../assets/images/project/bus1.jpg"
import img2 from "../assets/images/TRUCK_H.webp"
import img3 from "../assets/images/project/bus2.jpg"
import img4 from "../assets/images/project/construction1.jpg"
import img5 from "../assets/images/project/construction2.jpg"
import img6 from "../assets/images/project/construction3.jpg"

const GalleryProject = () => {
    return (
        <section className="overflow-hidden text-white">
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    
                    <div className="flex w-2/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img6} />
                        </div>
                    </div>

                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img4} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img5} />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img3} />
                        </div>
                    </div><div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src={img1} />
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default GalleryProject