import { Link } from 'react-router-dom';
import './Banner.scss';
import { banners } from '../../../../constants';

import Button from '../../../../common/Button/Button';

const Banner = () => {
  return (
    <div className="bannersWrapper">
      <div className="promoBanners">
        {banners.map((banner, index) => (
          <div className={`bannerBlock ${banner.class}`} key={index}>
            <Link to={banner.route}>
              <h2 className="bannerTitle">{banner.title}</h2>
              <img className="bannerImg" src={banner.image} alt="banner" />

              <Button buttonBlockClassName="bannerBtnWrap" icon="arrowTop" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
