Rails.application.routes.draw do
      resources :locations, only: [:index, :update]
      resources :users, only: [:index, :update]
      resources :hotels, only: [:index, :update]
      resources :restaurants, only: [:index, :update]
      resources :sites, only: [:index, :update]
      resources :events, only: [:index, :update]
      resources :vacations, only: [:index, :update]
end
