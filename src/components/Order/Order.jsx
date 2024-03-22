import './Order.scss';

import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';

const Order = () => {
  return (
    <div className="orderWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h3>Оформлення замовлення</h3>
    </div>
  );
};

export default Order;
