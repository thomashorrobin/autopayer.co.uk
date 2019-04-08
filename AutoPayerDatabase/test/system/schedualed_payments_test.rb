require "application_system_test_case"

class SchedualedPaymentsTest < ApplicationSystemTestCase
  setup do
    @schedualed_payment = schedualed_payments(:one)
  end

  test "visiting the index" do
    visit schedualed_payments_url
    assert_selector "h1", text: "Schedualed Payments"
  end

  test "creating a Schedualed payment" do
    visit schedualed_payments_url
    click_on "New Schedualed Payment"

    fill_in "Amount due", with: @schedualed_payment.amount_due
    fill_in "Charge period end date", with: @schedualed_payment.charge_period_end_date
    fill_in "Charge period start date", with: @schedualed_payment.charge_period_start_date
    fill_in "Due date", with: @schedualed_payment.due_date
    fill_in "Lease", with: @schedualed_payment.lease_id
    click_on "Create Schedualed payment"

    assert_text "Schedualed payment was successfully created"
    click_on "Back"
  end

  test "updating a Schedualed payment" do
    visit schedualed_payments_url
    click_on "Edit", match: :first

    fill_in "Amount due", with: @schedualed_payment.amount_due
    fill_in "Charge period end date", with: @schedualed_payment.charge_period_end_date
    fill_in "Charge period start date", with: @schedualed_payment.charge_period_start_date
    fill_in "Due date", with: @schedualed_payment.due_date
    fill_in "Lease", with: @schedualed_payment.lease_id
    click_on "Update Schedualed payment"

    assert_text "Schedualed payment was successfully updated"
    click_on "Back"
  end

  test "destroying a Schedualed payment" do
    visit schedualed_payments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Schedualed payment was successfully destroyed"
  end
end
