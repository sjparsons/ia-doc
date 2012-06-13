	collapsable();
	
	function collapsable()
	{
		var collapse = '<span class="collapse">[-/+]</span>';

		$('a').each(function(index)
		{
			var $this = $(this);
			if( $this.parent().find('li').length > 0 )
			{
				$this.before(collapse);
			} 
			else
			{
				$this.before('<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
			}
		});
	}

	$('a').on('click', function(e)
	{
		var $this = $(this);
		if( $this.attr('href') == "" || $this.attr('href') == 0 )
		{
			e.preventDefault();	
		}
		//May remove this, not sure if necessary.
		
		$this.parent().children().children().toggle();
	});

	$('span.collapse').on('click', function()
	{
		var $this = $(this);

		$this.parent().parent().siblings().children().children().children().toggle();	
		$this.parent().siblings().children().children().toggle();
		$this.parent().children().children().toggle();

		//Ugly, need to fix

	});


	$('.continuation').each(function(index)
	{
		$.fn.textWidth = function()
		{
			var html_org = $(this).html();
			var html_calc = '<span>' + html_org + '</span>';
			$(this).html(html_calc);
			var width = $(this).find('span:first').width();
			$(this).html(html_org);
			return width;
		}
		var width = $(this).textWidth();

		$(this).css('width', width);

	});