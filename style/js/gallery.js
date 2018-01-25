//
var $balletImages = [
	{name: '22x41.8.jpg', class: ''},
	{name: '23.7x69.jpg', class: ''},
	{name: '25.5x69.jpg', class: ''},
	{name: '25x68.5.jpg', class: ''},
	{name: '29.5x63.5.jpg', class: ''},
	{name: '31x23.jpg', class: ''},
	{name: '31x70.jpg', class: ''},
	{name: '32.5x52.jpg', class: ''},
	{name: '35x67.jpg', class: ''},
	{name: '37.7x95.jpg', class: ''},
	{name: '38x69.jpg', class: ''},
	{name: '39,5x26.jpg', class: ''},
	{name: '39.5x64.jpg', class: ''},
	{name: '39x64.jpg', class: ''},
	{name: '40 x65.jpg', class: ''},
	{name: '40 x65.jpg', class: ''},
	{name: '40x27.jpg', class: ''},
	{name: '40x42.jpg', class: ''},
	{name: '40x62.5.jpg', class: ''},
	{name: '40x64.jpg', class: ''},
	{name: '40x65.jpg', class: ''},
	{name: '40x69.jpg', class: ''},
	{name: '43 x80.jpg', class: ''},
	{name: '43.5x71.jpg', class: ''},
	{name: '43x 80.jpg', class: ''},
	{name: '43x80.jpg', class: ''},
	{name: '44.5x80.jpg', class: ''},
	{name: '45.4x65.jpg', class: ''},
	{name: '45x45.jpg', class: ''},
	{name: '45x66.5.jpg', class: ''},
	{name: '45x73.jpg', class: ''},
	{name: '48x44.jpg', class: ''},
	{name: '48x48.jpg', class: ''},
	{name: '49x50.jpg', class: ''},
	{name: '50x48.jpg', class: ''},
	{name: '50x50.jpg', class: ''},
	{name: '50x53.jpg', class: ''},
	{name: '50x54.jpg', class: ''},
	{name: '50x58.jpg', class: ''},
	{name: '50x65.jpg', class: ''},
	{name: '52x21.jpg', class: ''},
	{name: '53x34.jpg', class: ''},
	{name: '54x50.jpg', class: ''},
	{name: '55x56.jpg', class: ''},
	{name: '56x44.jpg', class: ''},
	{name: '58x40.jpg', class: ''},
	{name: '65 x50.jpg', class: ''},
	{name: '65x34.jpg', class: ''},
	{name: '65x40.jpg', class: ''},
	{name: '65x42.jpg', class: ''},
	{name: '65x50.jpg', class: ''},
	{name: '68.5x29.7.jpg', class: ''},
	{name: '69x30.5.jpg', class: ''},
	{name: '78x54.jpg', class: ''},
	{name: '86x41.jpg', class: ''},
	{name: '90x35.jpg', class: ''}
];

var $horsesImages = [];

var $allImages = $balletImages + $horsesImages;

// default is ballet
var $images = $balletImages;
// images per page
var $imagesPerPage = 12;

jQuery(document).ready(function($) {

	// setting classes
	$balletImages.map(function(x) {
  		x.class = 'ballet-image';
  		return x
	});

	$horsesImages.map(function(x) {
  		x.class = 'horses-image';
  		return x
	});

	// setting gallery
	setGallery();

});


// set gallery

function setGallery() {

	var $numOfPages = Math.ceil($images.length/$imagesPerPage);
	for (var $i=0; $i<$images.length; $i++){
		var $pageNum = Math.floor($i/$imagesPerPage)+1;
		//var $imageClass = $images[$i]["class"];
		var $imageClass = 'ballet-image';
		var $imageItem = '<li data-id="id-'+$i+'" class="page'+$pageNum+' ' +$imageClass+ '"> <a href="style/images/ballet/'+$images[$i]["name"]+'" rel="prettyPhoto[gallery]"> <img src="style/images/ballet/'+$images[$i]["name"]+'" alt="" /></a> </li>';
			$('#gallery').append($imageItem);
	}

	$( "#gallery img" ).each(function(index) {
         //$(this).css ('width', '100%');
         $w = $(this).width();
         $h = $(this).height();
			$(this).parent().css ('background-color', 'blue');

         if ($w < $h){
            $(this).css ('height', '100%');
            $(this).css ('width', 'auto');
				$(this).parent().css ('background-color', 'red');
			}
			else {
				$(this).css ('width', '225px');
				$(this).css ('height', 'auto');
				$(this).parent().css ('background-color', 'green');
			}
   });
}

