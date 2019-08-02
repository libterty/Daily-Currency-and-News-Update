const NEWS_URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0724b4680bed44d0a54b940c0c5f1e88';
const newsData = [];

axios.get(NEWS_URL)
    .then((response) => {
        newsData.push(...response.data.articles);
        displayNewsLists();
    }).catch((err) => alert(err));

const newsPanel = document.querySelector('.news');

function displayNewsLists() {
    let htmlContent = '';
    for (let i = 0; i < newsData.length; i++) {
        htmlContent += `
        <div class="col-md-3 col-sm-4">
            <div>
                <div class="card-title">
                    <h5>${newsData[i].title}</h5>
                </div>
                <div class="card-body quotes-value">
                    <img src="${newsData[i].urlToImage}" />
                </div>
                <div class="modal-footer">
                    <a self="_blank" href="${newsData[i].url}">
                        <h6>Learn More</h6>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
    newsPanel.innerHTML = htmlContent;
}