Rails.application.routes.draw do
  devise_for :users
  root to: "homes#top"
  get "/home/about" => "homes#about"

  resources :users, only: [:edit, :update, :index, :show] do
    resource :relationships, only: [:create, :destroy]
    member do
      get :following, :followers
      post :search
    end
  end

  resources :books, only: [:create,:edit, :update, :index, :show, :destroy] do
    resources :post_comments, only: [:create, :destroy]
    resource :favorites, only: [:create, :destroy]
  end

  resources :rooms, only: [:create, :show]
  resources :messages, only: [:create]

  resources :groups, only: [:new, :create, :edit, :update, :index, :show] do
    resources :event_messages, only: [:new, :create, :index]
    resource :group_users, only: [:create, :destroy]
  end

 get '/search' => 'searches#search'
end
