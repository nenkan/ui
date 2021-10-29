import React from 'react';

function Breadcrumb(props) {
  const children = props.children && props.children.length ? props.children : [props.children];

  return (
    <nav className={props.className} aria-label="breadcrumb">
      <ol className="breadcrumb">
        {props.loading && <li>...</li>}
        {children.map((child, index) => {
          const active = index === children.length - 1;
          return (
            <React.Fragment key={index}>
              {index !== 0 && (
                <li className="breadcrumb__item--divider">/</li>
              )}
              <li className={active ? 'breadcrumb__item--active' : ''} aria-current={active ? 'page' : undefined}>
                {child}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
