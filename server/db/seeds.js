use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: 'John Lennon',
    email: 'johhny@gmail.com',
    checked_in: false
  },
  {
    name: 'Paul McCartney',
    email: 'paul@gmail.com',
    checked_in: false
  }
])
