import React from 'react';
import "./music.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from 'react-router-dom';

const Music = () => {

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const data = [
        { id: 1, image: '68.png', link: 'https://www.youtube.com/watch?v=Jsf599HLruc', text: "So'y Mani (ft Ruxsora)" },
        { id: 1, image: '15.png', link: 'https://www.youtube.com/watch?v=Jsf599HLruc', text: 'Yetar (ft Qahramon.R)' },
        { id: 2, image: '16.png', link: 'https://www.youtube.com/watch?v=6j5GxGgv2oc', text: "Yaratadi Yo'l (ft Massa)" },
        { id: 3, image: '17.png', link: 'https://www.youtube.com/watch?v=ILdsOui85vc', text: 'OldAsl 2' },
        { id: 4, image: '18.png', link: 'https://www.youtube.com/watch?v=hWU_YjQZqEw', text: 'Melis' },
        { id: 5, image: '19.png', link: 'https://www.youtube.com/watch?v=U-2Hwvaqd3Q', text: 'Ikkimiz' },
        { id: 6, image: '20.png', link: 'https://www.youtube.com/watch?v=X5XoocH7m1Y', text: 'OVO' },
        { id: 7, image: '21.png', link: 'https://www.youtube.com/watch?v=v7SZvX8bN1U', text: 'Baxtlidin' },
        { id: 8, image: '22.png', link: 'https://www.youtube.com/watch?v=mSr-oJ_OI4c', text: "Qiziqi Yo'q" },
        { id: 9, image: '23.png', link: 'https://www.youtube.com/watch?v=cLJvbL5AVlY', text: 'Ongladim' },
        { id: 10, image: '24.png', link: 'https://www.youtube.com/watch?v=oHQxHUxINAo', text: "Yuraking Yo'q" },
        { id: 11, image: '25.png', link: 'https://youtu.be/q3WTIZwn9wQ?list=OLAK5uy_laEhehhG8IDuXRDEZAIHdcFWSwOj6PmIw', text: 'OldAsl' },
        { id: 12, image: '67.png', link: 'https://youtu.be/CSMzP4_tQc4', text: "Veteran" },
        { id: 13, image: '26.png', link: 'https://www.youtube.com/watch?v=lYs8H6PUXSk', text: "Go'zalim Mani" },
        { id: 14, image: '27.png', link: 'https://www.youtube.com/watch?v=xsc-gp0hDoI', text: 'Dard' },
        { id: 15, image: '28.png', link: 'https://www.youtube.com/watch?v=w8LiUeiByDc', text: 'Darvesh' },
        { id: 17, image: '29.png', link: 'https://www.youtube.com/watch?v=PbfI1XQxwsM', text: 'Tushunmidi' },
        { id: 18, image: '30.png', link: 'https://www.youtube.com/watch?v=RHvbxzoXNdM', text: 'Gang90 (ft AGA)' },
        { id: 16, image: '65.png', link: 'https://www.youtube.com/watch?v=7hYPG7Haeuo', text: 'Guldik' },
        { id: 19, image: '31.png', link: 'https://www.youtube.com/watch?v=aoUiTrKAU-0', text: 'Memon' },
        { id: 20, image: '32.png', link: 'https://www.youtube.com/watch?v=S_XJV2tPiWk', text: 'Istading Mani' },
        { id: 21, image: '33.png', link: 'https://youtu.be/73V48y0CREY?list=OLAK5uy_lr0JilIiv0H7zGFH982102uKgCMVuQlbI', text: "Mani O'rnima . . ." },
        { id: 22, image: '34.png', link: 'https://www.youtube.com/watch?v=dBRv7OxXuzA', text: "G'animat" },
        { id: 23, image: '35.png', link: 'https://www.youtube.com/watch?v=qTUkmZlTVRY', text: "G'ozlarinnan Oqmas Yoshlo" },
        { id: 24, image: '36.png', link: 'https://www.youtube.com/watch?v=dmTN1qJNWnE', text: "Manga Tinchlik Garak" },
        { id: 25, image: '37.png', link: 'https://www.youtube.com/watch?v=GiQOdF2c1fY', text: "O'yin" },
        { id: 26, image: '38.png', link: 'https://www.youtube.com/watch?v=XDR8_OEY7xE', text: "Bugun To'ying" },
        { id: 27, image: '39.png', link: 'https://www.youtube.com/watch?v=r5JLoltao_A', text: 'Yolvora' },
        { id: 28, image: '40.png', link: 'https://www.youtube.com/watch?v=JVpf96T2NrI', text: "So'rama" },
        { id: 29, image: '41.png', link: 'https://www.youtube.com/watch?v=4SbR5yHXz94', text: 'Get' },
        { id: 30, image: '42.png', link: 'https://www.youtube.com/watch?v=eKB406bD5PI', text: 'Yengilma' },
        { id: 31, image: '43.png', link: 'https://www.youtube.com/watch?v=hMuqIk17wgs', text: 'Na Disan (ft Murodshax)' },
        { id: 32, image: '44.png', link: 'https://www.youtube.com/watch?v=uh89qvG2LFc', text: "O'ylama Kafaning... (ft Bobur)" },
        { id: 33, image: '45.png', link: 'https://www.youtube.com/watch?v=KwfYmArT_NE', text: 'Darbadar (ft Murodshax)' },
        { id: 34, image: '46.png', link: 'https://www.youtube.com/watch?v=3Q5GwkQwo1o', text: 'Qujaqlasam' },
        { id: 35, image: '47.png', link: 'https://www.youtube.com/watch?v=Kdg0uvbOSjI', text: 'Oq Qora (ft Murodshax)' },
        { id: 36, image: '48.png', link: 'https://www.youtube.com/watch?v=4QXJab_FmXw', text: 'Aslshtern' },
        { id: 37, image: '49.png', link: 'https://www.youtube.com/watch?v=buX930G_Qe0', text: 'Sansiz' },
        { id: 38, image: '50.png', link: 'https://www.youtube.com/watch?v=1NvFIs0FhBE', text: "Qo'l Kiri (ft Morf, Konsta)" },
        { id: 39, image: '51.png', link: 'https://www.youtube.com/watch?v=I17glq5guLw', text: 'Atirgul (ft Uzbooom)' },
        { id: 40, image: '52.png', link: 'https://www.youtube.com/watch?v=hW6xelhtuS8', text: 'Guldasta' },
        { id: 41, image: '53.png', link: 'https://www.youtube.com/watch?v=-18SHRKXAKI', text: "Go'zlaring" },
        { id: 42, image: '54.png', link: 'https://www.youtube.com/watch?v=Fj5ALV21SCQ', text: 'San Uchun' },
        { id: 43, image: '55.png', link: 'https://www.youtube.com/watch?v=TYoSLtfIuJQ', text: "Yurak Og'risa" },
        { id: 44, image: '56.png', link: 'https://www.youtube.com/watch?v=BzVlmZ34avM', text: 'Qoch' },
        { id: 45, image: '57.png', link: 'https://www.youtube.com/watch?v=FEH6CF12KNI', text: 'Kaif' },
        { id: 46, image: '58.png', link: 'https://www.youtube.com/watch?v=zVXHbCNCYZo', text: 'Chakdim' },
        { id: 47, image: '59.png', link: 'https://www.youtube.com/watch?v=ILbvIh-I0A0', text: 'Farzin' },
        { id: 48, image: '60.png', link: 'https://www.youtube.com/watch?v=MKHcGbGcjFc', text: 'Arzon' },
        { id: 49, image: '62.png', link: 'https://www.youtube.com/watch?v=lwd78VfDHBg', text: 'Yor Yonaman' },
        { id: 50, image: '66.png', link: 'https://www.youtube.com/watch?v=dQAyF-BZiaI', text: 'Yeglama Gul' },
        { id: 51, image: '64.png', link: 'https://www.youtube.com/watch?v=uipeW74mHQk', text: 'Shamol' },
    ];


    return (
        <div id='Music' className='music'>
            <div className="container">
                <h2 className="music__title">Asl Waynening Barcha Qo'shiqlari</h2>
                <div className="music__box">
                    {data.map((item) => (
                        <Link target="_blank" to={item.link} data-aos="zoom-in" key={item.id} className="music__div" style={{ backgroundImage: `url(${item.image})` }}>
                            <Link to={item.link} className="music__link" href="" target="_blank" rel="noopener noreferrer"> {item.text} </Link>
                        </Link>
                    ))}
                </div>
                <p className="music__text">Shunga o'xshash eski va boshqa qo'shiqlarini eshitishni istasangiz <span>Aslwayne rasmiy telegram kanalidan</span> barcha treklarni topishingiz mumkin</p>
            </div>
        </div>
    );
}

export default Music;