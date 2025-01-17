import React from "react";
import "../../styles/chestExercises.css"

export const LegsExercises = () => {
    const legs = [
        {
            id: '1',
            nombre: 'Sentadillas',
            descripcion: 'Las sentadillas no deberían faltar en ningún tipo de entrenamiento y mucho menos en uno de piernas. Un ejercicio tan clásico y sencillo como efectivo. Sin embargo, hay que saber dominarla. La forma correcta de hacer una sentadilla consiste en situarse de pie con las piernas separadas según el ancho de los hombros, con los pies hacia afuera. Con la espalda erguida y sin que se tense, el movimiento comienza con un descenso llevando los glúteos hacia atrás, como si se adoptase una posición sentada. A continuación, se recupera la postura inicial y se repite de nuevo',
            video: 'https://www.youtube.com/embed/dqynXqte24o?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Walking lunge',
            descripcion: 'Otro ejercicio recomendado para fortalecer las piernas es el walking lunge. Consiste en caminar hacia adelante dando una zancada comuna pierna, mientras la otra queda atrás y baja hasta que la rodilla casi roce el suelo. Debe hacerse de forma coordinada y no demasiado rápido para asegurarse de que no se corre el riesgo de lesión. Será clave mantener la rodilla de la zancada firme y sin que se doble hacia los lados.',
            video: 'https://www.youtube.com/embed/tQNktxPkSeE?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Sentadilla búlgara',
            descripcion: 'Una variante más compleja de la sentadilla tradicional, que sería como una especie de mezcla entre esta y el lunge. La sentadilla búlgara requiere de un soporte o superficie, como puede ser una silla. La técnica consiste en situarse de pie y de espaldas a dicho objeto, una de las dos piernas se apoyará en la superficie elevada mientras que la otra sigue en el suelo. El movimiento se trata de bajar el cuerpo de modo que la rodilla adelantada adquiera un ángulo de 90 grados.',
            video: 'https://www.youtube.com/embed/K-6DG1hcHzU?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Zancada alterna',
            descripcion: 'La zancada alterna es uno de los ejercicios básicos para fortalecer las piernas, sobre todo recomendado para principiantes. La técnica es simple, tan solo hay que dar una zancada con una piernas, para volver a la posición original y, a continuación, hacer lo mismo con la otra. Es importante que la rodilla no pase la punta de los pies al dar la zancada y mantener la espalda erguida.',
            video: 'https://www.youtube.com/embed/Xkdnq9QdnPw?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Zancada inversa',
            descripcion: 'La técnica de la zancada inversa podría decirse que es exactamente la misma que la original, solo que al contrario. Es decir, en lugar de una zancada hacia adelante, se realiza una hacia atrás. A menudo se suele emplear un pequeño soporte, de baja estatura, sobre el que se apoya la pierna que queda fija y adelantada.',
            video: 'https://www.youtube.com/embed/wF96HPOuf7E?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Gemelos',
            descripcion: 'El ejercicio de gemelos es muy simple, pero eficaz. Lo único que hay que hacer para ejercitarlos con este método es, desde una postura vertical, levantar los talones de modo que todo el apoyo quede en la punta de los pies. Y habrá que aguantar así durante unos veinte o treinta segundos por cada repetición.',
            video: 'https://www.youtube.com/embed/3DW2rm90F6A?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Pistols con salto',
            descripcion: 'Los pistols son un tipo de ejercicio recomendado para deportistas avanzados, ya que conlleva una mayor exigencia física y técnica que otros. Para hacerlo se necesitará, por ejemplo, un cajón de madera. El movimiento trata de saltar a esta superficie y aterrizar apoyando únicamente un pie y adquiriendo una postura similar a una sentadilla. Garantizar el equilibrio adelantando los brazos será fundamental.',
            video: 'https://www.youtube.com/embed/q11UwY5gd0A?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Sentadilla con desplazamiento',
            descripcion: 'La sentadilla con desplazamiento es prácticamente igual que la tradicional, la única diferencia es que se va haciendo un desplazamiento lateral conforme a las repeticiones. A menudo se suelen usar bandas elásticas para aumentar el rendimiento.',
            video: 'https://www.youtube.com/embed/oAk2aZVCegk?enablejsapi=1&amp'
        }
      
      
        
    ];

    return(
        <div className="container prueba " >
        <h1 className="text-center mt-3">Piernas</h1>
             {legs.map((legs) => (
                 
                 <div className="row border mt-3" >
                     <div className="col-6">
                         <h4 className="fw-bold mt-4 pb-3">{legs.nombre}</h4>
                         <p className="mt-5">{legs.descripcion}</p>
                     </div>
                     <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                         <iframe
                             src={legs.video}
                             className="videos"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                             title={legs.nombre}
                         />
                     </div>
                 </div>

             ))}
         </div>
    );

};