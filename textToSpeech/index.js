function Convert() {
  let text = $("#TextIN").val();
  let api = `https://matthijs-speecht5-tts-demo.hf.space/run/predict`;

  let objectToSend = {
    data: [text, "BDL (male)"],
  };

  $.ajax({
    type: "POST",
    url: api,
    data: JSON.stringify(objectToSend),
    cache: false,
    contentType: "application/json",
    dataType: "json",
    success: successCB2,
    error: errorCB,
  });
}

function successCB2(data) {
    console.log(data);
    document.getElementById('A1').src=`https://matthijs-speecht5-tts-demo.hf.space/file=${data.data[0].name}`;
    $('#A1').fadeIn(200);
    document.getElementById('A1').play();

}

function errorCB(err) {
    console.log(err);
}