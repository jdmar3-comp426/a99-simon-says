/*window.addEventListener("load", function(){
    
    //start add user
    function addAccount() {
        const XHR = new XMLHttpRequest()
         // Bind the FormData object and the form element
        const FD = new URLSearchParams(new FormData( form ));
        name = FD.get("user");

        // Define what happens on successful data submission
        XHR.addEventListener( "load", function(event) {
            alert( 'Logged in! :)' );
        } );

        // Define what happens in case of error
        XHR.addEventListener( "error", function( event ) {
            alert( 'Oops! Something went wrong.' );
        } );

        // Set up our request
        XHR.open( "POST", "http://localhost:5500/app/new", true );

        // The data sent is what the user provided in the form
        XHR.send( FD );
    }

    function getScore() {
        let request = new XMLHttpRequest();

        request.open('GET', "http://localhost:5500/app/user/:" + name);
        request.responseType = 'text';
        
        request.onload = function() {
            userInfo = request.response;
        };
    
        request.send(name);

        console.log(userInfo)
    }



    // Access the form element...
    const form = document.getElementById( "forms" );
    var name = "";
    var userInfo = {}; 

    // Submit account to database after clicking submit
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();

        addAccount();

        getScore();

        updateScore(11);
    })
    //end add user

    //
})
*/