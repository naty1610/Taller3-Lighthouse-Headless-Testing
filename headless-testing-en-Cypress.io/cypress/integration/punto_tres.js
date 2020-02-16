describe('Los estudiantes - Página de un profesor', function() {
    it('Por medio del buscador', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("dn.lecca@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234567890")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.Select-option-group-label').should('not.be.visible')
        cy.get('.Select-menu-outer').should('not.be.visible')
        cy.get('.Select-placeholder').click().type("mario linares vasquez")
        cy.get('.Select-option-group-label').should('be.visible')
        cy.get('.Select-menu-outer').should('be.visible')
        cy.get('.Select-option-group-label').should('contain', 'profesores')
        cy.get('#react-select-required_error_checksum--option-0').should('contain', 'Mario Linares Vasquez - Ingeniería de Sistemas')
        cy.get('#react-select-required_error_checksum--option-0').click()
        cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
    })
})


describe('Los estudiantes Página de un profesor', function() {
    it('Por medio del panel', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("dn.lecca@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234567890")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.Select-option-group-label').should('not.be.visible')
        cy.get('.Select-menu-outer').should('not.be.visible')
        cy.get('.uniandes').click()
        cy.get('.opcion_maestria_click').contains('Si estudias una maestria haz click aqui').click()
        cy.get('button.jsx-1590631759.false.btn.btn-default').should('contain', 'Alfabético').click()
        cy.get('p.jsx-2021299586 > .departamentoLabel').should('contain', 'Maestria')
        cy.get('p.jsx-2021299586 > .select').select('universidad-de-los-andes,maestria,maestrIa-en-ingenierIa-de-software')
        cy.get('div.jsx-633353764 > .profesor').find('a[href="universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez"]').click()
        cy.url().should('eq', 'https://losestudiantes.co/universidad-de-los-andes/ingenieria-de-sistemas/profesores/mario-linares-vasquez')
   
    })
})

