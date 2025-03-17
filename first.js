async function main () {
    const req = await fetch ("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    if (req.ok) {
        const data = await req.json();
        console.log(data.docs[1].author_name);

    }

}
    main ();

//await solo se usa con funciones async, de lo contrario es imposible


//JSON, Puede ser solo:
//                         -booleanos
//                         -numeral
//                         -string ""
//                         -arrays
//                         objetos: null y {"": valor}
