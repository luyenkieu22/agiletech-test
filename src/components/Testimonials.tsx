import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

const testimonials = [
    {
        name: 'John Fang',
        website: 'janedoee.com',
        message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        avatar: '/images/avt1.png',
    },
    {
        name: 'Jane Doe',
        website: 'jimjimf.com',
        message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        avatar: '/images/avt2.png',
    },
    {
        name: 'Jane Doe',
        website: 'jimjimf.com',
        message: 'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
        avatar: '/images/avt2.png',
    },
]

const Testimonials = () => {
    return (
        <div className="bg-[#9c69e2] py-30 text-white min-h-[800px] rounded-[50px]"
            aos-init data-aos="fade-up" data-aos-offset="300" id='testimonials'>
            <h2 className="text-[40px] font-bold text-center mb-8">Testimonials</h2>
            <div className="pt-28 overflow-hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={0}
                    slidesPerView={1.5}
                    centeredSlides
                    pagination={{ clickable: true }}
                    className="!w-full !h-[330px]"
                >
                    {testimonials.map((t, i) => (
                        <SwiperSlide key={i} className="w-full">
                            <div className="w-[645px] bg-white text-black rounded-xl p-16 shadow-lg flex flex-col items-center">
                                <div className="flex gap-4 mb-4">
                                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-semibold">{t.name}</h4>
                                        <a href={`https://${t.website}`} className="text-sm text-purple-500">
                                            {t.website}
                                        </a>
                                        <p className="text-lg text-[#4B5D68]">{t.message}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    )
}


export default Testimonials