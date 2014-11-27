# Elemez-ce external diagnostic logs example
## Receiving a path to a diagnostic logs folder from elemez
Elemez checks presence of the registry key `ExternalDiagnosticsApp` in the `elemezIntegration` registry folder
(full path is `HKEY_LOCAL_MACHINE/SOFTWARE/elemezIntegration`) and uses the key value as a path
to the external application that is supposed to produce diagnostic information.

Elemez creates a folder for diagnostic information and passes a path to this folder to the external application 
as a first argument. Application should use the folder to save diagnostic information in it and notify
Elemez to send this information to the server.

## Sending notification to Elemez to pass diagnostic information to the server
External application is supposed to call ElemezServiceHost.exe file and pass back the path to the diagnostic information folder

`ElemezServiceHost.exe FileUpload "[PATH]"`
- PATH: Path to the diagnostic information folder
