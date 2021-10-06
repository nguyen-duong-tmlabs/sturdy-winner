#RequireAdmin
#include <File.au3>
#include "_ImageSearch_UDF.au3"

Global $image = @ScriptDir & "\image.bmp"


; First, use this function to create a file bmp, maybe a desktop icon for example')
MsgBox(64 + 262144, 'ImageSearch', 'At first, create a file bmp,' & @CRLF & 'photos that will search on the screen!')
_ImageSearch_Create_BMP($image)
