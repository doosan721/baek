request = require("request")
i=0
function doit() {
	v = Math.random() * 100
	url = "https://api.thingspeak.com/update?api_key=3U6XJYCQXHXKEVPP&field1="+ v
	request(url, function(err, res, body) {
		console.log(body)
	})
	
	console.log(`i=${i}`)
	if (i++ > 18) return
	setTimeout(doit, 20000)
}
console.log(`ready`)
doit()