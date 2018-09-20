import 'bootstrap';

import './scss/index.scss';

import img from '../public/blurred-background.jpg';

$('#alert').click(() => {
  alert('jQuery works!');
});

$('#blurred_background').attr('src', img);

// Your jQuery code
