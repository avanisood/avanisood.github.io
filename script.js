// Logs every click and page view with timestamp and object type

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
    if(element.tagName === 'IMG') return 'image';
    if(element.tagName === 'INPUT' && element.type === 'text') return 'text input';
    if(element.tagName === 'TEXTAREA') return 'text area';
    if(element.tagName === 'SELECT') return 'drop-down';
    if(element.tagName === 'BUTTON') return 'button';
    if(element.tagName === 'A') return 'link';
    if(element.tagName.startsWith('H')) return 'heading';
    if(element.tagName === 'P') return 'paragraph';
    if(element.tagName === 'DIV') return 'div container';
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

    //Calculate and display number of letters, words, spaces, newlines and special symbols

    function syms_and_lines(input){
      let linecount = 0;
       lines = (input.match(/\n/g));
       if(lines == NULL){
          linecount = 0;
       }
       else{
          linecount = lines.length();
       }
      
       let symcount = 0;
       symbols = (input.match(/[^a-zA-Z0-9 \n]/g));
       if(symbols == NULL){
          symcount = 0;
       }
       else{
        symcount = lines.length();
       }
       console.log("Number of lines: ", linecount);
       console.log("Number of symbols: ", symcount);
    }
  
    function parse(){
      const input = document.getElementById('userInput').value;
      let letters = words = spaces = lines = symbols = 0;
      const sep = input.split(" ");
      words = sep.length
      spaces = words - 1;

      let text = (input.match(/\n/g));
      if(text){
        lines = text.length;
      }

      text = (input.match(/[^a-zA-Z0-9 \n]/g));
      if(text){
        symbols = text.length;
      }

      text = (input.match(/[a-zA-Z]/g));
      if(text){
        letters = text.length;
      }

    const tokens = input.toLowerCase().replace(/[^a-zA-Z\s]/g, "").split(/\s+/);

    const pronouns = [
      "i", "me", "my", "mine", "myself",
      "you", "your", "yours", "yourself", "yourselves",
      "he", "him", "his", "himself",
      "she", "her", "hers", "herself",
      "it", "its", "itself",
      "we", "us", "our", "ours", "ourselves",
      "they", "them", "their", "theirs", "themselves"
    ];

    const pronounCounts = tokens.filter(t => pronouns.includes(t))
        .reduce((c, p) => ({ ...c, [p]: (c[p] || 0) + 1 }), {});
    const pronounOut = Object.entries(pronounCounts).map(([p, c]) => `${p}: ${c}`);

    // Prepositions
    const preps = [
      "about", "above", "across", "after", "against", "along", "among", "around",
      "at", "before", "behind", "below", "beneath", "beside", "between", "beyond",
      "by", "down", "during", "except", "for", "from", "in", "inside", "into",
      "like", "near", "of", "off", "on", "onto", "out", "outside", "over",
      "past", "since", "through", "to", "toward", "under", "until", "up",
      "upon", "with", "within", "without"
  ];
    const prepCounts = tokens.filter(t => preps.includes(t))
        .reduce((c, p) => ({ ...c, [p]: (c[p] || 0) + 1 }), {});
    const prepOut = Object.entries(prepCounts).map(([p, c]) => `${p}: ${c}`);

    // Articles
    const articles = ["a", "an", "the"];
    const articleCounts = tokens.filter(t => articles.includes(t))
        .reduce((c, a) => ({ ...c, [a]: (c[a] || 0) + 1 }), {});
    const articleOut = Object.entries(articleCounts).map(([a, c]) => `${a}: ${c}`);

      console.log("Number of letters: ", letters);
      console.log("Number of words: ", words);
      console.log("Number of spaces: ", spaces);
      console.log("Number of lines: ", lines);
      console.log("Number of symbols: ", symbols);
      console.log("Number of pronouns:", pronounOut.length);
      console.log("Number of prepositions:", prepOut.length);
      console.log("Number of articles:", articleOut.length);

      if(words < 10000){
        console.log("Warning: less than 10000 words entered!");
      }
    }

    function readInput(){
      const input = document.getElementById('userInput').value;
      console.log("User message: ", input);
      parse();
    }
  
  