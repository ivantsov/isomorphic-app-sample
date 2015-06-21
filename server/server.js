var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router');

var data = [{
    id: 1,
    title: 'Feed #1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate elementum tristique. Morbi et consequat velit. Cras euismod id ante at posuere. Phasellus tempor sagittis libero, et egestas est pellentesque tempor. Sed at sapien tortor. Quisque tempus, mi eu tempus accumsan, justo tellus sagittis dui, et dapibus tortor velit in felis. Donec pretium, orci ac lobortis mattis, orci turpis porttitor nisi, vitae condimentum elit mauris vitae leo. Nulla posuere leo in lacus tempus dignissim.',
    likes: 32
}, {
    id: 2,
    title: 'Feed #2',
    content: 'Ut tortor metus, facilisis in nunc sit amet, interdum finibus odio. In hac habitasse platea dictumst. Morbi condimentum ligula vel tortor ullamcorper lacinia. Phasellus hendrerit tellus lobortis lacus aliquam, vitae ornare orci pretium. Duis lacinia venenatis vehicula. Sed at vestibulum eros. Nam at nisl in mauris malesuada dapibus quis sed lorem. Nam congue ut arcu a aliquam. Nam et odio lobortis, ultricies erat ac, cursus dui. Maecenas porttitor tortor nec elit dapibus, a condimentum tellus faucibus. Proin volutpat tristique justo sit amet mattis.',
    likes: 127
}, {
    id: 3,
    title: 'Feed #3',
    content: 'Duis ut interdum elit. Nulla placerat metus sit amet sem tincidunt malesuada. Etiam aliquam congue nunc id porta. Etiam in aliquet elit, et euismod felis. Ut porttitor dictum fringilla. Nullam sed mauris massa. In sollicitudin ullamcorper elit, eget molestie sem laoreet et. Etiam eleifend vehicula nunc, dignissim laoreet ex imperdiet vitae. Suspendisse id eros consequat, tempus risus ut, laoreet odio.',
    likes: 127
}, {
    id: 4,
    title: 'Feed #4',
    content: 'Phasellus pulvinar, nisi eget tempus scelerisque, est justo facilisis eros, id ultricies nunc nisi ut tellus. Nam eu gravida eros. Phasellus eu venenatis metus. Integer et est pharetra, elementum justo at, sollicitudin elit. Nulla vestibulum consequat ultrices. Vestibulum vestibulum, risus tempus tempor consequat, leo augue viverra est, in condimentum libero elit a mi. Nulla dictum turpis mauris, in egestas ligula efficitur eget. In hac habitasse platea dictumst. Aliquam non libero malesuada, egestas sem vitae, rutrum mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis porttitor turpis, sit amet ullamcorper arcu. Sed urna risus, venenatis at tortor id, interdum tincidunt metus. Mauris pulvinar euismod quam ultrices hendrerit. Mauris quis tincidunt neque, a venenatis nibh. Morbi leo nunc, mattis vitae massa ut, cursus scelerisque nunc.',
    likes: 1023
}, {
    id: 5,
    title: 'Feed #5',
    content: 'Aliquam maximus pellentesque malesuada. Proin ut quam suscipit, cursus tellus sit amet, cursus odio. Aliquam tristique, erat ut vulputate rhoncus, eros sem egestas nulla, nec feugiat urna nunc in metus. Ut bibendum lacus eu diam aliquam tincidunt vitae cursus orci. Aliquam scelerisque ut dui id lacinia. Cras nisl nulla, congue sit amet mollis quis, lacinia quis erat. Fusce nisi sem, iaculis vel lorem in, rhoncus fermentum turpis. Vivamus blandit pulvinar pharetra. Praesent faucibus justo ligula, vitae convallis nibh suscipit eu. Maecenas consectetur facilisis dui ut gravida. Donec vitae mattis magna.',
    likes: 70
}];

var app = express();

app.use(bodyParser.json());

app.get('/favicon.ico', (req, res) => res.sendStatus(400));
app.use('/assets', express.static('assets'));

app.get('/api/feed', (req, res) => res.json(data));
app.get('/api/feed/:id', (req, res) => res.json(data[req.params.id - 1]));

app.use(router);

var server = app.listen(3000, 'localhost', () => {
    var host = server.address();
    console.log('Server is running at http://%s:%s', host.address, host.port);
});