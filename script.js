let s_btn = document.querySelector("button");

s_btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    let s_name = document.querySelector("#name").value;
    let s_year = document.querySelector("#year").value;

    // console.log(url);
    let queryPara = new URLSearchParams();
    queryPara.set('name', s_name);
    queryPara.set('year', s_year);
    
    let url = document.getElementById("url");
    
    // console.log(queryPara);

    url.textContent += queryPara.toString();
})

