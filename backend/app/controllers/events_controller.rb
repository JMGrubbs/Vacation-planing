class EventsController < ApplicationController
  
    def index
      @events = Event.all
      render json: @events
    end
    
    def create
      event = Event.create(event_params)
      render json: event
    end

    def show
      @event = Event.find(params[:id])
      render json: @event
    end
  
    def update
      @event.update(event_params)
      if @event.save
        render json: @event, status: :accepted
      else
        render json: { errors: @event.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def event_params
      params.permit(:name, :description)
    end
  
    def find_event
      @event = Event.find(params[:id])
    end
end
