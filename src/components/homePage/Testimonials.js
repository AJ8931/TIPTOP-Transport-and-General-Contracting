import Image_M from "../../assets/images/mock_P.jpg"
const Testimonials = () => {
    return (<>
        <section className="bg-Green text-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold">Testimonials: Hear from our Satisfied Clients</h2>
                        <p className="text-gray-300">Our clients trust us to deliver high-quality transportation and construction solutions that meet their unique needs. Here's what they have to say about working with TIPTOP</p>
              
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-Dark_Green">
                                    <p>We've worked with <span className="font-bold">Tip Top Transport and General Contracting</span> on multiple projects over the years, and they continue to impress us with their expertise and professionalism. From start to finish, they provide top-notch service and exceptional value. We highly recommend them to anyone in need of transportation and construction solutions.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src={Image_M} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Zainab Ali</p>
                                            <p className="text-sm text-gray-300"> Construction Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-Dark_Green">
                                    <p>Working with <span className="font-bold">Tip Top Transport and General Contracting</span> was a game-changer for our construction project. Their heavy vehicles and contracting services helped us streamline our operations and save valuable time and resources. We couldn't be happier with the results.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src={Image_M} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Omar Saleh</p>
                                            <p className="text-sm text-gray-300">Commercial Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid content-center gap-4">
                                <div className="p-6 rounded shadow-md bg-Dark_Green">
                                    <p>When it comes to public transportation and contracting services, <span className="font-bold">Tip Top Transport and General Contracting</span> is the clear choice. Their team is knowledgeable, reliable, and always goes above and beyond to meet our needs. We look forward to continuing our partnership for years to come.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src={Image_M} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Ahmed Hassan</p>
                                            <p className="text-sm text-gray-300">Homeowner</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded shadow-md bg-Dark_Green">
                                    <p>As a homeowner embarking on a renovation project, I was nervous about finding the right transportation and construction services. But <span className="font-bold">Tip Top Transport and General Contracting</span> made the process easy and stress-free. Their team helped me navigate every step of the way, and I'm thrilled with the final result.</p>
                                    <div className="flex items-center mt-4 space-x-4">
                                        <img src={Image_M} alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                        <div>
                                            <p className="text-lg font-semibold">Fatima Khalil</p>
                                            <p className="text-sm text-gray-300"> Project Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>);
}
export default Testimonials;