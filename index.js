const fs = require('fs');
const xlsx = require('xlsx');
const UrlList = require('./data/UrlList');

function publishSitemap(excel, dist) {
  const workbook = xlsx.readFile(excel);

  const urlList = new UrlList(xlsx.utils.sheet_to_json(workbook.Sheets['Sheet1']));

  let xml = '';
  xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  urlList.list.map(url => {
    xml += '\t<url>\n';
    if (url.loc) xml += '\t\t<loc>' + url.loc + '</loc>\n';
    if (url.lastmod) xml += '\t\t<lastmod>' + url.lastmod + '</lastmod>\n';
    if (url.priority) xml += '\t\t<priority>' + url.priority + '</priority>\n';
    if (url.chagefreq) xml += '\t\t<chagefreq>' + url.chagefreq + '</chagefreq>\n';
    xml += '\t</url>\n';
  });

  xml += '</urlset>';

  // 書き出し
  fs.writeFileSync(`${dist}sitemap.xml`, xml, 'utf8');
}

const excelFile = process.argv[2];
const distDir = process.argv[3];
publishSitemap(excelFile, distDir);
