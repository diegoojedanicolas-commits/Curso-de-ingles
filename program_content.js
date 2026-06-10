// RUTA CRÍTICA B1 A C1 - BANCO DE DATOS ACADÉMICO MODULAR
// MÓDULO 1: Saliendo de la zona de confort del B1 (Días 1 a 10)

const coreProgram = {
    1: {
        title: "Día 1: Olvídate del 'Very tired' para expresar fatiga",
        explanation: "¡Hola! Qué alegría que inicies este viaje. Vamos a dar el primer paso para sonar más natural. Cuando los estudiantes hispanohablantes se sienten muy cansados, casi siempre recurren a la traducción literal de su mente: *'very tired'*. Aunque es correcto, un hablante avanzado (C1) prefiere usar adjetivos absolutos que ya contienen la intensidad en sí mismos. Hoy adoptaremos la palabra **shattered** (que significa textualmente destrozado, pero se usa de forma muy común para decir 'completamente exhausto'). Al usarla, notarás cómo tu ritmo se vuelve más limpio porque ya no necesitas decir 'very'.",
        b1: "I worked all day in the office and now I am very tired.",
        c1: "I worked all day in the office and now I am absolutely shattered.",
        instruction: "Escribe una oración corta contándome una razón real o ficticia por la que terminarías el día sintiéndote 'shattered'.",
        trigger: "shattered"
    },
    2: {
        title: "Día 2: Sustituye el básico 'Very bad'",
        explanation: "¡Avanzamos! Ayer eliminamos una muletilla y hoy iremos por otra muy común: *'very bad'*. Cuando un servicio, el clima o una situación es sumamente mala, decir 'very bad' suena infantil o limitado. Un profesional con nivel avanzado utiliza términos precisos y con peso crítico. Hoy aprenderemos **appalling** /əˈpɔːlɪŋ/ (pésimo, espantoso, inadmisible). Es una palabra fabulosa para quejas formales o evaluaciones minuciosas.",
        b1: "The customer service at that restaurant was very bad.",
        c1: "The customer service at that restaurant was utterly appalling.",
        instruction: "Piensa en una mala experiencia reciente (un servicio, una película, un clima) y descríbela usando obligatoriamente la palabra 'appalling'.",
        trigger: "appalling"
    },
    3: {
        title: "Día 3: Expresa sorpresa genuina sin decir 'Very surprising'",
        explanation: "Cuando algo nos impacta o nos asombra positivamente, el instinto intermedio nos dicta decir *'very surprising'*. Hoy vamos a enriquecer tu repertorio con un adjetivo de alto calibre pedagógico: **astonishing** /əˈstɒnɪʃɪŋ/ (asombroso, pasmoso). Úsalo cuando hables de logros increíbles, estadísticas inesperadas o giros de eventos que superan lo común.",
        b1: "The growth of the company this year is very surprising.",
        c1: "The growth of the company this year is truly astonishing.",
        instruction: "Redacta un hecho, noticia o logro personal que consideres fuera de lo común empleando el adjetivo 'astonishing'.",
        trigger: "astonishing"
    },
    4: {
        title: "Día 4: Conectar ideas en contraste sin depender siempre de 'But'",
        explanation: "¡Llegamos al cuarto día! Hasta ahora hemos pulido vocabulario suelto, pero el nivel C1 se demuestra en cómo unes tus ideas. Para contrastar dos cosas, el nivel B1 abusa del conector *'but'* (pero). Hoy aprenderemos a usar **however** (sin embargo) de forma elegante. Pedagogía clave: para que suene avanzado, colócalo al inicio de una segunda oración independiente, separado obligatoriamente por una coma.",
        b1: "I really want to invest in that new project but I don't have the money right now.",
        c1: "I really want to invest in that new project. However, I lack the necessary capital at the moment.",
        instruction: "Escribe dos ideas que se contradigan. Termina la primera idea con un punto y empieza la segunda usando 'However,' seguido de una coma.",
        trigger: "however"
    },
    5: {
        title: "Día 5: Introducir opiniones de manera sofisticada",
        explanation: "El clásico *'In my opinion'* o *'I think'* no está mal, pero cuando estás en una junta de trabajo, debatiendo o redactando un ensayo, usarlo constantemente te hace sonar repetitivo. Una persona con fluidez avanzada introduce sus perspectivas con matices más profesionales. Hoy dominaremos: **From my perspective** (Desde mi perspectiva). Es una transición limpia, respetuosa y con un tono ejecutivo impecable.",
        b1: "In my opinion, we need to change the marketing strategy immediately.",
        c1: "From my perspective, we need to alter the marketing strategy immediately.",
        instruction: "Plantea una solución o una idea sobre cualquier tema de tu interés iniciando tu oración con la frase exacta 'From my perspective'.",
        trigger: "from my perspective"
    },
    6: {
        title: "Día 6: Dejar ir el aburrido 'Very important'",
        explanation: "¡Completamos casi la primera semana! Piensa en cuántas veces al día dices o escribes *'very important'*. Es una combinación tan sobreutilizada que ha perdido fuerza. Si quieres que tu interlocutor realmente entienda que algo es crucial, vital o determinante para el éxito de un plan, debes usar el adjetivo avanzado **paramount** /ˈpærəmaʊnt/. Se usa comúnmente en la estructura *'is of paramount importance'* o simplemente como adjetivo directo.",
        b1: "Safety in this laboratory is very important for everyone.",
        c1: "Safety in this laboratory is of paramount importance for everyone.",
        instruction: "Escribe sobre algo que consideres un requisito indispensable en tu trabajo, vida o estudios utilizando el término 'paramount'.",
        trigger: "paramount"
    },
    7: {
        title: "Día 7: Hablar de problemas sin usar siempre 'Problem'",
        explanation: "En los niveles intermedios, cada obstáculo, reto, inconveniente o crisis se reduce a la palabra *'problem'*. El vocabulario C1 tiene matices para describir diferentes tipos de dificultades. Hoy aprenderemos a usar la palabra **setback** (un contratiempo o un paso atrás en un progreso). Es ideal para explicar que algo falló temporalmente, pero que el plan sigue en marcha.",
        b1: "We had a big problem with the software delivery yesterday.",
        c1: "We encountered a minor setback with the software delivery yesterday.",
        instruction: "Cuéntame sobre una dificultad temporal en un proyecto o plan utilizando de forma natural el sustantivo 'setback'.",
        trigger: "setback"
    },
    8: {
        title: "Día 8: Reemplazar el verbo básico 'To look for'",
        explanation: "¡Día 8! El phrasal verb *'look for'* (buscar) es súper útil, pero cuando redactas un correo formal o presentas un informe, abusar de él le quita seriedad a tu discurso. El inglés de nivel avanzado prefiere verbos de raíz latina para estos contextos. Hoy adoptaremos el verbo **seek** /siːk/ (cuyo pasado es *sought*). Se utiliza para buscar cosas abstractas como soluciones, ayuda, empleo, aprobación o asesoría.",
        b1: "The company is looking for a new manager to lead the tech department.",
        c1: "The company is seeking a new manager to lead the tech department.",
        instruction: "Redacta una línea donde indiques que estás buscando una mejora, un consejo o una oportunidad utilizando el verbo 'seeking' o 'seek'.",
        trigger: "seek"
    },
    9: {
        title: "Día 9: Cuantificar cambios masivos sin usar 'Very big'",
        explanation: "Cuando analizamos datos, finanzas o el progreso de una estrategia, tendemos a decir que los cambios fueron *'very big'* o *'very good'*. Para sonar como un verdadero analista avanzado, hoy integraremos el adjetivo **substantial** /səbˈstænʃl/ (sustancial, considerable, cuantioso). Denota que el cambio es medible, real y digno de atención.",
        b1: "There is a very big difference between these two reports.",
        c1: "There is a substantial difference between these two reports.",
        instruction: "Escribe una comparación o un cambio que hayas notado en cualquier ámbito de estudio o trabajo usando la palabra 'substantial'.",
        trigger: "substantial"
    },
    10: {
        title: "Día 10: Consolidación del Módulo - El verbo 'To trigger'",
        explanation: "¡Felicidades, llegaste al día 10! Cerramos este primer bloque con una palabra que precisamente le da nombre a nuestro motor de validación: el verbo **trigger** (desencadenar, accionar, causar una reacción en cadena). En nivel B1 solemos usar siempre *'cause'* o *'make'*. Un hablante C1 usa *trigger* cuando una acción pequeña activa una respuesta o consecuencia automática y grande.",
        b1: "The unexpected news caused a panic in the stock market.",
        c1: "The unexpected news triggered a panic in the stock market.",
        instruction: "Describe una situación donde un evento específico causó una reacción inmediata, utilizando el verbo 'triggered' o 'trigger'.",
        trigger: "trigger"
    }
};
