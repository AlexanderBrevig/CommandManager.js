var CommandManager = (function() {
  function CommandManager() {}
  CommandManager.executed = [];
  CommandManager.unexecuted = [];
  
  CommandManager.execute = function execute(cmd) {
    cmd.execute();
    CommandManager.executed.push(cmd);
  };
  
  CommandManager.unexecute = function unexecute() {
    var cmd = CommandManager.executed.pop();
    if (cmd !== undefined && cmd.unexecute !== undefined) {
      cmd.unexecute();
    } 
    if (cmd !== undefined){
      CommandManager.unexecuted.push(cmd);
    } else {
      cmd = CommandManager.unexecuted.pop();
      if (cmd !== undefined && cmd.unexecute !== undefined){
        cmd.unexecute();
      }
      CommandManager.unexecuted.push(cmd);
    }
  };
  
  CommandManager.reexecute = function reexecute() {
    var cmd = CommandManager.unexecuted.pop();
    if (cmd !== undefined){
      cmd.execute();
      CommandManager.executed.push(cmd);
    } else {
      cmd = CommandManager.executed.pop();
      if (cmd !== undefined){
        cmd.execute();
        CommandManager.executed.push(cmd);
        CommandManager.executed.push(cmd);
      }
    }
  };
  
  return CommandManager;
})();
