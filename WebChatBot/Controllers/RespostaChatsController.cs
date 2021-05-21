using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using WebChatBot.Models;

namespace WebChatBot.Controllers
{
    public class RespostaChatsController : Controller
    {
        private Contexto db = new Contexto();

        // GET: RespostaChats
        public ActionResult Index()
        {
            return View(db.RespostaChat.ToList());
        }

        // GET: RespostaChats/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RespostaChat respostaChat = db.RespostaChat.Find(id);
            if (respostaChat == null)
            {
                return HttpNotFound();
            }
            return View(respostaChat);
        }

        // GET: RespostaChats/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: RespostaChats/Create
        // Para proteger-se contra ataques de excesso de postagem, ative as propriedades específicas às quais deseja se associar. 
        // Para obter mais detalhes, confira https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Resposta,Mensagem")] RespostaChat respostaChat)
        {
            if (ModelState.IsValid)
            {
                db.RespostaChat.Add(respostaChat);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(respostaChat);
        }

        // GET: RespostaChats/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RespostaChat respostaChat = db.RespostaChat.Find(id);
            if (respostaChat == null)
            {
                return HttpNotFound();
            }
            return View(respostaChat);
        }

        // POST: RespostaChats/Edit/5
        // Para proteger-se contra ataques de excesso de postagem, ative as propriedades específicas às quais deseja se associar. 
        // Para obter mais detalhes, confira https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Resposta,Mensagem")] RespostaChat respostaChat)
        {
            if (ModelState.IsValid)
            {
                db.Entry(respostaChat).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(respostaChat);
        }

        // GET: RespostaChats/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RespostaChat respostaChat = db.RespostaChat.Find(id);
            if (respostaChat == null)
            {
                return HttpNotFound();
            }
            return View(respostaChat);
        }

        // POST: RespostaChats/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            RespostaChat respostaChat = db.RespostaChat.Find(id);
            db.RespostaChat.Remove(respostaChat);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [HttpPost]
        [Route("api/Chat")]
        public async Task<JsonResult> Chat(RequestApi request)
        {
            var respostaChat = await db.RespostaChat.Where(m => m.Mensagem.ToUpper().Contains(request.mensagem.ToUpper())).FirstOrDefaultAsync();

            if (respostaChat != null)
            {
                var resposta = new ResponseApi { resposta = respostaChat.Resposta };

                return Json(resposta);
            }
            else
            {
                var resposta = new ResponseApi { resposta = "Não entendemos sua pergunta. Poderia reformular?" };
                return Json(resposta);
            }
        }
    }
}
