class LocationsController < ApplicationController
  
    def index
      @locations = Location.all
      render json: @locations
    end

    def show
      @location = Location.find(params[:id])
      render json: @location
    end
  
    def update
      @location.update(location_params)
      if @location.save
        render json: @location, status: :accepted
      else
        render json: { errors: @location.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def location_params
      params.permit(:name, :description)
    end
  
    def find_location
      @location = Location.find(params[:id])
    end
  end