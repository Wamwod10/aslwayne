import React from 'react';
import { FaYoutube, FaInstagram, FaTelegram, FaSpotify, FaMusic } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './social.scss';

const Social = () => {
  const platforms = [
    {
      name: 'YouTube',
      count: '500 000+ Obunachi',
      color: '#FF0000',
      gradient: 'linear-gradient(135deg, #FF0000, #FF5757)',
      logo: <FaYoutube />,
      link: "https://www.youtube.com/channel/UCiUk0CvHd5MceutLuoAUZEw"
    },
    {
      name: 'Instagram',
      count: '520 000+ Obunachi',
      color: '#833AB4',
      gradient: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F56040, #FFC837)',
      logo: <FaInstagram />,
      link: "https://www.instagram.com/aslwaynee?igsh=ZnpzYmM1NXhwamU="
    },
    {
      name: 'Telegram',
      count: '83 500+ Obunachi',
      color: '#0088CC',
      gradient: 'linear-gradient(135deg, #0088CC, #1FA9FF)',
      logo: <FaTelegram />,
      link: "https://t.me/aslwayne"
    },
    {
      name: 'Spotify',
      count: '21 000+ Oylik Tinglovchilar',
      color: '#1DB954',
      gradient: 'linear-gradient(135deg, #1DB954, #45E78D)',
      logo: <FaSpotify />,
      link: "https://open.spotify.com/artist/2pQE3OQpWIF1PXRH04LNeL"
    }
  ];

  return (
    <div id='Social' className='social'>
      <div className="container">
        <h2 className="music__title">Asl Waynening Obunachilari</h2>
        <div className="social__grid">
          {platforms.map((platform, index) => (
            <Link to={platform.link} target="_blank" key={index} className="social__card" style={{ background: platform.gradient }}>
              <div className="social__logo" style={{ color: platform.color }}>
                <span>{platform.logo}</span>
              </div>
              <h3 className="social__name">{platform.name}</h3>
              <p className="social__count">{platform.count}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="premium__section">
        <div className="premium__card">
          <div className="premium__logo">
            <FaTelegram />
          </div>
          <h3 className="premium__name">Telegram Premium Kanal</h3>
          <p className="premium__count">600+ Premium Obunachi</p>
          <div className="premium__info">
            <Link to="https://t.me/ASLPREMIUMADMIN" className="premium__admin">Admin: @ASLPREMIUMADMIN</Link>
            <p className="premium__description">Premium Kanal: Sizning musiqiy olamingizni boshqalar bilmasdan oldin kashf eting!</p>
          </div>
        </div>
      </div>
      <div className="music__news">
      <div className="music__news-card">
        <div className="music__news-logo">
          <FaMusic />
        </div>
        <h3 className="music__news-title">Yangilik - Asl Wayne Endi Yandex Musicda</h3>
        <p className="music__news-count">43 000+ Oylik Tinglovchilar</p>
        <div className="music__news-info">
          <p className="music__news-description">Asl Wayne yangi musiqa va yangiliklar uchun Yandex Musicda!</p>
          <Link to="https://music.yandex.ru/artist/11215227?play=1" className="music__news-link">Hozir tinglang</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Social;
