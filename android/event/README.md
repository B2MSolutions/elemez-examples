# Event Example
An example android client that raises custom intents.

# Intent Definition
In order to raise a custom event to the android elemez client you must broadcast an intent using [sendBroadcast](http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent\) ).

The intent is defined as follows:

* Action: **elemez.intent.action.ACTION_EVENT**
* Mandatory Extras:
  * **elemez.intent.extra.TIMESTAMP**: a long representing the utc time of the event in milliseconds since January 1, 1970 00:00:00 UTC (this is the same form as a call to [System.currentTimeMillis](http://developer.android.com/reference/java/lang/System.html#currentTimeMillis()) )
  * **elemez.intent.extra.SENDER**: a string representing the sender of the event, e.g. application name or subsystem name. This should be a human readable string.
  * **elemez.intent.extra.SOURCE**: a string representing the source of the event, e.g. radio, api call. This should be a human readable string.
  * **elemez.intent.extra.TYPE**: a string representing the type of the event, e.g. scans. This should be a human readable string.
  * **elemez.intent.extra.DATA**: a Bundle representing the custom information of the event, e.g. number of trigger pulls, number of failed scans, number of good scans.
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.ACTION_EVENT");
intent.putExtra("elemez.intent.extra.TIMESTAMP", 1402999241456);
intent.putExtra("elemez.intent.extra.SENDER", "MyScanApp");
intent.putExtra("elemez.intent.extra.SOURCE", "Scanner");
intent.putExtra("elemez.intent.extra.TYPE", "Scan");

Bundle bundle = new Bundle();
bundle.putString("good", "23");
bundle.putString("bad", "5");
bundle.putString("attempts", "30");

intent.putExtra("elemez.intent.extra.DATA", bundle);
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
this.sendBroadcast(intent);
```        
