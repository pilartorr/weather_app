
import weatherMap from './lib/weatherMap';

const args = process.argv.slice(2);

weatherMap(args[0])
  .then(console.log)
  .catch(console.error);
