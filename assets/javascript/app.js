/* */
$(document).ready(function () {

	var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
	var onlineIcon = "<div class='glyphicon glyphicon-ok ml-5 mt-1' style='font-size: 20px'></div>"
	var offlineIcon = "<div class='glyphicon glyphicon-remove ml-5 mt-2' style='font-size: 20px;'></div>"

	$("#all").on("click", function () {
		location.reload();
	})

	for (var i = 0; i < channels.length; i++) {
		$.getJSON('https://wind-bow.glitch.me/twitch-api/users/' + channels[i], function (response) {
			var channelNames = response._links.self.split('/').pop();
			var logo = response.logo
			$.getJSON('https://wind-bow.glitch.me/twitch-api/streams/' + channelNames, function (data) {
				if (data.stream === null) {
					offline = (channelNames, logo) => $("#channelsDiv").append(
						"<div class='row offlineContent' style='border: 1px solid darkgray; background-color: #F1F1F1;'>" +
						"<div class='col-sm-4'><img class='userIcon my-1' src=" + logo + "></div>" +
						"<div class='col-sm-4'><h2 class='mt-1'>" + channelNames + "</h2></div>" +
						"<div class='col-sm-4'>" + offlineIcon + "</div>" +
						"</div>"
					)
					offline(channelNames, logo);

					$('#online').on("click", function () {
						$('.offlineContent').css('display','none')
					})
					$('#offline').on("click", function () {
						$('.offlineContent').css('display','inherit')
					})
				}
				else if (data.stream != null) {
					var status = data.stream.channel.status
					online = (channelNames, logo) => $("#channelsDiv").append(
						"<div class='row' style='border: 1px solid darkgray; background-color: #F1F1F1;'>" +
						"<div class='col-sm-4'><img class='userIcon my-1' src=" + logo + "></div>" +
						"<div class='col-sm-4'><h2 class='mt-1'>" + channelNames + "</h2></div>" +
						"<div class='col-sm-4'>" + onlineIcon + "</div>" +
						"<div class='col='sol-sm-12 text-left'><p>"+status+"</p><div>"+
						"</div>"
					)
					online(channelNames, logo);
					
					$('#offline').on("click", function () {
						$('.onlineContent').css('display','none')
					})
					$('#online').on("click", function () {
						$('.onlineContent').css('display','inherit')
					})
				}

			});
		});
	}

})