$(document).ready(()=>{
    document.getElementById('textIN').addEventListener('keydown',(e)=>{
        
        if (e.keyCode==13) {
            Translate();
        }
    })
})

function Translate() {
    let lang = $('#LangIN').val();
    const text = $('#textIN').val();
    const api = `https://giladthefixer-translateapp.hf.space/run/predict`;
    lang=`Helsinki-NLP/opus-mt-en-${lang}`;
    const arr=[]
    arr.push(text);
    arr.push(lang);

    $.ajax({
        type: 'POST',
        url: api,
        data: JSON.stringify({
            data: arr,
        }),
        cache: false,
        contentType: "application/json",
        dataType: "json",
        success: successCB,
        error: errorCB
    });
    return false;
}


function successCB(data) {
    console.log(data)
    document.getElementById('PH').innerHTML+=`<p>the translation is : ${data.data[0]}</p>`
}

function errorCB(err) {
    console.log(err.responseText,err)
}