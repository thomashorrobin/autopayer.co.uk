using System;
namespace AP.SchedualedPayments.Services
{
	public class InvalidSchedualTimespanExcaption : Exception
    {
		public DateTime startDate;
		public DateTime endDate;

		public InvalidSchedualTimespanExcaption(DateTime startDate, DateTime endDate)
        {
			this.startDate = startDate;
			this.endDate = endDate;
        }
    }
}
