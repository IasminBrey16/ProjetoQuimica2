using System.Collections.Generic;
using System.Linq;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/element")]
    public class ElementController : ControllerBase
    {
        private readonly DataContext _context;
        public ElementController(DataContext context) =>
            _context = context;

        // GET: /api/element/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Elements.ToList());

        // POST: /api/element/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Element element)
        {
            string ed = EletronicDistribution.Calcular(element.Z);
            element.EletronicConfiguration = ed;
            element.Family = _context.Families.Find(element.FamilyId);
            _context.Elements.Add(element);
            _context.SaveChanges();
            return Created("", element);
        }

        // GET: /api/element/search/{symbol}
        [HttpGet]
        [Route("search/{symbol}")]
        public IActionResult Search([FromRoute] string symbol)
        {
            Element element = _context.Elements.
                FirstOrDefault(f => f.Symbol.Equals(symbol));
            return element != null ? Ok(element) : NotFound();
        }

        // DELETE: /api/element/delete/{id}
        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            Element element = _context.Elements.Find(id);
            if (element != null)
            {
                _context.Elements.Remove(element);
                _context.SaveChanges();
                return Ok(element);
            }
            return NotFound();
        }

        [HttpGet]
        [Route("filter/{familyId}")]
        public IActionResult Filter([FromRoute] int familyId)
        {            
            return Ok(_context.Elements.Where
                (e => e.FamilyId == familyId).ToList());
        } 

        // PATCH: /api/element/update
        [HttpPatch]
        [Route("update")]
        public IActionResult Update([FromBody] Element element)
        {
            try
            {
                _context.Elements.Update(element);
                _context.SaveChanges();
                return Ok(element);
            }
            catch
            {
                return NotFound();
            }
        }
    }
}