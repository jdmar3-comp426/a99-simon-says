window.addEventListener("load", function(){
    
    //start add user
    function addAccount() {
        const XHR = new XMLHttpRequest()
         // Bind the FormData object and the form element
        //const FD = new FormData( form );
        const FD = new URLSearchParams(new FormData( form ));


        // Define what happens on successful data submission
        XHR.addEventListener( "load", function(event) {
            alert( 'Oh ya!' );
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

    // Access the form element...
    const form = document.getElementById( "forms" );

    // Submit account to database after clicking submit
    form.addEventListener( "submit", function ( event ) {
        event.preventDefault();

        addAccount();
    } )
    //end add user

    //
    
})