class CreateLeaseNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :lease_notes, id: :uuid do |t|
      t.string :note
      t.references :user, type: :uuid, foreign_key: true
      t.boolean :private
      t.references :lease, type: :uuid, foreign_key: true

      t.timestamps
    end
  end
end
