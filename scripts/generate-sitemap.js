const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITE_URL = 'https://worldoftech.co.in';
const PUBLIC_DIR = path.join(__dirname, '../public');
const SCRATCH_DIR = path.join(__dirname, '../scratch/sitemap-build');

async function main() {
  console.log('🤖 Starting Sitemap & Robots.txt generation...');

  try {
    // 1. Create scratch dir if it doesn't exist
    if (!fs.existsSync(SCRATCH_DIR)) {
      fs.mkdirSync(SCRATCH_DIR, { recursive: true });
    }

    // 2. Compile categories.ts to CommonJS programmatically
    console.log('📦 Compiling TypeScript category definitions to CJS...');
    const sourceFile = path.join(
      __dirname,
      '../src/data/categories/categories.ts',
    );
    execSync(
      `npx tsc --module commonjs --target es2022 --moduleResolution node --skipLibCheck true --outDir "${SCRATCH_DIR}" "${sourceFile}"`,
      { stdio: 'inherit' },
    );

    // 3. Require the compiled CATEGORIES object
    console.log('📖 Importing compiled category configurations...');
    const compiledPath = path.join(SCRATCH_DIR, 'categories.js');

    if (!fs.existsSync(compiledPath)) {
      throw new Error(`Compiled file not found at: ${compiledPath}`);
    }

    const { CATEGORIES } = require(compiledPath);

    if (!CATEGORIES || !Array.isArray(CATEGORIES)) {
      throw new Error('Imported CATEGORIES is invalid or not an array');
    }

    // 4. Generate the sitemap URLs list
    console.log('🗺️  Mapping routes...');
    const urls = [];

    // Base paths
    urls.push({ loc: `${SITE_URL}/`, changefreq: 'daily', priority: '1.0' });
    urls.push({
      loc: `${SITE_URL}/privacy`,
      changefreq: 'monthly',
      priority: '0.3',
    });
    urls.push({
      loc: `${SITE_URL}/terms`,
      changefreq: 'monthly',
      priority: '0.3',
    });

    // Category and Subcategory paths
    for (const category of CATEGORIES) {
      // Category path
      urls.push({
        loc: `${SITE_URL}/${category.id}`,
        changefreq: 'weekly',
        priority: '0.8',
      });

      // Subcategory paths
      if (category.subcategories && Array.isArray(category.subcategories)) {
        for (const sub of category.subcategories) {
          urls.push({
            loc: `${SITE_URL}${sub.path}`,
            changefreq: 'weekly',
            priority: '0.7',
          });
        }
      }
    }

    // 5. Generate XML Content
    const currentDate = new Date().toISOString().split('T')[0];
    let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xmlContent +=
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const url of urls) {
      xmlContent += '  <url>\n';
      xmlContent += `    <loc>${url.loc}</loc>\n`;
      xmlContent += `    <lastmod>${currentDate}</lastmod>\n`;
      xmlContent += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xmlContent += `    <priority>${url.priority}</priority>\n`;
      xmlContent += '  </url>\n';
    }

    xmlContent += '</urlset>\n';

    // 6. Write sitemap.xml to public folder
    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xmlContent, 'utf8');
    console.log(
      `✅ sitemap.xml generated successfully at ${sitemapPath} (${urls.length} routes)`,
    );

    // 7. Write robots.txt to public folder
    const robotsTxtContent = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Host & Sitemap definition
Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
`;
    const robotsPath = path.join(PUBLIC_DIR, 'robots.txt');
    fs.writeFileSync(robotsPath, robotsTxtContent, 'utf8');
    console.log(`✅ robots.txt generated successfully at ${robotsPath}`);
  } catch (error) {
    console.error('❌ Sitemap generation failed:', error);
    process.exit(1);
  } finally {
    // 8. Programmatic Cleanup of Scratch Directory
    console.log('🧹 Cleaning up compiled scratch files...');
    if (fs.existsSync(SCRATCH_DIR)) {
      fs.rmSync(SCRATCH_DIR, { recursive: true, force: true });
    }
  }
}

main();
