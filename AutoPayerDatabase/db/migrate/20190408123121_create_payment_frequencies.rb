class CreatePaymentFrequencies < ActiveRecord::Migration[5.2]
  def change
    create_table :payment_frequencies, id: :uuid do |t|
      t.string :description

      t.timestamps
    end
  end
end
