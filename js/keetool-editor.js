content = `
<div class="container">
        <div class="row" id="row-show" style="border-top:1px solid #ebebeb;">

                
                
          
        <div class="row" id="row-hide" style="border-top:3px solid #000;">
            
                <div class="tool-icon" title="Bold (Ctrl+B)" onclick="formatDoc('bold')">
                    <a href="#" data-command='bold'>
                        <i class='fa fa-bold'></i>
                    </a>
                </div>
                <div class="tool-icon" title="Italic (Ctrl+I)" onclick="formatDoc('italic')">
                    <a href="#" data-command='italic'>
                        <i class='fa fa-italic'></i>
                    </a>
                </div>
                <div class="tool-icon" title="Underline (Ctrl+U)" onclick="formatDoc('underline')">
                    <a href="#" data-command='underline'>
                        <i class='fa fa-underline'></i>
                    </a>
                </div>
                <div class="tool-icon" title="Insert Image (Ctrl+P)" onclick="formatDoc('insertimage')">
                    <a href="#">
                        <i class="fa fa-picture-o" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tool-icon" title="Paragraph Format">
                    <div class="dropdown dropdown-fix">
                        <button class="dropdown-toggle btn-fix" type="button" data-toggle="dropdown">
                            <i class="fa fa-paragraph">
                                <span class="caret"></span>
                            </i>
                        </button>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">HTML</a>
                            </li>
                            <li>
                                <a href="#">CSS</a>
                            </li>
                            <li>
                                <a href="#">JavaScript</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="dropdown dropdown-fix" id="align">
                    <button class="dropdown-toggle btn-fix" type="button" data-toggle="dropdown">
                        <i class="fa fa-align-center">
                            <span class="caret"></span>
                        </i>
                    </button>
                    <ul class="dropdown-menu">
                        <li onclick="formatDoc('justifyLeft')">
                            <a href="#" title="Align left">
                                <i class="fa fa-align-left" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li onclick="formatDoc('justifyCenter')">
                            <a href="#" title="Align center">
                                <i class="fa fa-align-center" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li onclick="formatDoc('justifyRight')">
                            <a href="#" title="Align right">
                                <i class="fa fa-align-right" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li onclick="formatDoc('justifyFull')">
                            <a href="#" title="Align justify">
                                <i class="fa fa-align-justify" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>

        </div>

        <div id="heading-editor" class="row">
            <div id="editor-doc" style="overflow:auto;" contenteditable>
                    
            </div>
            <div style="position:absolute;display:none;" id="demo-btn">
                   
                    <div class="tool-icon" title="Font Family">
                        <div class="dropdown dropdown-fix">
                            <button class="dropdown-toggle btn-fix" type="button" data-toggle="dropdown" onclick="fixColor();">
                                <i class="fa fa-font"><span class="caret"></span></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li onclick="formatDoc('fontname','Arial')">
                                    <a href="#" style="font-family: Arial">Arial</a>
                                </li>
                                <li onclick="formatDoc('fontname','Arial Black')">
                                    <a href="#" style="font-family: Georgia">Arial Black</a>
                                </li>
                                <li onclick="formatDoc('fontname','Courier New')">
                                    <a href="#" style="font-family: Impact">Courier New</a>
                                </li>
                                <li onclick="formatDoc('fontname','Time New Roman')">
                                    <a href="#" style="font-family: Time New Roman">Time New Roman</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tool-icon" title="Paragraph Format">
                        <div class="dropdown dropdown-fix">
                            <button class="dropdown-toggle btn-fix" type="button" data-toggle="dropdown" onclick="fixColor();">
                                <i class="fa fa-paragraph"><span class="caret"></span></i>
                            </button>
                            <ul class="dropdown-menu" id="heading">
                                <li onclick="formatDoc('p')">
                                    <a href="#" title="Paragraph">
                                        <p>Normal</p>
                                    </a>
                                </li>
                                <li onclick="formatDoc('h1')">
                                    <a href="#" title="Heading 1">
                                        <h1>Heading 1</h1>
                                    </a>
                                </li>
                                <li onclick="formatDoc('h2')">
                                    <a href="#" title="Heading 2">
                                        <h2>Heading 2</h2>
                                    </a>
                                </li>
                                <li onclick="formatDoc('h3')">
                                    <a href="#" title="Heading 3">
                                        <h3>Heading 3</h3>
                                    </a>
                                </li>
                                <li onclick="formatDoc('h4')">
                                    <a href="#" title="Heading 4">
                                        <h4>Heading 4</h4>
                                    </a>
                                </li>
                                <li onclick="formatDoc('h5')">
                                    <a href="" title="Heading 5">
                                        <h5>Heading 5</h5>
                                    </a>
                                </li>
                                <li onclick="formatDoc('h6')">
                                    <a href="" title="Heading 6">
                                        <h6>Heading 6</h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
        
                    <div class="tool-icon" title="Color">
                        <button style="outline:none;" class="btn-fix" id="color-btn" type="button" data-toggle="dropdown"><i class="fa fa-tint"><span class="caret"></span></i></button>
                        <div class="dropdown dropdown-color">
                            <ul class="nav nav-tabs">
                                <li class="active" style="width: 50%;text-align:center;font-size:13px"><a data-toggle="tab" href="#text-color"><b>Text Color</b></a></li>
                                 <li  style="width: 50%;text-align: center; font-size: 13px"><a data-toggle="tab" href="#bg-color" ><b>Background</b></a></li>
                            </ul>
                
                            <div class="tab-content">
                                <div id="text-color" class="tab-pane fade in active">
                                    <table>
                                        <tr>
                                        <td><a href="#" onclick="formatDoc('forecolor','indigo')" class='color-item' style="background-color: indigo" title="indigo"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','firebrick')" class="color-item" style="background-color:firebrick" title="firebrick"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','maroon')" class='color-item' style="background-color: maroon" title="maroon"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','darkslategray')" class='color-item' style="background-color:darkslategray" title="darkslategray"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','darkgreen')" class='color-item' style="background-color: darkgreen" title="darkgreen"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','mediumblue')" class='color-item' style="background-color: mediumblue" title="mediumblue"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','navy')" class='color-item' style="background-color: navy" title="navy"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','black')" class='color-item' style="background-color: black" title="black"></a></td>
                                        </tr>
                                        <tr>
                                        <td><a href="#" onclick="formatDoc('forecolor','rebeccapurple')" class='color-item' style="background-color: rebeccapurple" title=" rebeccapurple"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','red')" class='color-item' style="background-color: red" title="red"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','chocolate')" class='color-item' style="background-color: chocolate" title="chocolate"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','olive')" class='color-item' style="background-color: olive" title="olive"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','green')" class='color-item' style="background-color: green" title="green"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','teal')" class='color-item' style="background-color: teal" title="teal"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','blue')" class='color-item' style="background-color: blue" title="blue"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','gray')" class='color-item' style="background-color: gray" title="gray"></a></td>
                                        </tr>
                                        <tr>
                                        <td><a href="#" onclick="formatDoc('forecolor','mediumorchid')" class='color-item' style="background-color: mediumorchid" title="mediumorchid"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','deeppink')" class='color-item' style="background-color: deeppink" title="deeppink"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','darkorange')" class='color-item' style="background-color: darkorange" title=" darkorange"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','greenyellow')" class='color-item' style="background-color: greenyellow" title="greenyellow"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','mediumseagreen')" class='color-item' style="background-color: mediumseagreen" title="mediumseagreen"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','mediumturquoise')" class='color-item' style="background-color: mediumturquoise" title="mediumturquoise"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','royalblue')" class='color-item' style="background-color: royalblue" title="royalblue"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','lightslategrey')" class='color-item' style="background-color: lightslategrey" title="lightslategrey"></a></td>
                                        </tr>
                                        <tr>
                                        <td><a href="#" onclick="formatDoc('forecolor','violet')" class='color-item' style="background-color: violet" title="violet"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','orchid')" class='color-item' style="background-color: orchid" title="orchid"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','gold')" class='color-item' style="background-color: gold" title="gold"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','yellow')" class='color-item' style="background-color: yellow" title="yellow"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','lime')" class='color-item' style="background-color: lime" title="lime"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','aqua')" class='color-item' style="background-color: aqua" title="aqua"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','skyblue')" class='color-item' style="background-color: skyblue " title="skyblue"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','lightgray')" class='color-item' style="background-color: lightgray" title="lightgray"></a></td>
                                        </tr>
                                        <tr>
                                        <td><a href="#" onclick="formatDoc('forecolor','plum')" class='color-item' style="background-color: plum" title="plum"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','pink')" class='color-item' style="background-color: pink" title="pink"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','peachpuff')" class='color-item' style="background-color: peachpuff" title="peachpuff"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','khaki')" class='color-item' style="background-color: khaki" title="khaki"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','palegreen')" class='color-item' style="background-color: palegreen" title="palegreen"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','paleturquoise')" class='color-item' style="background-color: paleturquoise" title="paleturquoise"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','powderblue')" class='color-item' style="background-color: powderblue" title="powderblue"></a></td>
                                        <td><a href="#" onclick="formatDoc('forecolor','white')" class='color-item' style="background-color: white" title="white"></a></td>
                                        </tr>
                                    </table>
                                </div>
                                <div id="bg-color" class="tab-pane fade">
                                        <table>
                                                <tr>
                                                <td><a href="#" onclick="formatDoc('backcolor','indigo')" class='color-item' style="background-color: indigo " title="indigo"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','firebrick')" class="color-item" style="background-color:firebrick" title="firebrick"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','maroon')" class='color-item' style="background-color: maroon" title="maroon"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','darkslategray')" class='color-item' style="background-color:darkslategray" title="darkslategray"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','darkgreen')" class='color-item' style="background-color: darkgreen" title="darkgreen"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','mediumblue')" class='color-item' style="background-color: mediumblue" title="mediumblue"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','navy')" class='color-item' style="background-color: navy" title="navy"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','black')" class='color-item' style="background-color: black" title="black"></a></td>
                                                </tr>
                                                <tr>
                                                <td><a href="#" onclick="formatDoc('backcolor','rebeccapurple')" class='color-item' style="background-color: rebeccapurple" title=" rebeccapurple"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','red')" class='color-item' style="background-color: red" title="red"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','chocolate')" class='color-item' style="background-color: chocolate" title="chocolate"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','olive')" class='color-item' style="background-color: olive" title="olive"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','green')" class='color-item' style="background-color: green" title="green"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','teal')" class='color-item' style="background-color: teal" title="teal"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','blue')" class='color-item' style="background-color: blue" title="blue"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','gray')" class='color-item' style="background-color: gray" title="gray"></a></td>
                                                </tr>
                                                <tr>
                                                <td><a href="#" onclick="formatDoc('backcolor','mediumorchid')" class='color-item' style="background-color: mediumorchid" title="mediumorchid"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','deeppink')" class='color-item' style="background-color: deeppink" title="deeppink"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','darkorange')" class='color-item' style="background-color: darkorange" title=" darkorange"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','greenyellow')" class='color-item' style="background-color: greenyellow" title="greenyellow"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','mediumseagreen')" class='color-item' style="background-color: mediumseagreen" title="mediumseagreen"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','mediumturquoise')" class='color-item' style="background-color: mediumturquoise" title="mediumturquoise"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','royalblue')" class='color-item' style="background-color: royalblue" title="royalblue"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','lightslategrey')" class='color-item' style="background-color: lightslategrey" title="lightslategrey"></a></td>
                                                </tr>
                                                <tr>
                                                <td><a href="#" onclick="formatDoc('backcolor','violet')" class='color-item' style="background-color: violet" title="violet"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','orchid')" class='color-item' style="background-color: orchid" title="orchid"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','gold')" class='color-item' style="background-color: gold" title="gold"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','yellow')" class='color-item' style="background-color: yellow" title="yellow"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','lime')" class='color-item' style="background-color: lime" title="lime"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','aqua')" class='color-item' style="background-color: aqua" title="aqua"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','skyblue')" class='color-item' style="background-color: skyblue " title="skyblue"></a></td>
                                                <td><a href="#" onclick="formatDoc('forecolor','lightgray')" class='color-item' style="background-color: lightgray" title="lightgray"></a></td>
                                                </tr>
                                                <tr>
                                                <td><a href="#" onclick="formatDoc('backcolor','plum')" class='color-item' style="background-color: plum" title="plum"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','pink')" class='color-item' style="background-color: pink" title="pink"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','peachpuff')" class='color-item' style="background-color: peachpuff" title="peachpuff"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','khaki')" class='color-item' style="background-color: khaki" title="khaki"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','palegreen')" class='color-item' style="background-color: palegreen" title="palegreen"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','paleturquoise')" class='color-item' style="background-color: paleturquoise" title="paleturquoise"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','powderblue')" class='color-item' style="background-color: powderblue" title="powderblue"></a></td>
                                                <td><a href="#" onclick="formatDoc('backcolor','white')" class='color-item' style="background-color: white" title="white"></a></td>
                                                </tr>
                                        </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                 
                    <div class="tool-icon" title="Font Size">
                        <div class="dropdown dropdown-fix">
                            <button class="dropdown-toggle btn-fix" type="button" data-toggle="dropdown" onclick="fixColor();">
                                <i class="fa fa-text-height"><span class="caret"></span></i>
                            </button>
                            <ul class="dropdown-menu" style="overflow-y: auto; height:200px; min-width:50px;">
                                <li onclick="formatDoc('fontsize','1')">
                                    <a href="#">1</a>
                                </li>
                                <li onclick="formatDoc('fontsize','2')">
                                    <a href="#">2</a>
                                </li>
                                <li onclick="formatDoc('fontsize','3')">
                                    <a href="#">3</a>
                                </li>
                                <li onclick="formatDoc('fontsize','4')">
                                    <a href="#">4</a>
                                </li>
                                <li onclick="formatDoc('fontsize','5')">
                                    <a href="#">5</a>
                                </li>
                                <li onclick="formatDoc('fontsize','6')">
                                    <a href="#">6</a>
                                </li>
                                <li onclick="formatDoc('fontsize','7')">
                                    <a href="#">7</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="tool-icon" title="Align" id="talign">
                            <div class="dropdown dropdown-fix" id="align">
                                <button class="dropdown-toggle btn-fix" type="button" data-toggle="dropdown" onclick="fixColor();">
                                    <i class="fa fa-align-center"><span class="caret"></span></i>
                                </button>
                                <ul class="dropdown-menu" style="min-width:55px;">
                                    <li onclick="formatDoc('justifyLeft')">
                                        <a href="#" title="Align left">
                                            <i class="fa fa-align-left" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li onclick="formatDoc('justifyCenter')">
                                        <a href="#" title="Align center">
                                            <i class="fa fa-align-center" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li onclick="formatDoc('justifyRight')">
                                        <a href="#" title="Align right">
                                            <i class="fa fa-align-right" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li onclick="formatDoc('justifyFull')">
                                        <a href="#" title="Align justify">
                                            <i class="fa fa-align-justify" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                   
                    <div class="tool-icon" title="Show More" id="show" onclick="showmore()">
                        <a href="#">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </a>
                    </div>
                   
                    <div id="sub-tools">
                        
                        <button class="tool-icon" title="Ordered List" onclick="formatDoc('insertUnorderedList')">
                            <a href="#">
                                <i class='fa fa-list-ul'></i>
                            </a>
                        </button>
                        <button class="tool-icon" title="Unordered List" onclick="formatDoc('insertOrderedList')">
                            <a href="#">
                                <i class='fa fa-list-ol'></i>
                            </a>
                        </button>
                        <button class="tool-icon" title="Decrease Indent (Ctrl+Z)" onclick="formatDoc('outdent')">
                            <a href="#" data-command='outdent'>
                                <i class='fa fa-outdent'></i>
                            </a>
                        </button>
                        <button class="tool-icon" title="Increase Indent (Tab)" onclick="formatDoc('indent')">
                            <a href="#" data-command='indent'>
                                <i class='fa fa-indent'></i>
                            </a>
                        </button>
                        <button class="tool-icon" title="Hide" onclick="showoff()">
                            <a href="#">
                                <i class="fa fa-minus" aria-hidden="true"></i>
                            </a>
                        </button>
                    </div>
            </div>
        </div>
        <div id="shortTools" class="row">
            <div class="tools shortTool" >
             
              <button id="myBtnImg" type="button" class="btn btn-default tri-btns" style="display: flex; outline: none;">
                <div style="display: flex; align-self: center; padding-bottom: 4px;">
                  <i class="glyphicon glyphicon-camera"></i>
                </div>
                 <span style="margin-left: 5px"></span>
    
              </button>
              
            </div>
            <div class="tools shortTool">
         
              <button  id="myBtnVid"  type="button" class="btn btn-default tri-btns" style="display: flex; outline: none; ">
                <div style="display: flex; align-self: center;padding-bottom: 4px;">
                  <i class="glyphicon glyphicon-facetime-video"></i>
                </div>
                 <span style="margin-left: 5px"></span>
    
              </button>
    
            </div>
            <div class="tools shortTool">
              <button  id="myBtnLnk"  type="button" class="btn btn-default tri-btns" style="display: flex; outline: none;">
                <div style="display: flex; align-self: center;padding-bottom: 4px;">
                   <i class="glyphicon glyphicon-link"></i>
                </div>
                 <span style="margin-left: 5px"></span>
    
              </button>
    
            </div>
            <div class="tools shortTool">
                <button id="showCode" type="button" class="btn btn-default tri-btns" data-toggle="modal" style="display: flex; outline: none;">
                    <div style="display: flex; align-self: center;padding-bottom: 4px;">
                       <i class="fa fa-code"></i>
                    </div>
                     <span style="margin-left: 5px"></span>
        
                  </button>
            </div>
        </div>
          </div>
    </div>
    <div id="myModalImg" class="modal">
    <div class="k-modal-content">
        <div class="k-modal-header">
            <h3>Chèn ảnh</h3>
        </div>
        <div class="k-modal-body">
            <div style="border:solid 1px #dfdfdf; padding:10px;">
                <input type="text" placeholder="URL" style=" outline:none; border:none; width:100%"/>
            </div>
        </div>
        <div class="k-modal-footer">
            <div style="display:flex;flex-direction:row-reverse">
                <button class="k-modal-button k-button-green">Modal Footer</button>
                <button class="k-modal-button k-button-gray">Modal Footer</button>
            </div>
        </div>
    </div>

</div>


<div id="myModalVid" class="modal">
    <div class="k-modal-content">
        <div class="k-modal-header">
            <h3>Chèn ảnh</h3>
        </div>
        <div class="k-modal-body">
            <div style="border:solid 1px #dfdfdf; padding:10px;">
                <input type="text" placeholder="URL" style=" outline:none; border:none; width:100%"/>
            </div>
        </div>
        <div class="k-modal-footer">
            <div style="display:flex;flex-direction:row-reverse">
                <button class="k-modal-button k-button-green">Modal Footer</button>
                <button class="k-modal-button k-button-gray">Modal Footer</button>
            </div>
            <div class="tools shortTool">
                <button id="showCode" type="button" class="btn btn-default tri-btns" data-toggle="modal" style="display: flex; outline: none;">
                    <div style="display: flex; align-self: center;padding-bottom: 4px;">
                       <i class="fa fa-code"></i>
                    </div>
                     <span style="margin-left: 5px"></span>
        
                  </button>
            </div>
        </div>
    </div>

</div>

<div id="myModalLnk" class="modal">
    <div class="k-modal-content">
        <div class="k-modal-header">
            <h3>Chèn ảnh</h3>
        </div>
        <div class="k-modal-body">
            <div style="border:solid 1px #dfdfdf; padding:10px;">
                <input type="text" placeholder="URL" style=" outline:none; border:none; width:100%"/>
            </div>
        </div>
        <div class="k-modal-footer">
            <div style="display:flex;flex-direction:row-reverse">
                <button class="k-modal-button k-button-green">Modal Footer</button>
                <button class="k-modal-button k-button-gray">Modal Footer</button>
            </div>
        </div>
    </div>

</div>
    <div id="cal1">&nbsp;</div>
    <div id="cal2">&nbsp;</div>
`;
var editor = document.getElementById('mini-editor');
editor.innerHTML = content;


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
            $('.dropdown-color').css('display', 'none');
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
    $('#editor-doc').focus();
    var sImg = document.getElementById('data-img').innerText;
    // sImg = prompt('Link here');
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
    // sVideo = prompt('Link here');
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
    $('.dropdown-color').css('display', 'none');
    console.log(1);
    $("#sub-tools").show();
    $("#show").hide();
    $("#talign").show();
};

