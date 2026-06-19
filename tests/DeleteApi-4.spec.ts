import {test, expect} from '@playwright/test';

test('delete resource', async ({request}) => {

   const response = await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019e934cfb2a3c88');

   console.log(response.status());
   console.log(response.statusText());

   const jsonresponse = await response.json();

   const message = jsonresponse.message;
   console.log('Message is : ',message);


})