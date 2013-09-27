#  Example
An example android client that raises storage intents. 

# Intent Definitions
## Wear Level Changed
In order to raise a wear level changed event to the android elemez client you must broadcast an intent using [sendBroadcast](http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent\) ). 

The intent is defined as follows:

* Action: **elemez.intent.action.ACTION_WEAR_LEVEL_CHANGED**
* Mandatory Extras:
  * **elemez.intent.extra.TIMESTAMP**: a long representing the utc time of the change in milliseconds since January 1, 1970 00:00:00 UTC (this is the same form as a call to [System.currentTimeMillis](http://developer.android.com/reference/java/lang/System.html#currentTimeMillis()) )
  * **elemez.intent.extra.LEVEL**: a long representing the wear level value ??
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the elemez application is able to receive the intent under all circumstances.

# Example Code
``` java
Intent intent = new Intent("elemez.intent.action.ACTION_WEAR_LEVEL_CHANGED");
intent.putExtra("elemez.intent.extra.TIMESTAMP", System.currentTimeMillis());
intent.putExtra("elemez.intent.extra.LEVEL", 100L);
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        
