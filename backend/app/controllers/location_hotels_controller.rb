class LocationHotelsController < ApplicationController
  before_action :set_location_hotel, only: [:show, :update, :destroy]

  # GET /location_hotels
  def index
    @location_hotels = LocationHotel.all

    render json: @location_hotels
  end

  # GET /location_hotels/1
  def show
    render json: @location_hotel
  end

  # POST /location_hotels
  def create
    @location_hotel = LocationHotel.new(location_hotel_params)

    if @location_hotel.save
      render json: @location_hotel, status: :created, location: @location_hotel
    else
      render json: @location_hotel.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /location_hotels/1
  def update
    if @location_hotel.update(location_hotel_params)
      render json: @location_hotel
    else
      render json: @location_hotel.errors, status: :unprocessable_entity
    end
  end

  # DELETE /location_hotels/1
  def destroy
    @location_hotel.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location_hotel
      @location_hotel = LocationHotel.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_hotel_params
      params.require(:location_hotel).permit(:location_id, :hotel_id)
    end
end
