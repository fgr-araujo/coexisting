import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'
var props = {
    activePage: function(pageID){
        pageID = pageID || 'home';
        return pageID;
    },
    accessToken: "122134566"
}
singleSpa.registerApplication('filtros', () => SystemJS.import('@portal/filtros'), isActive.filtros,props)

singleSpa.start()
