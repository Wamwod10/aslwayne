import React from 'react'
import "./concert.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Concert = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='concert'>
            <div className="container">
                <h2 className="music__title">Asl Wayne Yirik Konsertlar va Unutilmas Onlar</h2>
                <p data-aos="fade-up" className="about__txt">
                    Asl Wayne, 2023 va 2024-yillarda O'zbekistondagi eng yirik musiqiy tadbirlarda ishtirok etib, o'zining noyob va energiyaga to'la ijodi bilan muxlislarini hayratda qoldirdi. 2023-yil va 2024-yilning eng yirik musiqiy voqealaridan biri bo'lib, Asl Wayne Humo Festda qatnashdi. Humo Arena sahnasida o'tgan ushbu tadbirda, O'zbekistondagi eng mashhur reperlar ishtirok etishdi. Tadbirda 8000 nafar tomoshabin to'plandi, ulardan ko'pchiligi Asl Wayne'nin eng sodiq va ko'plab hit qo'shiqlarini yod bilgan muxlislar edi. Bu konsertda, muxlislar har bir qo'shiqni birgalikda baland ovozda aytib, sahnadagi ijodkor bilan jonli aloqada bo'lishdi. Asl Wayne ning konsertlari, musiqiy ifodalarning kuchini yanada kuchaytirgan, haqiqiy san'atkor va muxlislar o'rtasidagi mustahkam bog'lanishni yaratgan. Ushbu konsertlar 2025-yilda ham davom etishi mumkinligi haqida ma'lumotlar mavjud.
                </p>
                <p data-aos="fade-right" className="about__txt">
                    Shuningdek, 2024-yilning 1-28-sentyabr kunlari, Asl Wayne va Massa O'zbekiston bo'ylab katta turni amalga oshirishdi. Turning nomi "Asl Wayne Massa Yaratadi Yo’l" bo'lib, 9ta shaharda o'zining mashhur konsertlarini o‘tkazdilar. Nukus, Urganch, Buhoro, Navoiy, Jizzax, Guliston, Samarqand, Farg'ona va Namanganda o'tkazilgan bu konsertlar har bir shaharda katta qiziqish va shov-shuvga sabab bo'ldi. Har bir konsertda Asl Wayne va Massa o'zining eng yaxshi qo'shiqlarini tinglovchilarga taqdim etishdi va ularni o'z san'ati bilan xursand qildilar. Bu tur musiqiy jihatdan juda boy bo'lib, Asl Wayne va Massa o'zining ijodi orqali turli shaharlarning muxlislarini birlashtirishdi.
                </p>
                <p data-aos="fade-left" className="about__txt">
                    2024-yil 14-dekabrda, Asl Wayne va Massa Rossiyaning Sankt-Peterburg shahrida Marokand restoranida kichik va maxsus konsert uyushtirishdi. Bu tadbir, o'zining intizor muxlislari uchun noyob imkoniyat yaratdi, chunki ular Asl Wayne va Massa bilan yanada yaqin bo'lishdi. Konsertda, san'atkorlar o'zining yangi qo'shiqlarini ijro etib, tomoshabinlarni hayajonlantirishdi. Ushbu tadbir o'zining maxsus va unutulmas muhitini yaratib, Asl Wayne ning san'ati bilan o'z muhlislarini yanada chuqurroq bog'lab berdi.
                </p>
                <div className="concert__box">
                    <div className="about__box-img">
                        <Swiper
                            spaceBetween={10}
                            loop={true}
                            centeredSlides={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                                1400: {
                                    slidesPerView: 4,
                                },
                            }}
                            className="swiper-container"
                        >
                            <SwiperSlide>
                                <img src="72.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="73.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="74.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="75.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="76.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="77.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="78.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="79.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="80.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="81.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="82.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="83.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="84.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="85.png" alt="" style={{ width: '300px', height: '375px' }} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Concert