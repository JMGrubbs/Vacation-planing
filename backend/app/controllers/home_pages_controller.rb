class HomePagesController < ApplicationController
  before_action :set_home_page, only: [:show, :edit, :update, :destroy]

  # GET /home_pages
  # GET /home_pages.json
  def index
    @home_pages = HomePage.all
  end

  # GET /home_pages/1
  # GET /home_pages/1.json
  def show
  end

  # GET /home_pages/new
  def new
    @home_page = HomePage.new
  end

  # GET /home_pages/1/edit
  def edit
  end

  # POST /home_pages
  # POST /home_pages.json
  def create
    @home_page = HomePage.new(home_page_params)

    respond_to do |format|
      if @home_page.save
        format.html { redirect_to @home_page, notice: 'Home page was successfully created.' }
        format.json { render :show, status: :created, location: @home_page }
      else
        format.html { render :new }
        format.json { render json: @home_page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /home_pages/1
  # PATCH/PUT /home_pages/1.json
  def update
    respond_to do |format|
      if @home_page.update(home_page_params)
        format.html { redirect_to @home_page, notice: 'Home page was successfully updated.' }
        format.json { render :show, status: :ok, location: @home_page }
      else
        format.html { render :edit }
        format.json { render json: @home_page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /home_pages/1
  # DELETE /home_pages/1.json
  def destroy
    @home_page.destroy
    respond_to do |format|
      format.html { redirect_to home_pages_url, notice: 'Home page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_home_page
      @home_page = HomePage.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def home_page_params
      params.require(:home_page).permit(:something)
    end
end
