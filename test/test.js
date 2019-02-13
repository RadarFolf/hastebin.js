const haste = require('../index.js');
const h = new haste({ dev: true });

const args = process.argv;

if (args[2] === 'post') {
  const code = args.slice(2);
  const link = h.post(code).then(link => console.log(`Posted to ${link}`));
}