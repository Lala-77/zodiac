"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  const isArabic = pathname.startsWith('/ar');
  const englishPath = isArabic ? pathname.replace('/ar', '') || '/' : pathname;
  const arabicPath = isArabic ? pathname : `/ar${pathname}`;

  return (
    <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-1 bg-white">
      <Link
        href={englishPath}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          !isArabic 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-700 hover:text-blue-600'
        }`}
      >
        EN
      </Link>
      <Link
        href={arabicPath}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          isArabic 
            ? 'bg-blue-600 text-white' 
            : 'text-gray-700 hover:text-blue-600'
        }`}
      >
        AR
      </Link>
    </div>
  );
}
