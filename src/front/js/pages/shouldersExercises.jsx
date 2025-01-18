import React from "react";
import "../../styles/restExercises.css"; 


export const ShouldersExercises = () => {
    const shoulders = [
        {
            id: '1',
            nombre: 'Slam ball',
            descripcion: 'Es uno de los ejercicios recomendados para comenzar a ejercitar el hombro, especialmente debido a que se apoya en otros grupos musculares. El slam ball se realiza con un equipo de entrenamiento similar a los balones medicinales. ',
            video: 'https://www.youtube.com/embed/ePo39a3mSfk?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Face pull con polea',
            descripcion: 'El face pull es un ejercicio especialmente recomendado para ejercitar el deltoides posterior del hombro. Como plus, además de favorecer su fortalecimiento, también resultará beneficioso para fomentar una buena postura corporal.',
            video: 'https://www.youtube.com/embed/h2I7pHAKLoE?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Press frontal con mancuernas',
            descripcion: 'La base de un entrenamiento de hombro comienza con el press frontal con mancuernas, que también puede realizarse con barra o polea.',
            video: 'https://www.youtube.com/embed/gc6Z3s3441Q?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Press Arnold',
            descripcion: 'La técnica parte de la posición de un press frontal con mancuernas, solo que la clave está en su movimiento.',
            video: 'https://www.youtube.com/embed/6zUrUsCa3KQ?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Pájaro sobre banco inclinado',
            descripcion: 'Otra excelente forma de trabajar el deltoides posterior.',
            video: 'https://www.youtube.com/embed/24z3h_bZ7Zo?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Remo al mentón',
            descripcion: 'De las mejores opciones para fortalecer el deltoides y el trapecio, con el inconveniente de que pueda resultar lesivo si se ejecuta erróneamente.',
            video: 'https://www.youtube.com/embed/loL670Yb7nU?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'YTWL en banco',
            descripcion: 'Ejercitar los hombros, fortalecer los brazos y corregir malas posturas es posible con la técnica YTWL, un ejercicio completo para mejorar la movilidad y el rendimiento.',
            video: 'https://www.youtube.com/embed/dF04JcSoYkc?enablejsapi=1&amp'
        }
      
      
        
    ];

    return (
        <div className="container prueba " >
           <h1 className="text-center mt-3">Hombros</h1>
                {shoulders.map(shoulders => (
                    
                    <div className="row border mt-3" key={shoulders.id}>
                        <div className="col-6">
                            <h2 className="fw-bold mt-4 pb-3">{shoulders.nombre}</h2>
                            <p className="mt-5">{shoulders.descripcion}</p>
                        </div>
                        <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                            <iframe
                                src={shoulders.video}
                                className="videos"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={shoulders.nombre}
                            />
                        </div>
                    </div>

                ))}
            </div>

            
        
    );
};
