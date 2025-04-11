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
  
  