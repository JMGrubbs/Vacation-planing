class LocationEventsController < ApplicationController
  before_action :set_location_event, only: [:show, :update, :destroy]

  # GET /location_events
  def index
    @location_events = LocationEvent.all

    render json: @location_events
  end

  # GET /location_events/1
  def show
    render json: @location_event
  end

  # POST /location_events
  def create
    @location_event = LocationEvent.new(location_event_params)

    if @location_event.save
      render json: @location_event, status: :created, location: @location_event
    else
      render json: @location_event.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /location_events/1
  def update
    if @location_event.update(location_event_params)
      render json: @location_event
    else
      render json: @location_event.errors, status: :unprocessable_entity
    end
  end

  # DELETE /location_events/1
  def destroy
    @location_event.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location_event
      @location_event = LocationEvent.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_event_params
      params.require(:location_event).permit(:event_id, :location_id)
    end
end
