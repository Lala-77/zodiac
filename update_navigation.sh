#!/bin/bash
# Update navigation for all pages

PAGES=("products" "gallery" "about" "page")

for page in "${PAGES[@]}"; do
    if [ -f "./app/${page}/page.tsx" ]; then
        echo "Updating ${page} page..."
        # Remove any existing Solar Panels links first
        sed -i '' '/Solar Panels/d' ./app/${page}/page.tsx
        # Add Solar Panels after Products
        sed -i '' '/<Link href="\/products".*>/a\
                <Link href="/solar-panels" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium transition-colors">\
                  Solar Panels\
                </Link>
' ./app/${page}/page.tsx
    fi
done
