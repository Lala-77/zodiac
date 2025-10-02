import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // REAL Bahrain Open Data API
    const response = await fetch('https://data.gov.bh/api/3/action/package_show?id=construction-projects');
    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      source: 'Bahrain Open Data Portal',
      data: data.result || [],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false,
      error: 'Bahrain API temporarily unavailable'
    }, { status: 500 });
  }
}
