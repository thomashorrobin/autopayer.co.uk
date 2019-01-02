using System;
using System.Collections.Generic;

namespace AP.SchedualedPayments.Services
{
    public interface ISchedualedPaymentsGenerator
    {
		IEnumerable<SchedualedPayment> GenerateMonthlySchedualedPayments(DateTime startDate, DateTime endDate, double monthlyRent);
		IEnumerable<SchedualedPayment> GenerateWeeklySchedualedPayments(DateTime startDate, DateTime endDate, double weeklyRent);
    }
}