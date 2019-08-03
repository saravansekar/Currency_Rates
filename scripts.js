fetch('https://api.exchangeratesapi.io/latest?base=USD')
.then(response => {
    return response.json();
  })
.then(data =>{
    appendData(data);
})
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });


  function appendData(data) {
    var mainContainer = document.getElementById("root");
    var result = [];
    for(var i in data.rates){
      result.push([i,data.rates[i]])}
      for(i = 0 ; i <= result.length;i++){
    var div = document.createElement("div");
        div.innerHTML = 'Curreny Rates ' + result[i];
        mainContainer.appendChild(div);
  }
}
