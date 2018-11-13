class Vacation < ApplicationRecord
    belongs_to :location, optional: true
    # has_many :sites
    # has_many :hotels
    # has_many :events
    # has_many :restaurants
end
