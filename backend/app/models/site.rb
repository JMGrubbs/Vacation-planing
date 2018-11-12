class Site < ApplicationRecord
    belongs_to :location
    belongs_to :vacation, optional: true


end
