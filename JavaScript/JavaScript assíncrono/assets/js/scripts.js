const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));
		return json.webpurl;
    }
}

const loadImg = async () => {
	const catImg = document.getElementsByTagName('cat');
	catImg.src = await getCats();
};

catBtn.addEvenListener('click', loadImg);

loadImg();