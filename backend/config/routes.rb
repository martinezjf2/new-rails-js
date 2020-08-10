Rails.application.routes.draw do
  resources :books
  resources :users do 
    resources :books
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
