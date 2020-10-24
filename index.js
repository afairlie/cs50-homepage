document.body.onload = function() {
    insertNav()

    const form = document.querySelector('#form');
    const notes = document.querySelector('#notes');

    form.addEventListener('submit', logSubmit);
}

function logSubmit(event) {
    event.preventDefault();

    const note = notes.appendChild(document.createElement('li'))
    note.className = 'note'

    const noteText = note.appendChild(document.createElement('div'))
    noteText.className = 'note-text'
    noteText.textContent = `"${form.elements.message.value}"`

    const author = note.appendChild(document.createElement('div'))
    author.className = 'author'
    author.textContent = `- ${form.elements.name.value}`

    form.reset()
}


function insertNav() {
    let nav = document.querySelector('ul')
    nav.className = 'nav justify-content-end'

    let home = nav.appendChild(document.createElement('li'))
    home.className = 'nav-item'

    let homeLink = home.appendChild(document.createElement('a'))
    homeLink.className = 'nav-link'
    homeLink.setAttribute('href', 'index.html')
    homeLink.innerText = 'home'

    let about = nav.appendChild(document.createElement('li'))
    about.className = 'nav-item'

    let aboutLink = about.appendChild(document.createElement('a'))
    aboutLink.className = 'nav-link'
    aboutLink.setAttribute('href', 'about.html')
    aboutLink.innerText = 'about'

    let visitors = nav.appendChild(document.createElement('li'))
    visitors.className = 'nav-item'

    visitorsLink = visitors.appendChild(document.createElement('a'))
    visitorsLink.className = 'nav-link'
    visitorsLink.setAttribute('href', 'visitors.html')
    visitorsLink.innerText = 'visitor-book'

    let contact = nav.appendChild(document.createElement('li'))
    contact.className = 'nav-item'

    let contactLink = contact.appendChild(document.createElement('a'))
    contactLink.className = 'nav-link'
    contactLink.setAttribute('href', 'contact.html')
    contactLink.innerText = 'contact'
}