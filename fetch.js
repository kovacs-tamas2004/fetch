fetch("https://api.quotable.io/quotes/random")
    .then(response => response.json())
    .then(data => {
        console.log(data[0].author);
        console.log(data[0].content);

        document.getElementById("author").innerHTML = data[0].author;
        document.getElementById("content").innerHTML = data[0].content;
    })
    .catch(error => console.error("Hiba lépett fel" + error))