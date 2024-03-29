import './About.scss';
import Breadcrumbs from '../../common/Breadcrumbs/Breadcrumbs';
import { breadcrumbLinks } from '../../constants';

const About = () => {
  return (
    <div className="aboutWrap">
      <Breadcrumbs links={breadcrumbLinks} />
      <h2>About</h2>
    </div>
  );
};

export default About;
