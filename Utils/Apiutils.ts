import { expect, APIRequestContext} from '@playwright/test';

let jsonresponse: any;


export default class ApiUtils{
    apicontext : APIRequestContext;
    //Payload : any;

    /*payLoad = { "name": "Apple MacBook Pro 36",
                "data": {
                    "year": 2025,
                    "price": 1979.99,
                    "CPU model": "Intel Core i7",
                    "Hard disk size": "2 TB"

                }
            };   */

    constructor(apicontext:APIRequestContext) {
        this.apicontext = apicontext;
        
    }


     async POSTrequest(url: string, Payload : any): Promise<any> {
    const response = await this.apicontext.post(url,
         {
            headers: {
                "Content-Type" : "application/json"
                },
            data: Payload
            }

        
        );
    console.log(response.status());
     expect(response.status()).toBe(200);
    console.log(response.statusText());
     expect(response.statusText()).toBe('OK');

     return await response.json();
  
}

async getallresources(url: string){

    const response = await this.apicontext.get(url);

    return await response.json();
}

async getoneresource(url: string, id: string){

    const response = await this.apicontext.get(url+ '/' +id);

    return await response.json();
}
}
