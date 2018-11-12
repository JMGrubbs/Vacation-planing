class Vacation < ApplicationRecord
    belongs_to :user
    has_many :locations
    has_many :sites
    has_many :hotels
    has_many :events
    has_many :restaurants
end
