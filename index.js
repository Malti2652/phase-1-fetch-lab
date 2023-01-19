function fetchBooks() {
    return fetch('https://anapioficeandfire.com/api/books')
        .then(response => response.json())
        .then(json => renderBooks(json))
}

function renderBooks(books) {
    let main = document.querySelector('main')
    books.forEach(book => {
        let title = document.createElement('h2')
        title.innerText = book.name
        main.appendChild(title)
    })
}
