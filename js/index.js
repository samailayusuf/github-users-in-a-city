function loadData () {
    var url = "https://api.github.com/search/users?q=location:lagos+language:php&page=1&per_page=10";
    var stringContent = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data.items)
        data.items.map(user => {
            stringContent += `
            <div class="card">
            <div class="card-img">
                <img src="${user.avatar_url}" />
            </div>
            <div class="card-body">
                <h3>${user.login}</h3>
                <a href="${user.html_url}">
                    <button id="visit-profile">Visit Profile</button>
                </a>
            </div>
        </div>
            `;
        });
       //Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       //console.log(data);
       document.querySelector('main').innerHTML = stringContent;
    }
};
xhttp.open("GET", url, true);
xhttp.send();
}

loadData();