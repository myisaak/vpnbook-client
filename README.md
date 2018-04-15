# VPNBook Client
Automatically connects to vpnbook using secure openvpn. Scraps the latest password from https://www.vpnbook.com/freevpn

# Compatability
Currently supports linux only. Windows and Mac aren't supported yet!

# Dependencies
- OpenVPN https://openvpn.net/
- Node https://nodejs.org/en/download/
- NPM https://www.npmjs.com/get-npm

# Usage
1. First you need to clone the repository (reccomended)

  `git clone https://github.com/MyIsaak/vpnbook-client` and `cd vpnbook-client` 

or install with npm (not reccomended)

  `npm install vpnbook-client`and `cd node_modules/vpnbook-client`

2. Then build the package `npm run-script build`

3. Finally run the executable `./vpnbook-client`
