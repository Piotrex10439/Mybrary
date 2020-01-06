if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
 // funkcja do której przekazujemy ścieżkę, wyszukuje ona moduł
const express = require('express')

// EJS to prosty język szablonów, który pozwala na generowanie znaczników HTML za pomocą zwykłego JavaScriptu.
const expressLayouts = require('express-ejs-layouts') 

// Mongoose to narzędzie do modelowania obiektów MongoDB przeznaczone do pracy w środowisku asynchronicznym. Mongoose obsługuje zarówno prmises, jak i callbacks.
const mongoose = require('mongoose')

// przypisanie expressu do zmiennej app
const app = express() 

const indexRouter = require('./routes/index')
// app.set - Przypisuje nazwę ustawienia do wartości. Możesz zapisać dowolną wartość, ale niektóre nazwy mogą być używane do konfigurowania zachowania serwera.

app.set('view engine', 'ejs') 
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')


// app.use - Montuje określoną funkcję lub funkcje oprogramowania pośredniczącego na określonej ścieżce: funkcja oprogramowania pośredniczącego jest wykonywana, gdy baza żądanej ścieżki odpowiada ścieżce.

app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)


// połączenie z bazą danych 
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.error('Connected to Mangoose'))

// app.listen - wiąże i słucha połączeń na określonym hoście i porcie. 
app.listen(process.env.PORT || 3000) 

// Obiekt res reprezentuje odpowiedź HTTP wysłaną przez aplikację Express, gdy otrzyma żądanie HTTP.