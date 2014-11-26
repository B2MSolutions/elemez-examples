# Elemez-ce disruption example
## Raising the disruption
Start ElemezServiceHost.exe with the following parameters (in any order):

`ElemezServiceHost.exe Disruption /p:sender=[SENDER] /p:source=[SOURCE] /p:userInitiated=[USER INITIATED] /p:timestamp=[TIME]`

- SENDER: Disruption sender
- SOURCE: Disruption source
- USER INITIATED: False if it is a system disruption, True otherwise
- TIME: Device UTC time in milliseconds
