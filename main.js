<script>
	$(document).ready(function(){
		$('.hamburger').click(function(){
			$('.gnb').addClass('on');
			$('#wrap').addClass('on');
			$('.close').addClass('on');
		});
		$('.close').click(function(){
			$(this).removeClass('on');
			$('#wrap').removeClass('on');
			$('.gnb').removeClass('on');
		});
		$('.sec01_slider').slick({
			fade:true,
			arrows:false,
			dots:true
		})
	});

	$(function()
{
	window.addEventListener("scroll", function(event)
	{
		var offsets = new Array();
		var sections = new Array();

		var i = 0;

		$("section").each(function()
		{
			offsets[i] = Math.floor($(this).offset().top - 282);
			sections[i] = $(this).attr("data-section");
			i++;
		});

		for(var i = 0; i < offsets.length; i++)
		{
			if(window.pageYOffset >= offsets[i] && window.pageYOffset < offsets[i+1])
			{
				$("button[data-section='" + sections[i] + "']").addClass("active");
				$("button:not([data-section='" + sections[i] + "'])").removeClass("active");
				i = offsets.length;
			}
			else if(window.pageYOffset >= offsets[offsets.length - 1])
			{
				$("button[data-section='" + sections[sections.length - 1] + "']").addClass("active");
				$("button:not([data-section='" + sections[sections.length - 1] + "'])").removeClass("active");
			}
		}
	});

	$("button").on("click", function()
	{
		$("html, body").animate({ scrollTop: Math.floor($("section[data-section='" + $(this).attr("data-section") + "']").offset().top - 282) }, "slow");
	});

	$("button:nth-of-type(1)").addClass("active").siblings().removeClass("active");
});

var NavTop = $('#nav').offset().top - 152;

$(window).scroll(function(){
  if( $(window).scrollTop() > NavTop ) {
    $('#nav').css({position: 'fixed', top: '152px'});
  } else {
    $('#nav').css({position: 'absolute', top: '0'});
  }
});

</script>
