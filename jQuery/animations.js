$(document).ready(function() {

$('#tweet-controls').css('display', 'none')

$('.tweet-compose').on('click', function() {//the reason why I kept getting errors is because you didnt type tweet compose with '.' in font of it just like whne you declare a class
	
	$(this).css('height','66px');// when you say css you are changing manipulating that css and changing it.
	$('#tweet-controls').css('display', 'block');
	
});
$('#dashboard').on('dblclick',function() {

	$('.tweet-compose').css('height','33px');
	$('#tweet-controls').css('display', 'none');

})

		// STEP 3: As the user types the character count should decrease. Once it hits 10 character or less the count should turn red -->
						//HINT: jQuery keypress events (keypress, keydown, keyup, etc) -->
	$('.tweet-compose').on('keypress, keydown, keyup',function() {
			var count = $(this).val().length;// it is taking the input value computing the length(everytime I press a key it equals 1) and storing it in the variable count
			var charCount = 140;
			$('#char-count').text(charCount-count);
			
				if (count > 130) {
					$('#char-count').css('color','red');
				
				} if (count <= 130) {
					$('#char-count').css('color','black');
			}
					//<!-- STEP 4: If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars) -->
						//<!-- HINT: javascript length method -->
				if (count >= 140) {

						$('#tweet-submit').prop('disabled',true);// it will disable the property if the condition is met
				
				} else {
					
					 $('#tweet-submit').prop("disabled", false) //will re-enable the property if the condition is not met.
					}

	})

//<!-- STEP 5: When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created 
//and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname. -->
//<!-- HINT: jQuery ".prepend" method -->
$('#tweet-submit').on('click', function(){
var largeHtml = $('<div class="tweet">'+
						'<div class="content">'+
							'<img class="avatar" src="img/alagoon.jpg" />'+
							'<strong class="fullname">My BFF</strong>'+
							'<span class="username">@mybff</span>'+

							
							'<p class="tweet-text">'+$('.tweet-compose').val()+'</p>'+

							
							'<div class="tweet-actions">'+
								'<ul>'+
									'<li><span class="icon action-reply"></span> Reply</li>'+
									'<li><span class="icon action-retweet"></span> Retweet</li>'+
									'<li><span class="icon action-favorite"></span> Favorite</li>'+
									'<li><span class="icon action-more"></span> More</li>'+
								'</ul>'+
							'</div>'+

							
							'<div class="stats">'+
								'<div class="retweets">'+
									'<p class="num-retweets">30</p>'+
									'<p>RETWEETS</p>'+
								'</div>'+
								'<div class="favorites">'+
									'<p class="num-favorites">6</p>'+
									'<p>FAVORITES</p>'+
								'</div>'+
								'<div class="users-interact">'+
									'<div>'+
										'<img src="img/alagoon.jpg" />'+
										'<img src="img/vklimenko.jpg" />'+
									'</div>'+
								'</div>'+
								'<div class="time">'+
									'1:04 PM - 19 Sep 13'+
								'</div>'+
							'</div>'+
							'<div class="reply">'+
								'<img class="avatar" src="img/alagoon.jpg" />'+
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>'+
							'</div>'+
						'</div>'+
					'</div>');

$('#stream').prepend(largeHtml).val();


})



	


});