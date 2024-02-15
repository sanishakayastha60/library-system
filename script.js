const dialog = document.querySelector('dialog');
const openbtn = document.querySelector('#openbtn');
const closebtn = document.querySelector('#close');
const add = document.querySelector('#done');
let bookArray = [];
let content = document.getElementById('content');
openbtn.addEventListener('click', () => {
  dialog.showModal();
});
closebtn.addEventListener('click', () => {
  dialog.close();
});
add.addEventListener('click', () => {
  let nameOfBook = document.getElementById('name').value;
  let authorName = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let stat = document.getElementById('status').value;
  bookArray.push(nameOfBook);
  bookArray.push(authorName);
  bookArray.push(pages);
  bookArray.push(stat);
  if (nameOfBook == '' || authorName == '' || pages == '') {
    alert('You have missed the field');
    bookArray.splice(0, bookArray.length);
  } else {
    displayBook();
  }
});
function displayBook() {
  let totaldiv = document.createElement('div');
  totaldiv.setAttribute('id', 'output');
  let h3 = document.createElement('h3');
  let p1 = document.createElement('p');
  let div = document.createElement('div');
  let p2 = document.createElement('p');
  let deletebtn = document.createElement('button');
  h3.textContent = `${bookArray[0]}`;
  p1.textContent = `By: ${bookArray[1]}`;
  div.textContent = `No of Pages: ${bookArray[2]}`;
  p2.textContent = `${bookArray[3]}`;
  deletebtn.textContent = 'Delete';
  deletebtn.addEventListener('click', () => {
    confirm('Are you Sure?');
    if (true) {
      totaldiv.remove();
    }
  });
  totaldiv.appendChild(h3);
  totaldiv.appendChild(p1);
  totaldiv.appendChild(div);
  totaldiv.appendChild(p2);
  totaldiv.appendChild(deletebtn);
  content.appendChild(totaldiv);
  // console.log(bookArray);
  bookArray.splice(0, bookArray.length);
  document.querySelector('form').reset();
  dialog.close();
}
