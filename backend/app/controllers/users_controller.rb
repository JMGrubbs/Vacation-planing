class UsersController < ApplicationController
    before_action :find_user, only: [:update]
    wrap_parameters false

    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.find(params[:id])
      render json: @user
    end

    def create
      @user = User.create(
        username: params[:username]
      )
      render json: @user
    end

    def update
      @user.update(user_params)
      if @user.save
        render json: @user, status: :accepted
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessible_entity
      end
    end
  
    private
  
    def user_params
      params.permit(:username)
    end
  
    def find_user
      @user = User.find(params[:id])
    end
end
