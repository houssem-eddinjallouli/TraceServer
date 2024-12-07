using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TraceServerAPI.Models;

namespace TraceServerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionEventController : ControllerBase
    {
        private readonly ActionEventContext _context;

        public ActionEventController(ActionEventContext context)
        {
            _context = context;
        }

        // GET: api/ActionEvent
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActionEvent>>> GetactionEvents()
        {
            return await _context.actionEvents.ToListAsync();
        }

        // GET: api/ActionEvent/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ActionEvent>> GetActionEvent(int id)
        {
            var actionEvent = await _context.actionEvents.FindAsync(id);

            if (actionEvent == null)
            {
                return NotFound();
            }

            return actionEvent;
        }

        // PUT: api/ActionEvent/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutActionEvent(int id, ActionEvent actionEvent)
        {
            if (id != actionEvent.ActionEventId)
            {
                return BadRequest();
            }

            _context.Entry(actionEvent).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ActionEventExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return Ok(await _context.actionEvents.ToListAsync());
        }

        // POST: api/ActionEvent
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ActionEvent>> PostActionEvent(ActionEvent actionEvent)
        {
            _context.actionEvents.Add(actionEvent);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetActionEvent", new { id = actionEvent.ActionEventId }, actionEvent);
            return Ok(await _context.actionEvents.ToListAsync());
        }

        // DELETE: api/ActionEvent/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActionEvent(int id)
        {
            var actionEvent = await _context.actionEvents.FindAsync(id);
            if (actionEvent == null)
            {
                return NotFound();
            }

            _context.actionEvents.Remove(actionEvent);
            await _context.SaveChangesAsync();

            //return NoContent();
            return Ok(await _context.actionEvents.ToListAsync());
        }

        private bool ActionEventExists(int id)
        {
            return _context.actionEvents.Any(e => e.ActionEventId == id);
        }
    }
}
