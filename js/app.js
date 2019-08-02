let endpoint = 'live';
let accessKey = '3206599913347cf5840ede1749cb53b0';
const BASE_URL = 'http://www.apilayer.net/api/';
const INDEX_URL = BASE_URL + endpoint + '?' + 'access_key' + '=' + accessKey + '&format=1';
const data = [];
const storeData = JSON.parse(localStorage.getItem('storeData')) || {};

axios.get(INDEX_URL)
    .then((response) => {
        data.push(response.data.quotes);
        storeData[response.data.timestamp] = { USDTWD: data[0].USDTWD, USDCNY: data[0].USDCNY, USDEUR: data[0].USDEUR };
        localStorage.setItem('storeData', JSON.stringify(storeData));
        displayDataKeys();
    }).catch((err) => alert(err));

const dataPanel = document.querySelector('.current');

function displayDataKeys() {
    dataPanel.innerHTML = `
    <div class="initBox">
        <div>
            <div class="card-title">
                <h4>USDTWD</h4>
            </div>
            <div class="card-body quotes-value">
                <h5>${data[0].USDTWD}</h5>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-show-movie" data-toggle="collapse" data-target="#show-information" data-id="">Learn More</button>
            </div>
        </div>
    </div>
    <div class="initBox">
        <div>
            <div class="card-title">
                <h4>USDCNY</h4>
            </div>
            <div class="card-body quotes-value">
                <h5>${data[0].USDCNY}</h5>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-show-movie" data-toggle="collapse" data-target="#show-information" data-id="">Learn More</button>
            </div>
        </div>
    </div>
    <div class="initBox">
        <div>
            <div class="card-title">
                <h4>USDEUR</h4>
            </div>
            <div class="card-body quotes-value">
                <h5>${data[0].USDEUR}</h5>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-show-movie" data-toggle="collapse" data-target="#show-information" data-id="">Learn More</button>
            </div>
        </div>
    </div>
    `;
};