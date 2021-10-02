function loadData () {
    document.getElementById('loader').style.visibility = 'visible';
    var location = document.getElementById('location').value;
    var language = document.getElementById('language').value;

    if(location == "" || language ==""){
        document.querySelector('.error-message').style.visibility = 'visible';
        setTimeout(()=>{
            document.querySelector('.error-message').style.visibility = 'hidden';
        },3000);
        //alert("Fields are required");
        document.getElementById('loader').style.visibility = 'hidden';
        return false;
    } else{
        document.querySelector('.error-message').style.visibility = 'hidden';
    }

    //event.preventDefault();
    var url = `https://api.github.com/search/users?q=location:${location}+language:${language}&page=1&per_page=12`;
    var stringContent = '';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {

        if(this.status == 200){
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
           document.querySelector('.welcome-text').style.display = 'none';
           document.getElementById('loader').style.display = 'none';
        }else{
           document.querySelector('.error').style.visibility = 'visible'; 
        }


    }
};
xhttp.open("GET", url, true);
xhttp.send();

//console.log(xhttp.status);
}