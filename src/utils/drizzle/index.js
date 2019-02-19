import { Drizzle, generateStore } from "drizzle";

import contractString from '../../../build/contracts/DocumentManager.json';

const options = { contracts: [contractString] };

const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

export default drizzle;