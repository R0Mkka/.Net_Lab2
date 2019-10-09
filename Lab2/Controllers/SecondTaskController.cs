using System;
using Microsoft.AspNetCore.Mvc;
using Lab2.Helpers;
using Lab2.Models;

namespace Lab2.Controllers
{
    [Route("second-task")]
    public class SampleDataController : Controller
    {
        [HttpPost("convert")]
        public IActionResult SqrtN([FromBody]NumberObject data)
        {
            if (ModelState.IsValid)
            {
                String result = Helper.convert(data.unsignedNumber);

                ResultObject resultObject = new ResultObject(result);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }
    }
}
