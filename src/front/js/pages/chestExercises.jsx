import React from "react";
import "../../styles/restExercises.css"; 

export const ChestExercises = () => {
    const chest = [
        {
            id: '1',
            nombre: 'Press de banca con barra',
            descripcion: 'en este ejercicio es esencial no arquear la espalda y evitar un movimiento brusco',
            video: 'https://www.youtube.com/embed/fqsTgdTPRQU?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Apertura con mancuernas',
            descripcion: 'La apertura con mancuernas también se practica sobre un banco y con la misma posición.',
            video: 'https://www.youtube.com/embed/xyHdY99F640?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Press inclinado con barra',
            descripcion: 'el press inclinado con barra repite la técnica del tradicional press de banca. Sin embargo, existe una diferencia y es que, como indica su nombre, el banco sobre el que se apoya el cuerpo estará inclinado hacia arriba. ',
            video: 'https://www.youtube.com/embed/swMjJqFzxCQ?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Flexión de arquero',
            descripcion: 'Las flexiones de arquero son un ejercicio muy recomendable para ganar volumen en los pectorales, además, cuenta con una ventaja añadida: también se trabaja el tríceps.',
            video: 'https://www.youtube.com/embed/bouCFhjGytc?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Hex press con mancuernas',
            descripcion: 'A la hora de hacer el hex press con mancuernas hay que acostarse sobre un banco inclinado y sujetar una mancuerna con cada mano.',
            video: 'https://www.youtube.com/embed/SQcmuElJmlI?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Pull-over con mancuernas',
            descripcion: 'Uno de los ejercicios más comunes para definir y ganar volumen en el pecho, el pull-over con mancuernas se realiza con el cuerpo tumbado sobre un banco.',
            video: 'https://www.youtube.com/embed/NfCTdUmWYx0?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Fondos',
            descripcion: 'Los fondos o dips se realizan en barras paralelas y trabajan especialmente la zona pectoral.',
            video: 'https://www.youtube.com/embed/CkX5QdEz4IE?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Press de banca declinado',
            descripcion: 'El press de banca declinado cuenta con una técnica muy similar al tradicional',
            video: 'https://www.youtube.com/embed/NNz3_wUMrvI?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Cruce de poleas',
            descripcion: 'El cruce de poleas se realiza de pie, con el cuerpo ligeramente inclinado hacia adelante.',
            video: 'https://www.youtube.com/embed/XnaMi2Gb_9Q?enablejsapi=1&amp'
        },
        {
            id: '10',
            nombre: 'Flexiones Superman',
            descripcion: 'La flexiones Superman son un tipo de flexión explosiva.',
            video: 'https://www.youtube.com/embed/hsBA0bQ5hCs?enablejsapi=1&amp'
        }
      
      
        
    ];

    return (
        <div className="container prueba " >
        <h1 className="text-center mt-3">Pectorales</h1>
             {chest.map(chest => (
                 
                 <div className="row border mt-3" key={chest.id} >
                     <div className="col-6">
                         <h2 className="fw-bold mt-4 pb-3">{chest.nombre}</h2>
                         <p className="mt-5">{chest.descripcion}</p>
                     </div>
                     <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                         <iframe
                             src={chest.video}
                             className="videos"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen
                             title={chest.nombre}
                         />
                     </div>
                 </div>

             ))}
         </div>
    );
};

