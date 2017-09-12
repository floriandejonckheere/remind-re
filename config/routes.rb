Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => redirect('/landing')

  get '/landing' => 'application#landing'
  get '/signin' => 'application#signin'
  get '/signup' => 'application#signup'
end
