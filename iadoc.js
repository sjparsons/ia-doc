	var flip = 0;
	$('a').on('click', function(e)
	{
		e.preventDefault();
		$(this).parent().children().children().slideToggle();
	});