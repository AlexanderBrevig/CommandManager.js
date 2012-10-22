CommandManager.js
=================

Simply enable undo-redo with the command pattern

    <body>
      <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            <a class="brand" href="#">CommandManager.js</a>
          </div>
        </div>
      </div>
      <div class="container">
        <button id="addText" class="btn">Add text</button>
        <button id="redo" class="btn">Redo</button>
        <button id="undo" class="btn">Undo</button>
        <div style="margin:1em 0;">
          <pre id="text"></pre>
        </div>
      </div>
    
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
      <script src="../CommandManager.js"></script>
      <script type="text/javascript">
      $(function(){
        var id = 0;
        $("#addText").click(function(){
            id++;
            CommandManager.execute({
              execute: function(){
                this.newid = id;
                $("#text").append("text from command " + this.newid+"\n");
              },
              unexecute: function(){
                var html =$("#text").html().replace("text from command " + this.newid+"\n", "");
                $("#text").html(html);
              }
            });
        });
    
        $("#redo").click(function(){
          CommandManager.reexecute();
        });
    
        $("#undo").click(function(){
          CommandManager.unexecute();
        });
      });
      </script>
    </body>