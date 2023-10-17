const YAML = require('yaml')
const fs = require('fs')
const path = require('path')
const redirectsfile = fs.readFileSync(path.join(__dirname, 'redirect.yaml'), 'utf-8')
const redirects = YAML.parse(redirectsfile)
console.log(redirects)

const templatefile = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf-8')

for(let [slug, url] of Object.entries(redirects)) {
    console.log(slug)

    const html = templatefile.replaceAll('https://example.com',url)
}
