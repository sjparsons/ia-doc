	(function($){

		//Programatic level toggling
		if( $('.iadoc>ol>li').length > 0 ){
			$('<p class="ltoggle">Toggle: <a href="#" class="collapse_one">Level 1</a> | </p>').insertAfter('.root');
		}
		if( $('.iadoc>ol>li>ol>li').length > 0 ){
			$('<a href="#" class="collapse_two">Level 2</a>').appendTo('.ltoggle');
		}
		if( $('.iadoc>ol>li>ol>li>ol>li').length > 0 ){
			$('.ltoggle').append(' | ');
			$('<a href="#" class="collapse_three">Level 3</a>').appendTo('.ltoggle');
		}

		// Children Toggling
		$('.iadoc li').click(function(){
			// hide children li's wheneve the current li is clicked.
			$(this).children().children('li').toggle();
			return false; // to stop the event bubbling up.
		});

		//Make "page" the default class for list items
		$('li').each(function(index)
		{
			var $this = $(this);
			if( !$this.attr('class')) {
				$this.addClass('page');
			}
		});

		// Level Toggling
		/*$('.iadoc li').prepend('<button class="toggle" name="level_toggle" value="">-</button>');

		$('button.toggle').show().click(function(){
			var show = $(this).val();												// hide or show?
			var cur_level_lis = $(this).parent().parent().children('li'); 			// get all li's at level above.
			if (!show) {
				cur_level_lis.children().children('li').hide(); 					// hide children of the current level
				cur_level_lis.children('button.toggle').val('1').text('+');			// make button 'show' children next time.
			}
			else {
				cur_level_lis.children().children('li').show();						// hide children of the current level
				cur_level_lis.children('button.toggle').val('').text('-');			// reset button to 'hide' children next time.
			}
			return false;
		});*/

		$('.collapse_one').click(function(){
			$('.iadoc>ol>li').click();
			return false
		});

		$('.collapse_two').click(function(){
			$('.iadoc>ol>li>ol>li').click();
			return false
		});

		$('.collapse_three').click(function(){
			$('.iadoc>ol>li>ol>li>ol>li').click();
			return false
		});

	})(jQuery);

