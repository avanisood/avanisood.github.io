// Logs every click and page view with timestamp and object type
document.addEventListener("DOMContentLoaded", () => {
    console.log(`[${new Date().toISOString()}] view, page loaded`);
  
    document.body.addEventListener("click", (e) => {
      let target = e.target;
      let type = "unknown";
  
      if (target.tagName === "IMG") type = "image";
      else if (target.tagName === "A") type = "link";
      else if (target.tagName === "BUTTON") type = "button";
      else if (target.tagName === "P") type = "text";
      else type = target.tagName.toLowerCase();
  
      console.log(`[${new Date().toISOString()}] click, ${type}`);
    });
  });

  const sections = document.querySelectorAll('section');

  const showOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  };
  
  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);

  function classify(element){
    if(element.tagname === 'IMG') return 'image';
    if(element.tagname === 'INPUT' && element.type === 'text') return 'text input';
    if(element.tagname === 'TEXTAREA') return 'text area';
    if(element.tagname === 'SELECT') return 'drop-down';
    if(element.tagname === 'BUTTON') return 'button';
    if(element.tagname === 'A') return 'link';
    if(element.tagname.startsWith('H')) return 'heading';
    if(element.tagname === 'P') return 'paragraph';
    if(element.tagname === 'DIV') return 'div container';
    return element.tagName.toLowerCase();
  }

    window.addEventListener('load', () => {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp} , view , entire page`);
    });
  
    // Log click events
    document.addEventListener('click', function(event) {
      const timestamp = new Date().toISOString();
      const element = event.target;
      const classification = classify(element);
      console.log(`${timestamp} , click , ${classification}`);
    });

    function readInput(){
      const input = document.getElementById('userInput').value;
      console.log("User message: ", input);
    }
  
  
  