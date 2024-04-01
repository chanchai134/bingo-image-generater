import puppeteer from 'puppeteer';
import randomInteger from 'random-int';
import fs from "fs";

(async () => {
  const r = () => randomInteger(1, 24)
  const m200 = new Map()

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({width: 2362, height: 2362});

  while(m200.size !== 200) {
      const s = []
      while(s.length != 16) {
          const d = r()
          if(s.findIndex(x => x === d) === -1) {
              s.push(d)
          }
      }
      const key = s.join('-')
      if(!m200.has(key)) {
          m200.set(key, "has")
          
          await page.goto('http://localhost:3000/?'+s.map(k => `a=${k}`).join('&'));
          const imageBuffer = await page.screenshot({ omitBackground: false });
          fs.writeFileSync(`./bingo/i${m200.size}.png`, imageBuffer);
      }
  }
  await page.close();
  await browser.close();
})();