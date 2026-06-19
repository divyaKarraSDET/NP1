import{test, APIRequestContext, expect} from '@playwright/test';
import ApiUtils from '../Utils/Apiutils';

let apiutils: ApiUtils;
let apicontext: APIRequestContext;
let jsonresponse: any;
const url: string = `https://api.restful-api.dev/objects`;

let payLoad = { "name": "Apple MacBook Pro 36",
                "data": {
                    "year": 2025,
                    "price": 1979.99,
                    "CPU model": "Intel Core i7",
                    "Hard disk size": "2 TB"

                }
            };

const harddisk = 'Hard disk size';
const cpumodel = 'CPU model';


test('post resource', async ({playwright}) => {

    apicontext = await playwright.request.newContext();
    apiutils = new ApiUtils(apicontext);

   jsonresponse = await apiutils.POSTrequest( url, payLoad);

   console.log(jsonresponse.id);
   console.log(jsonresponse.name);
   console.log(jsonresponse.data.price);
   console.log(jsonresponse.data.year);
   console.log(jsonresponse.createdAt);

   const CPU = 'CPU model';
   const CPUmodel = jsonresponse.data[CPU];
   console.log(CPUmodel);

   const Hard = 'Hard disk size';
   const hardDisk = jsonresponse.data[Hard];
   console.log(hardDisk);
})

test.skip('Get all resources', async({playwright}) => {
    apicontext = await playwright.request.newContext();
    apiutils = new ApiUtils(apicontext);

      jsonresponse = apiutils.getallresources(url);

   const id = jsonresponse.id;
   console.log('ID is : ', id);

   const name = jsonresponse.name;
   console.log('Name is : ', name);

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

test('Get one resources', async({playwright}) => {
    apicontext = await playwright.request.newContext();
    apiutils = new ApiUtils(apicontext);

      const oneresponse = await apiutils.getoneresource(url, jsonresponse.id);

    expect.soft(oneresponse.id).toBe(jsonresponse.id);
    expect.soft(oneresponse.name).toBe(payLoad.name);
    expect.soft(oneresponse.data.price).toBe(payLoad.data.price);
    expect.soft(oneresponse.data.year).toBe(payLoad.data.year);

  expect.soft(oneresponse.data[cpumodel]).toBe(payLoad.data[cpumodel]);

   expect.soft(oneresponse.data[harddisk]).toBe(payLoad.data[harddisk]);

});