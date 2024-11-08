const API_Key="PrKJE-xwrPO_G27WHmuzg4Tk2lY";
const API_URL="https://ci-jshint.herokuapp.com/api";
const resultsModal=new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click",e => getStatus(e));

async function getStatus(e){
    const queryString=`${API_URL}?api_key=${API_Key}`;
    const response=await fetch(queryString);
    const data=await response.json();
    if(response.ok){
        dispalyStatus(data);
    }
    else{
        throw new Error(data.error);
    }
}
function dispalyStatus(data){
    let heading="API Key Status"
    let results= `<div>Your key is valid until</div>`;
   results+= `<div class="key-status">${data.expiry}</div>`;
    document.getElementById("resultsModalTitle").innerText=heading;
    document.getElementById("results-content").innerHTML=results;
    resultsModal.show();
}