import { NextResponse } from 'next/server';
import { updateSEOData, getSEOData, getAllSEOData } from '../../../../lib/database/seo';

export async function POST(request: Request) {
  try {
    const { page, title, description } = await request.json();

    const allowedPages = ['Homepage', 'Products', 'About', 'Gallery', 'Contact'];
    if (!allowedPages.includes(page)) {
      return NextResponse.json({ error: 'Invalid page' }, { status: 400 });
    }

    const updatedData = updateSEOData(page, title, description);

    return NextResponse.json({ 
      success: true, 
      message: `Successfully updated ${page} SEO metadata`,
      data: updatedData
    });

  } catch (error: any) {
    return NextResponse.json({ 
      error: 'Failed to update SEO metadata',
      details: error.message 
    }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    
    if (page) {
      const data = getSEOData(page);
      return NextResponse.json({ data });
    } else {
      const allData = getAllSEOData();
      return NextResponse.json({ data: allData });
    }
  } catch (error: any) {
    return NextResponse.json({ 
      error: 'Failed to fetch SEO data',
      details: error.message 
    }, { status: 500 });
  }
}
