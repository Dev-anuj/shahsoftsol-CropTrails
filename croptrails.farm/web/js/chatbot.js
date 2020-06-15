function chatbotInit() {
    var div = document.createElement("div");
    document.getElementsByTagName('body')[0].appendChild(div);
    div.outerHTML = "<div id='botDiv' style='height: 38px; font-family:Karla,san-serif;font-weight:bold; z-index:9999; box-shadow:0 5px 15px rgba(0,0,0,0.4); position: fixed; bottom: 0; right:35px; background-color: #77b122'><div id='botTitleBar' style='height: 38px; width: 400px;color: #FFF;background: -webkit-linear-gradient(#FFF, #FFF); -webkit-background-clip: text;-webkit-text-fill-color: transparent; padding: 10px; position:fixed; cursor: pointer;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;Chat With Us</div><iframe allow='microphone;'  style='padding-top: 38px;' width='250px' height='500px' src='https://console.dialogflow.com/api-client/demo/embedded/bc11534f-04d9-4f0a-869a-8dcbf9163ff7'></iframe></div>";
    document.getElementById('botTitleBar').addEventListener('click', function (e) {
        e.target.matches = e.target.matches || e.target.msMatchesSelector;
        if (e.target.matches('#botTitleBar')) {
            var botDiv = document.querySelector('#botDiv');
            botDiv.style.height = botDiv.style.height == '500px' ? '38px' : '500px';
        };
    });
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
    chatbotInit()
  });