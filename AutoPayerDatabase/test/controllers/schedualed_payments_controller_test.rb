require 'test_helper'

class SchedualedPaymentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @schedualed_payment = schedualed_payments(:one)
  end

  test "should get index" do
    get schedualed_payments_url
    assert_response :success
  end

  test "should get new" do
    get new_schedualed_payment_url
    assert_response :success
  end

  test "should create schedualed_payment" do
    assert_difference('SchedualedPayment.count') do
      post schedualed_payments_url, params: { schedualed_payment: { amount_due: @schedualed_payment.amount_due, charge_period_end_date: @schedualed_payment.charge_period_end_date, charge_period_start_date: @schedualed_payment.charge_period_start_date, due_date: @schedualed_payment.due_date, lease_id: @schedualed_payment.lease_id } }
    end

    assert_redirected_to schedualed_payment_url(SchedualedPayment.last)
  end

  test "should show schedualed_payment" do
    get schedualed_payment_url(@schedualed_payment)
    assert_response :success
  end

  test "should get edit" do
    get edit_schedualed_payment_url(@schedualed_payment)
    assert_response :success
  end

  test "should update schedualed_payment" do
    patch schedualed_payment_url(@schedualed_payment), params: { schedualed_payment: { amount_due: @schedualed_payment.amount_due, charge_period_end_date: @schedualed_payment.charge_period_end_date, charge_period_start_date: @schedualed_payment.charge_period_start_date, due_date: @schedualed_payment.due_date, lease_id: @schedualed_payment.lease_id } }
    assert_redirected_to schedualed_payment_url(@schedualed_payment)
  end

  test "should destroy schedualed_payment" do
    assert_difference('SchedualedPayment.count', -1) do
      delete schedualed_payment_url(@schedualed_payment)
    end

    assert_redirected_to schedualed_payments_url
  end
end
