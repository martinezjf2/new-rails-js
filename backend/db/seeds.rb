# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# create 150 books
150.times do
    title = Faker::Book.title
    author = Faker::Book.author
    user_id = rand(1..25)
    Book.create(title: title, author: author, user_id: user_id)
end

# create 20 users
25.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(first_name: first_name, last_name: last_name)
end

# User.create(first_name: "billy", last_name: "joe")

