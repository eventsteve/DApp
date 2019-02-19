import { Drizzle, generateStore } from "drizzle";

import MyStringStore from "./contracts/MyStringStore.json";

const options = { contracts: [MyStringStore] };

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

export default drizzle;