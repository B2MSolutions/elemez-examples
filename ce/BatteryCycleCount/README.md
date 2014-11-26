#  Example
An example ce client that set battery cycle count value. 

# Registry Key Definitions
Key: HKEY_LOCAL_MACHINE

Path: "Software\ElemezIntegration"

Value: "battery_charge_cycle_count"

Type: DWord

## Battery Cycle Count Changed
In order to raise a battery cycle count changed event to the ce elemez client you must change a registry value on the device. 

# Example Code
``` c#
 int cycleCount = int.Parse(cycleCountTextBox.Text);
 using (RegistryKey subKey = Registry.LocalMachine.CreateSubKey(@"Software\elemezIntegration\"))
 {
  subKey.SetValue("battery_charge_cycle_count", cycleCount, RegistryValueKind.DWord);
 }
```        
