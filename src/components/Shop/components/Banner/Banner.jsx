import './Banner.scss';
import banner from '../../../../assets/banner/banner.jpg';
import banner2 from '../../../../assets/banner/banner2.jpg';
import banner3 from '../../../../assets/banner/banner3.webp';
import banner4 from '../../../../assets/banner/banner4.jpg';
import Button from '../../../../common/Button/Button';

const Banner = () => {
  return (
    <div className="bannersWrapper">
      <div className="promoBanners">
        <div className="bannerBlock tools">
          <h2 className="bannerTitle">ТОП-товари</h2>
          <img className="banner" src={banner} alt="banner" />
          <Button buttonBlockClassName="bannerBtnWrap" icon="arrowTop" />
        </div>
        <div className="bannerBlock stock">
          <h2 className="bannerTitle">Акції</h2>
          <img className="banner" src={banner2} alt="banner" />
          <Button buttonBlockClassName="bannerBtnWrap" icon="arrowTop" />
        </div>
        <div className="bannerBlock novelty">
          <h2 className="bannerTitle">Новинки</h2>
          <img className="banner" src={banner3} alt="banner" />
          <Button buttonBlockClassName="bannerBtnWrap" icon="arrowTop" />
        </div>
        <div className="bannerBlock popular">
          <h2 className="bannerTitle">Популярне</h2>
          <img className="banner" src={banner4} alt="banner" />
          <Button buttonBlockClassName="bannerBtnWrap" icon="arrowTop" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
