const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async() => {
    page.setViewport({ width: 500, height: 2400 })
})

describe('Test Registro', () => {
    test('Pagina Registro', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.waitForSelector('h2');
        const html = await page.$eval('h2', el => el.textContent);
        expect(html).toEqual('Register');
    }, timeout);
    test('Formulario vacío', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.click('button[class="btn btn-primary"]');
        const listItems = await page.$$('.invalid-feedback')
            // Se debe recibir cuatro errores debido a que existen 4 inputs
        expect(listItems.length).toBe(4)
    }, timeout);
    test('Formulario vacío 2', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.click('button[class="btn btn-primary"]');
        const html = await page.$eval('.invalid-feedback', el => el.textContent);
        expect(html).toEqual('First Name is required');
    }, timeout);
    test('Formulario solo con FirstName', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.type('input[formControlName="firstName"]', 'Daury', { delay: 10 });
        await page.click('button[class="btn btn-primary"]');
        const listItems = await page.$$('.invalid-feedback')
        expect(listItems.length).toBe(3)
    }, timeout);
    test('Formulario con FirstName y LastName', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.type('input[formControlName="firstName"]', 'Daury', { delay: 10 });
        await page.type('input[formControlName="lastName"]', 'Lecca', { delay: 10 });
        await page.click('button[class="btn btn-primary"]');
        const listItems = await page.$$('.invalid-feedback')
        expect(listItems.length).toBe(2)
    }, timeout);
    test('Formulario con FirstName y LastName', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.type('input[formControlName="firstName"]', 'Daury', { delay: 10 });
        await page.type('input[formControlName="lastName"]', 'Lecca', { delay: 10 });
        await page.type('input[formControlName="username"]', 'dn.lecca', { delay: 10 });
        await page.click('button[class="btn btn-primary"]');
        const html = await page.$eval('.invalid-feedback', el => el.textContent);
        const listItems = await page.$$('.invalid-feedback')
        expect(listItems.length).toBe(1)
        expect(html).toEqual('Password is required');
    }, timeout);
    test('Password con menos de 6 caracteres', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.waitForSelector('form');
        await page.type('input[formControlName="firstName"]', 'Daury', { delay: 10 });
        await page.type('input[formControlName="lastName"]', 'Lecca', { delay: 10 });
        await page.type('input[formControlName="username"]', 'dn.lecca', { delay: 10 });
        await page.type('input[formControlName="password"]', '123', { delay: 10 });
        await page.click('button[class="btn btn-primary"]');
        const html = await page.$eval('.invalid-feedback', el => el.textContent);
        expect(html).toEqual('Password must be at least 6 characters');
    }, timeout);

    test('Registro exitoso', async() => {
        await page.goto(URL + '/register', { waitUntil: 'domcontentloaded' })
        await page.waitForSelector('form');
        await page.type('input[formControlName="firstName"]', 'Daury', { delay: 10 });
        await page.type('input[formControlName="lastName"]', 'Lecca', { delay: 10 });
        await page.type('input[formControlName="username"]', 'dn.lecca', { delay: 10 });
        await page.type('input[formControlName="password"]', '1234567890', { delay: 10 });
        await page.click('button[class="btn btn-primary"]');
        await page.waitForSelector('.alert-success');
        const html = await page.$eval('.alert-success', el => el.textContent);
        expect(html).toEqual('Registration successful');
    }, timeout);
});