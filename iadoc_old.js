function formatting()
{
	var windowWidth = $(window).width();
	var numBranches = 1.0 / $('li.parent').length;

	var width = (numBranches * windowWidth) - 20;
	$('li.parent').css({
		'width' : width,
		'margin' : '1px'
	});

	$('li.page, li.file').not('.parent, .root').each(function(index)
	{
		var $this = $(this);
		var parentWidth = $this.parent().width();
		var numChild = $this.parent().children().length;
		var newWidth = ((1.0 / numChild) * parentWidth) - 5;

		$this.css({
			'width' : newWidth,
			'margin-left' : '1px'
		});
	});
}

function drawLines()
{
	var liPos = [];

	$('li').each(function(index)
	{
		var offset = $(this).offset();
		//alert($(this).text() + ' ' + offset.left + ' ' + offset.top);


	});

	//First row is 32px from top
	//Second row is 86px from top
	//Third row is 140px from top
	//Difference between levels is 54px(position() over offset())
}

function createLine(x1,y1, x2,y2)
{
	var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';
    
		var line = $('<div>')
			.appendTo('#container')
			.addClass('line')
			.css({
			  'position': 'absolute',
			  '-webkit-transform':  transform,
			  '-moz-transform':     transform,
			  'transform':          transform
		})
	.width(length)
	.offset({left: x1, top: y1});

	return line;
}