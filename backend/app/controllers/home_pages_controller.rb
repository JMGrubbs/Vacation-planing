class HomePagesController < ApplicationController
  before_action :set_home_page, only: [:show, :update, :destroy]

  # GET /home_pages
  def index
    @home_pages = HomePage.all

    render json: @home_pages
  end

  # GET /home_pages/1
  def show
    render json: @home_page
  end

  # POST /home_pages
  def create
    @home_page = HomePage.new(home_page_params)

    if @home_page.save
      render json: @home_page, status: :created, location: @home_page
    else
      render json: @home_page.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /home_pages/1
  def update
    if @home_page.update(home_page_params)
      render json: @home_page
    else
      render json: @home_page.errors, status: :unprocessable_entity
    end
  end

  # DELETE /home_pages/1
  def destroy
    @home_page.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home_page
      @home_page = HomePage.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def home_page_params
      params.require(:home_page).permit(:descriptions)
    end
end
