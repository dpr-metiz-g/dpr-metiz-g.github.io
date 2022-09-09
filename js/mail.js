$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			cache: false,
			data: th.serialize()
		}).done(function() {
			$(".fields").hide();
			$('.note').html('<h2>Ваш заказ принят</h2>');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});