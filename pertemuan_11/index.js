import helloworld from './helloWorld.js';
import { ambilDataUserAsync } from './ambilDataUserAsync.js';
async function messages(){
    const msg = await helloWorld();
    console.log(msg);
    }
messages();

import ambilDataUser from './ambildataUser';
 ambilDataUser();

 import { ambilDataUserAsync } from './ambilDataUserAsync.js';
 ambilDataUserAsync()