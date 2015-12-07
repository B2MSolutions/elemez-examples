#  Example
An example android client that upload logs intents. 

# Intent Definitions
## Request Logs
In order to raise a log file to the android elemez client you must response to elemez log request with an intent specifying logs folder path.

Logs request intent brodcased by elemez is defined as follows:

* Action: **elemez.intent.action.LOGS_REQUEST**
* Mandatory Extras:
  * **LogsPath**: a string representing a location to store generated log files

The intent to notify elemez when log files generated and ready to be uploaded is defined as follows:

* Action: **elemez.intent.action.LOGS_RESPONSE**
* Mandatory Extras:
  * **LogsPath**: a string representing where log files generated
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.LOGS_RESPONSE");
intent.putExtra("LogsPath", "/sdcard/logs/2015-12-07");
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        
