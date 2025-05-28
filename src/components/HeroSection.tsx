import { motion } from "framer-motion";
const HeroSection = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24 relative">
            <div className="text-center xl:text-left xl:absolute" id="about">
                <h1
                    className="text-[24px] sm:text-[50px] lg:text-[80px] font-bold text-black xl:max-w-[700px] mb-6 xl:mb-12"
                    data-aos="fade-down"
                    data-aos-delay="400"
                >
                    Save your data storage here.
                </h1>
                <p
                    className="lead xl:max-w-[380px] mb-6 lg:mb-12"
                    data-aos="fade-down"
                    data-aos-delay="500"
                >
                    Data Warehouse is a data storage area that has been tested for
                    security, so you can store your data here safely but not be afraid of
                    being stolen by others.
                </p>
                <button
                    className="text-white text-lg mb-8 xl:mb-0 bg-primary hover:bg-primary-hover px-8 py-4 rounded-full cursor-pointer"
                    data-aos="fade-down"
                    data-aos-delay="600"
                >
                    Learn more
                </button>
            </div>
            {/* img */}
            <motion.div
                className="xl:absolute xl:-right-12 xl:bottom-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <img
                    src="/images/hero-section.png"
                    className="lg:w-[885px] lg:h-[468] max-w-full w-full h-auto"
                    alt=""
                />
            </motion.div>
        </div>
    );
};

export default HeroSection;
