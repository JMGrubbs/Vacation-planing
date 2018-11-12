class Api::V1::HotelsController < ApplicationController
    before_action :find_hotel, only: [:update]
    def index
      @hotels = Hotel.all
      render json: @hotels
    end

    def show
      @hotel = Hotel.find(params[:id])
      render json: @hotel
    end
  
    def update
      @hotel.update(hotel_params)
      if @hotel.save
        render json: @hotel, status: :accepted
      else
        render json: { errors: @hotel.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def hotel_params
      params.permit(:name, :pool, :meals, :rating, :address)
    end
  
    def find_hotel
      @hotel = Hotel.find(params[:id])
    end
end
