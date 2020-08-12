class User < ApplicationRecord
    has_many :books
    validates :first_name, presence: { message: "can't be empty" }
    validates :last_name, presence: { message: "can't be empty" }
end
