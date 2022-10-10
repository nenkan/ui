import React from 'react'
import {Table} from  '..'

export default {
 title: 'Table'
}

export function TableExample() {
   return (
     <Table>
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
   )
}
