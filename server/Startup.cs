using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace server
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }

        private List<Address> BuildDemoAddresses() {
            List<Address> addresses = new List<Address>();
            Address adressOne = new Address{ FullAddress = "38 Greenfield Gardens" };
            Address adressTwo = new Address{ FullAddress = "Flat 38, Thornaby House" };
            // adressOne.Leases.Add(new Leases{});
            addresses.Add(adressOne);
            addresses.Add(adressTwo);
            return addresses;
        }
    }

    class Address
    {
        public string FullAddress { get; set; }
        public List<Leases> Leases { get; set; }
    }

    class Leases
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }

    class SchedulePayments
    {
        public DateTime DueDate { get; set; }
        public int Days { get; set; }
        public double Amount { get; set; }
        public Leases Lease { get; set; }
    }
    class Payments
    {
        public double Amount { get; set; }
        public SchedulePayments SchedulePayments { get; set; }
        public DateTime Date { get; set; }
    }
}
