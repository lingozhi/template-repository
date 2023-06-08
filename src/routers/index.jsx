import Loadable from '@loadable/component';
import Loading from '@/components/loading';

const BasicLayout = Loadable(() => import('@/pages/BasicLayout'), {
    fallback: <Loading />,
});
const Detail = Loadable(() => import('@/pages/Detail'), {
    fallback: <Loading />,
});
const Home = Loadable(() => import('@/pages/Home'), {
    fallback: <Loading />,
});
const NotFound = Loadable(() => import('@/pages/404'), {
    fallback: <Loading />,
});
export const routes = [
    {
        path: '/*',
        element: <BasicLayout />,
        children: [
            {
                path: 'index',
                element: <Home />,
            },
            {
                path: 'index2',
                element: <Detail />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
];
