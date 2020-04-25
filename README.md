# VPNBook Client
Automatically connects to vpnbook using secure openvpn.
Scraps the latest password image from https://www.vpnbook.com/freevpn and recognizes it with the OCR.space free API.
The password is cached for 24 hours in the local file 'auth.txt'.

# Compatibility
Currently supports Linux only.
Windows and Mac aren't supported yet!

# Dependencies
- [OpenVPN](https://openvpn.net/)
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm/)

# Usage
1. First you need to clone the repository (recommended)

   `git clone https://github.com/MyIsaak/vpnbook-client` and `cd vpnbook-client`

   or install it with npm (not recommended)

   `npm install vpnbook-client` and `cd node_modules/vpnbook-client`

2. Then build the package `npm run-script build`

3. Finally run the executable `./vpnbook-client`
