require 'test_helper'

class LeaseNotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lease_note = lease_notes(:one)
  end

  test "should get index" do
    get lease_notes_url
    assert_response :success
  end

  test "should get new" do
    get new_lease_note_url
    assert_response :success
  end

  test "should create lease_note" do
    assert_difference('LeaseNote.count') do
      post lease_notes_url, params: { lease_note: { lease_id: @lease_note.lease_id, note: @lease_note.note, private: @lease_note.private, user_id: @lease_note.user_id } }
    end

    assert_redirected_to lease_note_url(LeaseNote.last)
  end

  test "should show lease_note" do
    get lease_note_url(@lease_note)
    assert_response :success
  end

  test "should get edit" do
    get edit_lease_note_url(@lease_note)
    assert_response :success
  end

  test "should update lease_note" do
    patch lease_note_url(@lease_note), params: { lease_note: { lease_id: @lease_note.lease_id, note: @lease_note.note, private: @lease_note.private, user_id: @lease_note.user_id } }
    assert_redirected_to lease_note_url(@lease_note)
  end

  test "should destroy lease_note" do
    assert_difference('LeaseNote.count', -1) do
      delete lease_note_url(@lease_note)
    end

    assert_redirected_to lease_notes_url
  end
end
