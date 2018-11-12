class VacationsController < ApplicationController
    before_action :find_vacation, only: [:update]
    def index
      @vacations = Vacation.all
      render json: @vacations
    end

    def create
      @vacation = Vacation.create(name: params[:name], location_id: params[:location_id])
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
      params.require(:vacation).permit(:name, :location_id)
    end
  
    def find_vacation
      @vacation = Vacation.find(params[:id])
    end
end
