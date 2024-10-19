import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
import { AiOutlinePhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import {  FaFacebookF, FaGlobe, FaInstagram, FaPinterest, FaTiktok, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';

const Footer = () => {
  const changeLang = () => {
    const lang = i18next.language
    i18next.changeLanguage(lang ==='en'? 'fr': 'en')
    window.location.reload()
  }
  const { t } = useTranslation();
  return(
  <div className='footerWrapper'>
      <div className="container">
        <div className="footerContent">
          <div className="about">
              <div className="descTitle">{ t("footer.about_us") }</div>
              <Link to="/"><div className="descText">{ t("footer.huu") }</div></Link>
              <Link to="/"><div className="descText">{ t("footer.custom") }</div></Link>
              <a href="tell:+121412389910"><div className="descText">{ t("footer.tell") }</div></a>
              <a href="mailto:stonershouseverified@gmail.com"><div className="descText">{ t("footer.email") }</div></a>
          </div>
          <div className="buy">
              <div className="descTitle">{ t('footer.our_services') }</div>
              <Link to="/products"><div className="descText">store</div></Link>
              <Link to="/"><div className="descText"> { t("footer.policy") } </div></Link>
              <Link to="/contact-us"><div className="descText">stories </div></Link>
              <Link to="/about"><div className="descText"> { t("footer.about_us") }</div></Link>
              <Link to="/contact-us"><div className="descText">{ t("footer.help") } </div></Link>
          </div>
          <div className="buy">
              <div className="descTitle">{ t('footer.others') }</div>
              <Link to="/contact-us"><div className="descText">FAQs </div></Link>
              <Link to="/contact-us"><div className="descText">{ t("footer.report") } </div></Link>
              <Link to="/contact-us"><div className="descText">{ t("footer.code_ethics") } </div></Link>
          </div>
          <div className="buy">
              <div className="descTitle">{ t("footer.customer_service") }</div>
              <Link to="/products"><div className="descText">{ t("footer.store") }</div></Link>
              <Link to="/"><div className="descText">{ t("footer.best_selling") }</div></Link>
              <Link to="/contact-us"><div className="descText">stories </div></Link>
              <Link to="/about"><div className="descText"> { t("footer.investors") }</div></Link>
              <Link to="/contact-us"><div className="descText">{ t("footer.help") } </div></Link>
              <Link to="/contact-us"><div className="descText">god did </div></Link>
          </div>
          <div>
            <div onClick={changeLang} className='footer_language'><FaGlobe /> <span>language</span></div>
          </div>
        </div>
        <div className='hooyia_line'>
          <h3 className='footer_name'>Tiidel</h3>
          <p className='footer_copy'>@2024 Tiidel</p>
        </div>
      </div>
  </div>
  );
};

export default Footer;
