import {devices} from '@playwright/test'

export default {
    webServer : {
        command : 'npm run dev',
        port : 5173,
        reuseExistingServer : !process.env.CI,

    },
    projects: [
        {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Iphone',
            use: { ...devices['iphone 11'], channel: 'chrome'},
        },

    ],
    use: {
        baseURL : 'http://localhost:5173/',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    }

}