import React from 'react';
import classNames from 'classnames';

const DEFAULT_PER_PAGE_OPTIONS = [10, 25, 50, 100];

interface PaginationProps {
  page: number;
  perPage: number;
  hasMore: boolean;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
  perPageOptions?: number[];
  className?: string;
  perPageLabel?: string;
}

export function Pagination({
  page,
  perPage,
  hasMore,
  onPageChange,
  onPerPageChange,
  perPageOptions = DEFAULT_PER_PAGE_OPTIONS,
  className,
  perPageLabel = 'Per Page',
}: PaginationProps) {
  function onPreviousClick() {
    if (page > 1) {
      onPageChange(page - 1);
    }
  }

  function onNextClick() {
    if (hasMore) {
      onPageChange(page + 1);
    }
  }

  function onPerPageSelectChange(event) {
    onPerPageChange(Number(event.target.value));
  }

  return (
    <nav className={classNames('pagination', className)} aria-label="Pagination">
      <div className="pagination__per-page">
        <label htmlFor="pagination-per-page" className="pagination__per-page-label">
          {perPageLabel}
        </label>
        <select
          id="pagination-per-page"
          className="pagination__per-page-select"
          value={perPage}
          onChange={onPerPageSelectChange}
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="pagination__nav">
        <span className="pagination__page-label">Page {page}</span>
        <div className="pagination__buttons">
          <button
            type="button"
            className="pagination__btn"
            onClick={onPreviousClick}
            disabled={page <= 1}
            aria-label="Previous page"
          >
            <span className="pagination__btn-icon" aria-hidden="true">‹</span>
            Previous
          </button>
          <button
            type="button"
            className="pagination__btn"
            onClick={onNextClick}
            disabled={!hasMore}
            aria-label="Next page"
          >
            Next
            <span className="pagination__btn-icon" aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
