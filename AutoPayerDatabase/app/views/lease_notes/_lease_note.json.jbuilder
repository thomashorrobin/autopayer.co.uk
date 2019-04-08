json.extract! lease_note, :id, :note, :user_id, :private, :lease_id, :created_at, :updated_at
json.url lease_note_url(lease_note, format: :json)
