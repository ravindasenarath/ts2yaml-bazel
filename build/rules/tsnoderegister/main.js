const fs = require("fs");
const yaml = require("yaml");

require("ts-node").register({
  transpileOnly: true,
  // insert other options with a boolean flag here
});

const schemaFile = require("../../../" + process.argv[3]);

fs.writeFileSync(process.argv[2], yaml.stringify(schemaFile));
