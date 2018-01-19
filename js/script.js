var oDoc;
        var oCode;
        var sDefTxt;

        //khởi đầu

        function initDoc() {
            oDoc = document.getElementById("editor-doc");
            sDefTxt = oDoc.innerHTML;
            initCode();
        }

        function initCode() {
            oCode = document.getElementById("editor-code");
            setCodeMode(true);
        }

        function validateMode() {
            if (!document.compForm.switchMode.checked) {
                return true;
            }
            alert("Uncheck \"Show HTML\".");
            oDoc.focus();
            return false;
        }

        //chuyển đổi text vs code

        function setCodeMode() {
            var oContent;
            //console.log(oDoc);
            if (oDoc.innerHTML === "<br>" || oDoc.innerHTML === "") oDoc.innerHTML = "<p><br> </p>";
            console.log(oDoc.innerHTML);
            oContent = document.createTextNode(oDoc.innerHTML);

            oCode.innerHTML = "";
            var oPre = document.createElement("pre");
            //console.log(oPre);
            oCode.contentEditable = false;
            oPre.id = "sourceText";
            oPre.contentEditable = true;
            oPre.appendChild(oContent);
            oCode.appendChild(oPre);
            oCode.focus();
        }

        function setDocMode() {
            /*if (document.all) {
                //console.log(1);
                oDoc.innerHTML = oDoc.innerText;
            } else {
                //console.log(1);
                //console.log(oDoc.innerHTML);
                oContent = document.createRange();
                //console.log(oDoc.firstChild);
                oContent.selectNodeContents(oCode.firstChild);
                //console.log(oContent.toString());
                oDoc.innerHTML = oContent.toString();
            }
            oDoc.contentEditable = true;*/
        }



    function printDoc() {
      var oPrntWin = window.open("", "_blank",
        "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
      oPrntWin.document.open();
      oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" +
        oDoc.innerHTML + "<\/body><\/html>");
      oPrntWin.document.close();
    }


    //press key to change
    // $(document).bind('keypress', function (e) {
    //   if(event.which === 65 && event.shiftKey){
    //     alert('you press shift a');
    //   }


        // forn chữ

        function formatDoc(sCmd, sValue) {
            // console.log("1");
            if (sCmd == 'h1' || sCmd == 'h2' || sCmd == 'h3' || sCmd == 'h4' || sCmd == 'h5' || sCmd == 'h6' || sCmd == 'p') {
                document.execCommand('formatBlock', false, sCmd);
                oDoc.focus();
                setCodeMode();
            } else if (sCmd == 'createLink' || sCmd == 'insertimage') {
                var url = prompt('Enter the link here: ', 'http:\/\/');
                console.log(url);
                if(sCmd === 'insertimagea') { insertImg(url); }
                else { document.execCommand(sCmd, false, url); }
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

        function printDoc() {
            var oPrntWin = window.open("", "_blank",
                "width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
            oPrntWin.document.open();
            oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" +
                oDoc.innerHTML + "<\/body><\/html>");
            oPrntWin.document.close();
        }


        //press key to change
        // $(document).bind('keypress', function (e) {
        //   if(event.which === 65 && event.shiftKey){
        //     alert('you press shift a');
        //   }
        // });