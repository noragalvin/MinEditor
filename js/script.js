//Insert function
function formatDoc(sCmd, sValue) {
    // console.log("1");
    if (sCmd == 'h1' || sCmd == 'h2' || sCmd == 'h3' || sCmd == 'h4' || sCmd == 'h5' || sCmd == 'h6' || sCmd ==
        'p') {
        document.execCommand('formatBlock', false, sCmd);
        oDoc.focus();
        setCodeMode();
    } else if (sCmd == 'createLink' || sCmd == 'insertimage') {
        var url = prompt('Enter the link here: ', 'http:\/\/');
        console.log(url);
        if (sCmd === 'insertimagea') {
            insertImg(url);
        } else {
            document.execCommand(sCmd, false, url);
        }
        oDoc.focus();
        setCodeMode();
    } else if (sCmd == 'insertHTML') {
        url = prompt('Enter embed code: ', 'Embed here');
        document.execCommand(sCmd, false, url);
        oDoc.focus();
        setCodeMode();
    } else {
        if (document.queryCommandSupported(sCmd) == false) {
            alert('The command ' + sCmd + ' is not support your browser');
            // console.log('hello');
        } else {
            document.execCommand(sCmd, false, sValue);
            // console.log('hello22');
            // console.log(document.queryCommandSupported(sCmd));
            oDoc.focus();
            setCodeMode();
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
        console.log(1);
        e.preventDefault();
        var text = e.clipboardData.getData("text/plain");
        console.log(text);
        document.execCommand("insertHTML", false, text);
    });
}

//Select all
function selectAll() {
    document.getElementById("editor-doc").select();
}