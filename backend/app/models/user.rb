class User < ApplicationRecord
    has_many :vacations
    has_many :events, through: :vacations
    has_many :sites, through: :vacations
    has_many :locations, through: :vacations
    # has_many :hotels, through: :vacations
    # has_many :restaurants, through: :vacations
end
