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
function insertImg(img) {
    img = "<div><img src='" + img + "'></div>";
    console.log(img);
    if (document.all) {
        var range = document.selection.createRange();
        range.pasteHTML(img);
        range.collapse(false);
        range.select();
    } else {
        document.execCommand("insertHTML", false, img);
    }
}

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
    $('#editor-doc').focus();
    $('#editor-doc').select();
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
