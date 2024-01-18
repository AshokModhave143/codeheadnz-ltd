const execSync = require('child_process').execSync;
const msg = process.argv[2];

if (!msg) {
  console.log('No commit message provided');
  process.exit(1);
}
execSync('git add . && git commit -m "' + msg + '"', {
  stdio: [0, 1, 2],
});
execSync('git push');
console.log('Done!');
