Rails.application.routes.draw do
  resources :locations
  resources :events
  resources :restaurants
  resources :hotels
  resources :home_pages
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
