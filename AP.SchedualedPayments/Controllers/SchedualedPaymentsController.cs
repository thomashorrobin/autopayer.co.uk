using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AP.SchedualedPayments.Services;

namespace AP.SchedualedPayments.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
	public class SchedualedPaymentsMonthlyController : ControllerBase
    {
		private readonly ISchedualedPaymentsGenerator _schedualedPaymentsGenerator;

		public SchedualedPaymentsMonthlyController(ISchedualedPaymentsGenerator schedualedPaymentsGenerator)
		{
			this._schedualedPaymentsGenerator = schedualedPaymentsGenerator;
		}
        
		[HttpPost]
		public ActionResult<IEnumerable<SchedualedPayment>> Post([FromBody] SchedualedPaymentsMonthlyRequest req)
        {
			return this._schedualedPaymentsGenerator.GenerateMonthlySchedualedPayments(req.StartDate, req.EndDate, req.MonthlyAmount).ToList();
        }
	}

    [Route("api/[controller]")]
    [ApiController]
    public class SchedualedPaymentsWeeklyController : ControllerBase
	{
        private readonly ISchedualedPaymentsGenerator _schedualedPaymentsGenerator;

		public SchedualedPaymentsWeeklyController(ISchedualedPaymentsGenerator schedualedPaymentsGenerator)
        {
            this._schedualedPaymentsGenerator = schedualedPaymentsGenerator;
        }

		[HttpPost]
		public ActionResult<IEnumerable<SchedualedPayment>> Get(SchedualedPaymentsWeeklyRequest req)
        {
			return this._schedualedPaymentsGenerator.GenerateWeeklySchedualedPayments(req.StartDate, req.EndDate, req.WeeklyAmount).ToList();
        }
    }

    public class SchedualedPaymentsMonthlyRequest
    {
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

        public double MonthlyAmount
		{
			get;
			set;
		}
	}

    public class SchedualedPaymentsWeeklyRequest
    {
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

        public double WeeklyAmount
        {
            get;
            set;
        }
    }
}
