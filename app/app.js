'use strict'

let moduleName = location.pathname.slice(1);

let context = require.context('./routes', false, /\.js$/);

context.keys().forEach( function(path) {
    let module = context(path);
    module();
});

/*document.getElementById('button').onclick = function () {
	require(['./components/menu/menu'], function (menu) {
        menu('menu');
    })
}*/