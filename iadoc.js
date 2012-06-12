<<<<<<< HEAD
=======
	var collapse = '<span class="collapse">[-/+]</span>';
>>>>>>> iadoc/master
	collapsable();
	
	function collapsable()
	{
<<<<<<< HEAD
		var collapse = '<span class="collapse">[-/+]</span>';

		$('a').each(function(index)
		{
			var $this = $(this);
			if( $this.parent().find('li').length > 0 )
			{
				$this.before(collapse);
=======
		$('a').each(function(index)
		{
			if( $(this).parent().find('li').length > 0 )
			{
				$(this).before(collapse);
>>>>>>> iadoc/master
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
<<<<<<< HEAD
		
		$this.parent().parent().siblings().children().children().children().toggle();	
		$this.parent().siblings().children().children().toggle();
		$this.parent().children().children().toggle();

		//Ugly, need to fix
=======

		$this.parent().parent().siblings().children().children().children().toggle();
		$this.parent().siblings().children().children().toggle();
		$this.parent().children().children().toggle();
>>>>>>> iadoc/master

	});