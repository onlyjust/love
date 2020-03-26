import homeRouter from "../home";
import mineRouter from "../mine";
import dynamicRouter from "../dynamic";
import messageRouter from "../message";

// 引入一级组件
import Default from "@/views/default/Default";

export default {
    path: '/default',
    component: Default,
    children:[
        {
            path: '/default',
            redirect: '/home'
        },
        homeRouter,
        mineRouter,
        dynamicRouter,
        messageRouter
    ]
}
