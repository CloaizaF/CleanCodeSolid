(() => {

    // función para obtener información de una película por Id
    function getMovieInfoById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastInfoById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    interface Movie {
        cast:        string[],
        description: string, 
        rating:      number, 
        title:       string
    }

    function createMovie( { title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    //Continuar

    /*malo
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }*/


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if ( isDead ) {
            return 1500;
        } 
        if ( isSeparated ) {
            return 2500;
        }
        return isRetired ? 3000 : 4000; 
    }

})();
