import './index.css'

const BannerCardItems = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItems
