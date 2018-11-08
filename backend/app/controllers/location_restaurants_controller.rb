class LocationRestaurantsController < ApplicationController
  before_action :set_location_restaurant, only: [:show, :update, :destroy]

  # GET /location_restaurants
  def index
    @location_restaurants = LocationRestaurant.all

    render json: @location_restaurants
  end

  # GET /location_restaurants/1
  def show
    render json: @location_restaurant
  end

  # POST /location_restaurants
  def create
    @location_restaurant = LocationRestaurant.new(location_restaurant_params)

    if @location_restaurant.save
      render json: @location_restaurant, status: :created, location: @location_restaurant
    else
      render json: @location_restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /location_restaurants/1
  def update
    if @location_restaurant.update(location_restaurant_params)
      render json: @location_restaurant
    else
      render json: @location_restaurant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /location_restaurants/1
  def destroy
    @location_restaurant.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location_restaurant
      @location_restaurant = LocationRestaurant.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_restaurant_params
      params.require(:location_restaurant).permit(:location_id, :restaurant_id)
    end
end
