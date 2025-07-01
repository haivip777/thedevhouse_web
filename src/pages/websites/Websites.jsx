import './websites.css'
import { Showproject } from '../../container'
import { Search } from '../../components'

const Websites = () => {
  return (
    <div className='dh__websites section__padding'>
      <div className="dh__container">
        <Search/>
        <Showproject/>
      </div>
    </div>
  )
}

export default Websites