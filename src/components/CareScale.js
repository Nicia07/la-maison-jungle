/*Ce composant gére l'escalier de soin des plantes 
Nous utilison ici les "props" pour récupérer des information situées dans le <CareScale/>;
le "props" doit etre déclarer dans le composant 
*/ 
function CarScale (props){
    const lumiere = props.lumiere;
    const typePlante = props.typePlante;


    //const{lumiere, typePlante} = props;
     
    const nbEscalier = [1,2,3];
    const typeDeCulture = typePlante  ==='lumiere'? 'Lumiere': 'Eau'
    

    return(
        <div>

            {nbEscalier.map((marcheEscalier) => (
                lumiere >= marcheEscalier ? <span key={nbEscalier.toString()}>{typeDeCulture}</span> : null
            ))}

        </div>
        )
    
};

export default CarScale;