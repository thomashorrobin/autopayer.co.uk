class CreateLeases < ActiveRecord::Migration[5.2]
  def change
    create_table :leases, id: :uuid do |t|
      t.references :address, type: :uuid, foreign_key: true
      t.references :payment_frequency, type: :uuid, foreign_key: true
      t.integer :rent
      t.date :start_date
      t.date :end_date
      t.string :name

      t.timestamps
    end
  end
end
