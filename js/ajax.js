
var rand=Math.round(Math.random() * 2);
var  file = 'veg-' + rand + '.html';
$('.rand-veg').load(file);

//Automatically load the dinos.json file as soon as the page loads
var dinoData = $.ajax('tweets.json', {
	//Tell jquery we ar eloading a JSON file and to parse it properly
	dataType: 'json'
	
	});
	
	//Because AJax takes time to download things of the internet
	//.don() will be triggered only after the Jquuery has finished downloading
	
	dinoData.done(function (data){
		
		var dino=Math.round( Math.random() * data.length - 1 );
		
				if (dino <= 0)
	{
		dino = 0;
		
		
		}
		
		$('.dino-name').html(data[dino].name);
		$('.dino-period').html(data[dino].period);
		$('.dino-diet').html(data[dino].diet);
		
		
		});



$('.btn-load').on('click', function() {
	dinoData.done(function (data){
		
		var dino=Math.round( Math.random() * data.length - 1 );
		
		if (dino <= 0)
	{
		dino = 0;
		
		
		}
		
		$('.dino-name').html(data[dino].name);
		$('.dino-period').html(data[dino].period);
		$('.dino-diet').html(data[dino].diet);
		
		
		});
	
});





