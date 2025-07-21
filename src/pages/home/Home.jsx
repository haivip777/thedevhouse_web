import './home.css'
import hero_bg from '../../assets/home/hero_bg.png'
import new_img from '../../assets/new-icon.png'
import { Search } from '../../components'
import { Showproject } from '../../container'
import { useState } from 'react'


const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTag, setSearchTag] = useState('');
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSearchTag('');
  };

  const handleTag = (tag) => {
    setSearchTag(tag);
    setSearchTerm('');
  };

  const handleContactToggle = () => {
    setShowContactOptions((prev) => !prev);
  };

  // Đóng menu khi click ra ngoài
  const handleWrapperBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setShowContactOptions(false);
    }
  };

  return (
    <div className='dh__home section__padding'>
      <div className="dh__container">
        <section className="dh__home--hero">
          <div className="dh__home--hero_content">
            <h1 className="dh-hero-title gradient__text">Chào mừng bạn đến với The Dev House</h1>
            <p className="dh-hero-subtitle">Cung cấp giải pháp công nghệ hàng đầu, triển khai phát triển trang web, Unity game, deploy hạ tầng cloud chất lượng cao </p>
            <Search onSearch={handleSearch} onTag={handleTag} />
          </div>
          <div className="dh__home--hero_img">
            <img src={hero_bg} alt="hero_bg" />
          </div>
        </section>
        <div className="dh__home--projects">
          <h2 className="dh__projects-title">Hot nhất <span className="dh__new" ><img src={new_img} alt="new" /></span></h2>
          <p className="dh__text dh__projects-subtitle">Full Source code</p>
          <Showproject searchTerm={searchTerm} searchTag={searchTag}/>
        </div>
      </div>
      {/* Contact Floating Button + Options Wrapper */}
      <div
        className="dh__contact-fab-wrapper"
        tabIndex={0}
        onBlur={handleWrapperBlur}
        style={{ position: 'fixed', right: 32, bottom: 32, zIndex: 10010 }}
      >
        <div
          className="dh__contact-fab"
          onClick={() => setShowContactOptions((prev) => !prev)}
          tabIndex={0}
          aria-label="Liên hệ"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="#fff">
            <circle cx="16" cy="16" r="16" fill="#2c5aa0"/>
            <path d="M22 10H10c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 2v.01L16 16.5 10 12.01V12h12zm-12 8v-6.99l6 4.49 6-4.49V20H10z" fill="#fff"/>
          </svg>
        </div>
        {showContactOptions && (
          <div className="dh__contact-fab-options">
            <a
              className="dh__contact-fab-link"
              href="https://zalo.me/0869528304"
              target="_blank"
              rel="noopener noreferrer"
              title="Zalo"
            >
              {/* Zalo SVG */}
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#018FE6"/>
                <text x="16" y="21" textAnchor="middle" fontWeight="bold" fontSize="14" fill="#fff" fontFamily="Arial">Zalo</text>
              </svg> 
            </a>
            <a
              className="dh__contact-fab-link"
                href="https://m.me/61576886176025"
                target="_blank"
                rel="noopener noreferrer"
                title="Messenger"
>
              {/* Messenger SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#0084FF"
                  className="bi bi-messenger"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                  </svg>
              </a>
            <a
              className="dh__contact-fab-link"
              href="mailto:thedevhouse.shop@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              {/* Email SVG */}
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#EA4335"/>
                <path d="M8 12v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2H10a2 2 0 00-2 2zm2 0l6 4.5L22 12" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/>
              </svg> 
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home