const $ = require('jquery');
import './slider.js';

$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('#card_company').on('click', function() {
        $('#card_company').addClass('active');
        $('#card_staff').removeClass('active');
        $('#card_decider').removeClass('active');
        $('#collapse_cards_decider').fadeOut();
        $('#collapse_cards_company').fadeIn();
        $('#collapse_cards_staff').fadeOut();
    });

    $('#card_decider').on('click', function() {
        $('#card_decider').addClass('active');
        $('#card_company').removeClass('active');
        $('#card_staff').removeClass('active');
        $('#collapse_cards_decider').fadeIn();
        $('#collapse_cards_company').fadeOut();
        $('#collapse_cards_staff').fadeOut();
    });

    $('#card_staff').on('click', function() {
        $('#card_staff').addClass('active');
        $('#card_company').removeClass('active');
        $('#card_decider').removeClass('active');
        $('#collapse_cards_decider').fadeOut();
        $('#collapse_cards_company').fadeOut();
        $('#collapse_cards_staff').fadeIn();
    })
});
