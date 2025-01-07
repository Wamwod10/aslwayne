import React from 'react'
import "./info.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect} from "react";
import { Link } from 'react-router-dom';

const Info = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className='info'>
            <div className="container">
                <div className="info__boxs">
                    <h2 className="music__title">Asl Wayne Kimlarni Eshitadi</h2>
                    <p data-aos="fade-up" className="about__txt">Asl Wayne musiqiy yo'nalishlarida keng qamrovli
                        va xilma-xil ta'sirlarga ega bo'lib, ayniqsa Ispaniya musiqalarini juda yaxshi
                        ko'radi. Afro yo'nalishidagi musiqalarni tinglashni ham yoqtiradi va o'zining
                        ayrim qo'shiqlarida Ispaniya minuslaridan foydalanish orqali musiqiy ifodasi
                        va uslubini yanada boyitadi. Asl Wayne faqat Ispaniyaning eng mashhur
                        repperlarini tinglab qolmay, balki Italiya repperlari bilan ham aloqada
                        bo'lib, ularning ijodini ham hurmat qiladi. Ayniqsa,Ispaniyalik <span>Beny Jr,
                            M.D.L.R (yani Morad),</span> va Italiyalik <span>BabyGang</span> kabi repperlar uning ijodiga
                        katta ta'sir ko'rsatgan. Ushbu san'atkorlar o'z shaharlarida va qo'shni
                        davlatlarda keng mashhurlikka erishgan, ularning musiqalari nafaqat o'z
                        mamlakatlarida, balki xalqaro miqyosda ham e'tirof etilgan. Bu repperlar
                        o'zining noyob uslubi va musiqiy yondashuvi bilan nafaqat o'z
                        auditoriyasini, balki global tinglovchilarni ham o'ziga tortgan.</p>
                    <p className="about__txt">
                        Tahminlarga ko'ra, Asl Wayne ning niqob bilan ommaga chiqish uslubida Beny Jr
                        ning stilidan ilhomlangan. <span>Beny Jr</span> ning musiqiy imiji va sahnadagi niqobli
                        ko'rinishi, Asl Wayne uchun bir turdagi ilhom manbai bo'lib, uning o'ziga
                        xos sahnadagi tarzini yaratishda muhim rol o'ynagan. Bu uslub nafaqat
                        sahnada, balki musiqiy ifodada ham yangicha izlanish va o'zligini namoyon
                        etishning samarali usuli hisoblanadi.</p>
                </div>
                <div className="info__boxes">
                    <Link to="https://www.youtube.com/@benyjrrr" className="info__box-first">
                        <h2 className="info__box-title">Beny Jr</h2>
                    </Link>
                    <Link to="https://www.youtube.com/@MDLR1" className="info__box-second">
                        <h2 className="info__box-title">Morad</h2>
                    </Link>
                    <Link to="https://www.youtube.com/@babygang1312" className="info__box-third">
                        <h2 className="info__box-title">BanyGang</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Info