import {test , expect} from "@playwright/test"

test.describe('Screenshot of button' , ()=>{
    test('should render the button' , async ({ page })=>{
        await page.goto('/');
        await page.waitForSelector('button');

        const screenshot = await page.screenshot({ path:`screenshots/ss-${page.viewportSize().width}.png`}); 
    })
})