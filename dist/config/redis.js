import { createClient } from 'redis';
const client = createClient();
client.on('error', err => console.log("ERROR CONNECTION: " + errr));
await client.connect();
export default client;