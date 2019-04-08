class LeaseNote < ApplicationRecord
  belongs_to :user
  belongs_to :lease
end
