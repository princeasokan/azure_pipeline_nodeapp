const express = require('express'),
    app = express();

app.get("/sayhello", (req, res) => {
    res.send('Hello')
})
app.listen(4600, () => {
    console.log('server started 4600')
})
