function showingData(){
    const endpoint = "http://localhost:8000/";
    const fetching = fetch(endpoint);

    let wallet = document.querySelector(".wallet");

    fetching
    .then((response) => response.json())
    .then((data) => {
        var count = 0
        while(count<data.length){
        wallet.innerHTML += `<div class="user" id = "${count}"onclick="showHide(); userBalance(this)">
        <h1>${data[count].user}</h1>
      </div>`
      document.querySelector(".plus-sign").style.order = "2"
      count++
    }

    })
}

function postData(){
    newUser = prompt("Masukkan nama anda")
    newBalance = prompt("Masukkan balance awal anda")

    const endpoint = "http://localhost:8000/";
    const fetching = fetch(endpoint, {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "user" : newUser,
            "balance" : newBalance,
            "history" : ""
        })
    
    });
    fetching
    .then((response) => response.json()) 
    .then((data) => {console.log(data)})
    location.reload
}


function userBalance(element){
    const endpoint = "http://localhost:8000/";
    const fetching = fetch(endpoint);

    let uang = document.querySelector(".cash-balance");
    let history1 = document.querySelector(".his1");
    let history2 = document.querySelector(".his2");
    let history3 = document.querySelector(".his3");
    let history4 = document.querySelector(".his4");
    let history5 = document.querySelector(".his5");

    fetching
    .then((response) => response.json())
    .then((data) => {
        uang.innerHTML = `${data[element.id].balance}`;

        let listHistory = data[element.id].history.split(",")
        
        history1.innerHTML = listHistory[0]
        history2.innerHTML = listHistory[1]
        history3.innerHTML = listHistory[2]
        history4.innerHTML = listHistory[3]
        history5.innerHTML = listHistory[4]
    })
}

function showHide(){
    var planPage = document.querySelector(".plan-page");
    var wallet = document.querySelector(".wallet");
    var userWallet = document.querySelector(".user-wallet")
    var backButton = document.querySelector(".btn")

     if (planPage.style.display = "none"){
        planPage.style.display = "block";
        backButton.style.display = "block";
        wallet.style.display = "none";
        userWallet.style.display = "none";
        
    } else if(planPage.style.display = "block"){
        planPage.style.display = "none";
        backButton.style.display = "none"
        wallet.style.display = "flex";
        userWallet.style.display = "flex";
     }
    
}

showingData()