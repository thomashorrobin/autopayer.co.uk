Rails.application.routes.draw do
  resources :leases
  resources :payment_frequencies
  resources :addresses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
