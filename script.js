let btn = document.querySelector("#button");

btn.addEventListener("click", (e)=>{
    e.preventDefault;
    let s_name = document.querySelector("#name").value;
    let s_year = document.querySelector("#year").value;

    let queryPara = new URLSearchParams();
    queryPara.set("name", s_name);
    queryPara.set("year", s_year);

    let url = document.querySelector("#url");

    url.textContent += queryPara.toString();


})
