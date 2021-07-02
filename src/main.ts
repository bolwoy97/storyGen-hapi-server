import { init, start } from "./server";
import { connect as connectDB } from './db';

init().then(
  () => start().then(
    () => { connectDB() }
  )
);
