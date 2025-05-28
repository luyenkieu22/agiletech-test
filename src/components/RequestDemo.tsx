import { ArrowRight } from "lucide-react";

const RequestDemo = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-between items-center" aos-init aos-animate data-aos="fade-up" data-aos-offset="300">
            <div className="py-12 xl:py-24 text-center xl:text-left">
                <h2
                    className="text-4xl font-bold mb-5"
                    aos-init aos-animate
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Try for free!
                </h2>
                <p className="text-gray-600" aos-init aos-animate data-aos="fade-up">
                    Get limited 1 week free try our features!
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
                <button
                    className="bg-secondary rounded-full text-white px-6 py-4 cursor-pointer hover:bg-[#df74b4] transition duration-300 shadow-xl"
                    aos-init aos-animate
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Learn more
                </button>
                <button
                    className="bg-white rounded-full px-6 py-4 cursor-pointer text-gray-900 hover:bg-primary hover:text-white flex items-center gap-x-[20px] group shadow-xl"
                    aos-init aos-animate
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    Request Demo
                    <ArrowRight className="text-2xl text-primary group-hover:text-white transition" />
                </button>
            </div>
        </div>
    );
};

export default RequestDemo;
