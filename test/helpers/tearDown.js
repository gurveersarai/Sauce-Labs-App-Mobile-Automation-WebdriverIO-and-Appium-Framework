async function tearDown() {
    try {
        await driver.execute('mobile: shell', {
            command: 'pm',
            args: ['clear', 'com.saucelabs.mydemoapp.android']
        });
        // Wait a bit for the app to reset cleanly
        await new Promise(res => setTimeout(res, 1000));
    } catch (err) {
        console.error('Error during teardown:', err);
    }
}


export default {
    tearDown,
};