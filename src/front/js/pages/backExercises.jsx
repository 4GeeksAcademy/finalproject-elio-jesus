import React from "react";
import "../../styles/chestExercises.css"; 

export const BackExercises = () => {
    const espalda = [
        {
            id: '1',
            nombre: 'Pull-ups',
            descripcion: 'Los pull ups son básicos para ejercitar la espalda, así como la zona abdominal. Para ello se agarrará una barra con ambas manos, separadas a una distancia suficiente como para que queden en línea con los hombros. El siguiente paso será colgarse con los brazos, con los codos estirados, y subir el cuerpo hasta que la barbilla supere la barra. La bajada deberá realizarse de forma controlada y despacio. En todo momento se debe mantener el abdomen contraído y el cuello debe estar relajado.',
            video: 'https://www.youtube.com/embed/UT57qqp3zF8?enablejsapi=1&amp'
        },
        {
            id: '2',
            nombre: 'Remo invertido',
            descripcion: 'El remo invertido es uno de esos ejercicios que conviene incluir en el entrenamiento si se quiere ejercitar la espalda, ya que es bastante equilibrado y hace trabajar casi cada rincón de esta. Especialmente los dorsales y buena parte de la zona superior, trapecios y romboides. En una posición boca arriba y sujetándose con las manos a unas anillas, por ejemplo, se levanta el cuerpo. Esto puede hacerse también en barra, con un TRX o en una máquina multipower.',
            video: 'https://www.youtube.com/embed/hQDlMfVrEto?enablejsapi=1&amp'
        },
        {
            id: '3',
            nombre: 'Encogimiento de hombros con mancuernas',
            descripcion: 'La técnica correcta para los encogimientos de hombro con mancuernas consiste en colocarse de pie, con las piernas abiertas hacia el ancho de las caderas y las rodillas levemente flexionadas. Para subir las mancuernas habrá que encoger los trapecios, es decir, llevando los hombros hacia el cuello. Se trata de un movimiento vertical en el que se debe prestar atención a la respiración: inspirar al retraer las escápulas y sacar pecho y expirar tras aguantar unos instantes con el peso antes de bajar.',
            video: 'https://www.youtube.com/embed/dql8gwPhhs0?enablejsapi=1&amp'
        },
        {
            id: '4',
            nombre: 'Back squat',
            descripcion: 'El back squat, también llamado sentadillas con peso, es un ejercicio que fortalece la parte inferior de la espalda, además de los músculos de la columna y del tronco. Se realiza con una barra olímpica, cuya colocación es uno de los aspectos más relevantes para hacer bien este entrenamiento. La barra deberá ubicarse a la altura del pecho en el soporte, desde donde se sujetará de forma que se pose sobre los hombros. Los talones han de separarse hasta que alcancen el ancho de los hombros y los pies apuntarán ligeramente hacia afuera.',
            video: 'https://www.youtube.com/embed/QmZAiBqPvZw?enablejsapi=1&amp'
        },
        {
            id: '5',
            nombre: 'Remo con mancuerna a una mano',
            descripcion: 'Para trabajar los músculos dorsales de la espalda, el remo con mancuerna a una mano es uno de los ejercicios que se deben incluir en el entrenamiento. Para realizar el ejercicio se necesitará un banco horizontal o algún soporte estable. Sobre este habrá que apoyar una rodilla y el brazo, mientras que el otro que quede libre se encargará de elevar la mancuerna. ',
            video: 'https://www.youtube.com/embed/P_r4SzTzaWk?enablejsapi=1&amp'
        },
        {
            id: '6',
            nombre: 'Superman',
            descripcion: 'Buena parte de los ejercicios para fortalecer la espalda hacen uso de peso para lograr los resultados esperados, pero también hay otras técnicas que solo requieren del propio cuerpo. Una de ellas es la postura conocida como Superman. La forma adecuada de practicarla es con el cuerpo boca abajo y los brazos extendidos hacia delante. El movimiento, que será cada una de las repeticiones establecidas por la rutina, consiste en adoptar una posición similar al superhéroe cuando vuela, es decir, con los brazos y piernas estiradas y levantadas.',
            video: 'https://www.youtube.com/embed/a8EvyQrjZm4?enablejsapi=1&amp'
        },
        {
            id: '7',
            nombre: 'Peso muerto',
            descripcion: 'Un clásico para una espalda tonificada y resistente, a prueba de todo, el peso muerto. En general se trata de un ejercicio muy completo, que hace trabajar muchos grupos musculares al mismo tiempo. Esta es una de las razones por las que se ha convertido en el favorito de muchos de los que van al gimnasio y que quieren adquirir un cuerpo equilibrado. El funcionamiento parece sencillo, ya que tan solo hay que agarrar una barra con pesos y levantarla.',
            video: 'https://www.youtube.com/embed/qO87pkO3E2E?enablejsapi=1&amp'
        },
        {
            id: '8',
            nombre: 'Remo vertical con barra',
            descripcion: 'Al remo vertical con barra es de lo mejor para tonificar la espalda y los hombros, así como para definir los brazos. El ejercicio se trata de sujetar la barra con las manos alineadas con los hombros y levantarla lentamente, flexionando los codos, hasta que hombros y codos queden a la misma altura. A partir de ahí se aguanta unos instantes antes de bajar el peso de forma controlada.',
            video: 'https://www.youtube.com/embed/ZszxnckeOT0?enablejsapi=1&amp'
        },
        {
            id: '9',
            nombre: 'Dominada de agarre ancho o abierto',
            descripcion: 'Uno de los ejercicios más beneficios para fortalecer la espalda son las dominadas, además, resultan muy efectivas para ejercitar el tren superior. Por lo que no deberían faltar en una buena rutina. Existen diversas variantes según la técnica empleada para hacerlas, pero las dominadas de agarre ancho son la mejor opción para trabajar la espalda, ya que este método incide principalmente sobre esta zona. La dinámica es la misma que la de una dominada tradicional, pero la diferencia está en el agarre: las manos deberán estar separadas y sobrepasar el límite del hombro.',
            video: 'https://www.youtube.com/embed/ashv772miEw?enablejsapi=1&amp'
        }
      
        
    ];

    return (
        <div className="container">
            <div className="row border mt-3" >
                {espalda.map((espalda) => (
                    <React.Fragment key={espalda.id}>
                        <div className="col-6">
                            <h4 className="fw-bold mt-4 pb-3">{espalda.nombre}</h4>
                            <p className="mt-5">{espalda.descripcion}</p>
                        </div>
                        <div className="col-6 mt-2 mb-2 d-flex justify-content-end">
                            <iframe
                                src={espalda.video}
                                className="videos"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={espalda.nombre}
                            />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
