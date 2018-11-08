class LocationSitesController < ApplicationController
  before_action :set_location_site, only: [:show, :update, :destroy]

  # GET /location_sites
  def index
    @location_sites = LocationSite.all

    render json: @location_sites
  end

  # GET /location_sites/1
  def show
    render json: @location_site
  end

  # POST /location_sites
  def create
    @location_site = LocationSite.new(location_site_params)

    if @location_site.save
      render json: @location_site, status: :created, location: @location_site
    else
      render json: @location_site.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /location_sites/1
  def update
    if @location_site.update(location_site_params)
      render json: @location_site
    else
      render json: @location_site.errors, status: :unprocessable_entity
    end
  end

  # DELETE /location_sites/1
  def destroy
    @location_site.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_location_site
      @location_site = LocationSite.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def location_site_params
      params.require(:location_site).permit(:location_id, :site_id)
    end
end
