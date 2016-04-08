'use strict'

document.onclick =  function () {
    require(['./scripts/click'], function (click) {
        click(); 
    });
};