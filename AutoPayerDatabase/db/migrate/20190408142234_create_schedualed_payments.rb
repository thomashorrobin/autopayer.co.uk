class CreateSchedualedPayments < ActiveRecord::Migration[5.2]
  def change
    create_table :schedualed_payments, id: :uuid do |t|
      t.date :charge_period_start_date
      t.date :charge_period_end_date
      t.integer :amount_due
      t.date :due_date
      t.references :lease, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
