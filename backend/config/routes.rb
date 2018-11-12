Rails.application.routes.draw do
      resources :locations, only: [:index, :update, :show]
      resources :users, only: [:index, :update, :show]
      resources :hotels, only: [:index, :update, :show]
      resources :restaurants, only: [:index, :update, :show]
      resources :sites, only: [:index, :update, :show]
      resources :events, only: [:index, :update, :show]
      resources :vacations, only: [:index, :update, :show]
end
