function login(e){
    e.preventDefault();
    let form = document.forms.loginForm;
    let secretKey = form.secretKey.value;
    
    fetch('/login',{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "text/html",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: secretKey, // body data type must match "Content-Type" header
    })
  .then(function(response) {
      if(response.ok)
        return response.json();
    throw new Error(response.statusText);
  })
  .then(function(myJson) {
    form.secretKey.value = '';
    $('#myModal').modal('hide');
  }).catch(function(err){
      alert(err);
  });
}