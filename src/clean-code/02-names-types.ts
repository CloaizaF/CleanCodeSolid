(() => {

    // arreglo de temperaturas celsius
    const celsiusTemperatureValues = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIP = '123.123.123.123';

    // Listado de usuarios
    const usersList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    // users tambien tiene sentido semantico

    // Listado de emails de los usuarios
    const usersEmailsList = usersList.map( user => user.email );
    // usersEmails tambien tiene sentido semantico

    // Variables booleanas de un video juego
    const isJumping = false; //CanJump puede funcionar dependiendo del uso de la variable
    const isRunning = true; 
    const hasItems = false;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( booksUrl: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( sideLength: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();