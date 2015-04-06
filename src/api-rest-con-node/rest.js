module.exports = function(app) {

    var getJsonWithoutHeader = function(req, res) {
        
        console.log("getJsonWithoutHeader");

        res.json({hola:"hola", mundo:"mundo"});
    };

    var getJsonWithHeader = function(req, res) {
        
        res.header("Access-Control-Allow-Origin", "*");

        console.log("getJsonWithHeader");

        res.json({hola:"hola", mundo:"mundo"});
    };

    var getJsonp = function(req, res) {
        
        console.log("getJsonWithoutHeader");

        res.jsonp({hola:"hola", mundo:"mundo"});
    };

    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];

    var marcas = { 
        1: [
            { id: "11", name: "C3" },
            { id: "12", name: "C4" },
            { id: "13", name: "C5" } ], 
        2: [
            { id: "21", name: "Ibiza" },
            { id: "22", name: "Altea" } ,
            { id: "23", name: "Toledo" } ], 
        3: [
            { id: "31", name: "208" },
            { id: "32", name: "308" },
            { id: "32", name: "508" } ]
    };

    var login = function(req, res) {
        
        res.header("Access-Control-Allow-Origin", "*");

        // wait for 1000 milliseconds
        var millis = 1000 + new Date().getTime();
        while(new Date() < millis);

        console.log("POST");
        console.log(req.body);

        var password = req.body.password;
        var username = req.body.username;
        
        var responseText;

        if ( password === "foobar" ) {
            responseText  = "Hi " + username + ", welcome back.";
        } else {
            responseText = "Your password is wrong (must be foobar).";
        }

        res.send(responseText);
    };

    var tags = function(req, res) {

        res.send(availableTags);
    }

    var tagsmejorado = function(req, res) {

        res.header("Access-Control-Allow-Origin", "*");

        // wait for 1000 milliseconds
        var millis = 1000 + new Date().getTime();
        while(new Date() < millis);

        console.log("GET");
        console.log("req.query.term="+req.query.term);

        var term = req.query.term;

        var response;

        if (term) {
            
            term = term.toLowerCase()
            
            var isTagOk = function(tag) {
                var isFiltered = false;
                if (tag.toLowerCase().indexOf(term) !== -1 ) {
                    isFiltered = true;
                }
                return isFiltered;
            }

            response = availableTags.filter(isTagOk);
        } else {
            response = availableTags
        }

        res.json(response);
    }


    var marcaById = function(req, res) {
        
        res.header("Access-Control-Allow-Origin", "*");

        // white for 1000 milliseconds
        var millis = 1000 + new Date().getTime();
        while(new Date() < millis);

        console.log("GET");
        console.log("req.param.id="+req.params.id);

        var marcaId = req.params.id;

        var response = marcas[marcaId];

        res.send(response);
    }

    var progressBar = function(req, res) {
        
        // white for 1000 milliseconds
        var millis = 1000 + new Date().getTime();
        while(new Date() < millis);

        console.log("GET");
        console.log("req.params.time="+req.params.time);

        var time = req.params.time;

        var now = new Date().getTime();
        var delta = now - time;
        var percentage = Math.round(delta/100);

        console.log("percentage="+percentage);

        res.jsonp({percentage:percentage});
    }

    app.get('/get-json-without-header', getJsonWithoutHeader);
    app.get('/get-json-with-header', getJsonWithHeader);
    app.get('/get-jsonp', getJsonp);
    app.get('/tags', tags);
    app.get('/tags', tags);
    app.post('/login', login);
    app.get('/tags', tags);
    app.get('/tagsmejorado', tagsmejorado);
    app.get('/marca/:id', marcaById);
    app.get('/progress/:time', progressBar);

}