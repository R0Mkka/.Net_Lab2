using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Lab2.Helpers;
using Lab2.Models;

namespace Lab2.Controllers
{
    [Route("first-task")]
    public class FirstTaskController : Controller
    {
        [HttpPost("sqrtn")]
        public IActionResult SqrtN([FromBody]DataObject data)
        {
            if (ModelState.IsValid)
            {
                String result = Helper.Sqrt(data.degree, data.targetNumber, false);

                ResultObject resultObject = new ResultObject(result);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }

        [HttpPost("sqrtpow")]
        public IActionResult SqrtPow([FromBody]DataObject data)
        {
            if (ModelState.IsValid)
            {
                String result = Helper.Sqrt(data.degree, data.targetNumber, true);

                ResultObject resultObject = new ResultObject(result);

                return Ok(resultObject);
            }

            return BadRequest(ModelState);
        }
    }
}
