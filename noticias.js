var http = require('http');

http.createServer( function(req, res) {
    var category = req.url;
    if (category == '/tecnologia') {
        res.end('<html><body>Notícias de Tecnologia</body></html>');
    } else if (category == '/moda') {
        res.end('<html><body>Notícias de Moda</body></html>');
    } else if (category == '/beleza') {
        res.end('<html><body>Notícias de Beleza</body></html>');
    } else {
        res.end('<html><body>Portal de Notícias</body></html>');
    }
}).listen(3000);
