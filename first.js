async function main () {
    const req = await fetch ("https://openlibrary.org/search.json?q=the+lord+of+the+rings");
    if (req.ok) {
        const data = await req.json();
        console.log(data);

    }

}
    main ();
//solo con funciones async puedo usar await