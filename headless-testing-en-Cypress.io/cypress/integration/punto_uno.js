describe('Los estudiantes login', function() {
    it('Visits los estudiantes and fails at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
            //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("wrongemail@example.com")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.contains('El correo y la contraseña que ingresaste no figuran en la base de datos. Intenta de nuevo por favor.')
    })
    it('Visits los estudiantes and succeds at login', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
        cy.contains('Ingresar').click()
        cy.get('.cajaLogIn').find('input[name="correo"]').click().type("jc.piza@uniandes.edu.co")
        cy.get('.cajaLogIn').find('input[name="password"]').click().type("1234567890")
        cy.get('.cajaLogIn').contains('Ingresar').click()
        cy.get('.botonIngresar').should('not.be.visible')
        cy.get('.botonDropdown').should('be.visible')
    })
})

describe('Los estudiantes register', function() {
    it('Visits los estudiantes and fails at register', function() {
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()
            //Lineas nuevas  
        cy.contains('Ingresar').click()
        cy.get('.cajaSignUp > .loginForm').find('input[name="nombre"]').click().type("Juan Camilo")
        cy.get('.cajaSignUp > .loginForm').find('input[name="apellido"]').click().type("Piza")
        cy.get('.cajaSignUp > .loginForm').find('input[name="correo"]').click().type("jc.piza@uniandes.edu.co")
        cy.get('.no_bold').click()
        cy.get('div.jsx-527058112 > .form-group > .has-success > .form-control').select('16')
        cy.get('.cajaSignUp > .loginForm').find('input[name="password"]').click().type("1234567890")
        cy.get('label.jsx-520551651').click()
        cy.get('.cajaSignUp > .loginForm > .logInButton').click()
        cy.get('.sweet-alert').contains('Ocurrió un error activando tu cuenta')
    })
})