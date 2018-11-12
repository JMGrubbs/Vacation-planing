class RestaurantsController < ApplicationController
    before_action :find_restaurant, only: [:update]
    def index
      @restaurants = Restaurant.all
      render json: @restaurants
    end

    def show
      @restaurant = Restaurant.find(params[:id])
      render json: @restaurant
    end
  
    def update
      @restaurant.update(restaurant_params)
      if @restaurant.save
        render json: @restaurant, status: :accepted
      else
        render json: { errors: @restaurant.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def restaurant_params
      params.permit(:name, :foodTypes, :address, :hours, :popularFoods)
    end
  
    def find_restaurant
      @restaurant = Restaurant.find(params[:id])
    end
end
