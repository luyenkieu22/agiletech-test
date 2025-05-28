import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import RequestDemo from "../components/RequestDemo"
import Testimonials from "../components/Testimonials"


const HomePage = () => {
    return (
        <div className="mx-auto w-full h-full px-2 sm:px-6 lg:px-4 sm:w-full xl:w-[1200px] lg:h-[900px] py-12">
            <Header />
            <HeroSection />
            <Features />
            <Testimonials />
            <hr className=" w-full mt-32 text-gray-400" />
            <RequestDemo />
            <Footer />
        </div>
    )
}

export default HomePage