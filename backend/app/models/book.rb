class Book < ApplicationRecord
    belongs_to :user
    validates :title, presence: { message: "can't be empty" }
    validates :author, presence: { message: "can't be empty" }
end
