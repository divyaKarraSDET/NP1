import {test, expect} from '@playwright/test';

let id: string;

test('POST objects', async({request}) => {

    const response  = await request.post('https://api.restful-api.dev/objects',
        {
            headers: {
                "Content-Type" : "application/json"
                },
            data: {                          //payload
                
                "name": "Apple MacBook Pro 36",
                "data": {
                    "year": 2025,
                    "price": 1979.99,
                    "CPU model": "Intel Core i7",
                    "Hard disk size": "2 TB"
                }
            }

        }
        );

        console.log(response.status());
        console.log(response.statusText());
        const jsonresponse = await response.json(); //jsonresponse

        id = jsonresponse.id;
        console.log('ID is :', id);

        const name = jsonresponse.name;
        console.log('name is : ', name);

        const createdAt = jsonresponse.createdAt;
        console.log('created At is : ', createdAt);

        const year = jsonresponse.data.year;
        console.log('year is : ', year);

        const price = jsonresponse.data.price;
        console.log('price is : ', price);

        const cpumodel = 'CPU model';
        const CPU = jsonresponse.data[cpumodel];
         console.log('CPU model is : ', CPU);

         const HardDisk = 'Hard disk size';
         const harddisksize = jsonresponse.data[HardDisk];
          console.log('hard disk size is : ', harddisksize);

});

test('Get new resource', async({request}) => {

   const response = await request.get(`https://api.restful-api.dev/objects/7`);

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


