const bcrypt = require('bcrypt');

const password = 'Rajarshi2024@%';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
