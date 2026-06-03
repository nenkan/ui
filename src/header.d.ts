import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
  containerVariant?: 'fixed' | 'fluid';
  innerClassName?: string;
}
declare function Header(props: HeaderProps): JSX.Element;
export default Header;
