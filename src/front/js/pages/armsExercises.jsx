import React from "react";
import "../../styles/restExercises.css"; 


export const ArmsExercises = () => {
    const arms = [
        {
            id: '1',
            nombre: 'Curl con mancuernas tipo martillo',
            descripcion: 'Una variedad de la técnica más simple. El curl con mancuernas tipo martillo modifica el método de levantamiento de las mancuernas.',
            video: 'https://www.youtube.com/embed/8ajGwhCkSss?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Plancha con curl de bíceps',
            descripcion: 'La plancha con curl de bíceps es exactamente lo que cabría esperar: una plancha que se realiza con mancuernas.',
            video: 'https://www.youtube.com/embed/KDLRxlNqyy4?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Curl de bíceps',
            descripcion: 'Un clásico que nunca puede faltar en las rutinas de entrenamiento para potenciar los bíceps.',
            video: 'https://www.youtube.com/embed/STq4k6wWrTY?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Fondos en paralelas',
            descripcion: 'Los fondos en paralelas son otro ejercicio esencial para quienes desean aumentar el tamaño de sus tríceps.',
            video: 'https:////www.youtube.com/embed/1yXVgh_DbqA?si=dzjcEzgFA4YPKmqZ?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Extensión de tríceps con cuerda en polea alta',
            descripcion: 'La extensión de tríceps con cuerda en polea alta es un ejercicio aislante que se enfoca en la contracción total de los músculos.',
            video: 'https://www.youtube.com/embed/8Y5OdjN0Ac0?si=bJ4ykSQybbm-h0Vi?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Press francés o extensión de tríceps con barra',
            descripcion: 'El press francés es un clásico dentro del entrenamiento de tríceps y, sin duda, uno de los más eficaces para estimular las tres cabezas de este músculo.',
            video: 'https://www.youtube.com/embed/PTO862T8U7Y?si=CIggNyXQ7UfnRFrp?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Curl de muñecas con agarre prono',
            descripcion: 'Con los brazos apoyados en un banco, el deportista deberá sujetar una mancuerna con cada mano con las manos en posición prono, extender y flexionar muñecas en un movimiento arriba y abajo.',
            video: 'https://www.youtube.com/embed/zKfG2shnAuw?si=1aEvQZV8ZSdf5s6M?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Curl de muñecas con barra por la espalda',
            descripcion: 'De pie, se debe agarrar una barra por la espalda.',
            video: 'https://www.youtube.com/embed/JKoQ9ej4UUQ?si=I6S5KKkfV0f_DA30?enablejsapi=1&amp'
        }
      
        
    ];

    return (
        <div className="container prueba " >
           <h1 className="text-center mt-3">Biceps, triceps y antebrazos</h1>
                {arms.map(arms => (
                    
                    <div className="row border mt-3" key={arms.id} >
                        <div className="col-6">
                            <h2 className="fw-bold mt-4 pb-3">{arms.nombre}</h2>
                            <p className="mt-5">{arms.descripcion}</p>
                        </div>
                        <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                            <iframe
                                src={arms.video}
                                className="videos"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={arms.nombre}
                            />
                        </div>
                    </div>

                ))}
            </div>

            
        
    );
};
