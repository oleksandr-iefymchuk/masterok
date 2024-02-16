import { useParams } from 'react-router-dom';
import { mockedProductsList } from '../../../../constants';

const CardInfo = () => {
  const { courseId } = useParams();

  const { image, alt, title, price, availability } = mockedProductsList.find(
    ({ id }) => id === courseId,
  );
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
