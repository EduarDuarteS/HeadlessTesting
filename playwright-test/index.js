const { webkit } = require('playwright');

//Principal flow
//It creates a new user and then does a login
(async () => {

  //Se inicia el conteo de tiempo de ejecución
  console.time("timeExecute");

  // Memoria Inicial
  console.log("###  Memoria Inicial ###");
  var os = require('os');
  console.log(os.totalmem());
  console.log(os.freemem())
  console.log(os.totalmem() - os.freemem());

  const browser = await webkit.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');

  await page.click('button')
  await page.waitForTimeout(3000)

  await (await page.$('input[formcontrolname=\'firstName\']')).type('Jhonatan');
  await (await page.$('input[formcontrolname=\'lastName\']')).type('Guzmán');
  await (await page.$('input[formcontrolname=\'username\']')).type('Jhonnyguzz');
  await (await page.$('input[formcontrolname=\'password\']')).type('mypassword');
  await page.click('button')

  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'example.png' });

  await (await page.$('input[formcontrolname=\'username\']')).type('Jhonnyguzz');
  await (await page.$('input[formcontrolname=\'password\']')).type('mypassword');
  await page.click('button')

  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'example.png' });

  // Memoria Final
  console.log("###  Memoria Final  ###");
  var os = require('os');
  console.log(os.totalmem());
  console.log(os.freemem())
  console.log(os.totalmem() - os.freemem());

  //instalar npm install os-utils
  var os = require('os-utils');

  os.cpuUsage(function (v) {
    console.log('CPU Usage (%): ' + v);
  });

  //se cierra el explorador
  await browser.close();

  const used4 = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${used4} MB`);

  console.timeEnd("timeExecute");


})();