const openfinLauncher = require('openfin-launcher')

openfinLauncher.launchOpenFin({
    configPath: 'http://localhost:5000/app2.json'     
})
.then(() => console.log('launched'))
.fail(error => console.error(error))