'use strict';
/*
const COLOR_WHITE = '#fff';
const COLOR_AQUA = '#e9f8ff';
let textarea_1 = document.querySelector('#main__textarea-1');
textarea_1.addEventListener('input', function () {
   if (textarea_1.value === '') {
      textarea_1.style.backgroundColor = COLOR_WHITE
   } else {
      textarea_1.style.backgroundColor = COLOR_AQUA
   }
});
let textarea_2 = document.querySelector('#main__textarea-2'),
    img_1 = document.querySelector('#main__chat-comment-1'),
    img_2 = document.querySelector('#main__chat-comment-2');
textarea_2.addEventListener('input', function() {
   if (textarea_2.value === '') {
      textarea_2.style.backgroundColor = COLOR_WHITE;
      img_2.style.display = 'none';
      img_1.style.display = 'block'
   } else {
      textarea_2.style.backgroundColor = COLOR_AQUA;
      img_1.style.display = 'none';
      img_2.style.display = 'block'
   }
});
let form = document.querySelector('.main__form');
form.addEventListener('reset', function () {
   textarea_1.style.backgroundColor = COLOR_WHITE;
   textarea_2.style.backgroundColor = COLOR_WHITE;
   img_2.style.display = 'none';
   img_1.style.display = 'block'
});*/
/*------------------------------------------------------jQuery--------------------------------------------------------*/
const $COLOR_WHITE = '#fff';
const $COLOR_AQUA = '#e9f8ff';
let $textarea_1 = $('#main__textarea-1');
$textarea_1.on('input', function() {
    if ($textarea_1.val() === '') {
        $textarea_1.css('background-color', $COLOR_WHITE)
    } else {
        $textarea_1.css('background-color', $COLOR_AQUA)
    }
});
let $textarea_2 = $('#main__textarea-2'),
    $img_1 = $('#main__chat-comment-1'),
    $img_2 = $('#main__chat-comment-2');
$textarea_2.on('input', function() {
    if ($textarea_2.val() === '') {
        $textarea_2.css('background-color', $COLOR_WHITE);
        $img_2.css('display', 'none');
        $img_1.css('display', 'block')
    } else {
        $textarea_2.css('background-color', $COLOR_AQUA);
        $img_1.css('display', 'none');
        $img_2.css('display', 'block')
    }
});
let $form = $('.main__form');
$form.on('reset', function () {
    if ($textarea_1.val() !== '') {
        $textarea_1.css('background-color', $COLOR_WHITE)
    };
    if ($textarea_2.val() !== '') {
        $textarea_2.css('background-color', $COLOR_WHITE);
        $img_2.css('display', 'none');
        $img_1.css('display', 'block')
    }
})