import { test, expect } from '@playwright/test';

test('GET objects', async({request}) => {

   const response =  await request.get('https://api.restful-api.dev/objects');

   const statuscode = response.status();
   console.log(`statuscode is : ${statuscode}`);
   expect.soft(statuscode).toBe(200);

   const statusmsg = response.statusText();
   console.log(`status msg is :: ${statusmsg}`);
   expect.soft(statusmsg).toBe('OK');

   const jsonresponse = await response.json();
    //console.log(jsonresponse);

  const id = jsonresponse[0].id;
  console.log(`ID is :: ${id}`);
  expect.soft(id).toBe('1');

  const name = jsonresponse[0].name;
  console.log('Name is : ', name);
  expect.soft(name).toBe('Google Pixel 6 Pro');

  const color = jsonresponse[0].data.color;
  console.log('Color is : ', color);
  expect.soft(color).toBe('Cloudy White');

  const capacity = jsonresponse[0].data.capacity;
  console.log('Capacity is : ', capacity);
  expect.soft(capacity).toBe('128 GB');


});





test('Get new resource', async({request}) => {

   const response = await request.get(`https://api.restful-api.dev/objects/ff8081819d82fab6019e92955d623adb`);

   console.log(response.status());
   console.log(response.statusText());

   const jsonresponse = await response.json();

   const id = jsonresponse.id;
   console.log('ID is : ', id);

   const name = jsonresponse.name;
   console.log('Name is : ', name);

  //const createdAt = jsonresponse.createdAt;
  //console.log('Created at :', createdAt);

   const year = jsonresponse.data.year;
   console.log('Year is :', year);

   const price = jsonresponse.data.price;
   console.log('Price is :', price);

   const cpumodel = 'CPU model';
   const CPU = jsonresponse.data[cpumodel];
   console.log('CPU model is :', CPU);

   const harddisk = 'Hard disk size';
   const harddisksize = jsonresponse.data[harddisk];
   console.log('Hard disk size : ', harddisksize);


});