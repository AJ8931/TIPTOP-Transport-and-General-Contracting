import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../components/Banner'
import Smallbanner from '../components/SmallBanner'
import FullPageLoader from '../pages/FullPageLoader'
import Footer from './Footer'
import Header from './Header'
const Layout = (props) => {
    const loc = useLocation();


    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 2000);
    }, [])



    return (
        <div>
            <Header />

            {loc.pathname === "/" ? <Banner /> : <Smallbanner />}

            {/* <Suspense fallback={<LoaderPage />}> */}
            {loading ? (<FullPageLoader />
            ) : (
                <main className="main bg-white">
                    {props.children}
                </main>
            )
            }
            {/* </Suspense> */}
            <Footer />
        </div>
    )
}

export default Layout