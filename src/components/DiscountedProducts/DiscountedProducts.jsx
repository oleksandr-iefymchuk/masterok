import { useSelector } from 'react-redux';
import './DiscountedProducts.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import SortList from '../../common/SortList/SortList';

const DiscountedProducts = () => {
  const products = useSelector((state) => state.products);

  const discountedProducts = products.filter(({ discount }) => discount > 0);

  return (
    <div className="discountedProducts">
      <Breadcrumbs />
      <h2>Товари зі знижкою</h2>
      <SortList products={discountedProducts}></SortList>
    </div>
  );
};

export default DiscountedProducts;
