import {test, expect} from '@playwright/test';

let id: string;

test('put objects', async({request}) => {

    const response = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019e92b392553b27',
        {
            headers: {
                'Content-Type' : 'application/json',
            },
            data: {
                 "name": "PlayW MacBook Pro 36",
                "data": {
                    "year": 2026,
                    "price": 1879.99,
                    "CPU model": "PlayW Core i7",
                    "Hard disk size": "1.7 TB"
                }

            }
        }
    );

    console.log('status is :', response.status());
    console.log('status msg :', response.statusText());

    const jsonresponse = await response.json();

     id = jsonresponse.id;
    console.log('ID is :', id);


});

test('Get objects', async ({request}) => {

    const response = await request.get('https://api.restful-api.dev/objects/ff8081819d82fab6019e92b392553b27');

    console.log(response.status());
    console.log(response.statusText());

    const jsonresponse = await response.json();

    const id = jsonresponse.id;
    console.log('ID is :', id);

        const name = jsonresponse.name;
        console.log('name is : ', name);

        //const UpdatedAt = jsonresponse.updatedAt;
        //console.log('Updated At is : ', UpdatedAt);

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

test('Patch new resource', async({request}) => {

   const response = await request.patch('https://api.restful-api.dev/objects/ff8081819d82fab6019e92b392553b27',
        {
            headers: {
                'Content-Type' : 'application/json',
            },
            data: {
                    "name": "PlayWright MacBook Pro 36",

                  /*  "data": {
                        "year": 2026,
                        "price": 2099.99,
                        "CPU model": "PW Core i7",
                        "Hard disk size": "1.5 TB"
                     }  */

            }
        }

   );

   console.log(response.status());
   console.log(response.statusText());

   const jsonresponse = await response.json();

   const id = jsonresponse.id;
   console.log('ID is : ', id);

})  

test('get objects', async({request}) => {

    const response = await request.get('https://api.restful-api.dev/objects/ff8081819d82fab6019e92b392553b27');

    console.log(response.status());
    console.log(response.statusText());

    const jsonresponse = await response.json();

   const name = jsonresponse.name;
   console.log('Name is : ', name);

  //const UpdatedAt = jsonresponse.updatedAt;
  //console.log('Updated at :', updatedAt);

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
    

})          