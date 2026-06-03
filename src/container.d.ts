import React from 'react';

interface ContainerProps {
  as?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'fixed' | 'fluid';
}
declare function Container(props: ContainerProps): JSX.Element;
export default Container;
