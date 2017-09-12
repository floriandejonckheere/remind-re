class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def landing; end
  def signin; end
  def signup; end
end
