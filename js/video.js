var $dialog = $('#video');
var $placeholder = $('#video-placeholder');
dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81390814?color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	
	
	/*
	.get() returns the native javascript element for us to access. When using Jquery we don't have access to the original HTML elements directly, we are using JQuery to manipulate them. 
	$dialog.show() - Will call JQuery's 'Show()' function
	$dialog.get(0).show() - Will call Javascript's native 'show()' function
	*/
	console.log('Clicked!');
	$dialog.get(0).showModal();
	//show() -> allowes multiple dialog, with no user interaction behind
	//showModal()-> will allow user to only click on the dialogu itself, with no user interaction behind
	
	});
	
$('#btn-close').on('click', function () {
	
	$dialog.get(0).close();
	$placeholder.html('');
});