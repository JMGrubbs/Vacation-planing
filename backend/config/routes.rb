Rails.application.routes.draw do
  resources :location_events
  resources :location_restaurants
  resources :location_sites
  resources :location_hotels
  resources :home_pages
  resources :restaurants
  resources :sites
  resources :hotels
  resources :users
  resources :locations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
