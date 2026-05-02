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
    <nav
      className={classNames('pagination', 'pagination--controls', 'margin-top-3', className)}
      aria-label="Pagination"
    >
      <div className="pagination__left form-group form-group--inline">
        <label htmlFor="pagination-per-page">{perPageLabel}</label>
        <select id="pagination-per-page" value={perPage} onChange={onPerPageSelectChange}>
          {perPageOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="pagination__right display-flex align-items-center">
        <span className="pagination__page-label margin-right-2 font-size-2">Page: {page}</span>
        <button
          type="button"
          className="button"
          onClick={onPreviousClick}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="button margin-left-2"
          onClick={onNextClick}
          disabled={!hasMore}
        >
          Next
        </button>
      </div>
    </nav>
  );
}
