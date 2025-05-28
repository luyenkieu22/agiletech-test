import { Github, Instagram, MessageCircleMore, Youtube } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-26" data-aos="fade-up" aos-init aos-animate id="help">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
                    <div className="w-[45%] mx-auto flex flex-col items-center xl:items-start">
                        <a href="#">
                            <img className="mb-[65px]" src="/images/logo-footer.png " alt="" />
                        </a>
                        <div className="max-w-[260px] mb-5 text-gray-900 font-bold">
                            Warehouse Society, 234 Bahagia Ave Street PRBW 29281
                        </div>
                        <div className="font-light italic opacity-50">info@warehouse.project</div>
                        <div className="font-light italic opacity-50">1-232-3434 (Main)</div>
                    </div>
                    <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
                        <div>
                            <div className="font-extrabold text-gray-900 mb-8">About</div>
                            <ul className="flex flex-col gap-y-4">
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        DW News
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-extrabold text-gray-900 mb-8">Help</div>
                            <ul className="flex flex-col gap-y-4">
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Guide
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Reports
                                    </a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-primary" href="#">
                                        Q &amp; A
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="font-extrabold text-gray-900 mb-8">
                                Social Media
                            </div>
                            <ul className="flex gap-y-4 gap-x-4 justify-center">
                                <li className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-secondary transition-all">
                                    <a className="text-white text-xl hover:text-white" href="#">
                                        <Youtube />
                                    </a>
                                </li>
                                <li className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-secondary transition-all">
                                    <a className="text-white text-xl hover:text-white" href="#">

                                        <Instagram />
                                    </a>
                                </li>
                                <li className="w-12 h-12 bg-primary/10 flex justify-center items-center rounded-full cursor-pointer hover:bg-secondary transition-all">
                                    <a className="text-white text-xl hover:text-white" href="#">

                                        <Github />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="mt-24 pb-12" aos-init aos-animate data-aos="fade-up" data-aos-offset="100">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center text-center md:text-left  lg:flex-row justify-between gap-y-8">
                        <div className="text-sm font-light text-gray-900 italic max-w-[360px]">
                            © Datawarehouse™, 2020. All rights reserved. Company Registration
                            Number: 21479524.
                        </div>
                        <div className="-order-1 md:order-1">
                            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-full bg-primary/20 cursor-pointer group">
                                <div className="text-3xl text-accent-primary group-hover:scale-110 transition-all">
                                    <MessageCircleMore className="text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
