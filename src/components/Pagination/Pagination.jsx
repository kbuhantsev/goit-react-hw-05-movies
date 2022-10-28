import { useEffect, useRef } from 'react';
import pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export default function Pagination(props) {
  const $el = useRef(null);
  const { totalItems, currentPage, updateCurrentPage } = props;

  useEffect(() => {
    const paginate = new pagination($el.current, {
      totalItems: totalItems,
      itemsPerPage: 20,
      visiblePages: 5,
    });
    paginate.movePageTo(currentPage);
    paginate.on('beforeMove', ({ page }) => {
      updateCurrentPage(page);
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    });
  }, [currentPage, totalItems, updateCurrentPage]);

  return (
    <div
      ref={$el}
      id="tui-pagination-container"
      className="tui-pagination"
    ></div>
  );
}
