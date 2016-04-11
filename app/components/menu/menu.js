'use strict'

module.exports = function (message) {
    console.log(message);

    document.getElementById('authorization').onclick = function () {
        require(['../authorization/authorization'], function (authorization) {
            authorization('authorization');
        })
    }

    document.getElementById('registration').onclick = function () {
        require(['../registration/registration'], function (registration) {
            resgistration('resgistration');
        })
    }
}