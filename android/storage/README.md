#  Example
An example android client that raises storage intents. 

# Intent Definitions
## Wear Level Changed
In order to raise a wear level changed event to the android elemez client you must broadcast an intent using [sendBroadcast](http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent\) ). 

The intent is defined as follows:

* Action: **elemez.intent.action.ACTION_RESOURCE_MONITOR_ALERT**
* Mandatory Extras:
  * **elemez.intent.extra.EFWN**: a long representing the wear level value ??
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.ACTION_RESOURCE_MONITOR_ALERT");
intent.putExtra("elemez.intent.extra.EFWN", 100L);
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        
