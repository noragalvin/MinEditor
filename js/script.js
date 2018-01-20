//Insert function
function formatDoc(sCmd, sValue) {
    // console.log("1");
    if (sCmd == 'h1' || sCmd == 'h2' || sCmd == 'h3' || sCmd == 'h4' || sCmd == 'h5' || sCmd == 'h6' || sCmd ==
        'p') {
        document.execCommand('formatBlock', false, sCmd);

    } else if (sCmd == 'createLink' || sCmd == 'insertimage') {
        var url = prompt('Enter the link here: ', 'http:\/\/');
        console.log(url);
        if (sCmd === 'insertimagea') {
            insertImg(url);
        } else {
            document.execCommand(sCmd, false, url);
        }

    } else if (sCmd === 'backcolor' || sCmd === 'forecolor') {
        // console.log(1);
        // console.log(sCmd);
        // console.log(sValue);
        document.execCommand(sCmd, true, sValue);
    } else if (sCmd == 'insertHTML') {
        // <iframe width="auto" height="auto" frameborder="0" allowfullscreen src="https://www.nhaccuatui.com/vh/auto/GbCeos9ACoGf0"></iframe>
        // if else insert video
        url = prompt('Enter embed code: ', 'Embed here');
        document.execCommand(sCmd, false, url);
    } else {
        if (document.queryCommandSupported(sCmd) == false) {
            alert('The command ' + sCmd + ' is not support your browser');
            // console.log('hello');
        } else {
            document.execCommand(sCmd, false, sValue);
            // console.log('hello22');
            // console.log(document.queryCommandSupported(sCmd));
        }
    }
}

//Insert Images
var idImage = 0;
function insertImg(img) {
    var sImg = prompt("Enter url");
    var widthScreen = document.getElementById('editor-doc').offsetWidth;
    var widthImg;
    getMeta(sImg,widthImg,widthScreen);
    console.log(widthImg);
    console.log(widthScreen);
}

function getMeta(url,widthImg,widthScreen){   
    var img = new Image();
    img.onload = function(){
        alert( this.width+' '+ this.height );
        if(this.width >= widthScreen){
            widthImg = widthScreen;
            url = "<div><img id=\"image_" + idImage + " src=\"" + url + "\" width=\"" + widthImg + "\" onclick=\"changeSize('image_" + idImage + "')\"" +  "></div>";
            idImage++;
            console.log(url);
            document.execCommand("insertHTML",false,url);
        }else{
            widthImg = this.width;
            url = "<div><img id=\"image_" + idImage + "\" src=\"" + url + "\" width=\"" + widthImg + "\" onclick=\"changeSize('image_" + idImage + "')\"" +  "></div>";
            idImage++;
            console.log(url);
            document.execCommand("insertHTML",false,url);
        }
    };
    img.src = url;
}


function changeSize(id){
    //Zoom in
    // console.log(id);
    $('#zoom-in').click(function (e) { 
        e.preventDefault();
        // console.log(1);
        var width = $('#'+id).css('width');
        width = parseInt(width.substr(0,width.length-2));
        // console.log(width);
        // console.log(typeof width);
        width+=20;
        // console.log(width);
        $('#'+id).css('width', width + 'px');
    });
    //Zoom out
    $('#zoom-out').click(function (e) { 
        e.preventDefault();
        // console.log(1);
        var width = $('#'+id).css('width');
        width = parseInt(width.substr(0,width.length-2));
        // console.log(width);
        // console.log(typeof width);
        width-=20;
        // console.log(width);
        $('#'+id).css('width', width + 'px');
    });
}

//Zoom out



//Insert Video
function insertVideo() {
    sVideo = prompt('Enter embed code: ', 'Embed here');
    var check = sVideo.substr(1,6);
    // console.log(sVideo);
    // console.log(check);
    if(check === "iframe"){
        document.execCommand("insertHTML", false, sVideo);
    } else {
        var idVideo = sVideo.substr(32,sVideo.length-1);
        var width = document.getElementById('editor-doc').offsetWidth;
        var height = width*56.25/100;
        console.log(width);
        console.log(height);
        // console.log(idVideo);
        sVideo = "<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"https://www.youtube.com/embed/" + idVideo + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>";
        console.log(sVideo);
        document.execCommand("insertHTML", false, sVideo);
    }
}

// https://www.youtube.com/watch?v=ew1TpesH-jw
// <iframe width="560" height="315" src="https://www.youtube.com/embed/ew1TpesH-jw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
// 56.25
// height = 56.25% width


//Paste as plain text
window.onload = function() {
    var ed = document.querySelector("#editor-doc");
    ed.addEventListener("paste", function(e) {
        // console.log(1);
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        // console.log(text);
        document.execCommand("insertHTML", false, text);
    });
}

//Insert hr tag
function insertHr() {
    document.execCommand("insertHTML", false, "<hr/>");
}

//Select all
function selectAll() {
    $('#editor-doc').focus();
    $('#editor-doc').select();
}

//Show code
$(document).ready(function() {
    var flag = 1;
    var data = document.getElementById('editor-doc');
    // console.log(data.innerHTML);
    $('#showCode').click(function(e) {
        e.preventDefault();
        if (flag === 1) {
            document.getElementById('editor-doc').innerText = data.innerHTML.trim();
            flag = 0;
        } else {
            document.getElementById('editor-doc').innerHTML = data.innerText.trim();
            flag = 1;
        }
    });
});

$(document).ready(function() {
    function getSelected() {
        if (window.getSelection) {
            console.log('selected');
            return window.getSelection();
        } else if (document.getSelection) {
            console.log('selected');
            return document.getSelection();
        } else {
            var selection = document.selection && document.selection.createRange();
            if (selection.text) {
                console.log('selected');
                return selection.text;
            }
            return false;
        }
        return false;
    }
});


