#  Example
An example Android client that enables log file upload by responding to Elemez LOGS_REQUEST intents. 

# Intent Definitions
## Request Logs
In order to upload log files through the Elemez Android client you must respond to Elemez's log requests with an intent specifying the logs folder path.

Logs request intent broadcast by Elemez is defined as follows:

* Action: **elemez.intent.action.LOGS_REQUEST**
* Mandatory Extras:
  * **LogsPath**: a string representing a location to store generated log files

The intent to notify Elemez when the log files are generated and ready to be uploaded is defined as follows:

* Action: **elemez.intent.action.LOGS_RESPONSE**
* Mandatory Extras:
  * **LogsPath**: a string representing where log files generated
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the Elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.LOGS_RESPONSE");
intent.putExtra("LogsPath", "/sdcard/logs/2015-12-07");
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        
