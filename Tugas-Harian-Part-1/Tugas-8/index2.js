var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

readBooksPromise(10000, books[0]).then(
    function(sisaWaktuBaca){
        readBooksPromise(sisaWaktuBaca, books[1]).then(
            function(sisaWaktuBaca){
                readBooksPromise(sisaWaktuBaca, books[2]).then(
                    function(sisaWaktuBaca){
                        return sisaWaktuBaca
                    }
                )
            }
        )        
    }
).catch(function(err){
    console.log(err)
})