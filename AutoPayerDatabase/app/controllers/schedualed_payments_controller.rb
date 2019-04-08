class SchedualedPaymentsController < ApplicationController
  before_action :set_schedualed_payment, only: [:show, :edit, :update, :destroy]

  # GET /schedualed_payments
  # GET /schedualed_payments.json
  def index
    @schedualed_payments = SchedualedPayment.all
  end

  # GET /schedualed_payments/1
  # GET /schedualed_payments/1.json
  def show
  end

  # GET /schedualed_payments/new
  def new
    @schedualed_payment = SchedualedPayment.new
  end

  # GET /schedualed_payments/1/edit
  def edit
  end

  # POST /schedualed_payments
  # POST /schedualed_payments.json
  def create
    @schedualed_payment = SchedualedPayment.new(schedualed_payment_params)

    respond_to do |format|
      if @schedualed_payment.save
        format.html { redirect_to @schedualed_payment, notice: 'Schedualed payment was successfully created.' }
        format.json { render :show, status: :created, location: @schedualed_payment }
      else
        format.html { render :new }
        format.json { render json: @schedualed_payment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /schedualed_payments/1
  # PATCH/PUT /schedualed_payments/1.json
  def update
    respond_to do |format|
      if @schedualed_payment.update(schedualed_payment_params)
        format.html { redirect_to @schedualed_payment, notice: 'Schedualed payment was successfully updated.' }
        format.json { render :show, status: :ok, location: @schedualed_payment }
      else
        format.html { render :edit }
        format.json { render json: @schedualed_payment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /schedualed_payments/1
  # DELETE /schedualed_payments/1.json
  def destroy
    @schedualed_payment.destroy
    respond_to do |format|
      format.html { redirect_to schedualed_payments_url, notice: 'Schedualed payment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_schedualed_payment
      @schedualed_payment = SchedualedPayment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def schedualed_payment_params
      params.require(:schedualed_payment).permit(:charge_period_start_date, :charge_period_end_date, :amount_due, :due_date, :lease_id)
    end
end
