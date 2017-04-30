using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using RhodesGallery.WebServices;
using System;

namespace RhodesGallery.WebServices
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddDistributedMemoryCache();
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(10);
                options.CookieHttpOnly = true;
            });

            // Using app configuration to populate the db settings class.
            //services.Configure<DbSettings>(config =>
            //{
            //    config.ConnectionString = this.Configuration.GetSection("DbSettings:ConnectionString").Value;
            //    config.DatabaseName = this.Configuration.GetSection("DbSettings:ConnectionString").Value;
            //});
            DbSettings.ConnectionString = this.Configuration.GetSection("DbSettings:ConnectionString").Value;
            DbSettings.DatabaseName = this.Configuration.GetSection("DbSettings:DatabaseName").Value;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app
                .UseExceptionHandler()
                .UseSession()
                .UseMvc();
        }
    }
}
