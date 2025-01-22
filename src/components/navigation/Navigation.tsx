'use client';

import { useState } from 'react';

import { Header } from './Header';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsOpen(!isOpen)} />
    </>
  );
};
