class SitesController < ApplicationController
    before_action :find_site, only: [:update]
    def index
      @sites = Site.all
      render json: @sites
    end
  
    def update
      @site.update(site_params)
      if @site.save
        render json: @site, status: :accepted
      else
        render json: { errors: @site.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def site_params
      params.permit(:name, :description)
    end
  
    def find_site
      @site = Site.find(params[:id])
    end
end
