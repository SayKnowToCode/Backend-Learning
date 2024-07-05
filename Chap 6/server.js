// const express = require('express');
// const app = express();
// const path = require('path');
// const PORT = process.env.PORT || 3500;

// app.get('^/$|/index(.html)?', (req, res) => {
//     //res.sendFile('./views/index.html', { root: __dirname });
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.get('/new-page(.html)?', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
// });

// app.get('/old-page(.html)?', (req, res) => {
//     res.redirect(301, '/new-page.html'); //302 by default
// });

// // Route handlers
// app.get('/hello(.html)?', (req, res, next) => {
//     console.log('attempted to load hello.html');
//     next()
// }, (req, res) => {
//     res.send('Hello World!');
// });


// // chaining route handlers
// const one = (req, res, next) => {
//     console.log('one');
//     next();
// }

// const two = (req, res, next) => {
//     console.log('two');
//     next();
// }

// const three = (req, res) => {
//     console.log('three');
//     res.send('Finished!');
// }

// app.get('/chain(.html)?', [one, two, three]);

// app.get('/*', (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// })

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

app.get('^/$|/index(.html)?',(req,res) => {
    // res.send('Hello World')
    //res.sendFile('./views/index.html', { root: __dirname });
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// Difference between res.send and res.sendFile

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page'); //302 by default
});

// app.get('/*', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'views', '404.html'));
//     // The problem here is that express will find the file and hence send a 200 response but that is not what we want so we need to send 404

//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// })

// We need to put the catch all statement at the last or else it wont read the pages below

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next()
}, (req, res) => {
    res.send('Hello World!');
});

// chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);

app.get('/*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', '404.html'));
    // The problem here is that express will find the file and hence send a 200 response but that is not what we want so we need to send 404

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(PORT, () => {console.log(`Server running on port ${PORT}`); })