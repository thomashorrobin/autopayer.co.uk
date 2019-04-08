json.extract! user, :id, :first_name, :last_name, :email, :google_id, :created_at, :updated_at
json.url user_url(user, format: :json)
