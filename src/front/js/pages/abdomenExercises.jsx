import React from "react";
import "../../styles/restExercises.css";  


export const AbdomenExercises = () => {
    const abdomen = [
        {
            id: '1',
            nombre: 'Plancha frontal',
            descripcion: 'La plancha es uno de los ejercicios más completos y versátiles que existen.',
            video: 'https://www.youtube.com/embed/TnsqBqlwSxg?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Plancha lateral estática',
            descripcion: 'Como la plancha anterior, pero lateral.',
            video: 'https://www.youtube.com/embed/euvthEjjuio?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Plancha lateral con elevación de cadera',
            descripcion: 'Se trata del mismo movimiento que el apartado anterior. Focaliza el esfuerzo en el abdomen manteniéndolo bien apretado.',
            video: 'https://www.youtube.com/embed/pNeOCS_KjeE?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Plancha pirámide',
            descripcion: 'En posición de plancha frontal.',
            video: 'https://www.youtube.com/embed/EjZhuZBO6fE?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Plancha frontal a lateral',
            descripcion: 'Este ejercicio es tan sencillo como eficaz.',
            video: 'https://www.youtube.com/embed/s7T4Ml4qbEY?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Elevación de piernas laterales',
            descripcion: 'La posición inicial es similar a una plancha, pero la pierna de apoyo se sostiene sobre la rodilla.',
            video: 'https://www.youtube.com/embed/l1pq3YA6t-8?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Elevación de piernas y pelvis',
            descripcion: 'Tumbado boca arriba, eleva las piernas juntas y flexionadas hacia el techo, levantando también la pelvis.',
            video: 'https://www.youtube.com/embed/mSejp5qK1pc?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Tijeras verticales',
            descripcion: 'Tumbado boca arriba con la espalda bien apoyada en el suelo.',
            video: 'https://www.youtube.com/embed/7a-s00S2Htk?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Criss cross',
            descripcion: 'Tumbado boca arriba, con las manos detrás de la cabeza y las piernas elevadas y flexionadas en 90 grados.',
            video: 'https://www.youtube.com/embed/KD11VJ3GNeE?enablejsapi=1&amp'
        }
      
        
    ];

    return (
        <div className="container prueba " >
           <h1 className="text-center mt-3">Abdomen</h1>
                {abdomen.map(abdomen => (
                    
                    <div className="row border mt-3" key={abdomen.id} >
                        <div className="col-6">
                            <h2 className="fw-bold mt-4 pb-3">{abdomen.nombre}</h2>
                            <p className="mt-5">{abdomen.descripcion}</p>
                        </div>
                        <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                            <iframe
                                src={abdomen.video}
                                className="videos"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={abdomen.nombre}
                            />
                        </div>
                    </div>

                ))}
            </div>

            
        
    );
};
