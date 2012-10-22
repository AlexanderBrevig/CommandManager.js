var CommandManager = (function() {
  function CommandManager() {}

  CommandManager.executed = [];
  CommandManager.unexecuted = [];
  
  CommandManager.execute = function execute(cmd) {
    cmd.execute();
    CommandManager.executed.push(cmd);
  };
  
  CommandManager.undo = function undo() {
    var cmd1 = CommandManager.executed.pop();
    if (cmd1 !== undefined){
      if (cmd1.unexecute !== undefined){
        cmd1.unexecute();
      }
      CommandManager.unexecuted.push(cmd1);
    }
  };
  
  CommandManager.redo = function redo() {
    var cmd2 = CommandManager.unexecuted.pop();
    
    if (cmd2 === undefined){
      cmd2 = CommandManager.executed.pop();
      CommandManager.executed.push(cmd2); 
      CommandManager.executed.push(cmd2); 
    }
    
    if (cmd2 !== undefined){
      cmd2.execute();
      CommandManager.executed.push(cmd2); 
    }
  };
  
  return CommandManager;
})();