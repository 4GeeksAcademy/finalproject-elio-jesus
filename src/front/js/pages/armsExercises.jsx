import React from "react";
import "../../styles/chestExercises.css"; 


export const ArmsExercises = () => {
    const arms = [
        {
            id: '1',
            nombre: 'Curl con mancuernas tipo martillo',
            descripcion: 'Una variedad de la técnica más simple. El curl con mancuernas tipo martillo modifica el método de levantamiento de las mancuernas. En lugar de elevarlas desde abajo hacia arriba con las manos mirando hacia el cuerpo, estas estarán en paralelo y la pesa en una posición vertical, no horizontal como sucede en el curl normal. La diferencia entre uno y otro es que con el curl de martillo se potencia músculos como el braquiorradial y el braquial, de forma que el entrenamiento del brazo resulta más completo.',
            video: 'https://www.youtube.com/embed/8ajGwhCkSss?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Plancha con curl de bíceps',
            descripcion: 'La plancha con curl de bíceps es exactamente lo que cabría esperar: una plancha que se realiza con mancuernas. Este ejercicio se basa en la postura de la plancha, solo que añade una dificultad extra. Las manos no se apoyan en el suelo, sino que agarran las mancuernas que sí se apoyan en la superficie. Sin perder la posición de la plancha, habrá que elevar en dirección al pecho cada mancuerna en un movimiento alterno. Aquí es especialmente importante prestar atención a la rectitud de la espalda y no doblarla',
            video: 'https://www.youtube.com/embed/KDLRxlNqyy4?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Curl de bíceps',
            descripcion: 'Un clásico que nunca puede faltar en las rutinas de entrenamiento para potenciar los bíceps. El curl es un básico, ya que a partir de él se irá accediendo poco a poco a otras variantes. Para este ejercicio sí hace falta mancuernas. Desde una posición de pie y erguida, se sostendrá una mancuerna en cada mano. La clave consiste en elevarlas centrando la fuerza en los brazos y llegando hasta la altura de la barbilla.',
            video: 'https://www.youtube.com/embed/STq4k6wWrTY?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Fondos en paralelas',
            descripcion: 'Los fondos en paralelas son otro ejercicio esencial para quienes desean aumentar el tamaño de sus tríceps. Este movimiento compuesto no sólo trabaja las tres cabezas del tríceps, sino que también involucra otros músculos del tren superior, como el pecho y los hombros, lo que lo convierte en un ejercicio extremadamente efectivo para el desarrollo integral del torso',
            video: 'https:////www.youtube.com/embed/1yXVgh_DbqA?si=dzjcEzgFA4YPKmqZ?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Extensión de tríceps con cuerda en polea alta',
            descripcion: 'La extensión de tríceps con cuerda en polea alta es un ejercicio aislante que se enfoca en la contracción total de los músculos. Al utilizar una cuerda, se permite una mayor amplitud de movimiento, lo que resulta en una activación óptima de las tres cabezas del tríceps. Este ejercicio también es ideal para trabajar los tríceps con un control perfecto, asegurando un desarrollo muscular equilibrado y definido.',
            video: 'https://www.youtube.com/embed/8Y5OdjN0Ac0?si=bJ4ykSQybbm-h0Vi?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Press francés o extensión de tríceps con barra',
            descripcion: 'El press francés es un clásico dentro del entrenamiento de tríceps y, sin duda, uno de los más eficaces para estimular las tres cabezas de este músculo. Este ejercicio se enfoca principalmente en la cabeza larga del tríceps, que es la más grande de las tres, lo que lo convierte en una opción ideal para aumentar el tamaño del brazo de manera significativa.',
            video: 'https://www.youtube.com/embed/PTO862T8U7Y?si=CIggNyXQ7UfnRFrp?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Curl de muñecas con agarre prono',
            descripcion: 'Con los brazos apoyados en un banco, el deportista deberá sujetar una mancuerna con cada mano con las manos en posición prono, extender y flexionar muñecas en un movimiento arriba y abajo.',
            video: 'https://www.youtube.com/embed/zKfG2shnAuw?si=1aEvQZV8ZSdf5s6M?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Curl de muñecas con agarre invertido',
            descripcion: 'Con los brazos apoyados en un banco, el deportista deberá sujetar una mancuerna con cada mano con las manos en posición supina, flexionar y extender muñecas en un movimiento arriba y abajo.',
            video: 'https://www.youtube.com/embed/AX1Lm4c4-Uc?si=PJsSpNNPmE-uxNkG?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Curl de muñecas con barra por la espalda',
            descripcion: 'De pie, el deportista agarra una barra por la espalda. En esa posición, deberá flexionar las muñecas arriba y abajo. Este es uno de los ejercicios más complejos y es fundamental vigilar la técnica para evitar lesiones.',
            video: 'https://www.youtube.com/embed/JKoQ9ej4UUQ?si=I6S5KKkfV0f_DA30?enablejsapi=1&amp'
        }
      
        
    ];

    return (
        <div className="container prueba " >
           <h1 className="text-center mt-3">Biceps, triceps y antebrazos</h1>
                {arms.map((arms) => (
                    
                    <div className="row border mt-3" >
                        <div className="col-6">
                            <h4 className="fw-bold mt-4 pb-3">{arms.nombre}</h4>
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
