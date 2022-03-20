import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, Skeleton } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { enableMapSet } from 'immer';
import { Router, Outlet, ReactLocation } from 'react-location';
import { routes } from './router';
import en_US from 'antd/lib/locale/en_US';

import 'antd/dist/antd.min.css';
import '@/assets/css/index.css';

enableMapSet();
const queryClient = new QueryClient();
const location = new ReactLocation();

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Router routes={routes} location={location}>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<Skeleton active />}>
                    <ConfigProvider locale={en_US}>
                        <Outlet />
                    </ConfigProvider>
                </Suspense>
            </QueryClientProvider>
        </Router>,
        document.getElementById('root'),
    );
});
