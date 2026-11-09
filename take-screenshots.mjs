import puppeteer from 'puppeteer-core'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

async function capture() {
  console.log('Launching Chrome from:', chromePath)
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  // 1. Desktop Viewport
  console.log('Navigating to Desktop 1440x900...')
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 })
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })

  // Wait for preloader
  await new Promise(r => setTimeout(r, 2200))

  // Scroll smoothly down the entire page
  console.log('Scrolling down to trigger all sections...')
  await page.evaluate(async () => {
    const scrollStep = 300
    const delay = 120
    const totalHeight = document.body.scrollHeight

    for (let pos = 0; pos <= totalHeight; pos += scrollStep) {
      window.scrollTo(0, pos)
      await new Promise(r => setTimeout(r, delay))
    }
  })

  await new Promise(r => setTimeout(r, 800))

  // Full page screenshot while all elements are triggered
  const fullPagePath = path.join(__dirname, 'fullpage-preview.png')
  await page.screenshot({ path: fullPagePath, fullPage: true })
  console.log('Saved fullpage screenshot:', fullPagePath)

  // Scroll back to top for hero screenshot
  await page.evaluate(() => window.scrollTo(0, 0))
  await new Promise(r => setTimeout(r, 600))

  const desktopPath = path.join(__dirname, 'desktop-preview.png')
  await page.screenshot({ path: desktopPath })
  console.log('Saved desktop hero screenshot:', desktopPath)

  // 2. Mobile Viewport (390 x 844)
  console.log('Testing Mobile 390x844...')
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })
  await new Promise(r => setTimeout(r, 2200))

  const mobilePath = path.join(__dirname, 'mobile-preview.png')
  await page.screenshot({ path: mobilePath })
  console.log('Saved mobile screenshot:', mobilePath)

  await browser.close()
  console.log('SUCCESS: All screenshots captured!')
}

capture().catch(err => {
  console.error('Error in capture:', err)
  process.exit(1)
})
