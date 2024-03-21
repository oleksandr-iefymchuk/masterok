import './Pagination.scss';
import PropTypes from 'prop-types';
import ButtonWrapper from '../../common/Button/Button';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const maxButtons = 3;
  const middleButtonIndex = Math.floor(maxButtons / 2);
  const startPage = Math.max(1, currentPage - middleButtonIndex);
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {totalPages > 0 && (
        <ButtonWrapper
          buttonClassName="paginationButtons"
          icon="arrowPrev"
          svgColor="#000"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
      )}
      {[...Array(endPage - startPage + 1)].map((_, index) => {
        const pageNumber = startPage + index;
        return (
          <ButtonWrapper
            key={pageNumber}
            buttonClassName={
              pageNumber === currentPage
                ? 'paginationButtons active'
                : 'paginationButtons'
            }
            buttonText={pageNumber.toString()}
            onClick={() => handlePageChange(pageNumber)}
          />
        );
      })}
      {totalPages > 0 && (
        <ButtonWrapper
          buttonClassName="paginationButtons"
          icon="arrowNext"
          svgColor="#000"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
