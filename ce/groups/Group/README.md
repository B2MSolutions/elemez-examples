#  Example
An example ce client that set group value. 

# Registry Key Definitions
Path: "Software\elemezIntegration"

Value: "Group"

Type: String

## Group Changed
In order to raise a group changed event to the ce elemez client you must change a registry value on the device. 

# Example Code
``` c#
 string group = groupTextBox.Text;
 using (RegistryKey subKey = Registry.LocalMachine.CreateSubKey(@"Software\elemezIntegration\"))
 {
  subKey.SetValue("Group", group, RegistryValueKind.String);
 }
```        
