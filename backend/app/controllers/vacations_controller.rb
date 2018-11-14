class VacationsController < ApplicationController
    before_action :find_vacation, only: [:update]
    wrap_parameters false
    def index
      @vacations = Vacation.all
      render json: @vacations
    end

    def create
      @vacation = Vacation.create(
        name: params[:name],
        user_id: params[:user_id],
        location_id: params[:location_id],
        events: params[:events],
        sites: params[:sites]
      )
      render json: @vacation
    end

    def show
      @vacation = Vacation.find(params[:id])
      render json: @vacation
    end
  
    def update
      @vacation.update(vacation_params)
      if @vacation.save
        render json: @vacation, status: :accepted
      else
        render json: { errors: @vacation.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def vacation_params
      params.require(:vacation).permit(:name, :location_id, :events, :sites)
    end
  
    def find_vacation
      @vacation = Vacation.find(params[:id])
    end
end

