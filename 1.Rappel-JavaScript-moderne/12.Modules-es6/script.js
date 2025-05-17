import { ns, age } from './module.js'
import exportDefault from './module.js'
import * as Utils from './module.js'

exportDefault()
console.log('hello world !!', ns, age);
console.log(Utils);

