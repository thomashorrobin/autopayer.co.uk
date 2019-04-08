json.extract! schedualed_payment, :id, :charge_period_start_date, :charge_period_end_date, :amount_due, :due_date, :lease_id, :created_at, :updated_at
json.url schedualed_payment_url(schedualed_payment, format: :json)
