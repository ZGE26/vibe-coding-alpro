// Simple in-memory view counter (in production, use database)
const viewCounts: Record<string, number> = {};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 'unknown';
  
  // Get current count
  const count = viewCounts[page] || 0;
  
  return Response.json({ page, views: count });
}

export async function POST(request: Request) {
  const { page } = await request.json();
  
  if (!page) {
    return Response.json({ error: 'Page parameter required' }, { status: 400 });
  }
  
  // Increment view count
  viewCounts[page] = (viewCounts[page] || 0) + 1;
  
  return Response.json({ 
    page, 
    views: viewCounts[page],
    message: 'View counted successfully' 
  });
}
