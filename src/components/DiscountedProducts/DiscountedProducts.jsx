import { useSelector } from 'react-redux';
import './DiscountedProducts.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import Pagination from '../Pagination/Pagination';

const DiscountedProducts = () => {
  const products = useSelector((state) => state.products);

  const discountedProducts = products.filter(({ discount }) => discount > 0);

  return (
    <div className="discountedProducts">
      <Breadcrumbs />
      <h2>Акції</h2>
      <Pagination products={discountedProducts} />
    </div>
  );
};

export default DiscountedProducts;
