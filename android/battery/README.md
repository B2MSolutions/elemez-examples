# Battery Example
An example android client that raises battery intents. 

## Secure System Settings
The elemez client will make use of the following [secure system settings](http://developer.android.com/reference/android/provider/Settings.Secure.html) if present:

* **"BATTERY_SERIAL_NUMBER"**: The serial number of the battery

### Example Code Demonstrating Retrieval of Battery Serial Number
``` java
String battery_serial_number = Settings.Secure.getString(context.getContentResolver(), "battery_serial_number");
``` 

* **"BATTERY_CHARGE_CYCLE_COUNT"**: The current charge cycle count of the battery

### Example Code Demonstrating Retrieval of Charge Cycle Count
``` java
String battery_charge_cycle_count = Settings.Secure.getString(context.getContentResolver(), "battery_charge_cycle_count");
``` 
## Intent Definitions
In order to raise a battery event to the android elemez client you must broadcast an intent using [sendBroadcast](http://developer.android.com/reference/android/content/Context.html#sendBroadcast(android.content.Intent\) ). 

### Battery Charge Cycle Count
This intent should be raised when the charge cycle count changes and after each reboot.

* Action: **elemez.intent.action.ACTION_BATTERY_CHARGE_CYCLE_COUNT_CHANGED**
* Mandatory Extras:
  * **TIMESTAMP**: a long representing the utc time of the charge cycle count changing in milliseconds since January 1, 1970 00:00:00 UTC (this is the same form as a call to [System.currentTimeMillis](http://developer.android.com/reference/java/lang/System.html#currentTimeMillis()) )
  * **CYCLE_COUNT**: an integer representing the current charge cycle count.
* Flags:
  * **Intent.FLAG_INCLUDE_STOPPED_PACKAGES**: this flag must be set to ensure the elemez application is able to receive the intent under all circumstances.

### Example Code
``` java
Intent intent = new Intent("elemez.intent.action.ACTION_BATTERY_CHARGE_CYCLE_COUNT_CHANGED");
intent.putExtra("TIMESTAMP", System.currentTimeMillis());
intent.putExtra("CYCLE_COUNT", 3);
intent.addFlags(Intent.FLAG_INCLUDE_STOPPED_PACKAGES);
context.sendBroadcast(intent);
```        
