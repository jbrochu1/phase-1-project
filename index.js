const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6ece862459msh64649fba245c777p1c28dajsnb28c77bbfa56',
		'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
	}
};

fetch('https://golf-course-finder.p.rapidapi.com/courses?radius=25&lat=39.7392&lng=-104.9903', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));