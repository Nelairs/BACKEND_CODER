import  log4js  from "log4js";

log4js.configure({
    appenders:  {
        myConsole:  {   type:   'console' },
        myWarnLoggerFile:   {   type:   'file', filename:   'warn.log'},
        myErrorLoggerFile:   {   type:   'file', filename:   'error.log'},
    },
    categories: {
        default:    {   appenders:  ["myConsole"],  level:  'info'},
        consoleLog:    {   appenders:  ["myConsole"],  level:  'info'},
        fileWarn:   {   appenders:  ["myWarnLoggerFile"],   level:  'warn'},
        fileError:   {   appenders:  ["myErrorLoggerFile"],   level:  'error'},
    },
})

export  default log4js;