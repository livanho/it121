let firstName = 'Livan';
let lastName = 'H';
let yearsOfStudy = 'one year';
let goal = 'to become a full stack developer';

let p = document.getElementsByTagName('p');
p[0].innerHTML = `My name is ${firstName} ${lastName}. I have been at SCC for ${yearsOfStudy} and plan to ${goal} after completing my courses.`;