import { init, start } from "./server";
import './db';

init().then(() => start());
