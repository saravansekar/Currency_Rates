function getcurrencyData(base,conv){
var url = 'https://api.exchangeratesapi.io/latest?base='+base+'&symbols='+conv;
console.log(url)
fetch(url)
.then(response => {
    return response.json();
  })
.then(data =>{
    appendData(data,base ,conv);
})
  .catch(function(err) {
    alert("Enter Valid Currency Code Or the conversion is not available");
  });
}


  function appendData(data,base,conv) {
    var mainContainer = document.getElementById("root");
        var string = JSON.stringify(data);
        var objectValue = JSON.parse(string);
    var div = document.createElement("div");
        div.innerHTML = base +' to '+ conv+' is '+ objectValue.rates[conv];;
        mainContainer.appendChild(div);
}
var action = 1;
function onButtonClick(){
  if(action == 1){
  document.getElementById('currency_base').className="show";
  document.getElementById('currency_conv').className="show";
  var baseValue = document.getElementById('currency_base').value;
  var convValue = document.getElementById('currency_conv').value;
  if(baseValue && convValue){
    getcurrencyData(baseValue,convValue);
    document.getElementById('currency_base').value="";
    document.getElementById('currency_conv').value="";
    document.getElementById('currency_base').className="hide";
    document.getElementById('currency_conv').className="hide";
    action = 2;
  }
  
}else {
  document.getElementById('currency_base').className="show";
  document.getElementById('currency_conv').className="show";
  action = 1;
}
}