// change view section



// set Navigation


/************************************************************************/// /* SORTING *//************************************************************************/

(function($) {
	$.fn.sorted = function(customOptions) {
		var options = {
			reversed: false,
			by: function(a) {
				return a.text();
			}
		};
		$.extend(options, customOptions);

		$data = $(this);
		arr = $data.get();
		arr.sort(function(a, b) {

		   	var valA = options.by($(a));
		   	var valB = options.by($(b));
			if (options.reversed) {
				return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;
			} else {
				return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;
			}
		});
		return $(arr);
	};

})(jQuery);

$(function() {

  var read_button = function(class_names) {
    var r = {
      selected: false,
      type: 0
    };
    for (var i=0; i < class_names.length; i++) {
      if (class_names[i].indexOf('selectedPage-') == 0) {
        r.selected = true;
      }
      if (class_names[i].indexOf('segment-') == 0) {
        r.segment = class_names[i].split('-')[1];
      }
    };
    return r;
  };

  var determine_sort = function($buttons) {
    var $selected = $buttons.parent().filter('[class*="selectedPage-"]');
    return $selected.find('a').attr('data-value');
  };

  var determine_kind = function($buttons) {
    var $selected = $buttons.parent().filter('[class*="selectedPage-"]');
    return $selected.find('a').attr('data-value');
  };

  var $preferences = {
    duration: 800,
    easing: 'easeInOutQuad',
    adjustHeight: false
  };

  var $list = $('#gallery');
  var $data = $('#gallery').clone();

  var $controls = $('.pagenav');

  $controls.each(function(i) {

    var $control = $(this);
    var $buttons = $control.find('a');

    $buttons.bind('click', function(e) {

      var $button = $(this);
      var $button_container = $button.parent();
      var button_properties = read_button($button_container.attr('class').split(' '));
      var selected = button_properties.selected;
      var button_segment = button_properties.segment;

      if (!selected) {

        $buttons.parent().removeClass('selectedPage-1'); $button_container.addClass('selectedPage-' + 1);

        var sorting_type = determine_sort($controls.eq(1).find('a'));
        var sorting_kind = determine_kind($controls.eq(0).find('a'));

        if (sorting_kind == 'all') {
          var $filtered_data = $data.find('li');
        } else {
          var $filtered_data = $data.find('li.' + sorting_kind);
        }

        if (sorting_type == 'size') {
          var $sorted_data = $filtered_data.sorted({
            by: function(v) {
              return parseFloat($(v).find('span').text());
            }
          });
        } else {
          var $sorted_data = $filtered_data.sorted({
            by: function(v) {
              return $(v).find('strong').text().toLowerCase();
            }
          });
        }

        $list.quicksand($sorted_data, function() {

			    $(document).ready(function(){
						$("#gallery a[rel^='prettyPhoto']").prettyPhoto({theme:'dark_square', autoplay_slideshow: false});
					});

			    $(function() {
				    // OPACITY OF BUTTON SET TO 50%
				    $("ul.grid img").css("opacity","1.0");

				    // ON MOUSE OVER
				    $("ul.grid img").hover(function () {

				    // SET OPACITY TO 100%
					    $(this).stop().animate({
					    	opacity: 0.5
					    }, "slow");
				    },

				    // ON MOUSE OUT
				    function () {

					    // SET OPACITY BACK TO 50%
					    $(this).stop().animate({
					    	opacity: 1.0
					    }, "slow");
				    });
			    });

				$("a.zoom2 img").mouseover(function(){
					$(this).stop(true,true);
					$(this).fadeTo(300, 0.5);
				});

				$("a.zoom2 img").mouseout(function(){
					$(this).fadeTo(400, 1.0);
				});


				$("a.play2 img").mouseover(function(){
					$(this).stop(true,true);
					$(this).fadeTo(300, 0.5);
				});

				$("a.play2 img").mouseout(function(){
					$(this).fadeTo(400, 1.0);
				});

    		});
		}
      e.preventDefault();
    });

  });

});
