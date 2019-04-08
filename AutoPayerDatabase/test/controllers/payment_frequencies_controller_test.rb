require 'test_helper'

class PaymentFrequenciesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @payment_frequency = payment_frequencies(:one)
  end

  test "should get index" do
    get payment_frequencies_url
    assert_response :success
  end

  test "should get new" do
    get new_payment_frequency_url
    assert_response :success
  end

  test "should create payment_frequency" do
    assert_difference('PaymentFrequency.count') do
      post payment_frequencies_url, params: { payment_frequency: { description: @payment_frequency.description } }
    end

    assert_redirected_to payment_frequency_url(PaymentFrequency.last)
  end

  test "should show payment_frequency" do
    get payment_frequency_url(@payment_frequency)
    assert_response :success
  end

  test "should get edit" do
    get edit_payment_frequency_url(@payment_frequency)
    assert_response :success
  end

  test "should update payment_frequency" do
    patch payment_frequency_url(@payment_frequency), params: { payment_frequency: { description: @payment_frequency.description } }
    assert_redirected_to payment_frequency_url(@payment_frequency)
  end

  test "should destroy payment_frequency" do
    assert_difference('PaymentFrequency.count', -1) do
      delete payment_frequency_url(@payment_frequency)
    end

    assert_redirected_to payment_frequencies_url
  end
end
