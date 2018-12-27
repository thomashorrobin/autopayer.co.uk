using System;
namespace AP.SchedualedPayments.Services
{
	public class SchedualedPayment
    {
		public SchedualedPayment(DateTime startDate, DateTime endDate, double amount) {
			this.StartDate = startDate;
			this.EndDate = endDate;
			this.PartDateStart = false;
			this.PartDateEnd = false;
			this.AmountDue = amount;
			this.DueDate = endDate;
		}

		public DateTime StartDate
		{
			get;
			set;
		}

		public DateTime EndDate
		{
			get;
			set;
		}

        public bool PartDateStart
		{
			get;
			set;
		}

        public bool PartDateEnd
        {
            get;
            set;
        }

		public DateTime DueDate
		{
			get;
			set;
		}

        public double AmountDue
		{
			get;
			set;
		}
	}
}
