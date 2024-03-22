import './Novelty.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';

const Novelty = () => {
  return (
    <div className="noveltyWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2>Новинки</h2>
    </div>
  );
};

export default Novelty;
