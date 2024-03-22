import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Breadcrumbs.scss';

import Button from '../Button/Button';

const Breadcrumbs = ({ links }) => {
  const location = useLocation();

  const filteredLinks = links.filter((link) =>
    location.pathname.includes(link.link),
  );

  const getLinkClass = (linkPath) => {
    return location.pathname === linkPath ? 'activeLink' : 'inactiveLink';
  };

  return (
    <div className="breadcrumbs">
      {filteredLinks.map((link, index) => (
        <Fragment key={index}>
          <Link className={getLinkClass(link.link)} to={link.link}>
            {link.name === 'Головна' ? (
              <Button icon="home" buttonClassName="linkHome" />
            ) : (
              link.name
            )}
          </Link>
          {index < filteredLinks.length - 1 && (
            <span className="breadcrumbSeparator"> / </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Breadcrumbs;
