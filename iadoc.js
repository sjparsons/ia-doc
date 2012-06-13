	onLoad();
	
	function onLoad()
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

		$('li').each(function(index)
		{
			$(this).addClass('on');
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
		
		//$this.parent().children().children().toggle();
		if( $this.parent().children().children().hasClass('on') )
		{
			$this.parent().children().children().removeClass('on').addClass('off');
		}
		else if( $this.parent().children().children().hasClass('off') )
		{
			$this.parent().children().children().removeClass('off').addClass('on');
		}
		//Works, but really ugly. Think there's a better way to do this with toggle
	});

	$('span.collapse').on('click', function()
	{
		var $this = $(this);

		if( ($this.siblings().children().hasClass('on')) && $this.closest('ol').siblings().children().children().children().hasClass('on') )
		{
			$this.siblings().children().removeClass('on').addClass('off');
			$this.closest('ol').siblings().children().children().children().removeClass('on').addClass('off');
		}
		else if( ($this.siblings().children().hasClass('off')) && $this.closest('ol').siblings().children().children().children().hasClass('off') )
		{
			$this.siblings().children().removeClass('off').addClass('on');
			$this.closest('ol').siblings().children().children().children().removeClass('off').addClass('on');
		}	
		else if( ($this.siblings().children().hasClass('on')) && $this.closest('ol').siblings().children().children().children().hasClass('off') )
		{
			$this.closest('ol').siblings().children().children().children().removeClass('off').addClass('on');
		}
		else if( ($this.siblings().children().hasClass('off')) && $this.closest('ol').siblings().children().children().children().hasClass('on') )
		{
			$this.siblings().children().removeClass('off').addClass('on');
		}

		//Worse looking than before, but levels work semi properly. Need to fix.

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
