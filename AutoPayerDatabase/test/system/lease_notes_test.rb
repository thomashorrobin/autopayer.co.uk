require "application_system_test_case"

class LeaseNotesTest < ApplicationSystemTestCase
  setup do
    @lease_note = lease_notes(:one)
  end

  test "visiting the index" do
    visit lease_notes_url
    assert_selector "h1", text: "Lease Notes"
  end

  test "creating a Lease note" do
    visit lease_notes_url
    click_on "New Lease Note"

    fill_in "Lease", with: @lease_note.lease_id
    fill_in "Note", with: @lease_note.note
    check "Private" if @lease_note.private
    fill_in "User", with: @lease_note.user_id
    click_on "Create Lease note"

    assert_text "Lease note was successfully created"
    click_on "Back"
  end

  test "updating a Lease note" do
    visit lease_notes_url
    click_on "Edit", match: :first

    fill_in "Lease", with: @lease_note.lease_id
    fill_in "Note", with: @lease_note.note
    check "Private" if @lease_note.private
    fill_in "User", with: @lease_note.user_id
    click_on "Update Lease note"

    assert_text "Lease note was successfully updated"
    click_on "Back"
  end

  test "destroying a Lease note" do
    visit lease_notes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Lease note was successfully destroyed"
  end
end
