import { Fragment } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Breadcrumbs.scss';

import Button from '../Button/Button';
import { breadcrumbLinks } from '../../constants';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnameParts = location.pathname.split('/').filter(Boolean);
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const pathWithoutProductId = pathnameParts.filter(
    (part) => !part.match(/^\d+$/),
  );
  const generateBreadcrumbs = (pathParts) => {
    let path = '';
    return pathParts.map((part, index) => {
      path += '/' + part;
      const displayName = breadcrumbLinks[path] || part;
      return (
        <Fragment key={path}>
          {index === 0 ? (
            <Fragment>
              <Button
                icon="home"
                buttonClassName="linkHome"
                onClick={handleGoHome}
              />
              {' / '}
            </Fragment>
          ) : (
            ''
          )}
          <Link to={path}>{displayName}</Link>
          {index < pathParts.length - 1 && <span> / </span>}
        </Fragment>
      );
    });
  };

  return (
    <div className="breadcrumbs">
      {generateBreadcrumbs(pathWithoutProductId)}
    </div>
  );
};

export default Breadcrumbs;
