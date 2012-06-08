	var flip = 0;
	var collapse = '<span class="collapse">-</span>';
	var boom = '<span class="boom">+</span>';

	$('a').on('click', function(e)
	{
		e.preventDefault();
		$(this).parent().children().children().toggle();

	});

