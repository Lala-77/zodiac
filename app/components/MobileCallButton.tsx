"use client";

import React from 'react';
import { COMPANY_INFO } from '../lib/constants';
const MobileCallButton: React.FC = () => {
  return (
    <a
      href={`tel:${COMPANY_INFO.phone}`}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 md:hidden flex items-center justify-center animate-pulse"
      aria-label={`Call ${COMPANY_INFO.phone}`}
      style={{ width: '60px', height: '60px' }}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.4-.5-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
      </svg>
      <span className="sr-only">Call {COMPANY_INFO.phone}</span>
    </a>
  );
};

export default MobileCallButton;
