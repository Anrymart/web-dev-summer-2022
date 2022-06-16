/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

localStorage.setItem('myCat', 'Tom');

const cat = localStorage.getItem('myCat');

localStorage.removeItem('myCat');

localStorage.clear();

/**
 * Task:
 * Ask user for a name, save it into localStorage
 * and display on the page. If user opens a page
 * and the name is already in localStorage, simply
 * display the name.
 */