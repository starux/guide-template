// var client = new ZeroClipboard( document.getElementById("copy-button") );
var client = new ZeroClipboard( $('.clip-button') );


client.on( "ready", function( readyEvent ) {
  
  console.log( "ZeroClipboard SWF is ready!" );

	client.on( "copy", function(event) {


// **************
// Cannot get the copy event to work right...revisit later.
// **************

    // Grab the copy button that was clicked
		var copyButton = $( event.target );
		console.log( "copyButton: " + copyButton.prop("nodeName") );

    // Grab the element that contains the code to copy
    var elementToCopy = $( copyButton.parent().nextAll(".highlight").first() );
		console.log( "elementToCopy: " + elementToCopy.prop("nodeName") );

    // Grab the innerHTML of the element with the code
    var codeToCopy = $( elementToCopy.html() );
    console.log( "codeToCopy: " + codeToCopy );

    // Set the clipboard data to the innerHTML
    // event.clipboardData.setData('text/html', elementToCopy.html() );
    ZeroClipboard.setData( "text/plain", elementToCopy );
  } );

	client.on( "aftercopy", function(event) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
	} );

} );


client.on( 'error', function(event) {
	// console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
	ZeroClipboard.destroy();
} );

