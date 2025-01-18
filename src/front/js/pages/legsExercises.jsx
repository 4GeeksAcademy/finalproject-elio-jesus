import React from "react";
import "../../styles/restExercises.css"; 

export const LegsExercises = () => {
    const legs = [
        {
            id: '1',
            nombre: 'Sentadillas',
            descripcion: 'Las sentadillas no deberían faltar en ningún tipo de entrenamiento y mucho menos en uno de piernas.',
            video: 'https://www.youtube.com/embed/dqynXqte24o?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Walking lunge',
            descripcion: 'Otro ejercicio recomendado para fortalecer las piernas es el walking lunge.',
            video: 'https://www.youtube.com/embed/tQNktxPkSeE?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Sentadilla búlgara',
            descripcion: 'Una variante más compleja de la sentadilla tradicional, que sería como una especie de mezcla entre esta y el lunge. ',
            video: 'https://www.youtube.com/embed/K-6DG1hcHzU?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Zancada alterna',
            descripcion: 'La zancada alterna es uno de los ejercicios básicos para fortalecer las piernas, sobre todo recomendado para principiantes.',
            video: 'https://www.youtube.com/embed/Xkdnq9QdnPw?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Zancada inversa',
            descripcion: 'La técnica de la zancada inversa podría decirse que es exactamente la misma que la original, solo que al contrario.',
            video: 'https://www.youtube.com/embed/wF96HPOuf7E?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Gemelos',
            descripcion: 'El ejercicio de gemelos es muy simple, pero eficaz.',
            video: 'https://www.youtube.com/embed/3DW2rm90F6A?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Pistols con salto',
            descripcion: 'Los pistols son un tipo de ejercicio recomendado para deportistas avanzados, ya que conlleva una mayor exigencia física y técnica que otros.',
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
             {legs.map(legs => (
                 
                 <div className="row border mt-3" key={legs.id} >
                     <div className="col-6">
                         <h2 className="fw-bold mt-4 pb-3">{legs.nombre}</h2>
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