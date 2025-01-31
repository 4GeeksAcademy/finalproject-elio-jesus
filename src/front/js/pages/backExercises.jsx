import React from "react";
import "../../styles/restExercises.css";  


export const BackExercises = () => {
    const back = [
        {
            id: '1',
            nombre: 'Pull-ups',
            descripcion: 'Los pull ups son básicos para ejercitar la espalda, así como la zona abdominal.',
            video: 'https://www.youtube.com/embed/UT57qqp3zF8?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Remo invertido',
            descripcion: 'El remo invertido es uno de esos ejercicios que conviene incluir en el entrenamiento si se quiere ejercitar la espalda.',
            video: 'https://www.youtube.com/embed/hQDlMfVrEto?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Encogimiento de hombros con mancuernas',
            descripcion: 'La técnica correcta para los encogimientos de hombro con mancuernas consiste en colocarse de pie, con las piernas abiertas hacia el ancho de las caderas y las rodillas levemente flexionadas.',
            video: 'https://www.youtube.com/embed/dql8gwPhhs0?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Back squat',
            descripcion: 'El back squat, también llamado sentadillas con peso, es un ejercicio que fortalece la parte inferior de la espalda.',
            video: 'https://www.youtube.com/embed/QmZAiBqPvZw?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Remo con mancuerna a una mano',
            descripcion: 'Para trabajar los músculos dorsales de la espalda.',
            video: 'https://www.youtube.com/embed/P_r4SzTzaWk?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Superman',
            descripcion: 'Buena parte de los ejercicios para fortalecer la espalda hacen uso de peso para lograr los resultados esperados.',
            video: 'https://www.youtube.com/embed/a8EvyQrjZm4?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Peso muerto',
            descripcion: 'Un clásico para una espalda tonificada y resistente, a prueba de todo, el peso muerto.',
            video: 'https://www.youtube.com/embed/qO87pkO3E2E?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Remo vertical con barra',
            descripcion: 'Al remo vertical con barra es de lo mejor para tonificar la espalda y los hombros.',
            video: 'https://www.youtube.com/embed/ZszxnckeOT0?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Dominada de agarre ancho o abierto',
            descripcion: 'Uno de los ejercicios más beneficios para fortalecer la espalda son las dominadas, además, resultan muy efectivas para ejercitar el tren superior.',
            video: 'https://www.youtube.com/embed/ashv772miEw?enablejsapi=1&amp'
        }
      
        
    ];

    return (
        <div className="container prueba " >
           <h1 className="text-center mt-3">Espalda</h1>
                {back.map(back => (
                    
                    <div className="row border mt-3" key={back.id} >
                        <div className="col-6">
                            <h2 className="fw-bold mt-4 pb-3">{back.nombre}</h2>
                            <p className="mt-5">{back.descripcion}</p>
                        </div>
                        <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                            <iframe
                                src={back.video}
                                className="videos"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={back.nombre}
                            />
                        </div>
                    </div>

                ))}
            </div>
        
    );
};
