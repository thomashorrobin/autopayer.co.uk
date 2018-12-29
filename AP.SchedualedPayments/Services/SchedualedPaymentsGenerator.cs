using System;
using System.Collections.Generic;
using System.Linq;

namespace AP.SchedualedPayments.Services
{
    public class SchedualedPaymentsGenerator : ISchedualedPaymentsGenerator
	{      
		public IEnumerable<SchedualedPayment> GenerateMonthlySchedualedPayments(DateTime startDate, DateTime endDate, double monthlyRent)
		{
			if (startDate > endDate)
			{
				throw new Exception("enddate can not be before startdate");
			}

			List<SchedualedPayment> schedualedPayments = new List<SchedualedPayment>();

			DateTime floatingDate = startDate;

            do
			{
				var eom = floatingDate.GetLastDayOfMonth();
				var nextEndDate = smallestDate(eom, endDate);
				SchedualedPayment schedualedPayment = new SchedualedPayment(floatingDate, nextEndDate, calculateRent(floatingDate, nextEndDate, monthlyRent));
				schedualedPayments.Add(schedualedPayment);
				floatingDate = nextEndDate.Add(new TimeSpan(1, 0, 0, 0));
			} while (floatingDate < endDate);

			return schedualedPayments;
		}

		private DateTime smallestDate(params DateTime[] dates)
		{
			return dates.Min();
		}

		private double calculateRent(DateTime startDate, DateTime endDate, double monthlyRent)
		{
			if (startDate.Year != endDate.Year || startDate.Month != endDate.Month)
			{
				throw new Exception();
			}

			int daysInMonth = DateTime.DaysInMonth(startDate.Year, startDate.Month);
			int days = (endDate - startDate).Add(new TimeSpan(1, 0, 0, 0)).Days;
			return monthlyRent * days / daysInMonth;
		}
    }

    public static class Extensions
	{      
        public static DateTime GetLastDayOfMonth(this DateTime dateTime)
        {
            return new DateTime(dateTime.Year, dateTime.Month, DateTime.DaysInMonth(dateTime.Year, dateTime.Month));
        }
	}
}
