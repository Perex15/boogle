let data;
let search;
let results;
let perrow = 2;
let myStorage = localStorage;
let html = "<table><tr><h3>List Of Books Available</h3></tr><tr>";
let booksCount = document.querySelector("#totalbooks");
let inputTitle = document.querySelector("#bookName");
let inputAuthor = document.querySelector("#bookAuthor");
let inputYear = document.querySelector("#bookYear");
let addToArrayBtn = document.querySelector("#btn");
dataBase = {
    "books": [{
        "title": "How to kill a Morkingjay",
        "author": "Steven Johnson",
        "year": "1987"
    },
        {
            "title": "Things fall apart",
            "author": "Chinua Achebe",
            "year": "1962"
        },
        {
            "title": "Diary of a C.E.O",
            "author": "Steven Bartlet",
            "year": "2007"
        },
        {
            "title": "Holy Bible",
            "author": "King James",
            "year": "1800"
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "year": "1960"
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "year": "1949"
        },
        {
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "year": "1925"
        },
        {
            "title": "Pride and Prejudice",
            "author": "Jane Austen",
            "year": "1813"
        },
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "year": "1951"
        },
        {
            "title": "The Lord of the Rings",
            "author": "J.R.R. Tolkien",
            "year": "1954-1955"
        },
        {
            "title": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "year": "1937"
        },
        {
            "title": "Harry Potter and the Philosopher's Stone",
            "author": "J.K. Rowling",
            "year": "1997"
        },
        {
            "title": "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
            "author": "C.S. Lewis",
            "year": "1950"
        },
        {
            "title": "The Diary of a Young Girl",
            "author": "Anne Frank",
            "year": "1947"
        },
        {
            "title": "Animal Farm",
            "author": "George Orwell",
            "year": "1945"
        },
        {
            "title": "The Hitchhiker's Guide to the Galaxy",
            "author": "Douglas Adams",
            "year": "1979"
        },
        {
            "title": "Brave New World",
            "author": "Aldous Huxley",
            "year": "1932"
        },
        {
            "title": "The Hunger Games",
            "author": "Suzanne Collins",
            "year": "2008"
        },
        {
            "title": "The Da Vinci Code",
            "author": "Dan Brown",
            "year": "2003"
        },
        {
            "title": "Gone with the Wind",
            "author": "Margaret Mitchell",
            "year": "1936"
        },
        {
            "title": "The Alchemist",
            "author": "Paulo Coelho",
            "year": "1988"
        },
        {
            "title": "Frankenstein",
            "author": "Mary Shelley",
            "year": "1818"
        },
        {
            "title": "The Giver",
            "author": "Lois Lowry",
            "year": "1993"
        },
        {
            "title": "On the Origin of Species",
            "author": "Charles Darwin",
            "year": "1859"
        },
        {
            "title": "The Double Helix: A Personal Account of the Discovery of the Structure of DNA",
            "author": "James D. Watson",
            "year": "1968"
        },
        {
            "title": "The Principia: Mathematical Principles of Natural Philosophy",
            "author": "Sir Isaac Newton",
            "year": "1687"
        },
        {
            "title": "Relativity: The Special and General Theory",
            "author": "Albert Einstein",
            "year": "1916"
        },
        {
            "title": "The Structure of Scientific Revolutions",
            "author": "Thomas S. Kuhn",
            "year": "1962"
        },
        {
            "title": "The Selfish Gene",
            "author": "Richard Dawkins",
            "year": "1976"
        },
        {
            "title": "The Elegant Universe: Superstrings, Hidden Dimensions, and the Quest for the Ultimate Theory",
            "author": "Brian Greene",
            "year": "1999"
        },
        {
            "title": "A Brief History of Time",
            "author": "Stephen Hawking",
            "year": "1988"
        },
        {
            "title": "The Immortal Life of Henrietta Lacks",
            "author": "Rebecca Skloot",
            "year": "2010"
        },
        {
            "title": "Silent Spring",
            "author": "Rachel Carson",
            "year": "1962"
        },
        {
            "title": "Gödel, Escher, Bach: An Eternal Golden Braid",
            "author": "Douglas Hofstadter",
            "year": "1979"
        },
        {
            "title": "Chaos: Making a New Science",
            "author": "James Gleick",
            "year": "1987"
        },
        {
            "title": "The Demon-Haunted World: Science as a Candle in the Dark",
            "author": "Carl Sagan",
            "year": "1995"
        },
        {
            "title": "The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe without Design",
            "author": "Richard Dawkins",
            "year": "1986"
        },
        {
            "title": "Genome: The Autobiography of a Species in 23 Chapters",
            "author": " Matt Ridley",
            "year": "1999"
        },
        {
            "title": "The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography",
            "author": "Simon Singh",
            "year": "1999"
        }]
};
if (myStorage.getItem("data") === null) {
    myStorage.setItem("data", JSON.stringify(dataBase));
}

data = JSON.parse(myStorage.getItem("data"));

window.addEventListener("load", () => {
    for (let i = 0; i < data.books.length; i++) {
        html += `<td> ${data.books[i].title}</td>`;
        let next = i + 1;

        if (next % perrow === 0 && next !== data.books.length) {
            html += "</tr><tr>";
        }
    }

    html += "</tr></table>";
    let container = document.querySelector("#container");
    container.innerHTML = html;
});

addToArrayBtn.addEventListener("click", () => {
    let title = inputTitle.value;
    let author = inputAuthor.value;
    let year = inputYear.value;
    let myObj = {
        "title": title,
        "author": author,
        "year": year
    };
    data.books.push(myObj);
    myStorage.setItem("data", JSON.stringify(data));
    booksCount.innerHTML = `Books : ${data.books.length}`;
    inputTitle.value = "";
    inputYear.value = "";
    inputAuthor.value = "";
});

search = document.getElementById("search");
results = document.getElementById("results");
booksCount.innerHTML = `Books : ${data.books.length}`;
search.addEventListener("keyup", (event) => {
    let searchTerm = event.target.value.toLowerCase();
    results.innerHTML = "";
    data.books.forEach((book) => {
        if (book.title.toLowerCase().indexOf(searchTerm) > -1 || book.author.toLowerCase().indexOf(searchTerm) > -1 || book.year.indexOf(searchTerm) > -1) {
            let item = document.createElement("li");
            item.innerHTML = `${book.title} by ${book.author} (${book.year})`;
            results.appendChild(item);
        }
    });
});