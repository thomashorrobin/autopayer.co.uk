json.extract! lease, :id, :address_id, :payment_frequency_id, :rent, :start_date, :end_date, :name, :created_at, :updated_at
json.url lease_url(lease, format: :json)
