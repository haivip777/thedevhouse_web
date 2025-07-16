import './home.css'
import hero_bg from '../../assets/home/hero_bg.png'
import new_img from '../../assets/new-icon.png'
import { Search } from '../../components'
import { Showproject } from '../../container'


const Home = () => {
   
  return (
    <div className='dh__home section__padding'>
      <div className="dh__container">
        <section className="dh__home--hero">
          <div className="dh__home--hero_content">
            <h1 className="dh-hero-title gradient__text">Chào mừng bạn đến với The Dev House</h1>
            <p className="dh-hero-subtitle">Cung cấp giải pháp công nghệ hàng đầu, triển khai phát triển trang web, Unity game, deploy hạ tầng cloud chất lượng cao </p>
            <Search />
          </div>
          <div className="dh__home--hero_img">
            <img src={hero_bg} alt="hero_bg" />
          </div>
        </section>
        <div className="dh__home--projects">
          <h2 className="dh__projects-title">Hot nhất <span><img src={new_img} width={150} height={100} alt="new" /></span></h2>
          <p className="dh__text dh__projects-subtitle">Full Source code</p>
          <Showproject/>
        </div>
      </div>
    </div>
  )
}

export default Home