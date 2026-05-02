import { useState } from 'react';
import { Pagination } from '../../../src/pagination';
import '@nenkan/css/pagination.scss';

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    page: 1,
    perPage: 10,
    hasMore: true,
    perPageOptions: [10, 25, 50, 100],
    perPageLabel: 'Per Page',
  },
};

function StatefulPagination(args) {
  const [page, setPage] = useState(args.page ?? 1);
  const [perPage, setPerPage] = useState(args.perPage ?? 10);

  return (
    <Pagination
      {...args}
      page={page}
      perPage={perPage}
      onPageChange={setPage}
      onPerPageChange={(n) => { setPerPage(n); setPage(1); }}
    />
  );
}

export const Default = {
  render: (args) => <StatefulPagination {...args} />,
};

export const FirstPage = {
  render: (args) => <StatefulPagination {...args} />,
  args: {
    page: 1,
    hasMore: true,
  },
};

export const LastPage = {
  render: (args) => <StatefulPagination {...args} />,
  args: {
    page: 5,
    hasMore: false,
  },
};

export const MiddlePage = {
  render: (args) => <StatefulPagination {...args} />,
  args: {
    page: 3,
    hasMore: true,
  },
};

export const CustomPerPageOptions = {
  render: (args) => <StatefulPagination {...args} />,
  args: {
    perPageOptions: [5, 20, 50],
    perPage: 5,
    perPageLabel: 'Rows',
  },
};
