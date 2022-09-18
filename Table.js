import React from 'react';
import classNames from 'classnames';

export default function Table(props) {

  return (
    <table className="table"> 

        <tr> 

          <th>{props.children}</th> 

          <th>{props.children}</th> 

          <th>{props.children}</th> 

        </tr> 

        <tr> 

          <td>{props.children}</td> 

          <td>{props.children}</td> 

          <td>{props.children}</td> 

        </tr> 

        <tr> 

          <td>{props.children}</td> 

          <td>{props.children}</td> 

          <td>{props.children}</td> 

        </tr> 

        <tr> 

          <td>{props.children}</td> 

          <td>{props.children}</td> 

          <td>{props.children}</td> 

        </tr> 

      </table>

  );

}
