const si = require('systeminformation');
const fetch = require("node-fetch");

setInterval(() => {
    // Send free memory in the sytem
    si.mem()
        .then(data => {
            const requestInfo = {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({value: data.free})
            }; 
            const asyncReq = async () => {
                const response = await fetch('http://localhost:4000/data/4b209f56-0d91-4f82-afb4-e20f51dcf9d4', requestInfo);
                console.log(response);
            }
            asyncReq();
        })
        .catch(error => console.error(error));
}, 1000)