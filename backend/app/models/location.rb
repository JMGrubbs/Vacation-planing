class Location < ApplicationRecord
    belongs_to :vacation, optional: true
end
