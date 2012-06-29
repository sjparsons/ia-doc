	(function($){

		// Children Toggling
		$('.iadoc li').click(function(){
			// hide children li's wheneve the current li is clicked.
			li = $(this)
			descendent_lists = li.children('ol,ul');
			if (descendent_lists.length) {
				descendent_lists.toggle();
				li.toggleClass('collapsed');
			}
			
			return false; // to stop the event bubbling up.
		});
		
		//Make "page" the default class for list items
		$('li').each(function(index)
		{
			if( !$(this).attr('class')) {
				$(this).addClass('page');
			}
		});
		
		// Continuation 
		
		$('li.continuation').prepend('[ ').append(' ]');
		
		// // Level Toggling
		// $('.iadoc li').prepend('<button class="toggle" name="level_toggle" value="">-</button>');
		// 
		// $('button.toggle').show().click(function(){
		// 	var show = $(this).val();												// hide or show?	
		// 	var cur_level_lis = $(this).parent().parent().children('li'); 			// get all li's at level above.
		// 	if (!show) {
		// 		cur_level_lis.children().children('li').hide(); 					// hide children of the current level
		// 		cur_level_lis.children('button.toggle').val('1').text('+');			// make button 'show' children next time.
		// 	}
		// 	else {
		// 		cur_level_lis.children().children('li').show();						// hide children of the current level
		// 		cur_level_lis.children('button.toggle').val('').text('-');			// reset button to 'hide' children next time.
		// 	}
		// 	return false;
		// });
		// 
		/*
		$('li').hover(
			function(){ // Hover In
				$(this).children('button.toggle').show();
			},
			function(){  // Hover Out
				$(this).children('button.toggle').hide();
			}
		);
		*/
		
	})(jQuery); 
	
