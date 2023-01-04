var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000, books[0], function (sisaWaktuBaca){  
    readBooks(sisaWaktuBaca, books[1], function (sisaWaktuBaca){
        readBooks(sisaWaktuBaca, books[2], function (sisaWaktuBaca){
            readBooks(sisaWaktuBaca, books[3], function (sisaWaktuBaca){
                return sisaWaktuBaca
            })
        })
    })
})