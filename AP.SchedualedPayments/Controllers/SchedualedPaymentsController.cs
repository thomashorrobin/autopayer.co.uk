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
		public ActionResult<IEnumerable<SchedualedPayment>> Post([FromBody] SchedualedPaymentsRequest req)
        {
			return this._schedualedPaymentsGenerator.GenerateMonthlySchedualedPayments(req.StartDate, req.EndDate, req.MonthlyAmount).ToList();
        }
	}

  //  [Route("api/[controller]")]
  //  [ApiController]
  //  public class SchedualedPaymentsWeeklyController : ControllerBase
  //  {
  //      [HttpGet]
		//public ActionResult<IEnumerable<SchedualedPayment>> Get(SchedualedPaymentsRequest schedualedPaymentsWeeklyRequest)
    //    {
    //        return new string[] { "value1", "value2" };
    //    }
    //}

    public class SchedualedPaymentsRequest
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
}
