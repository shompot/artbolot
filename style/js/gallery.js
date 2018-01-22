jQuery(document).ready(function($) {
	/*
	var $path = window.location.pathname;
	$path = $path.substring(0, $path.lastIndexOf('/'));
	var file = "list.txt";
	console.log(file);
	var lines=[];
	 $.get(file,function(txt){
		 console.log('success');
	     lines = txt.responseText.split("\n");
		  var len = lines.length;
	     for (var i = 0; i < len; i++) {
	         console.log(lines[i]);
	     }
	 });
	 console.log(lines.length);
	 */
	var $images = [];

		var $images = [
			'22x41.8.JPG',
			'23.7x69.JPG',
			'25.5x69.JPG',
			'25x68.5.JPG',
			'27x68.7.JPG',
			'29.5x63.5.JPG',
			'31x23.JPG',
			'31x70.JPG',
			'32.5x52.JPG',
			'33x54.JPG',
			'35x67.JPG',
			'37.7x95.JPG',
			'38x69.JPG',
			'39,5x26.JPG',
			'39.5x64.JPG',
			'39x64.JPG',
			'40 x65.JPG',
			'40 x 65.JPG',
			'40 x65.JPG',
			'40x 64.JPG'];

	for (var $i=0; $i<$images.length; $i++){
		var $imageItem = '<li data-id="id-'+$i+'" class="ballet-image"> <a href="style/images/ballet/'+$images[$i]+'" rel="prettyPhoto[gallery]"> <img src="style/images/ballet/'+$images[$i]+'" alt="" /></a> </li>';
		$('#gallery').append($imageItem);
	}

	$( ".ballet-image img" ).each(function(index) {
         $(this).css ('width', '100%');
         $w = $(this).css ('width');
         $h = $(this).css ('height');

         if ($w < $h){
            $(this).css ('height', '100%');
            $(this).css ('width', 'auto');
			}
   });
});
