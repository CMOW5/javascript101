var link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

/*  append the new paragraph at the end of the section */
var sect = document.querySelector('section');
var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

/* append a text node to the end of the linkPara */
var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);

/* manipulating styles */
para.setAttribute('class', 'highlight');

/* you can do this also */
/*
  para.style.color = 'white';
  para.style.backgroundColor = 'black';
  para.style.padding = '10px';
  para.style.width = '250px';
  para.style.textAlign = 'center';
*/