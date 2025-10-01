"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SEOHead from '../../components/SEOHead'
import { COMPANY_INFO } from '../../lib/constants'
import Footer from '../../components/Footer'

export default function SolarPanelsPageAR() {
  return (
    <>
      <SEOHead 
        title="شركة زودياك - مورد ألواح الطاقة الشمسية في البحرين والخليج"
        description="زودياك إنتربرايز - مورد ألواح الطاقة الشمسية في البحرين والخليج العربي"
      />
      
      <div dir="rtl" className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            الألواح الشمسية - قريباً
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            الصفحة العربية قيد التطوير
          </p>
          <Link 
            href="/solar-panels" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            الانتقال إلى النسخة الإنجليزية
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  )
}
