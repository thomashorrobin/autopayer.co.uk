require "application_system_test_case"

class LeasesTest < ApplicationSystemTestCase
  setup do
    @lease = leases(:one)
  end

  test "visiting the index" do
    visit leases_url
    assert_selector "h1", text: "Leases"
  end

  test "creating a Lease" do
    visit leases_url
    click_on "New Lease"

    fill_in "Address", with: @lease.address_id
    fill_in "End date", with: @lease.end_date
    fill_in "Name", with: @lease.name
    fill_in "Payment frequency", with: @lease.payment_frequency_id
    fill_in "Rent", with: @lease.rent
    fill_in "Start date", with: @lease.start_date
    click_on "Create Lease"

    assert_text "Lease was successfully created"
    click_on "Back"
  end

  test "updating a Lease" do
    visit leases_url
    click_on "Edit", match: :first

    fill_in "Address", with: @lease.address_id
    fill_in "End date", with: @lease.end_date
    fill_in "Name", with: @lease.name
    fill_in "Payment frequency", with: @lease.payment_frequency_id
    fill_in "Rent", with: @lease.rent
    fill_in "Start date", with: @lease.start_date
    click_on "Update Lease"

    assert_text "Lease was successfully updated"
    click_on "Back"
  end

  test "destroying a Lease" do
    visit leases_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Lease was successfully destroyed"
  end
end
