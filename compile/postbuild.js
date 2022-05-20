import * as fs from 'fs';
import path from 'path';
import main from '../build/src/main.js';

fs.writeFileSync(path.resolve('build/main.json'), JSON.stringify(main, null, 2));
