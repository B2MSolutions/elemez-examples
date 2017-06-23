# Battery
If your devices contain smart batteries, you have the option of sending Elemez information about the battery. 

For more infromation about [secure system settings] see (http://developer.android.com/reference/android/provider/Settings.Secure.html). 

The Elemez client will make use of the following secure system settings if present:

##Battery Serial Number
The serial number of the battery.

Requires the {@link android.Manifest.permission#WRITE_SECURE_SETTINGS} permission. 

``` java Settings.Secure.putString(ContentResolver, "battery_serial_number", “12345567ABC”);```


# Battery Charge Cycle Count
The current charge cycle count of the battery.

Requires the {@link android.Manifest.permission#WRITE_SECURE_SETTINGS} permission. 

``` java Settings.Secure.putString(ContentResolver, "battery_charge_cycle_count", “123”);```
