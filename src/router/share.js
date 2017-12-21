import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'hash',
        routes: [{
            path: '/vuessrShare',
            name: 'Hello',
            component: HelloWorld
        }, {
            path: '/test',
            name: 'Test',
            component: () =>
                import ('@/components/Test')
        }]
    })
}