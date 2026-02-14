# Run this script to copy your 5 anniversary images to public/photos
$assets = "C:\Users\91986\.cursor\projects\c-Users-91986-Music-docu-Desktop-anniversary\assets"
$dest = "$PSScriptRoot\public\photos"

$files = @(
    "c__Users_91986_AppData_Roaming_Cursor_User_workspaceStorage_757777d7108bec24c4dac3e71969e606_images_WhatsApp_Image_2026-02-14_at_11.31.51_PM-3b80433d-b7b5-4b1d-ae56-580fa99c02f4.png",
    "c__Users_91986_AppData_Roaming_Cursor_User_workspaceStorage_757777d7108bec24c4dac3e71969e606_images_WhatsApp_Image_2026-02-14_at_11.31.52_PM-7471c325-7453-405d-be74-7cfc128d8742.png",
    "c__Users_91986_AppData_Roaming_Cursor_User_workspaceStorage_757777d7108bec24c4dac3e71969e606_images_WhatsApp_Image_2026-02-14_at_11.31.52_PM__1_-eba51978-8ffd-423b-b01b-27097ad0a0bb.png",
    "c__Users_91986_AppData_Roaming_Cursor_User_workspaceStorage_757777d7108bec24c4dac3e71969e606_images_WhatsApp_Image_2026-02-14_at_11.31.52_PM__2_-bd2b11b2-da7c-4fd9-8b6a-9352956b8143.png",
    "c__Users_91986_AppData_Roaming_Cursor_User_workspaceStorage_757777d7108bec24c4dac3e71969e606_images_WhatsApp_Image_2026-02-14_at_11.35.23_PM-52c1c037-2a91-4790-a966-ff9f960f045c.png"
)

for ($i = 0; $i -lt $files.Count; $i++) {
    $srcPath = Join-Path $assets $files[$i]
    $destPath = Join-Path $dest "photo$($i+1).png"
    if (Test-Path $srcPath) {
        Copy-Item $srcPath $destPath -Force
        Write-Host "Copied photo$($i+1).png"
    } else {
        Write-Host "Not found: $($files[$i].Substring(0,50))..."
    }
}
