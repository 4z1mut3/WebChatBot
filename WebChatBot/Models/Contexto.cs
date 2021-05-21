using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebChatBot.Models
{
    public class Contexto : DbContext
    {
        /* public Contexto(DbContextOptions<Contexto> options) : base(options)
         {
             Database.EnsureCreated();
         }*/

        public DbSet<RespostaChat> RespostaChat { get; set; }

    }
}