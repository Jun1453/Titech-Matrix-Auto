# TokyoTech Matrix Autocomplete
**This is the last time filling your TokyoTech Matrix!**

Tokyo Tech Portal uses matrix authentication as one-time password to simply log in the system. It is inefficient, tedious, and as outdated as the system's early 2000s interface. While Portal has an alternative email OTP, the response time of the mail server is pathetically long. I figured out that auto-completing Matrix is the most efficient way and wrote this script.

## Disclaimer
*Use this script at your own risk!*

This script does not collect any information. However, you need to fill your personal matrix in the script saved on your local machine without encryption. It is also possible for the user-script extension provider to collect your scripts. Your TokyoTech account may be misused if the script is exposed to the third party. In the case the author is not liable for any consequential loss.

## Usage
1. Install any user-script extension that supports JavaScript (e.g. Tampermonkey) on your browser.
2. Visit the raw file [`titech-matrix-auto.user.js`](https://raw.githubusercontent.com/Jun1453/Titech-Matrix-Auto/main/titech-matrix-auto.user.js) and your browser should pop up an installation page.
3. If there is no installation option, you need to manually install it by creating a new user-script on your browser and copy-pasting the script opened in (2).
4. Prepare your Tokyo Tech ID and fill your Matrix password accordingly in the installed script.
5. Enjoy fast login at Portal!

## Updates
Toggle on *check for updates* in *Settings* tab (varied from extensions) to receive notification for updates. Notice that you have to re-fill your matrix after updates. You can simply backup that part of the script before updating and copy-paste to the new script.