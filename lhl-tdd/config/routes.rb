Rails.application.routes.draw do
  root to: 'customers#index'
  resources :customers, only: [:index, :new, :create, :show]
end
