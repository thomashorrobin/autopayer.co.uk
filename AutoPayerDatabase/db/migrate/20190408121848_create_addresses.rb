class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses, id: :uuid do |t|
      t.string :street_name
      t.string :post_code

      t.timestamps
    end
  end
end
