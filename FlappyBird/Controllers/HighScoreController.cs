using Microsoft.AspNetCore.Mvc;

namespace FlappyBird.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HighScoreController : ControllerBase
    {
        
        
        [HttpGet]
        public IActionResult Get()
        {
            
            var highScore = new { user = "Gemini", score = 100 };
            return Ok(highScore);
        }
    }
}