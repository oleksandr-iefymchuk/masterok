import { useParams } from 'react-router-dom';
import { mockedProductsList } from '../../constants';

const CardInfo = () => {
  const { courseId } = useParams();
  const cardInfo = mockedProductsList.find(
    (product) => product.id === courseId,
  );
  if (!cardInfo) {
    return null;
  }
  const { image, alt, title, price, availability } = cardInfo;
  return (
    <section>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{availability}</p>
    </section>
  );
};

export default CardInfo;
