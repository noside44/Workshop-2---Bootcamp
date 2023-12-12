const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCrCJAnVMGvGm2v8fptrsgbg&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '281cb52cb4msh8ad3d5855da40cbp18e50fjsnf55cbd008dda',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
        <div class="group-relative row col-sm-6 col-md-4 mb-5">
            <h6 class="fw-bold" style="font-size:12px">
            <span aria-hidden="true" class=""></span>
                ${video.snippet.title}
            </h6>
            <div class="text-start" >
              <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="img-fluid" />
            </div>
            <div class="video-youtube" style="font-size:12px">
                <a href="https://www.youtube.com/watch?v=${video.id.videoId}">Ir a Video</a>
            </div>
            <div class="" style="font-size:12px">
                ${video.snippet.description}
            </div>
        </div>`).slice(",").join('')} `;
    content.innerHTML = view;
    }
    catch (error){
    console.log(error);
    }
})();
