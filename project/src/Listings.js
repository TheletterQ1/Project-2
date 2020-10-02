fetch("https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York%20City&limit=200&offset=0&state_code=NY", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "realtor.p.rapidapi.com",
		"x-rapidapi-key": "e3fc14b8f0mshd35be42ebb3bdfap1ca567jsn9d439daf9808"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});