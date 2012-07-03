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

