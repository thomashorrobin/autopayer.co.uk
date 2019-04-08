class LeaseNotesController < ApplicationController
  before_action :set_lease_note, only: [:show, :edit, :update, :destroy]

  # GET /lease_notes
  # GET /lease_notes.json
  def index
    @lease_notes = LeaseNote.all
  end

  # GET /lease_notes/1
  # GET /lease_notes/1.json
  def show
  end

  # GET /lease_notes/new
  def new
    @lease_note = LeaseNote.new
  end

  # GET /lease_notes/1/edit
  def edit
  end

  # POST /lease_notes
  # POST /lease_notes.json
  def create
    @lease_note = LeaseNote.new(lease_note_params)

    respond_to do |format|
      if @lease_note.save
        format.html { redirect_to @lease_note, notice: 'Lease note was successfully created.' }
        format.json { render :show, status: :created, location: @lease_note }
      else
        format.html { render :new }
        format.json { render json: @lease_note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /lease_notes/1
  # PATCH/PUT /lease_notes/1.json
  def update
    respond_to do |format|
      if @lease_note.update(lease_note_params)
        format.html { redirect_to @lease_note, notice: 'Lease note was successfully updated.' }
        format.json { render :show, status: :ok, location: @lease_note }
      else
        format.html { render :edit }
        format.json { render json: @lease_note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /lease_notes/1
  # DELETE /lease_notes/1.json
  def destroy
    @lease_note.destroy
    respond_to do |format|
      format.html { redirect_to lease_notes_url, notice: 'Lease note was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_lease_note
      @lease_note = LeaseNote.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def lease_note_params
      params.require(:lease_note).permit(:note, :user_id, :private, :lease_id)
    end
end
