import './Stock.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';

const Stock = () => {
  return (
    <div className="stockWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2>Акції</h2>
    </div>
  );
};

export default Stock;
