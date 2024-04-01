import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import './CardInfo.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ButtonWrapper from '../../common/Button/Button';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const CardInfo = () => {
  const products = useSelector((state) => state.products);
  const { productId } = useParams();
  const cardInfo = products.find((product) => product.id === productId);
  if (!cardInfo) {
    return null;
  }
  const { images, alt, title, price, availability } = cardInfo;

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    dotsClass: 'slick-dots slick-thumb',
    nextArrow: <ButtonWrapper buttonClassName="arrowNext" icon="arrowNext" />,
    prevArrow: <ButtonWrapper buttonClassName="arrowPrev" icon="arrowPrev" />,

    customPaging: function (i) {
      return (
        <a>
          <img src={images[i]} alt={alt} />
        </a>
      );
    },
  };

  return (
    <div className="cardInfoBlock">
      <Breadcrumbs />
      <div className="sliderContainer">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="card" key={index}>
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="cardInfo">
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{availability}</p>
      </div>
    </div>
  );
};

export default CardInfo;
