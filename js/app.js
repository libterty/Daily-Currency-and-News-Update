const LIVE_URL = 'https://api.exchangeratesapi.io/latest'
const data = [];
const storeData = JSON.parse(localStorage.getItem('storeData')) || {};

axios.get(LIVE_URL)
    .then((response) => {
        data.push(response.data);
        let reg = new RegExp('-', 'g');
        let yearDate = response.data.date.replace(reg, '');
        storeData[yearDate] = { EURUSD: data[0].rates.USD, EURCNY: data[0].rates.CNY, EURJPY: data[0].rates.JPY };
        localStorage.setItem('storeData', JSON.stringify(storeData));
        displayDataKeys();
    }).catch((err) => alert(err));

const dataPanel = document.querySelector('.current');

function displayDataKeys() {
    dataPanel.innerHTML = `
    <div class="initBox">
        <div>
            <div class="card-title">
                <h4>EURUSD</h4>
            </div>
            <div class="card-body quotes-value">
                <h5>${data[0].rates.USD}</h5>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-show-movie" data-toggle="collapse" data-target="#show-information" data-id="">Learn More</button>
            </div>
        </div>
    </div>
    <div class="initBox">
        <div>
            <div class="card-title">
                <h4>EURCNY</h4>
            </div>
            <div class="card-body quotes-value">
                <h5>${data[0].rates.CNY}</h5>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-show-movie" data-toggle="collapse" data-target="#show-information" data-id="">Learn More</button>
            </div>
        </div>
    </div>
    <div class="initBox">
        <div>
            <div class="card-title">
                <h4>EURJPY</h4>
            </div>
            <div class="card-body quotes-value">
                <h5>${data[0].rates.JPY}</h5>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary btn-show-movie" data-toggle="collapse" data-target="#show-information" data-id="">Learn More</button>
            </div>
        </div>
    </div>
    `;
};