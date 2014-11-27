# Elemez-ce event example
## Raising an event
Start ElemezServiceHost.exe with the following parameters (in any order):

`ElemezServiceHost.exe Event /p:sender=[SENDER] /p:source=[SOURCE] /p:type=[TYPE] /p:data=[DATA] /p:timestamp=[TIME]`

- SENDER: Event sender
- SOURCE: Event source
- TYPE: Event type
- TIME: Device UTC time in milliseconds
- DATA: `key:value` pairs of custom data separated by the vertical bar, like `|`

Example: 
`ElemezServiceHost.exe Event /p:sender=sender /p:source=source /p:type=type /p:data=key1:value1|key2:value2 /p:timestamp=123456`
