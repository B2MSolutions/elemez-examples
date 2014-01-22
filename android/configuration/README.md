# Configuration Example
An example file for per device configuration. 

## Summary
The elemez android client can be configured via a configuration file shipped on the device. The file should be called *elemez.properties* and should be placed in one of the following directories:

-  /sdcard/elemez.properties
-  /system/etc/elemez.properties

The file follows the standard android [.properties](http://en.wikipedia.org/wiki/.properties) format.
Allowed keys are as follows:
- *name*: the name used for the group of devices using this configuration set.
- *cellular-blackout*: the time period over which elemez should not send cellular data. The times are specified as 24 hour clock, and refer to device local time.


## Example
An example file can be found [here](https://github.com/B2MSolutions/elemez-examples/blob/master/android/configuration/elemez.properties)
