//var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//console.log(alphabet.rotate(13));
//console.log(alphabet.rotate(13).rotate(13));

$(document).ready(function()
{
	$("#button").click(function()
	{
		console.log("hello");
		var message=$("#input").val();
		message = message.replace(/[a-zA-Z]/g, function(c){
		return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
	});
		$("#output").val(message);
	});
});
