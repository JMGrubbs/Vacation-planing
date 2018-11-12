Rails.application.routes.draw do
      resources :locations, only: [:index, :update, :show, :create]
      resources :users, only: [:index, :update, :show, :create]
      resources :hotels, only: [:index, :update, :show, :create]
      resources :restaurants, only: [:index, :update, :show, :create]
      resources :sites, only: [:index, :update, :show, :create]
      resources :events, only: [:index, :update, :show, :create]
      resources :vacations
end
