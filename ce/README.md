# Elemez-ce disruption example
## Raizing the disruption
Start ElemezServiceHost.exe with the following parameters (in any order):

`/p:sender=[SENDER] /p:source=[SOURCE] /p:userInitiated=[TRUE] /p:time=[DEVICE UTC TIME IN MILLISECONDS]"`

- SENDER: Disruption sender
- SOURCE: Disruption source
- USER INITIATED: False if it is a system disruption, True otherwise
- TIME: Device UTC time in milliseconds
