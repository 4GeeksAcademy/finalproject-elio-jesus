import React from "react";
import "../../styles/chestExercises.css"; 


export const AbdomenExercises = () => {
    const abdomen = [
        {
            id: '1',
            nombre: 'Plancha frontal',
            descripcion: 'La plancha es uno de los ejercicios más completos y versátiles que existen. Trabajan el pecho, los brazos, abdomen, espalda y glúteos. Y además admiten una amplia variedad de movimientos para intensificar el esfuerzo o focalizar el trabajo en áreas concretas. Por ello, una plancha frontal no puede faltar, sea cual sea el objetivo.',
            video: 'https://www.youtube.com/embed/TnsqBqlwSxg?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Plancha lateral estática',
            descripcion: 'Como la plancha anterior, pero lateral. Túmbate de lado apoyado sobre el lateral del pie y, de nuevo, sobre el brazo extendido o el antebrazo. Mantén la posición lateral creando una línea recta ascendente con el cuerpo. Recuerda contraer abdomen y glúteos. Alterna de lado y procura permanecer el mismo tiempo en cada uno para que el trabajo sea equitativo. La mano contraria al lado sobre el que te apoyes puede quedar recta a lo largo de tu cuerpo, flexionada en la cadera o elevada al techo para ayudarte con el equilibrio.',
            video: 'https://www.youtube.com/embed/euvthEjjuio?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Plancha lateral con elevación de cadera',
            descripcion: 'Se trata del mismo movimiento que el apartado anterior, pero en lugar de mantener la posición estática, la cadera se eleva hacia el techo y de nuevo a postura neutra. Focaliza el esfuerzo en el abdomen manteniéndolo bien apretado.',
            video: 'https://www.youtube.com/embed/pNeOCS_KjeE?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Plancha pirámide',
            descripcion: 'En posición de plancha frontal, eleva el trasero hacia el techo formando una suerte de pirámide con el cuerpo. Después, desciende lentamente hasta la posición inicial, apretando el abdomen. Es importante mantener la espalda recta tanto en la subida como en la bajada.',
            video: 'https://www.youtube.com/embed/EjZhuZBO6fE?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Plancha frontal a lateral',
            descripcion: 'Este ejercicio es tan sencillo como eficaz. Partiendo de una plancha frontal -puede ser sobre mano o sobre antebrazo-, cambia a plancha lateral, alternando de un lado al otro',
            video: 'https://www.youtube.com/embed/s7T4Ml4qbEY?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Elevación de piernas laterales',
            descripcion: 'La posición inicial es similar a una plancha, pero la pierna de apoyo se sostiene sobre la rodilla, doblada hacia atrás. Ahora, sube y baja la pierna superior estirada y recta. El tronco debe permanecer recto, así que contrae el abdomen.',
            video: 'https://www.youtube.com/embed/l1pq3YA6t-8?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Elevación de piernas y pelvis',
            descripcion: 'Tumbado boca arriba, eleva las piernas juntas y flexionadas hacia el techo, levantando también la pelvis. Finalmente, solo los dorsales, hombros, brazos y cabeza quedan apoyados sobre el suelo. Es importante que el esfuerzo de la elevación parta del abdomen para no dañar la espalda ni el cuello. Puedes ayudarte presionando los brazos contra el suelo para darte impulso.',
            video: 'https://www.youtube.com/embed/mSejp5qK1pc?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Tijeras verticales',
            descripcion: 'Tumbado boca arriba con la espalda bien apoyada en el suelo, estira las piernas rectas en el aire. Ahora, eleva una y otra hacia el techo de forma alterna, sin que la contraria llegue a apoyarse sobre el suelo. El movimiento es como el que realiza una tijera, de ahí el nombre de este ejercicio.',
            video: 'https://www.youtube.com/embed/7a-s00S2Htk?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Criss cross',
            descripcion: 'Tumbado boca arriba, con las manos detrás de la cabeza y las piernas elevadas y flexionadas en 90 grados. Lleva de forma alterna la rodilla al codo contrario, flexionando el torso. Es importante mantener el abdomen activo y que la cabeza gire el mismo tiempo que el resto del tronco para no forzar el cuello.',
            video: 'https://www.youtube.com/embed/KD11VJ3GNeE?enablejsapi=1&amp'
        }
      
        
    ];

    return (
        <div className="container prueba " >
           <h1 className="text-center mt-3">Abdomen</h1>
                {abdomen.map((abdomen) => (
                    
                    <div className="row border mt-3" >
                        <div className="col-6">
                            <h4 className="fw-bold mt-4 pb-3">{abdomen.nombre}</h4>
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
