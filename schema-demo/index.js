const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/schema-demo';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

async function run() {
  await mongoose.connect(CONNECTION_STRING);
  console.log('Database Connected');

  await User.deleteMany({});

  const sampleUsers = [
    { name: 'Alice Reyes', email: 'alice@email.com', age: 24 },
    { name: 'Bob Santos', email: 'bob@email.com', age: 30 },
    { name: 'Clara Dela Cruz', email: 'clara@email.com', age: 22 },
  ];

  await User.insertMany(sampleUsers);
  console.log('Sample data inserted successfully');

  const users = await User.find();
  console.log('Retrieved users from database:');
  users.forEach((user) => {
    console.log(`- Name: ${user.name} | Email: ${user.email} | Age: ${user.age}`);
  });

  await mongoose.disconnect();
}

run().catch((err) => {
  console.error('Error:', err.message);
  mongoose.disconnect();
});
