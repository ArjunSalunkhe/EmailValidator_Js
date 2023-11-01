let btn = document.querySelector("#btn");

btn.addEventListener("click", async (e) => {
    e.preventDefault();
    // console.log("hiii");
    let key = "ema_live_bEIfXXr6rWcEq7kuMf0iRdapnUQB61RdsgMXUFsk";
    let email_val = document.querySelector("#email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email_val}`;

    let res = await fetch(url);
    let result = await res.json();
    
    // let result ={
    //     "tag": "",
    //     "free": true,
    //     "role": false,
    //     "user": "arjunsalunkhe7777",
    //     "email": "arjunsalunkhe7777@gmail.com",
    //     "score": 0.64,
    //     "state": "deliverable",
    //     "domain": "gmail.com",
    //     "reason": "valid_mailbox",
    //     "mx_found": true,
    //     "catch_all": null,
    //     "disposable": false,
    //     "smtp_check": true,
    //     "did_you_mean": "",
    //     "format_valid": true
    //   }

    let data = "";
    for (key in result) {
        if(result[key]!=="" && result[key]!==" "){
            data = data + `<div class="content">
                            <p>
                            ${key}:${result[key]}
                            </p>
                        </div>`
        }
    }
    let val = document.querySelector(".data");
    val.innerHTML = data;
})




























