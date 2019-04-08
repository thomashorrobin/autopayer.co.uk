class Lease < ApplicationRecord
  belongs_to :address
  belongs_to :payment_frequency
end
