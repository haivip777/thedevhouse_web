import './card.css'

const Card = ({ title, image, description, tech }) => {
  return (
    <div className="dh__card">
      <img src={image} alt={title} />
      <div className="dh__card-content">
        <h3 className="dh__card-title">{title}</h3>
        <p className='dh__card-tech'>{tech}</p>
        <p className="dh__card-description dh__text">{description}</p>
        <a href="#" className="dh__card-link">Chi tiết</a>
      </div>
    </div>
  )
}

export default Card