import React from 'react';
import Table from  '../../../src/table';
import '@nenkan/css/table.scss';

export default {
  title: 'Table',
  component: Table,
  args: {
    className: '',
  },
  render: (props) => (
    <Table {...props}>
      <thead>
        <tr>
          <th>Lorem</th>
          <th>Ipsum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dolor</td>
          <td>000</td>
        </tr>
        <tr>
          <td>Amet</td>
          <td>000</td>
        </tr>
        <tr>
          <td>Consectetur</td>
          <td>000</td>
        </tr>
      </tbody>
    </Table>
  ),
};

export const TableExample = {};
