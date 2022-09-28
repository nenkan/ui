import React from 'react';

function BreadcrumbItem(props) {
  if (props.divider) {
    return (
      <li className="breadcrumb__item breadcrumb__item--divider">/</li>
    );
  }

  return (
    <li className={`breadcrumb__item ${props.active ? 'breadcrumb__item--active' : ''}`} aria-current={props.active ? 'page' : undefined}>
      {props.children}
    </li>
  );
}

function Breadcrumb(props) {
  const children = props.children && props.children.length ? props.children : [props.children];

  return (
    <nav className={props.className} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {props.loading ? (
          <li>...</li>
        ) : children.reduce((list, child, index) => {
          const items = [];

          if (index !== 0) {
            items.push(<BreadcrumbItem key={`divider-${index}`} divider />);
          }
          items.push(
            <BreadcrumbItem key={index} active={index === children.length - 1}>
              {typeof child === 'function' ? child() : child}
            </BreadcrumbItem>
          );

          return list.concat(items);
        }, [])}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
