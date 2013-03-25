# Disruption Example
An example android client that raises disruption intents. 

# Intent Definition
In order to raise a disruption event to the android elemez client you must broadcast an intent using [sendBroadcast](http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent) ). 

The intent is defined as follows:

* Action: **elemez.intent.action.ACTION_DISRUPTED**
* Mandatory Extras:
  * **elemez.intent.extra.TIMESTAMP**: a long representing the utc time of the disruption in milliseconds since January 1, 1970 00:00:00 UTC (this is the same form as a call to [System.currentTimeMillis](http://developer.android.com/reference/java/lang/System.html#currentTimeMillis()) )
  * **elemez.intent.extra.SENDER**: a string representing the sender of the disruption, e.g. application name or subsystem name. This should be a human readable string.
  * **elemez.intent.extra.SOURCE**: a string representing the source of the disruption, e.g. radio, api call. This should be a human readable string.
  * **elemez.intent.extra.USER_INITIATED**: a boolean representing whether the disruption was initiated by the user of the device.
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.ACTION_DISRUPTED");
intent.putExtra("elemez.intent.extra.TIMESTAMP", System.currentTimeMillis());
intent.putExtra("elemez.intent.extra.SENDER", "System");
intent.putExtra("elemez.intent.extra.SOURCE", "Watchdog");
intent.putExtra("elemez.intent.extra.USER_INITIATED", false);
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        