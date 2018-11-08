json.extract! restaurant, :id, :name, :rating, :foodType, :address, :hrs, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
