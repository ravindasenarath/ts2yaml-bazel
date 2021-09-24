import fs from 'fs';

import YAML from 'yaml';

// const jsonFile = JSON.parse(
//   fs.readFileSync(process.argv[3], {
//     encoding: 'utf8',
//     flag: 'r',
//   })
// );
// console.log('Json file - ', jsonFile);

// const yamlFile = YAML.stringify(jsonFile);

// console.log('Yaml file - ', yamlFile);

// fs.writeFileSync(process.argv[2], yamlFile);

console.log('Yaml file - ', process.argv);
