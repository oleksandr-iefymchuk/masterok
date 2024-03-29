import { useSelector } from 'react-redux';
import './Novelty.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';
import Pagination from '../Pagination/Pagination';
import { isNewProduct } from '../../helpers';

const Novelty = () => {
  const products = useSelector((state) => state.products);
  const newProducts = products.filter((product) =>
    isNewProduct(product.dateAdded),
  );

  return (
    <div className="noveltyWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2>Новинки</h2>
      <Pagination products={newProducts} />
    </div>
  );
};

export default Novelty;
