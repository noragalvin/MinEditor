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
            console.log(1);
            document.execCommand(sCmd, false, sValue);
            // console.log('hello22');
            // console.log(document.queryCommandSupported(sCmd));
        }
    }
    selectingText();

}

//Insert Images
var idImage = 0;

function insertImg(img) {
    // $('#editor-doc').focus();
    var sImg = document.getElementById('data-img').innerText;
    var widthScreen = document.getElementById('editor-doc').offsetWidth;
    var widthImg;
    getMeta(sImg, widthImg, widthScreen);
    console.log(widthImg);
    console.log(widthScreen);
}

function getMeta(url, widthImg, widthScreen) {
    var img = new Image();
    img.onload = function () {
        alert(this.width + ' ' + this.height);
        if (this.width >= widthScreen) {
            widthImg = widthScreen;
            url = "<div><img id=\"image_" + idImage + " src=\"" + url + "\" width=\"" + widthImg + "\" onclick=\"changeSize('image_" + idImage + "')\"" + "></div>";
            idImage++;
            console.log(url);
            document.execCommand("insertHTML", false, url);
        } else {
            widthImg = this.width;
            url = "<div><img id=\"image_" + idImage + "\" src=\"" + url + "\" width=\"" + widthImg + "\" onclick=\"changeSize('image_" + idImage + "')\"" + "></div>";
            idImage++;
            console.log(url);
            document.execCommand("insertHTML", false, url);
        }
    };
    img.src = url;
}


function changeSize(id) {
    //Zoom in
    // console.log(id);
    $('#zoom-in').click(function (e) {
        e.preventDefault();
        // console.log(1);
        var width = $('#' + id).css('width');
        width = parseInt(width.substr(0, width.length - 2));
        // console.log(width);
        // console.log(typeof width);
        width += 20;
        // console.log(width);
        $('#' + id).css('width', width + 'px');
    });
    //Zoom out
    $('#zoom-out').click(function (e) {
        e.preventDefault();
        // console.log(1);
        var width = $('#' + id).css('width');
        width = parseInt(width.substr(0, width.length - 2));
        // console.log(width);
        // console.log(typeof width);
        width -= 20;
        // console.log(width);
        $('#' + id).css('width', width + 'px');
    });
}




//Insert Video
function insertVideo() {
    $('#editor-doc').focus();
    sVideo = document.getElementById('data-video').value;
    var check = sVideo.substr(1, 6);
    // console.log(sVideo);
    // console.log(check);
    if (check === "iframe") {
        document.execCommand("insertHTML", false, sVideo);
    } else {
        var idVideo = sVideo.substr(32, sVideo.length - 1);
        var width = document.getElementById('editor-doc').offsetWidth;
        var height = width * 56.25 / 100;
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
window.onload = function () {
    var ed = document.querySelector("#editor-doc");
    ed.addEventListener("paste", function (e) {
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
    function selectElementContents(el) {
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }

    var el = document.getElementById("editor-doc");
    selectElementContents(el);
}

//Show code
$(document).ready(function () {
    var flag = 1;
    var data = document.getElementById('editor-doc');
    // console.log(data.innerHTML);
    $('#showCode').click(function (e) {
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

$(document).ready(function () {
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

//Selection text
var ele = document.getElementById('demo-btn');
var sel = window.getSelection();
var rel1 = document.createRange();
rel1.selectNode(document.getElementById('cal1'));
var rel2 = document.createRange();
rel2.selectNode(document.getElementById('cal2'));
window.addEventListener('mouseup', function (event) {
    event.stopPropagation();
    if (!sel.isCollapsed) {
        //debugger;
        var r = sel.getRangeAt(0).getBoundingClientRect();
        var rb1 = rel1.getBoundingClientRect();
        var rb2 = rel2.getBoundingClientRect();
        ele.style.top = (r.bottom - rb2.top) * 100 / (rb1.top - rb2.top) + 'px'; //this will place ele below the selection
        ele.style.left = ((r.left - rb2.left + 10) * 100 / (rb1.left - rb2.left)) + 'px'; //this will align the right edges together
        //code to set content

        ele.style.display = 'block';
    }
});

// $('#heading-editor').focusout(function(){
//     ele.style.display = 'none';
// });



$(document).ready(function () {
    $(window).resize(function () {
        ele.style.display = 'none';
    });
});

$('body').mousedown(function () {
    $('#demo-btn').hover(function () {
        // over

    }, function () {
        $('.dropdown-color').hide();
        ele.style.display = 'none';
    });
});






function selectingText() {
    if (!sel.isCollapsed) {
        //debugger;
        var r = sel.getRangeAt(0).getBoundingClientRect();
        var rb1 = rel1.getBoundingClientRect();
        var rb2 = rel2.getBoundingClientRect();
        ele.style.top = (r.bottom - rb2.top) * 100 / (rb1.top - rb2.top) + 'px'; //this will place ele below the selection
        ele.style.left = ((r.left - rb2.left + 10) * 100 / (rb1.left - rb2.left)) + 'px'; //this will align the right edges together
        //code to set content

        ele.style.display = 'block';
    }
}


$('body').mousedown(function (e) {
    if (e.which == 1) {
        console.log(e.pageX + " / " + e.pageY);
    }
});


//Set cursor position




$.fn.setCursorPosition = function (pos) {
    this.each(function (index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
$('#editor-doc').focusin(function () {
    $('#menubar-item').slideDown();
})

$(document).ready(function () {
    $("#sub-tools").hide();
    $("#talign").hide();
});

function showmore(event) {
    // event.stopPropagation();
    console.log(1);
    $("#sub-tools").show();
    $("#show").hide();
    $("#talign").show();
};

function showoff(event) {
    // event.stopPropagation();
    console.log(2);
    $("#sub-tools").hide();
    $("#show").show();
    $("#talign").hide();
};

// $(document).ready(function () {
//     $('#editor-doc').focus();
// });
$(window).on('load', function () {
    $('#editor-doc').focus();
});

function TextColor() {
    $('#TextColor').css('display', 'block');
    $('#BackgroundColor').css('display', 'none');
}

function BackgroundColor() {
    $('#BackgroundColor').css('display', 'block');
    $('#TextColor').css('display', 'none');
}

$('#color-btn').click(function () {
    $('.dropdown-color').toggle();
})
$('#fix-color').click(function (e) {
    e.preventDefault();
    console.log(1);
    $('.dropdown-color').hide();
});


$(function() {

    var tabKeyPressed = false;
    
    $(window).keydown(function(e) {
       tabKeyPressed = e.keyCode == 9;
       if (tabKeyPressed) {
        document.execCommand('indent',false,null);
          e.preventDefault();
          return;
       }
    });
    
    $(window).keyup(function(e) {
       if (tabKeyPressed && event.shiftKey) {
        //   $(this).val("TAB"); // Do stuff for TAB
         alert('tab');
         
          e.preventDefault();
          return;
       }
    
       //Do other stuff when not TAB
    });
    
    })();
  