import { Link } from "react-router-dom";
import Logo from "../assets/images/TIPTOP-RIGINAL.png"

const Footer = () => {
    return (
        <>


            <footer className="p-4 bg-white shadow md:px-6 md:py-8 text-Green shadow-top-lg shadow-Green">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 sm:mb-0 underline">
                        <img src={Logo} className="h-12 mr-3" alt="Company Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-wrap">TIP TOP TRANSPORT & CONTRACTING</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-Green sm:mb-0">
                        <li>
                            <Link to="/AboutUsPage" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        <li>
                            <Link to="/AboutUsPage" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/AboutUsPage" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-Green sm:mx-auto lg:my-8" />
                <span className="block text-sm text-Green sm:text-center"><a href="/" className="hover:underline">Velopers™</a>. All Rights Reserved.
                </span>
            </footer>

        </>
    )
}
export default Footer;