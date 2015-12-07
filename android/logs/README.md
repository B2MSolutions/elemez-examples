#  Example
An example Android client that enables log file upload by responding to Elemez LOGS_REQUEST intents. 

# Intent Definitions
## Request Logs
In order to upload log files through the Elemez Android client you must respond to Elemez's log requests with an intent specifying a folder path. Elemez will attempt to upload all files from that folder.

Logs request intent broadcast by Elemez is defined as follows:

* Action: **elemez.intent.action.LOGS_REQUEST**
* Mandatory Extras:
  * **LogsPath**: A folder path to which Elemez has read access and in which you could place the log files that should be uploaded.

The intent to notify Elemez when the log files are generated and ready to be uploaded is defined as follows:

* Action: **elemez.intent.action.LOGS_RESPONSE**
* Mandatory Extras:
  * **LogsPath**: A folder path from which you want Elemez to upload files. Could be different to the LogsPath from the LOGS_REQUEST, but in that case it is your responsible to ensure Elemez has read access to the folder you specify.
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: This flag must be set to ensure the Elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.LOGS_RESPONSE");
intent.putExtra("LogsPath", "/sdcard/logs/2015-12-07");
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        
