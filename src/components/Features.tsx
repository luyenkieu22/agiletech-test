import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const Features = () => {
    return (
        <section className="container mx-auto py-12" id="features">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-6 xl:mb-12" aos-init aos-animate data-aos="fade-down" data-aos-delay="100">Features</h2>
                <p className="max-w-[584px] mx-auto text-lg mb-16 xl:mb-24 text-[#4B5D68]" aos-init aos-animate data-aos="fade-down" data-aos-delay="200">
                    Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
                {/* Cart 1 */}
                <div
                    className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                    aos-init aos-animate data-aos="zoom-in" data-aos-offset="100" data-aos-delay="400"
                >
                    <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                        <img src="/images/bg-feature1.png" alt="" />
                    </div>
                    <div
                        className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                        aos-init aos-animate data-aos="zoom-in-right" data-aos-delay="400"
                    >
                        <img src="/images/features1.png" alt="" />
                    </div>
                    <div className="max-w-[220px]">
                        <h3 className="mb-4 text-2xl">Search Data</h3>
                        <p className="font-light italic mb-4 text-[#4B5D68] opacity-70">
                            Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.
                        </p>
                        <motion.div whileHover={{ scaleX: 1.1 }} className="flex items-center gap-x-2 group">
                            <a href="#" className="text-black hover:text-primary font-bold">Learn more</a>
                            <ArrowRight className="text-primary" />
                        </motion.div>
                    </div>
                </div>
                {/* Cart 2 */}
                <div
                    className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                    aos-init aos-animate data-aos="zoom-in" data-aos-offset="100" data-aos-delay="700"
                >
                    <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                        <img src="/images/bg-feature2.png" alt="" />
                    </div>
                    <div
                        className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                        aos-init aos-animate data-aos="zoom-in-right" data-aos-delay="700"
                    >
                        <img src="/images/features2.png" alt="" />
                    </div>
                    <div className="max-w-[220px]">
                        <h3 className="mb-4 text-2xl">24 Hours Access</h3>
                        <p className="font-light italic mb-4 text-[#4B5D68] opacity-70">
                            Access is given 24 hours a full morning to night and
                            meet again in the morning, giving you comfort when
                            you need data when urgent.
                        </p>
                        <motion.div whileHover={{ scaleX: 1.1 }} className="flex items-center gap-x-2 group">
                            <a href="#" className="text-black hover:text-primary font-bold">Learn more</a>
                            <ArrowRight className="text-primary" />
                        </motion.div>
                    </div>
                </div>
                {/* Cart 3 */}
                <div className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                    aos-init aos-animate data-aos="zoom-in" data-aos-offset="100" data-aos-delay="1000"
                >
                    <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                        <img src="/images/bg-feature3.png" alt="" />
                    </div>
                    <div
                        className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                        aos-init aos-animate data-aos="zoom-in-right" data-aos-delay="1000"
                    >
                        <img src="/images/features3.png" alt="" />
                    </div>
                    <div className="max-w-[220px]">
                        <h3 className="mb-4 text-2xl">Print Out</h3>
                        <p className="font-light italic mb-4 text-[#4B5D68] opacity-70">
                            Print out service gives you convenience if someday
                            you need print data, just edit it all and just print it.
                        </p>
                        <motion.div whileHover={{ scaleX: 1.1 }} className="flex items-center gap-x-2 group">
                            <a href="#" className="text-black hover:text-primary font-bold">Learn more</a>
                            <ArrowRight className="text-primary" />
                        </motion.div>
                    </div>
                </div>
                {/* Cart 4 */}
                <div className="w-full max-w-[530px] h-[358px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                    aos-init aos-animate data-aos="zoom-in" data-aos-offset="100" data-aos-delay="1300"
                >
                    <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                        <img src="/images/bg-feature4.png" alt="" />
                    </div>
                    <div
                        className="max-w-[120px] xl:mr-7 xl:max-w-[232px]"
                        aos-init aos-animate data-aos="zoom-in-right" data-aos-delay="1300"
                    >
                        <img src="/images/features4.png" alt="" />
                    </div>
                    <div className="max-w-[220px]">
                        <h3 className="mb-4 text-2xl">Security Code</h3>
                        <p className="font-light italic mb-4 text-[#4B5D68] opacity-70">
                            Data Security is one of our best facilities. Allows for your files
                            to be safer. The file can be secured with a code or password that
                            you created, so only you can open the file.
                        </p>
                        <motion.div whileHover={{ scaleX: 1.1 }} className="flex items-center gap-x-2 group">
                            <a href="#" className="text-black hover:text-primary font-bold">Learn more</a>
                            <ArrowRight className="text-primary" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features