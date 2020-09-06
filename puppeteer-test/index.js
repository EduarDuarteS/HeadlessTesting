const puppeteer = require('puppeteer');


//Principal flow
//It creates a new user and then does a login

(async () => {

  // Memoria Inicial
  var os = require('os');
  console.log(os.totalmem());
  console.log(os.freemem())
  console.log(os.totalmem()-os.freemem());
  
  console.time("timeExecute");
  // let arr2 = Array(1e6).fill("some string");
  // arr2.reverse();

  const used = process.memoryUsage();

  for (let key in used) {
    console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
  }

  const browser = await puppeteer.launch({ headless: false });

  const usedw = process.memoryUsage();

  for (let key in usedw) {
    console.log(`${key} ${Math.round(usedw[key] / 1024 / 1024 * 100) / 100} MB`);
  }
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
  await page.waitFor(2000);

  //console.log(await page.content());
  await page.screenshot({ path: 'example.png' });
  await page.click('button')
  await page.waitFor(2000);

  await page.screenshot({ path: 'example.png' });

  await (await page.$('input[formcontrolname=\'firstName\']')).type('Jhonatan');
  await (await page.$('input[formcontrolname=\'lastName\']')).type('Guzmán');
  await (await page.$('input[formcontrolname=\'username\']')).type('Jhonnyguzz');
  await (await page.$('input[formcontrolname=\'password\']')).type('mypassword');
  await page.click('button')

  await page.waitFor(2000);
  await page.screenshot({ path: 'example.png' });

  await (await page.$('input[formcontrolname=\'username\']')).type('Jhonnyguzz');
  await (await page.$('input[formcontrolname=\'password\']')).type('mypassword');
  await page.click('button')
  // console.log(`The script uses approximately ${used2} MB`);
  const used3 = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${used3} MB`);
  await page.waitFor(2000);
  await page.screenshot({ path: 'example.png' });
  await page.screenshot({ path: 'example1.png' });
  await page.screenshot({ path: 'example2.png' });
  await page.screenshot({ path: 'example3.png' });
  await page.screenshot({ path: 'example4.png' });
  await page.screenshot({ path: 'example5.png' });
  await page.screenshot({ path: 'example6.png' });
  await page.screenshot({ path: 'example7.png' });


  const used2 = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${used2} MB`);

  // console.log(os.cpus());
  console.log(os.totalmem());
  console.log(os.freemem())
  console.log(os.totalmem() - os.freemem());

  var os = require('os-utils');

  os.cpuUsage(function (v) {
    console.log('CPU Usage (%): ' + v);
  });

  //Fin del proceso
  await browser.close();


  const used4 = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${used4} MB`);

  console.timeEnd("timeExecute");
})();