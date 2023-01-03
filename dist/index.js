import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import env from 'dotenv';
env.config();

//Router
import router from './router.js';
const app = express();
;
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8000, () => {
  console.log("listening");
});