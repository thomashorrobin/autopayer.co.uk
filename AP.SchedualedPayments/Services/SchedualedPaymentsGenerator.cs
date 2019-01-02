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
				SchedualedPayment schedualedPayment = new SchedualedPayment(floatingDate, nextEndDate, calculateMonthlyRent(floatingDate, nextEndDate, monthlyRent));
				schedualedPayments.Add(schedualedPayment);
				floatingDate = nextEndDate.Add(new TimeSpan(1, 0, 0, 0));
			} while (floatingDate < endDate);

			return schedualedPayments;
		}

        public IEnumerable<SchedualedPayment> GenerateWeeklySchedualedPayments(DateTime startDate, DateTime endDate, double weeklyRent)
		{
            if (startDate > endDate)
            {
                throw new Exception("enddate can not be before startdate");
			}

            List<SchedualedPayment> schedualedPayments = new List<SchedualedPayment>();

            DateTime nextStart = startDate;

            do
			{
				var endOfWeek = smallestDate(nextStart + TimeSpan.FromDays(6), endDate);
				SchedualedPayment schedualedPayment = new SchedualedPayment(nextStart, endOfWeek, calculateWeeklyRent(nextStart, endOfWeek, weeklyRent));
				schedualedPayments.Add(schedualedPayment);
				nextStart = endDate + TimeSpan.FromDays(1);
			} while (nextStart < endDate);

			return schedualedPayments;
		}

		private DateTime smallestDate(params DateTime[] dates)
		{
			return dates.Min();
		}

		private double calculateMonthlyRent(DateTime startDate, DateTime endDate, double monthlyRent)
		{
			if (startDate.Year != endDate.Year || startDate.Month != endDate.Month)
			{
				throw new Exception("start date and end date must be within the same month");
			}

			int daysInMonth = DateTime.DaysInMonth(startDate.Year, startDate.Month);
			int days = (endDate - startDate).Add(new TimeSpan(1, 0, 0, 0)).Days;
			return monthlyRent * days / daysInMonth;
		}

        private double calculateWeeklyRent(DateTime startDate, DateTime endDate, double weeklyRent)
        {
			int days = (endDate - startDate).Days + 1;

            if (days > 7)
			{
				throw new Exception("days can't be greater than 7");
			}

			return weeklyRent * days / 7;
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
