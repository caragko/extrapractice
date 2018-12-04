const { db, Puppy } = require('../db/model/puppies');

const puppies = [{
  name: 'Bob',
  age: 1,
  bio: 'I like to dig',
}, {
  name: 'Kit',
  age: 2,
  bio: 'I like to catch',
}, {
  name: 'Jay',
  age: 3,
  bio: 'I like to bark',
}, {
  name: 'Tom',
  age: 2,
  bio: 'I like to sleep',
}, {
  name: 'Aly',
  age: 0,
  bio: 'I like to snuggle',
}];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const seedPuppies = await Promise.all(puppies.map(puppy => Puppy.create(puppy)));
    console.log('Seeding complete');
  } catch (err) {
    console.error('Seeding failed:', err);
  }
  db.close();
};

seed();
