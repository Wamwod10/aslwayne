import "./about.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className='about'>
      <div className="container">
        <div className="about__box">
          <h2 className="about__title">Asl Wayne (Astro)</h2>
          <p data-aos="fade-up" className="about__txt">
            Asl Wayne, asli Ismi Asilbek Bayjonov, 1999-yil 26-aprel kuni O'zbekistonning Xorazm viloyatining Xiva shahrida dunyoga kelgan. U yoshligida futbol bilan shug'ullangan va Paxtakor futbol akademiyasida ham ta'lim olgan. Biroq, musiqa unga tobora ko'proq yaqinlashdi va o'zining musiqa yo'lini boshlashga qaror qildi. Asl Wayne musiqani o'rganish uchun musiqa maktabiga ham qatnagan. Aslwayne shaxsiy hayoti haqida ko'p ma'lumot bermaganligi sababli, uning shaxsiy hayoti haqida umumiy ma'lumotlar cheklangan.
          </p>
          <p data-aos="fade-right" className="about__txt">
            Ijodini 2020-yilda "Shamol" nomli qo'shig'i bilan boshlagan Asl Wayne tez orada O'zbekistonning eng mashhur repperlaridan biriga aylandi. Uning "G'animat", "Bugun To'ying", "Yor yonaman", "Go'zlaring" kabi qo'shiqlari keng ommaga tanildi va musiqiy karyerasini tez sur'atlarda rivojlantirdi. U Xorazmda yashaydi va qo'shiqlarida o'zining shevasini ishlatadi. Shuning uchun uning musiqasini asosan yosh avlod yaxshi ko'radi va tinglaydi. Asl Wayne qo'shiqlarida ko'pincha hayotiy mavzularni va sevgi haqida so'z yuritadi.
          </p>
          <p data-aos="fade-left" className="about__txt">
            Hozirga qadar ko'plab mashhur repperlar bilan duetlar ijro etishga muvaffaq bo'lgan Asl Wayne, musiqadagi o'ziga xos uslubi va ijodi bilan O'zbekistonda alohida o'rin egalladi. Uning kiyinish stili ham o'ziga xos bo'lib, u ko'pincha maskada videolarda chiqishni yaxshi ko'radi. Bu uslub uning imidjiga yangi bir rang kiritgan va fanatlarining e'tiborini jalb qilgan.
          </p>

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
                <img src="3.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="4.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="5.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="6.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="7.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="8.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="9.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="10.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="11.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="12.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="13.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="14.png" alt="" style={{ width: '300px', height: '340px' }} />
              </SwiperSlide>
            </Swiper>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
