const express = require('express')
const router = express.Router() // Po utworzeniu obiektu routera, możesz dodać do niego trasy metody middleware i HTTP (takie jak get, put, post, itd.), tak jak do aplikacji.


// router.get - Funkcja router.get() jest automatycznie wywoływana dla metody HTTP HEAD oprócz metody GET, jeżeli router.head() nie został wywołany dla ścieżki przed router.get().

router.get('/', (req, res) => {
    // res.send('Hello World') // Wysyła odpowiedź HTTP. Parametrem korpusu może być obiekt buforowy, łańcuch, obiekt lub tablica.    
    res.render('index') // Renderuje widok i wysyła wyrenderowany łańcuch HTML do klienta. Parametry opcjonalne. Argument widok jest łańcuchem, który jest ścieżką do pliku widoku, który ma zostać wyrenderowany.
})


// Moduł jest zmienną, która reprezentuje aktualny moduł, a eksport jest obiektem, który zostanie wyeksponowany jako moduł. Tak więc, cokolwiek zostanie przypisane do module.export lub module.export, zostanie wyeksponowane jako moduł.
module.exports = router