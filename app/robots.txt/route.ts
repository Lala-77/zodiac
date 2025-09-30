export async function GET() {
  const robots = `User-agent: *
Allow: /
Sitemap: https://www.zodiacgcc.com/sitemap.xml`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