function showoff(event) {
    // event.stopPropagation();
    $('.dropdown-color').css('display', 'none');
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




//Press tab button
// adapted from http://stackoverflow.com/a/25943182/460084
function insertTab() {
    if (!window.getSelection) return;
    const sel = window.getSelection();
    if (!sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    range.collapse(true);
    const span = document.createElement('span');
    span.appendChild(document.createTextNode('\t'));
    span.style.whiteSpace = 'pre';
    range.insertNode(span);
    // Move the caret immediately after the inserted span
    range.setStartAfter(span);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  
  $(document).on('keydown', '#editor-doc', function(e) {
    if (e.keyCode == 9) {
        // alert(1);
      insertTab();
      e.preventDefault()
    }
  });


  function fixColor(){
    $('.dropdown-color').css("display","none");
}


$('#text-color a').click(function (e) { 
    e.preventDefault();
    $('.dropdown-color').hide();
});


// $(document).bind('keypress', function (e) {
//     if(e.which === 85 && event.shiftKey){
//         alert(1);
//     }
// });


// Get the modal
var modalImg = document.getElementById('myModalImg');

// Get the button that opens the modal
var btnImg = document.getElementById("myBtnImg");

// Get the <span> element that closes the modal

btnImg.onclick = function () {
    modalImg.style.display = "block";
}





// Get the modal
var modalVid = document.getElementById('myModalVid');

// Get the button that opens the modal
var btnVid = document.getElementById("myBtnVid");

// Get the <span> element that closes the modal

btnVid.onclick = function () {
    modalVid.style.display = "block";
}


// Get the modal
var modalLnk = document.getElementById('myModalLnk');

// Get the button that opens the modal
var btnLnk = document.getElementById("myBtnLnk");

// Get the <span> element that closes the modal

btnLnk.onclick = function () {
    modalLnk.style.display = "block";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalImg) {
        modalImg.style.display = "none";
    }
    if (event.target == modalVid) {
        modalVid.style.display = "none";
    }
    if (event.target == modalLnk) {
        modalLnk.style.display = "none";
    }
}
//esc
$(document).keyup(function(e) {

        if (e.keyCode == 27) {
            modalVid.style.display = "none";
            modalImg.style.display = "none";
            modalLnk.style.display = "none";
        }   // esc
    });
