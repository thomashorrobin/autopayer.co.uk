class PaymentFrequenciesController < ApplicationController
  before_action :set_payment_frequency, only: [:show, :edit, :update, :destroy]

  # GET /payment_frequencies
  # GET /payment_frequencies.json
  def index
    @payment_frequencies = PaymentFrequency.all
  end

  # GET /payment_frequencies/1
  # GET /payment_frequencies/1.json
  def show
  end

  # GET /payment_frequencies/new
  def new
    @payment_frequency = PaymentFrequency.new
  end

  # GET /payment_frequencies/1/edit
  def edit
  end

  # POST /payment_frequencies
  # POST /payment_frequencies.json
  def create
    @payment_frequency = PaymentFrequency.new(payment_frequency_params)

    respond_to do |format|
      if @payment_frequency.save
        format.html { redirect_to @payment_frequency, notice: 'Payment frequency was successfully created.' }
        format.json { render :show, status: :created, location: @payment_frequency }
      else
        format.html { render :new }
        format.json { render json: @payment_frequency.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /payment_frequencies/1
  # PATCH/PUT /payment_frequencies/1.json
  def update
    respond_to do |format|
      if @payment_frequency.update(payment_frequency_params)
        format.html { redirect_to @payment_frequency, notice: 'Payment frequency was successfully updated.' }
        format.json { render :show, status: :ok, location: @payment_frequency }
      else
        format.html { render :edit }
        format.json { render json: @payment_frequency.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /payment_frequencies/1
  # DELETE /payment_frequencies/1.json
  def destroy
    @payment_frequency.destroy
    respond_to do |format|
      format.html { redirect_to payment_frequencies_url, notice: 'Payment frequency was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment_frequency
      @payment_frequency = PaymentFrequency.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def payment_frequency_params
      params.require(:payment_frequency).permit(:description)
    end
end
