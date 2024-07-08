const allQuestions = [
  {
    title: "¿Cuál es la definición de obligación según las Institutas de Justiniano?",
    choices: [
      "Un acuerdo entre dos partes para intercambiar bienes.",
      "Un vínculo jurídico en virtud del cual una persona está obligada para con otra a dar, hacer o no hacer alguna cosa.",
      "Un contrato formal entre dos o más personas.",
      "Un derecho real sobre una cosa específica."
    ],
    correctAnswer: "Un vínculo jurídico en virtud del cual una persona está obligada para con otra a dar, hacer o no hacer alguna cosa."
  },
  {
    title: "¿Qué es una obligación de dar?",
    choices: [
      "Transferir la propiedad de un bien o construir un derecho real.",
      "Prestar un servicio a otra persona.",
      "Evitar realizar una acción específica.",
      "Realizar una actividad en beneficio propio."
    ],
    correctAnswer: "Transferir la propiedad de un bien o construir un derecho real."
  },
  {
    title: "¿Qué es una obligación de hacer?",
    choices: [
      "Transferir la propiedad de un bien.",
      "Prestar un servicio o realizar una actividad específica.",
      "Evitar realizar una acción que pueda perjudicar a otro.",
      "Otorgar un derecho real sobre una propiedad."
    ],
    correctAnswer: "Prestar un servicio o realizar una actividad específica."
  },
  {
    title: "¿Qué implica una obligación de no hacer?",
    choices: [
      "Transferir la propiedad de un bien.",
      "Prestar un servicio a otra persona.",
      "Abstenerse de realizar una acción específica.",
      "Realizar una actividad en beneficio propio."
    ],
    correctAnswer: "Abstenerse de realizar una acción específica."
  },
  {
    title: "Según el texto, ¿qué ejemplo se da para una obligación de no hacer?",
    choices: [
      "Transferir la propiedad de una casa.",
      "Mantener al arrendatario en el goce de la cosa arrendada.",
      "Evitar que suene el radio en ciertas horas de la noche.",
      "Prestar un servicio de enseñanza."
    ],
    correctAnswer: "Evitar que suene el radio en ciertas horas de la noche."
  },
  {
    title: "¿Qué caracteriza a una obligación jurídica?",
    choices: [
      "Se basa en la moral y las costumbres sociales.",
      "Es sancionada por la ley y puede ser exigida judicialmente.",
      "Se basa en acuerdos verbales sin formalización.",
      "No tiene consecuencias legales en caso de incumplimiento."
    ],
    correctAnswer: "Es sancionada por la ley y puede ser exigida judicialmente."
  },
  {
    title: "¿Qué artículo del Código Civil consagra la reducción de la indemnización por culpa concurrente de la víctima?",
    choices: [
      "Artículo 2357",
      "Artículo 2488",
      "Artículo 1494",
      "Artículo 665"
    ],
    correctAnswer: "Artículo 2357"
  },
  {
    title: "¿Cuál es el ejemplo utilizado por el profesor Paul Esmein para explicar las obligaciones consigo mismo?",
    choices: [
      "La venta de una propiedad.",
      "El contrato de arrendamiento.",
      "El caso del peatón que va por la calle contrariando las reglas del tráfico.",
      "La obligación de dar alimentos a familiares."
    ],
    correctAnswer: "El caso del peatón que va por la calle contrariando las reglas del tráfico."
  },
  {
    title: "¿En qué circunstancias surge una obligación jurídica consigo mismo?",
    choices: [
      "Cuando se trata de relaciones con la divinidad.",
      "Cuando afecta directamente a terceros.",
      "En situaciones de autoayuda.",
      "En la prestación de servicios a sí mismo."
    ],
    correctAnswer: "Cuando afecta directamente a terceros."
  },
  {
    title: "¿Qué sanción social se menciona por no cumplir con una obligación moral?",
    choices: [
      "Multas económicas.",
      "Reprobación colectiva o exclusión social.",
      "Pena de prisión.",
      "Pérdida de derechos civiles."
    ],
    correctAnswer: "Reprobación colectiva o exclusión social."
  },
  {
    title: "¿Cuál es la diferencia entre obligaciones con terceros y obligaciones consigo mismo según el texto?",
    choices: [
      "Las obligaciones con terceros tienen consecuencias legales, mientras que las consigo mismo no.",
      "Las obligaciones consigo mismo son siempre de carácter legal.",
      "Las obligaciones con terceros no se pueden exigir judicialmente.",
      "No hay diferencia, ambas tienen las mismas consecuencias legales."
    ],
    correctAnswer: "Las obligaciones con terceros tienen consecuencias legales, mientras que las consigo mismo no."
  },
  {
    title: "¿Cómo se distribuye la indemnización en caso de culpa concurrente según el artículo 2357 del Código Civil?",
    choices: [
      "Se indemniza totalmente al peatón.",
      "Se reduce la indemnización considerando la culpa de la víctima.",
      "No se realiza indemnización alguna.",
      "Se indemniza únicamente al conductor del vehículo."
    ],
    correctAnswer: "Se reduce la indemnización considerando la culpa de la víctima."
  },
  {
    title: "¿Qué implica la expresión 'vínculo de derecho' en el contexto de las obligaciones?",
    choices: [
      "Un acuerdo verbal entre dos personas.",
      "Una relación jurídica que obliga a una persona frente a otra.",
      "Un derecho real sobre una cosa.",
      "Un pacto de caballeros sin efectos legales."
    ],
    correctAnswer: "Una relación jurídica que obliga a una persona frente a otra."
  },
  {
    title: "¿Por qué no es una obligación jurídica cobrar su propio crédito en cierto tiempo?",
    choices: [
      "Porque es una obligación moral.",
      "Porque el deudor no sufre perjuicio por la prescripción de la acción.",
      "Porque no tiene consecuencias económicas.",
      "Porque no está regulado por el Código Civil."
    ],
    correctAnswer: "Porque el deudor no sufre perjuicio por la prescripción de la acción."
  },
  {
    title: "¿Qué ejemplo se da sobre la reprobación colectiva como sanción social?",
    choices: [
      "No pagar impuestos.",
      "Vestir de cierta manera o no frecuentar casas de corrupción.",
      "Firmar un contrato.",
      "Presentar una demanda judicial."
    ],
    correctAnswer: "Vestir de cierta manera o no frecuentar casas de corrupción."
  },
  {
    title: "¿Cómo afecta el incumplimiento de una norma de tráfico a la apreciación de la culpa en un accidente?",
    choices: [
      "La indemnización no se ve afectada.",
      "La culpa del peatón reduce la indemnización.",
      "La indemnización aumenta para el peatón.",
      "No tiene ningún efecto en la indemnización."
    ],
    correctAnswer: "La culpa del peatón reduce la indemnización."
  },
  {
    title: "¿Qué es una obligación moral según el texto?",
    choices: [
      "Una obligación que puede ser exigida judicialmente.",
      "Una obligación que no tiene consecuencias legales pero sí sociales.",
      "Una obligación basada en un contrato formal.",
      "Una obligación que siempre se cumple por coerción."
    ],
    correctAnswer: "Una obligación que no tiene consecuencias legales pero sí sociales."
  },
  {
    title: "¿Cómo se considera la obligación de mantener al arrendatario en el goce de la cosa arrendada?",
    choices: [
      "Como una obligación de dar.",
      "Como una obligación de hacer.",
      "Como una obligación de no hacer.",
      "Como una obligación moral."
    ],
    correctAnswer: "Como una obligación de hacer."
  },
  {
    title: "¿Qué importancia tiene la culpa concurrente en la valoración del daño según el Código Civil?",
    choices: [
      "Aumenta la indemnización total.",
      "No afecta la indemnización.",
      "Puede reducir la indemnización.",
      "Elimina la obligación de indemnizar."
    ],
    correctAnswer: "Puede reducir la indemnización."
  },
  {
    title: "¿Cuál es el objetivo principal de una obligación jurídica según el texto?",
    choices: [
      "Satisfacer un interés moral.",
      "Crear una relación social entre individuos.",
      "Permitir la ejecución sobre los bienes del deudor.",
      "Establecer vínculos económicos y jurídicos exigibles."
    ],
    correctAnswer: "Establecer vínculos económicos y jurídicos exigibles."
  },
  {
  title: "¿Qué artículo del Código Civil Colombiano menciona las fuentes de las obligaciones?",
  choices: [
    "Artículo 1489",
    "Artículo 1494",
    "Artículo 1501",
    "Artículo 1504"
  ],
  correctAnswer: "Artículo 1494"
},
{
  title: "¿Cuál de las siguientes NO es una fuente de las obligaciones según el artículo 1494 del Código Civil?",
  choices: [
    "Contratos",
    "Cuasicontratos",
    "Delitos",
    "Costumbres"
  ],
  correctAnswer: "Costumbres"
},
{
  title: "¿Cómo se define un acto jurídico?",
  choices: [
    "Un evento natural que genera obligaciones.",
    "Una intención de producir un efecto de derecho, como un contrato o cuasicontrato.",
    "Una acción no intencional que causa daño.",
    "Un hecho voluntario que no produce obligaciones."
  ],
  correctAnswer: "Una intención de producir un efecto de derecho, como un contrato o cuasicontrato."
},
{
  title: "¿Qué diferencia hay entre un contrato y un cuasicontrato?",
  choices: [
    "Un contrato es un acuerdo formal, mientras que un cuasicontrato no requiere consentimiento.",
    "Ambos son acuerdos formales.",
    "Un cuasicontrato es un acuerdo informal entre partes.",
    "No hay diferencia significativa."
  ],
  correctAnswer: "Un contrato es un acuerdo formal, mientras que un cuasicontrato no requiere consentimiento."
},
{
  title: "¿Qué es un cuasidelito?",
  choices: [
    "Un delito cometido con intención de dañar.",
    "Un acto ilícito cometido sin intención de dañar.",
    "Un contrato ilegal.",
    "Un acuerdo entre partes sin formalización."
  ],
  correctAnswer: "Un acto ilícito cometido sin intención de dañar."
},
{
  title: "¿Cuál es un ejemplo de un cuasicontrato según el Código Civil?",
  choices: [
    "La compraventa de bienes.",
    "La agencia oficiosa.",
    "El arrendamiento de propiedad.",
    "La donación de bienes."
  ],
  correctAnswer: "La agencia oficiosa."
},
{
  title: "¿Cuál de las siguientes es una fuente de las obligaciones según el derecho romano?",
  choices: [
    "Los contratos y las costumbres.",
    "Los delitos y las costumbres.",
    "Los contratos y los delitos.",
    "Las costumbres y la jurisprudencia."
  ],
  correctAnswer: "Los contratos y los delitos."
},
{
  title: "Según el texto, ¿qué fuente de las obligaciones considera falsa y confusa la doctrina francesa de principios del siglo XX?",
  choices: [
    "Contratos",
    "Cuasicontratos",
    "Delitos",
    "La ley"
  ],
  correctAnswer: "La ley"
},
{
  title: "¿Qué acción se considera un cuasidelito en el Código Civil?",
  choices: [
    "Gestión de negocios ajenos sin autorización.",
    "Pago de lo no debido.",
    "Delito cometido con intención.",
    "Acto ilícito cometido sin intención de dañar."
  ],
  correctAnswer: "Acto ilícito cometido sin intención de dañar."
},
{
  title: "¿Cuál de las siguientes es una característica de los actos jurídicos según Louis Josserand?",
  choices: [
    "No generan obligaciones.",
    "Son manifestaciones de voluntad encaminadas a generar obligaciones.",
    "Son eventos naturales.",
    "No requieren la voluntad de los interesados."
  ],
  correctAnswer: "Son manifestaciones de voluntad encaminadas a generar obligaciones."
},
{
  title: "¿Qué es un hecho jurídico?",
  choices: [
    "Una manifestación de voluntad que no produce obligaciones.",
    "Un evento que genera, transfiere o modifica un derecho independientemente de la voluntad.",
    "Un contrato formal entre dos partes.",
    "Un acto ilegal cometido con intención."
  ],
  correctAnswer: "Un evento que genera, transfiere o modifica un derecho independientemente de la voluntad."
},
{
  title: "¿Cuál es una diferencia clave entre los hechos jurídicos y los actos jurídicos?",
  choices: [
    "Los actos jurídicos no producen efectos legales.",
    "Los hechos jurídicos son voluntarios y los actos jurídicos no.",
    "Los actos jurídicos requieren manifestación de voluntad y los hechos jurídicos no.",
    "Los hechos jurídicos siempre son intencionales."
  ],
  correctAnswer: "Los actos jurídicos requieren manifestación de voluntad y los hechos jurídicos no."
},
{
  title: "Según el texto, ¿qué doctrina francesa clasifica las fuentes de las obligaciones en actos jurídicos y hechos jurídicos?",
  choices: [
    "La doctrina de Pothier.",
    "La doctrina de Gayo.",
    "La doctrina de Josserand.",
    "La doctrina de Justiniano."
  ],
  correctAnswer: "La doctrina de Josserand."
},
{
  title: "¿Cuál es un ejemplo de un hecho jurídico voluntario?",
  choices: [
    "La muerte.",
    "La filiación.",
    "Un delito.",
    "El nacimiento."
  ],
  correctAnswer: "Un delito."
},
{
  title: "¿Qué ley colombiana menciona que las obligaciones nacen de hechos o actos, sean jurídicos o no?",
  choices: [
    "Ley 57 de 1887",
    "Ley 45 de 1935",
    "Ley 50 de 1936",
    "Ley 222 de 1995"
  ],
  correctAnswer: "Ley 57 de 1887"
},
{
  title: "¿Qué término se utiliza en el artículo 1495 del Código Civil para definir un contrato o convención?",
  choices: [
    "Acto unilateral",
    "Acto por el cual una parte se obliga para con otra",
    "Declaración de voluntad",
    "Hecho jurídico"
  ],
  correctAnswer: "Acto por el cual una parte se obliga para con otra"
},
{
  title: "¿Qué disposición legal en Colombia establece el abuso del derecho como fuente de obligaciones?",
  choices: [
    "Artículo 830 del Código de Comercio",
    "Artículo 1494 del Código Civil",
    "Artículo 1625 del Código Civil",
    "Artículo 2302 del Código Civil"
  ],
  correctAnswer: "Artículo 830 del Código de Comercio"
},
{
  title: "¿Qué es el enriquecimiento sin causa según la legislación colombiana?",
  choices: [
    "Un contrato que no genera obligaciones.",
    "Una fuente de obligaciones que implica un aumento patrimonial injustificado.",
    "Un delito cometido con intención de dañar.",
    "Un acto jurídico sin manifestación de voluntad."
  ],
  correctAnswer: "Una fuente de obligaciones que implica un aumento patrimonial injustificado."
},
{
  title: "¿Qué fuente de obligaciones menciona específicamente el artículo 1494 del Código Civil Colombiano?",
  choices: [
    "Las convenciones y contratos",
    "Las costumbres y la jurisprudencia",
    "Los actos administrativos",
    "Las normas internacionales"
  ],
  correctAnswer: "Las convenciones y contratos"
},
{
  title: "¿Cuál de las siguientes afirmaciones describe mejor la distinción entre actos jurídicos y hechos jurídicos según Josserand?",
  choices: [
    "Los actos jurídicos son siempre bilaterales, mientras que los hechos jurídicos son unilaterales.",
    "Los actos jurídicos son manifestaciones de voluntad para generar obligaciones, mientras que los hechos jurídicos pueden ser voluntarios o involuntarios y crean efectos jurídicos.",
    "Los actos jurídicos no generan obligaciones legales, mientras que los hechos jurídicos sí.",
    "Los actos jurídicos siempre son ilícitos, mientras que los hechos jurídicos siempre son lícitos."
  ],
  correctAnswer: "Los actos jurídicos son manifestaciones de voluntad para generar obligaciones, mientras que los hechos jurídicos pueden ser voluntarios o involuntarios y crean efectos jurídicos."
},
  {
  title: "¿Qué diferencia hay entre contrato y convención según el Código Civil?",
  choices: [
    "La convención es más específica que el contrato.",
    "La convención es más amplia que el contrato.",
    "No hay diferencia entre ambos.",
    "La convención se aplica solo a contratos internacionales."
  ],
  correctAnswer: "La convención es más amplia que el contrato."
},
{
  title: "¿Cuál es el objeto del contrato?",
  choices: [
    "Dar nacimiento a una o varias obligaciones.",
    "Crear derechos reales.",
    "Transferir propiedad.",
    "Establecer relaciones personales."
  ],
  correctAnswer: "Dar nacimiento a una o varias obligaciones."
},
{
  title: "¿Qué tipo de contrato es la venta con inmediata entrega de la cosa?",
  choices: [
    "Sucesivo.",
    "Instantáneo.",
    "Accesorio.",
    "Colectivo."
  ],
  correctAnswer: "Instantáneo."
},
{
  title: "¿Qué tipo de contrato es el arrendamiento?",
  choices: [
    "Sucesivo.",
    "Instantáneo.",
    "Accesorio.",
    "Colectivo."
  ],
  correctAnswer: "Sucesivo."
},
{
  title: "¿Qué son los contratos accesorios o de garantía?",
  choices: [
    "Aquellos que aseguran el cumplimiento de una obligación.",
    "Contratos que no tienen ninguna obligación.",
    "Contratos que solo se realizan en presencia de un notario.",
    "Contratos que se aplican únicamente en comercio internacional."
  ],
  correctAnswer: "Aquellos que aseguran el cumplimiento de una obligación."
},
{
  title: "¿Qué es un contrato colectivo?",
  choices: [
    "Un contrato que solo involucra a dos partes.",
    "Un contrato que no presenta la contraposición de intereses de los contratos individuales.",
    "Un contrato que se realiza entre empresas multinacionales.",
    "Un contrato que siempre requiere una garantía."
  ],
  correctAnswer: "Un contrato que no presenta la contraposición de intereses de los contratos individuales."
},
{
  title: "¿Qué es un contrato \"intuitu personae\"?",
  choices: [
    "Un contrato basado en la identidad de la persona con quien se contrata.",
    "Un contrato que se realiza en presencia de un juez.",
    "Un contrato con una empresa multinacional.",
    "Un contrato que no tiene obligaciones."
  ],
  correctAnswer: "Un contrato basado en la identidad de la persona con quien se contrata."
},
{
  title: "¿Qué principio se consagra en el artículo 1602 del Código Civil?",
  choices: [
    "Principio de la autonomía de la voluntad.",
    "Principio de la colectividad de los contratos.",
    "Principio de la intervención del Estado.",
    "Principio de la obligación unilateral."
  ],
  correctAnswer: "Principio de la autonomía de la voluntad."
},
{
  title: "¿Cuál es el efecto de la autonomía de la voluntad en los contratos?",
  choices: [
    "Las partes pueden crear libremente sus obligaciones.",
    "Las partes no tienen libertad para negociar.",
    "Todos los contratos deben ser aprobados por el Estado.",
    "Solo se pueden hacer contratos verbales."
  ],
  correctAnswer: "Las partes pueden crear libremente sus obligaciones."
},
{
  title: "¿Qué tipo de contrato se considera solemne o formalista?",
  choices: [
    "Contrato de compraventa de bienes muebles.",
    "Contrato de arrendamiento.",
    "Contrato de matrimonio.",
    "Contrato de préstamo."
  ],
  correctAnswer: "Contrato de matrimonio."
},
{
  title: "¿Qué tipo de contrato es bilateral o sinalagmático?",
  choices: [
    "Un contrato donde solo una parte tiene obligaciones.",
    "Un contrato donde ambas partes tienen obligaciones.",
    "Un contrato que se realiza solo entre empresas.",
    "Un contrato sin obligaciones."
  ],
  correctAnswer: "Un contrato donde ambas partes tienen obligaciones."
},
{
  title: "¿Qué artículo del Código Civil regula la cesión de créditos?",
  choices: [
    "Artículo 1965",
    "Artículo 1494",
    "Artículo 1502",
    "Artículo 1550"
  ],
  correctAnswer: "Artículo 1965"
},
{
  title: "¿Qué sucede con el contrato de arrendamiento en caso de muerte del inquilino, según el artículo 1965 del Código Civil?",
  choices: [
    "Siempre se termina.",
    "Puede continuar si las partes lo estipulan.",
    "El contrato se transfiere automáticamente al propietario.",
    "El contrato se convierte en nulo."
  ],
  correctAnswer: "Puede continuar si las partes lo estipulan."
},
{
  title: "¿Qué caracteriza a un contrato instantáneo?",
  choices: [
    "Se ejecuta de inmediato en su totalidad.",
    "Se ejecuta a lo largo del tiempo.",
    "No tiene fecha de ejecución.",
    "Siempre requiere la intervención de un notario."
  ],
  correctAnswer: "Se ejecuta de inmediato en su totalidad."
},
{
  title: "¿Qué caracteriza a un contrato sucesivo?",
  choices: [
    "Se ejecuta de inmediato en su totalidad.",
    "Se ejecuta a lo largo del tiempo.",
    "No tiene obligaciones para las partes.",
    "Solo se realiza entre individuos."
  ],
  correctAnswer: "Se ejecuta a lo largo del tiempo."
},
{
  title: "¿Qué tipo de contrato es una hipoteca?",
  choices: [
    "Accesorio.",
    "Instantáneo.",
    "Colectivo.",
    "Intuitu personae."
  ],
  correctAnswer: "Accesorio."
},
{
  title: "¿Qué establece el artículo 1506 del Código Civil sobre la imposición de contratos a terceros?",
  choices: [
    "Los contratos no pueden imponerse a terceros, salvo estipulación en contrario.",
    "Todos los contratos pueden imponerse a terceros.",
    "Los contratos siempre requieren la aprobación de un juez.",
    "Los contratos no pueden ser cedidos bajo ninguna circunstancia."
  ],
  correctAnswer: "Los contratos no pueden imponerse a terceros, salvo estipulación en contrario."
},
{
  title: "¿Qué implica la cláusula \"rebus sic stantibus\"?",
  choices: [
    "Los contratos son obligatorios mientras las circunstancias no cambien fundamentalmente.",
    "Los contratos son siempre obligatorios, independientemente de las circunstancias.",
    "Los contratos requieren la intervención de un notario para ser válidos.",
    "Los contratos solo se aplican a situaciones específicas."
  ],
  correctAnswer: "Los contratos son obligatorios mientras las circunstancias no cambien fundamentalmente."
},
{
  title: "¿Qué es una excepción de inejecución según el artículo 1609 del Código Civil?",
  choices: [
    "El derecho de negarse a cumplir una prestación mientras la otra parte no cumpla.",
    "La obligación de cumplir una prestación independientemente del cumplimiento de la otra parte.",
    "La nulidad automática del contrato.",
    "La posibilidad de modificar unilateralmente el contrato."
  ],
  correctAnswer: "El derecho de negarse a cumplir una prestación mientras la otra parte no cumpla."
},
{
  title: "¿Qué sucede cuando un contrato adolece de vicios en el consentimiento, como el error?",
  choices: [
    "El contrato es nulo automáticamente.",
    "El contrato es relativamente nulo y puede ser ratificado.",
    "El contrato no tiene ninguna validez legal.",
    "El contrato siempre debe ser renegociado."
  ],
  correctAnswer: "El contrato es relativamente nulo y puede ser ratificado."
},
{
  title: "¿Cuáles son las condiciones esenciales para que una persona se obligue a otra por un acto o declaración de voluntad según el artículo 1502 del Código Civil?",
  choices: [
    "Capacidad, consentimiento, objeto lícito y causa lícita.",
    "Capacidad, consentimiento, objeto ilícito y causa ilícita.",
    "Capacidad, consentimiento, objeto y valor.",
    "Capacidad, voluntad, objeto lícito y valor."
  ],
  correctAnswer: "Capacidad, consentimiento, objeto lícito y causa lícita."
},
{
  title: "¿Qué establece el artículo 1503 del Código Civil sobre la capacidad legal?",
  choices: [
    "Todos son legalmente incapaces.",
    "Solo los mayores de 18 años son capaces.",
    "Toda persona es legalmente capaz, excepto aquella que la ley declara incapaz.",
    "Solo los menores de 18 años son incapaces."
  ],
  correctAnswer: "Toda persona es legalmente capaz, excepto aquella que la ley declara incapaz."
},
{
  title: "¿Cuál es la regla general sobre la capacidad en derecho civil?",
  choices: [
    "La incapacidad es la regla general.",
    "La capacidad es la regla general.",
    "La ley no establece reglas sobre capacidad.",
    "La capacidad solo se presume en casos especiales."
  ],
  correctAnswer: "La capacidad es la regla general."
},
{
  title: "¿Qué tipo de incapacidades establece la ley?",
  choices: [
    "Absolutas, relativas y temporales.",
    "Absolutas, relativas y accidentales.",
    "Permanentes, temporales y accidentales.",
    "Relativas, permanentes y temporales."
  ],
  correctAnswer: "Absolutas, relativas y accidentales."
},
{
  title: "¿Quiénes son considerados absolutamente incapaces según el artículo 1504 del Código Civil?",
  choices: [
    "Los menores adultos, los disipadores y las personas jurídicas.",
    "Los menores adultos, los sordomudos y las personas jurídicas.",
    "Los dementes, los impúberes y los sordomudos que no pueden darse a entender por escrito.",
    "Los dementes, los menores adultos y los sordomudos."
  ],
  correctAnswer: "Los dementes, los impúberes y los sordomudos que no pueden darse a entender por escrito."
},
{
  title: "¿Qué actos pueden realizar los absolutamente incapaces?",
  choices: [
    "Sus actos no producen obligaciones naturales y no admiten caución.",
    "Pueden obligarse en ciertos contratos.",
    "Pueden actuar con la autorización de un tutor.",
    "Pueden adquirir bienes pero no enajenarlos."
  ],
  correctAnswer: "Sus actos no producen obligaciones naturales y no admiten caución."
},
{
  title: "¿Cuál es la definición de impúber según el artículo 34 del Código Civil?",
  choices: [
    "Varón menor de 16 años y mujer menor de 14 años.",
    "Varón menor de 18 años y mujer menor de 16 años.",
    "Varón menor de 14 años y mujer menor de 12 años.",
    "Varón menor de 12 años y mujer menor de 10 años."
  ],
  correctAnswer: "Varón menor de 14 años y mujer menor de 12 años."
},
{
  title: "¿Qué se requiere para que los actos de un menor adulto sean válidos?",
  choices: [
    "No se requiere ninguna autorización especial.",
    "Necesitan autorización judicial para todos los actos.",
    "Deben ser representados por su padre, madre o tutor y, en caso de inmuebles, también requieren autorización judicial.",
    "Solo necesitan la autorización del padre o madre."
  ],
  correctAnswer: "Deben ser representados por su padre, madre o tutor y, en caso de inmuebles, también requieren autorización judicial."
},
{
  title: "¿Qué caracteriza a las incapacidades accidentales según el texto?",
  choices: [
    "Son permanentes.",
    "Son establecidas por la ley para ciertos actos y pueden ser absolutas o relativas.",
    "No afectan la capacidad legal en ningún caso.",
    "Solo aplican a los menores de edad."
  ],
  correctAnswer: "Son establecidas por la ley para ciertos actos y pueden ser absolutas o relativas."
},
{
  title: "¿Qué artículo del Código Civil regula las nulidades de los actos de los incapaces?",
  choices: [
    "Artículo 1527",
    "Artículo 1503",
    "Artículo 1504",
    "Artículo 1529"
  ],
  correctAnswer: "Artículo 1527"
},
{
  title: "¿Qué sucede con los actos realizados por personas relativamente incapaces?",
  choices: [
    "Son nulos absolutamente.",
    "Pueden tener valor en ciertas circunstancias y según las leyes que los regulan.",
    "Siempre requieren ratificación judicial.",
    "Nunca tienen valor legal."
  ],
  correctAnswer: "Pueden tener valor en ciertas circunstancias y según las leyes que los regulan."
},
{
  title: "¿Quiénes eran considerados relativamente incapaces antes de la Ley 28 de 1932?",
  choices: [
    "Los dementes y los impúberes.",
    "Las mujeres casadas.",
    "Los sordomudos que no pueden darse a entender por escrito.",
    "Los menores de edad."
  ],
  correctAnswer: "Las mujeres casadas."
},
{
  title: "¿Qué establece el artículo 14 del Código de Comercio sobre la capacidad de los funcionarios públicos para comerciar?",
  choices: [
    "No pueden celebrar actos de comercio en ninguna circunstancia.",
    "Pueden realizar cualquier tipo de acto de comercio.",
    "No pueden comerciar respecto de actividades mercantiles relacionadas con sus funciones.",
    "Pueden comerciar libremente siempre que sea fuera de su horario laboral."
  ],
  correctAnswer: "No pueden comerciar respecto de actividades mercantiles relacionadas con sus funciones."
},
{
  title: "¿Qué tipo de nulidad se aplica a los actos de los absolutamente incapaces?",
  choices: [
    "Nulidad relativa.",
    "Nulidad parcial.",
    "Nulidad total.",
    "Nulidad absoluta."
  ],
  correctAnswer: "Nulidad absoluta."
},
{
  title: "¿Qué condiciones deben cumplirse para que el consentimiento sea válido en un contrato?",
  choices: [
    "Debe ser siempre verbal.",
    "Debe ser dado sin vicios y con pleno conocimiento.",
    "Debe ser expresado únicamente por escrito.",
    "Debe ser dado en presencia de un notario."
  ],
  correctAnswer: "Debe ser dado sin vicios y con pleno conocimiento."
},
{
  title: "¿Cuál es la consecuencia de la falta de capacidad en un acto jurídico?",
  choices: [
    "El acto es válido.",
    "El acto es nulo o anulable según las circunstancias.",
    "El acto puede ser ratificado por cualquier persona.",
    "El acto es ineficaz pero no nulo."
  ],
  correctAnswer: "El acto es nulo o anulable según las circunstancias."
},
{
  title: "¿Qué caracteriza a los actos realizados por personas que tienen capacidad relativa?",
  choices: [
    "Son siempre nulos.",
    "Son válidos sin necesidad de ratificación.",
    "Pueden ser válidos si se realizan con las formalidades requeridas por la ley.",
    "Son nulos pero pueden ser ratificados judicialmente."
  ],
  correctAnswer: "Pueden ser válidos si se realizan con las formalidades requeridas por la ley."
},
{
  title: "¿Qué es la interdicción por demencia?",
  choices: [
    "Es un procedimiento para declarar la capacidad de una persona.",
    "Es un procedimiento para asegurar la protección de una persona incapaz por demencia.",
    "Es una medida temporal para menores de edad.",
    "Es un acto unilateral de la persona afectada."
  ],
  correctAnswer: "Es un procedimiento para asegurar la protección de una persona incapaz por demencia."
},
{
  title: "¿Qué tipo de incapacidad afecta a las personas jurídicas según el artículo 1745 del Código Civil?",
  choices: [
    "Incapacidad absoluta.",
    "Incapacidad relativa.",
    "Incapacidad temporal.",
    "Incapacidad accidental."
  ],
  correctAnswer: "Incapacidad relativa."
},
{
  title: "¿Qué tipo de nulidad pueden tener los actos de incapacidad accidental?",
  choices: [
    "Nulidad absoluta o relativa según el caso.",
    "Nulidad parcial.",
    "Nulidad temporal.",
    "Nulidad total."
  ],
  correctAnswer: "Nulidad absoluta o relativa según el caso."
},
{
title: "¿Qué es el consentimiento en el contexto de un contrato según el artículo 1502 del Código Civil?",
choices: [
  "Un acuerdo tácito entre las partes.",
  "La adhesión de las partes manifestada por oferta y aceptación.",
  "La firma de un documento legal.",
  "La voluntad unilateral de una parte."
],
correctAnswer: "La adhesión de las partes manifestada por oferta y aceptación."
},
{
title: "¿Qué artículos del Código Civil se ocupan del consentimiento?",
choices: [
  "1502 a 1507.",
  "1508 a 1512.",
  "1513 a 1517.",
  "1518 a 1522."
],
correctAnswer: "1508 a 1512."
},
{
title: "¿Qué establece el artículo 1508 del Código Civil sobre los vicios del consentimiento?",
choices: [
  "Que el consentimiento debe ser por escrito.",
  "Que el consentimiento no puede ser tácito.",
  "Que los vicios del consentimiento impiden su validez.",
  "Que el consentimiento puede ser revocado en cualquier momento."
],
correctAnswer: "Que los vicios del consentimiento impiden su validez."
},
{
title: "¿Cuál es la definición etimológica de 'consentimiento'?",
choices: [
  "Dar una orden.",
  "Sentir con otro.",
  "Aceptar sin condiciones.",
  "Declarar en público."
],
correctAnswer: "Sentir con otro."
},
{
title: "¿Cuál de los siguientes NO es un vicio del consentimiento según el Código Civil?",
choices: [
  "Error.",
  "Dolo.",
  "Fuerza.",
  "Capacidad."
],
correctAnswer: "Capacidad."
},
{
title: "¿Qué se requiere para que el consentimiento sea válido en un contrato?",
choices: [
  "Que sea dado sin ningún vicio.",
  "Que sea siempre por escrito.",
  "Que sea dado ante un notario.",
  "Que sea unilateral."
],
correctAnswer: "Que sea dado sin ningún vicio."
},
{
title: "¿Qué artículo del Código Civil establece que el consentimiento debe recaer sobre un objeto lícito?",
choices: [
  "Artículo 1502.",
  "Artículo 1508.",
  "Artículo 1511.",
  "Artículo 1524."
],
correctAnswer: "Artículo 1502."
},
{
title: "¿Qué es el consentimiento tácito?",
choices: [
  "Consentimiento manifestado explícitamente.",
  "Consentimiento inferido de la conducta de las partes.",
  "Consentimiento dado por escrito.",
  "Consentimiento otorgado en presencia de un testigo."
],
correctAnswer: "Consentimiento inferido de la conducta de las partes."
},
{
title: "¿Cuál es un ejemplo de consentimiento expreso?",
choices: [
  "Firmar un contrato.",
  "Asentir con la cabeza.",
  "Permanecer en silencio.",
  "No responder a una oferta."
],
correctAnswer: "Firmar un contrato."
},
{
title: "¿Qué implica la 'apariencia de consentimiento'?",
choices: [
  "Que el consentimiento es válido.",
  "Que el consentimiento parece real pero no lo es.",
  "Que el consentimiento debe ser tácito.",
  "Que el consentimiento es siempre expreso."
],
correctAnswer: "Que el consentimiento parece real pero no lo es."
},
{
title: "¿Qué sucede si falta el consentimiento en un contrato?",
choices: [
  "El contrato sigue siendo válido.",
  "El contrato puede ser ratificado por una de las partes.",
  "El contrato es nulo.",
  "El contrato debe ser revisado por un juez."
],
correctAnswer: "El contrato es nulo."
},
{
title: "¿Qué establece el artículo 1506 del Código Civil sobre los contratos y los terceros?",
choices: [
  "Los contratos siempre afectan a terceros.",
  "Los contratos no se imponen a terceros a menos que se haya hecho una estipulación.",
  "Los contratos deben ser aprobados por terceros.",
  "Los contratos solo pueden ser realizados entre familiares."
],
correctAnswer: "Los contratos no se imponen a terceros a menos que se haya hecho una estipulación."
},
{
title: "¿Qué es un contrato solemne?",
choices: [
  "Un contrato que requiere consentimiento tácito.",
  "Un contrato que debe ser formalizado por escrito y con ciertas formalidades.",
  "Un contrato que se celebra en privado.",
  "Un contrato que no requiere formalidades."
],
correctAnswer: "Un contrato que debe ser formalizado por escrito y con ciertas formalidades."
},
{
title: "¿Cuál es la consecuencia de un consentimiento viciado por error?",
choices: [
  "El contrato es válido.",
  "El contrato es anulable.",
  "El contrato es permanente.",
  "El contrato se convierte en tácito."
],
correctAnswer: "El contrato es anulable."
},
{
title: "¿Qué tipo de error vicia el consentimiento según el artículo 1510 del Código Civil?",
choices: [
  "Error en la firma.",
  "Error en el nombre.",
  "Error en el objeto o sustancia del contrato.",
  "Error en la fecha."
],
correctAnswer: "Error en el objeto o sustancia del contrato."
},
{
title: "¿Qué implica la cláusula 'rebus sic stantibus'?",
choices: [
  "El contrato es siempre obligatorio.",
  "El contrato es obligatorio mientras las circunstancias no cambien fundamentalmente.",
  "El contrato puede ser revocado en cualquier momento.",
  "El contrato requiere aprobación judicial."
],
correctAnswer: "El contrato es obligatorio mientras las circunstancias no cambien fundamentalmente."
},
{
title: "¿Qué establece el artículo 1505 del Código Civil sobre la representación?",
choices: [
  "Los actos realizados por el representante producen efectos respecto del representado como si él mismo los hubiera contratado.",
  "El representante no tiene poder para obligar al representado.",
  "La representación debe ser siempre tácita.",
  "La representación no se menciona en el Código Civil."
],
correctAnswer: "Los actos realizados por el representante producen efectos respecto del representado como si él mismo los hubiera contratado."
},
{
title: "¿Qué sucede cuando un contrato es realizado bajo la influencia de la fuerza?",
choices: [
  "El contrato es válido.",
  "El contrato es anulable.",
  "El contrato es permanente.",
  "El contrato se convierte en tácito."
],
correctAnswer: "El contrato es anulable."
},
{
title: "¿Cuál de los siguientes ejemplos representa un consentimiento tácito?",
choices: [
  "Firmar un documento.",
  "Asentir verbalmente.",
  "No oponerse a una gestión de negocios que beneficia al destinatario.",
  "Declarar explícitamente la aceptación."
],
correctAnswer: "No oponerse a una gestión de negocios que beneficia al destinatario."
},
{
title: "¿Qué artículo del Código Civil menciona que los vicios del consentimiento son error, fuerza y dolo?",
choices: [
  "Artículo 1508.",
  "Artículo 1510.",
  "Artículo 1512.",
  "Artículo 1514."
],
correctAnswer: "Artículo 1508."
},
{
title: "¿Qué establece el artículo 1509 del Código Civil sobre el error de derecho?",
choices: [
  "Que siempre vicia el consentimiento.",
  "Que no vicia el consentimiento.",
  "Que vicia el consentimiento solo en casos especiales.",
  "Que debe ser demostrado en un juicio."
],
correctAnswer: "Que no vicia el consentimiento."
},
{
title: "¿Cuál es un ejemplo de error de derecho según el texto?",
choices: [
  "Creer que un varón de 17 años es capaz de contratar por sí solo.",
  "Creer que un terreno tiene ciertos linderos que no son correctos.",
  "Creer que una persona resultó herida por el atropello de un vehículo.",
  "Creer que una barra de plata es realmente de otro metal."
],
correctAnswer: "Creer que un varón de 17 años es capaz de contratar por sí solo."
},
{
title: "¿Qué es un error de hecho según el texto?",
choices: [
  "Error sobre un punto de derecho.",
  "Error sobre un elemento de hecho que induce al contrato.",
  "Error sobre la interpretación de la ley.",
  "Error sobre la capacidad jurídica de una persona."
],
correctAnswer: "Error sobre un elemento de hecho que induce al contrato."
},
{
title: "¿Cuál es un ejemplo de error de hecho según el texto?",
choices: [
  "Creer que una persona es capaz de contratar a los 17 años.",
  "Admitir como heredera a una persona que se cree pariente pero no lo es.",
  "Interpretar mal una norma legal.",
  "Creer que una barra de plata es de otro metal."
],
correctAnswer: "Admitir como heredera a una persona que se cree pariente pero no lo es."
},
{
title: "¿Qué tipo de error se refiere al creer que la ley admite la representación en la línea colateral?",
choices: [
  "Error de hecho.",
  "Error de derecho.",
  "Error sobre la sustancia de la cosa.",
  "Error sobre la persona."
],
correctAnswer: "Error de derecho."
},
{
title: "¿Qué establece el artículo 1510 del Código Civil sobre el error de hecho?",
choices: [
  "El error de hecho no vicia el consentimiento.",
  "El error de hecho vicia el consentimiento cuando recae sobre la especie de acto o contrato.",
  "El error de hecho solo vicia el consentimiento en contratos escritos.",
  "El error de hecho debe ser probado por testigos."
],
correctAnswer: "El error de hecho vicia el consentimiento cuando recae sobre la especie de acto o contrato."
},
{
title: "¿Qué es el error in negotio según el artículo 1510 del Código Civil?",
choices: [
  "Error sobre la identidad de la persona.",
  "Error sobre la sustancia de la cosa.",
  "Error sobre la especie de acto o contrato que se celebra.",
  "Error sobre el valor del contrato."
],
correctAnswer: "Error sobre la especie de acto o contrato que se celebra."
},
{
title: "¿Qué implica el error sobre la cosa que constituye el objeto del contrato según el artículo 1510 del Código Civil?",
choices: [
  "Error sobre el valor del objeto.",
  "Error sobre la identidad específica de la cosa objeto del contrato.",
  "Error sobre la calidad del objeto.",
  "Error sobre el propósito del contrato."
],
correctAnswer: "Error sobre la identidad específica de la cosa objeto del contrato."
},
{
title: "¿Qué ejemplo proporciona el texto para el error sobre la cosa en un contrato de venta?",
choices: [
  "Comprar una barra de plata que resulta ser de otro metal.",
  "Creer que un terreno tiene ciertos linderos que no son correctos.",
  "Recibir un caballo en arrendamiento creyendo que es un comodato.",
  "Comprar un cuadro creyendo que es de un artista diferente."
],
correctAnswer: "Comprar una barra de plata que resulta ser de otro metal."
},
{
title: "¿Qué establece el artículo 1511 del Código Civil sobre el error en la sustancia de la cosa?",
choices: [
  "El error en la sustancia de la cosa no vicia el consentimiento.",
  "El error en la sustancia de la cosa vicia el consentimiento cuando la sustancia es diversa de lo que se cree.",
  "El error en la sustancia de la cosa vicia el consentimiento solo en contratos comerciales.",
  "El error en la sustancia de la cosa no tiene efecto legal."
],
correctAnswer: "El error en la sustancia de la cosa vicia el consentimiento cuando la sustancia es diversa de lo que se cree."
},
{
title: "¿Qué ejemplo proporciona el texto para el error en la sustancia de la cosa?",
choices: [
  "Creer que una barra de plata es de otro metal.",
  "Creer que un terreno tiene ciertos linderos que no son correctos.",
  "Creer que un contrato de arrendamiento es un comodato.",
  "Creer que una persona es capaz de contratar a los 17 años."
],
correctAnswer: "Creer que una barra de plata es de otro metal."
},
{
title: "¿Qué tipo de error se considera cuando la calidad de la cosa es el principal motivo del contrato según el artículo 1511 del Código Civil?",
choices: [
  "Error sobre la persona.",
  "Error sobre el valor del contrato.",
  "Error sobre la calidad esencial de la cosa.",
  "Error sobre el propósito del contrato."
],
correctAnswer: "Error sobre la calidad esencial de la cosa."
},
{
title: "¿Qué sucede si el motivo principal para contratar es conocido por la otra parte y se presenta un error en la calidad de la cosa?",
choices: [
  "El contrato es válido.",
  "El contrato es nulo.",
  "El contrato es anulable.",
  "El contrato debe ser ratificado."
],
correctAnswer: "El contrato es anulable."
},
{
title: "¿Qué tipo de error se refiere al creer que un cuadro es de un determinado artista pero resulta ser de otro?",
choices: [
  "Error sobre la sustancia de la cosa.",
  "Error sobre la calidad esencial de la cosa.",
  "Error sobre la identidad de la cosa.",
  "Error sobre la persona."
],
correctAnswer: "Error sobre la calidad esencial de la cosa."
},
{
title: "¿Qué establece el artículo 1512 del Código Civil sobre el error en la persona?",
choices: [
  "El error en la persona siempre vicia el consentimiento.",
  "El error en la persona vicia el consentimiento solo si la consideración de esta persona es la causa principal del contrato.",
  "El error en la persona no tiene efecto legal.",
  "El error en la persona siempre anula el contrato."
],
correctAnswer: "El error en la persona vicia el consentimiento solo si la consideración de esta persona es la causa principal del contrato."
},
{
title: "¿Qué sucede cuando hay error sobre la persona en contratos intuito personae según el artículo 1512 del Código Civil?",
choices: [
  "El contrato es válido.",
  "El contrato es nulo.",
  "El contrato es anulable y la persona con quien se contrató tiene derecho a indemnización.",
  "El contrato debe ser ratificado."
],
correctAnswer: "El contrato es anulable y la persona con quien se contrató tiene derecho a indemnización."
},
{
title: "¿Qué establece la jurisprudencia francesa sobre el error sobre la calidad importante de la persona?",
choices: [
  "Siempre vicia el consentimiento.",
  "No vicia el consentimiento.",
  "Vicia el consentimiento en contratos intuito personae.",
  "Vicia el consentimiento solo en contratos comerciales."
],
correctAnswer: "Vicia el consentimiento en contratos intuito personae."
},
{
title: "¿Qué tipo de error es considerado un error obstáculo según la doctrina francesa?",
choices: [
  "Error sobre el valor del contrato.",
  "Error sobre la identidad de la persona.",
  "Error in negotio y error sobre la cosa objeto del contrato.",
  "Error sobre la calidad esencial de la cosa."
],
correctAnswer: "Error in negotio y error sobre la cosa objeto del contrato."
},
{
title: "¿Qué implica un error obstáculo según el texto?",
choices: [
  "Un contrato inexistente.",
  "Un contrato válido pero anulable.",
  "Un contrato que debe ser ratificado.",
  "Un contrato que requiere revisión judicial."
],
correctAnswer: "Un contrato inexistente."
},
{
title: "¿Qué establece el artículo 1524 del Código Civil sobre la causa del contrato?",
choices: [
  "Que la causa no es relevante para la validez del contrato.",
  "Que el error sobre la causa vicia el consentimiento.",
  "Que la causa debe ser siempre explícita.",
  "Que la causa debe ser aprobada por un juez."
],
correctAnswer: "Que el error sobre la causa vicia el consentimiento."
},
{
title: "¿Qué es el dolo según el artículo 63 del Código Civil?",
choices: [
  "Una discrepancia entre la voluntad interna y la declarada.",
  "La intención positiva de inferir injuria a la persona o propiedad de otro.",
  "Un acuerdo tácito entre las partes.",
  "Un acto de coerción."
],
correctAnswer: "La intención positiva de inferir injuria a la persona o propiedad de otro."
},
{
title: "¿Qué establece el artículo 1515 del Código Civil sobre el dolo?",
choices: [
  "El dolo siempre vicia el consentimiento.",
  "El dolo no vicia el consentimiento si no es obra de una de las partes.",
  "El dolo solo vicia el consentimiento en contratos escritos.",
  "El dolo debe ser probado por un juez."
],
correctAnswer: "El dolo no vicia el consentimiento si no es obra de una de las partes."
},
{
title: "¿Cuál de los siguientes NO constituye dolo según el texto?",
choices: [
  "Mentira.",
  "Reticencia.",
  "Habilidad de persuasión.",
  "Engaño."
],
correctAnswer: "Habilidad de persuasión."
},
{
title: "¿Qué ejemplo clásico de dolo menciona Cicerón en su obra De officiis?",
choices: [
  "La venta de una barra de plata que resulta ser de otro metal.",
  "La invitación a Casio a una residencia de campo con barcas cargadas de pescados.",
  "La compra de un cuadro creyendo que es de un determinado artista.",
  "La creencia de que un varón de 17 años es capaz de contratar por sí solo."
],
correctAnswer: "La invitación a Casio a una residencia de campo con barcas cargadas de pescados."
},
{
title: "¿Qué tipo de dolo es obra de un tercero y no de una de las partes contratantes?",
choices: [
  "Dolus adversarii.",
  "Dolus malus.",
  "Dolo incidental.",
  "Dolo de terceros."
],
correctAnswer: "Dolo de terceros."
},
{
title: "¿Qué implica el dolo incidental?",
choices: [
  "Induce a la celebración misma del acto o contrato.",
  "Influye en las condiciones de un negocio que la víctima ya estaba dispuesta a concluir.",
  "Es obra de un tercero y no de una de las partes contratantes.",
  "Siempre vicia el consentimiento."
],
correctAnswer: "Influye en las condiciones de un negocio que la víctima ya estaba dispuesta a concluir."
},
{
title: "¿Qué sucede si el dolo no vicia el consentimiento?",
choices: [
  "El contrato es válido sin más.",
  "Da lugar a la acción de perjuicios hasta la concurrencia del provecho obtenido.",
  "El contrato es nulo.",
  "El contrato es anulable."
],
correctAnswer: "Da lugar a la acción de perjuicios hasta la concurrencia del provecho obtenido."
},
{
title: "¿Qué tipo de prueba se admite para demostrar el dolo?",
choices: [
  "Solo pruebas documentales.",
  "Testigos, indicios, presunciones y otros medios probatorios.",
  "Solo pruebas periciales.",
  "Solo la confesión de la parte culpable."
],
correctAnswer: "Testigos, indicios, presunciones y otros medios probatorios."
},
{
title: "¿Qué establece el artículo 1515 del Código Civil sobre la prueba del dolo?",
choices: [
  "Debe ser probada únicamente por documentos.",
  "La parte que lo sufrió debe probarlo.",
  "No es necesario probar el dolo.",
  "Solo se admite la prueba testimonial."
],
correctAnswer: "La parte que lo sufrió debe probarlo."
},
{
title: "¿Qué se requiere para que el dolo vicia el consentimiento según el artículo 1515 del Código Civil?",
choices: [
  "Que sea obra de un tercero.",
  "Que sin él no se hubiera contratado.",
  "Que el contrato sea de tipo comercial.",
  "Que haya sido probado por testigos."
],
correctAnswer: "Que sin él no se hubiera contratado."
},
{
title: "¿Qué tipo de dolo se refiere al uso de mentiras, reticencias y engaños?",
choices: [
  "Dolus adversarii.",
  "Dolus malus.",
  "Dolo incidental.",
  "Dolo de terceros."
],
correctAnswer: "Dolus malus."
},
{
title: "¿Cuál es el efecto del dolo en un contrato según el artículo 1515 del Código Civil?",
choices: [
  "Anula automáticamente el contrato.",
  "Vicia el consentimiento si es obra de una de las partes y sin él no se hubiera contratado.",
  "Solo afecta el contrato si es probado por un juez.",
  "No tiene efecto legal en el contrato."
],
correctAnswer: "Vicia el consentimiento si es obra de una de las partes y sin él no se hubiera contratado."
},
{
title: "¿Qué sucede si el dolo es obra de un tercero y no de una de las partes?",
choices: [
  "El contrato es nulo.",
  "El contrato es anulable.",
  "No da lugar a nulidad del acto jurídico, sino a acción de perjuicios.",
  "El contrato debe ser ratificado."
],
correctAnswer: "No da lugar a nulidad del acto jurídico, sino a acción de perjuicios."
},
{
title: "¿Qué implica la presunción de buena fe en relación con el dolo?",
choices: [
  "El dolo siempre se supone en los contratos.",
  "El dolo solo se supone en los casos especiales previstos por la ley.",
  "La buena fe no tiene relación con el dolo.",
  "La buena fe siempre excluye la posibilidad de dolo."
],
correctAnswer: "El dolo solo se supone en los casos especiales previstos por la ley."
},
{
title: "¿Qué artículo del Código Civil establece la presunción de dolo en ciertos casos?",
choices: [
  "Artículo 963.",
  "Artículo 1025.",
  "Artículo 1358.",
  "Todas las anteriores."
],
correctAnswer: "Todas las anteriores."
},
{
title: "¿Qué tipo de dolo se refiere a la omisión o silencio para inducir al error?",
choices: [
  "Dolus adversarii.",
  "Dolus malus.",
  "Dolo incidental.",
  "Dolo negativo u omisivo."
],
correctAnswer: "Dolo negativo u omisivo."
},
{
title: "¿Qué ejemplo de dolo negativo u omisivo menciona la Corte Suprema de Justicia?",
choices: [
  "Crear un estado de error mediante actos positivos.",
  "Mantener un estado de error mediante simple abstención.",
  "Utilizar documentos falsos para engañar.",
  "Hacer promesas falsas."
],
correctAnswer: "Mantener un estado de error mediante simple abstención."
},
{
title: "¿Qué establece el artículo 418 del Código Civil sobre el dolo?",
choices: [
  "Que siempre anula el contrato.",
  "Que no tiene efecto en los contratos.",
  "Que da lugar a acción de perjuicios en ciertos casos.",
  "Que debe ser probado por documentos."
],
correctAnswer: "Que da lugar a acción de perjuicios en ciertos casos."
},
{
title: "¿Qué tipo de dolo se refiere a la intención de perjudicar directamente a la otra parte?",
choices: [
  "Dolus adversarii.",
  "Dolus malus.",
  "Dolo incidental.",
  "Dolo de terceros."
],
correctAnswer: "Dolus malus."
},
{
title: "¿Qué sucede si el contratante víctima del dolo actúa con negligencia?",
choices: [
  "El dolo no vicia el consentimiento.",
  "El dolo siempre vicia el consentimiento.",
  "El dolo da lugar a nulidad automática del contrato.",
  "El dolo debe ser probado por un juez."
],
correctAnswer: "El dolo no vicia el consentimiento."
},
{
title: "¿Qué artículo del Código Civil establece que la fuerza no vicia el consentimiento sino cuando es capaz de producir una impresión fuerte en una persona de sano juicio?",
choices: [
  "Artículo 1502",
  "Artículo 1513",
  "Artículo 1515",
  "Artículo 1520"
],
correctAnswer: "Artículo 1513"
},
{
title: "¿Qué condición adicional considera el artículo 1513 del Código Civil para que la fuerza vicie el consentimiento?",
choices: [
  "La edad de la persona",
  "El estado civil de la persona",
  "La situación económica de la persona",
  "La relación con la persona que ejerce la fuerza"
],
correctAnswer: "La edad de la persona"
},
{
title: "Según el artículo 1513 del Código Civil, la fuerza debe infundir un temor de verse expuesta a un mal irreparable y grave. ¿A quién puede dirigirse este temor?",
choices: [
  "Sólo a la persona directamente presionada",
  "A la persona, su consorte, ascendientes o descendientes",
  "Sólo al consorte de la persona",
  "Sólo a los descendientes de la persona"
],
correctAnswer: "A la persona, su consorte, ascendientes o descendientes"
},
{
title: "¿En qué casos se considera que la fuerza proviene de terceras personas, según el artículo 1513 del Código Civil?",
choices: [
  "Sólo cuando la fuerza es física",
  "Siempre que cualquier persona ejerza la fuerza",
  "Sólo cuando la fuerza es psicológica",
  "Sólo cuando la fuerza es económica"
],
correctAnswer: "Siempre que cualquier persona ejerza la fuerza"
},
{
title: "¿Qué término utilizaban los romanos para referirse a la fuerza o violencia?",
choices: [
  "Vis",
  "Metus",
  "Dolo",
  "Fides"
],
correctAnswer: "Vis"
},
{
title: "¿Qué término utilizaban los romanos para referirse al temor que inspira la fuerza o violencia?",
choices: [
  "Vis",
  "Metus",
  "Dolo",
  "Fides"
],
correctAnswer: "Metus"
},
{
title: "Según el artículo 1513 del Código Civil, ¿qué tipo de temor no constituye fuerza?",
choices: [
  "Temor físico",
  "Temor psicológico",
  "Temor reverencial",
  "Temor económico"
],
correctAnswer: "Temor reverencial"
},
{
title: "¿Qué establece el artículo 1514 del Código Civil sobre la fuerza?",
choices: [
  "Que la fuerza debe ser ejercida por la parte beneficiada",
  "Que la fuerza vicia el consentimiento aunque provenga de terceros",
  "Que la fuerza debe ser física para viciar el consentimiento",
  "Que la fuerza no puede ser ejercida por terceros"
],
correctAnswer: "Que la fuerza vicia el consentimiento aunque provenga de terceros"
},
{
title: "¿Cuál de los siguientes artículos del Código Civil habla sobre la aceptación de una asignación testamentaria?",
choices: [
  "Artículo 140",
  "Artículo 1063",
  "Artículo 1291",
  "Artículo 2476"
],
correctAnswer: "Artículo 1291"
},
{
title: "¿Qué tipo de fuerza considera el derecho francés como causa de anulación de un contrato?",
choices: [
  "Fuerza física solamente",
  "Cualquier tipo de fuerza que altere la libertad de consentimiento",
  "Sólo la fuerza ejercida por la contraparte",
  "Sólo la fuerza ejercida por terceros"
],
correctAnswer: "Cualquier tipo de fuerza que altere la libertad de consentimiento"
},
{
title: "¿Qué ley desarrolló la fuerza como vicio del consentimiento para impedir el aprovechamiento económico generado por la violencia durante el estado de sitio?",
choices: [
  "Ley 100 de 1993",
  "Ley 142 de 1994",
  "Ley 201 de 1959",
  "Ley 2153 de 1992"
],
correctAnswer: "Ley 201 de 1959"
},
{
title: "¿Qué artículo de la Ley 201 de 1959 aclara el consentimiento viciado por un estado de violencia generalizada?",
choices: [
  "Artículo 1º",
  "Artículo 2º",
  "Artículo 3º",
  "Artículo 4º"
],
correctAnswer: "Artículo 1º"
},
{
title: "Según la Ley 201 de 1959, ¿cuándo se entiende que la violencia cesa en caso de estado de sitio?",
choices: [
  "El día en que se decreta el estado de sitio",
  "El día en que se declara restablecido el orden público",
  "Un mes después de decretado el estado de sitio",
  "Un mes después de restablecido el orden público"
],
correctAnswer: "El día en que se declara restablecido el orden público"
},
{
title: "¿Cuál es uno de los elementos axiológicos de la acción rescisoria en el caso de la Ley 201 de 1959?",
choices: [
  "Que el contrato se haya celebrado antes del estado de sitio",
  "Que el acto o contrato se haya celebrado durante la vigencia del estado de sitio",
  "Que el contrato se haya celebrado después del estado de sitio",
  "Que el contrato se haya celebrado sin coacción"
],
correctAnswer: "Que el acto o contrato se haya celebrado durante la vigencia del estado de sitio"
},
{
title: "¿Qué artículo del Código Civil establece que el temor reverencial no vicia el consentimiento?",
choices: [
  "Artículo 1513",
  "Artículo 1514",
  "Artículo 1515",
  "Artículo 1516"
],
correctAnswer: "Artículo 1513"
},
{
title: "¿Qué tipo de fuerza se considera en el contrato de salvamento marítimo según la jurisprudencia francesa?",
choices: [
  "Fuerza física",
  "Fuerza económica",
  "Fuerza psicológica",
  "Fuerza natural"
],
correctAnswer: "Fuerza económica"
},
{
title: "¿Qué artículo del Código Civil se refiere a la nulidad de un contrato de venta entre cónyuges no divorciados?",
choices: [
  "Artículo 140",
  "Artículo 1063",
  "Artículo 1291",
  "Artículo 1852"
],
correctAnswer: "Artículo 1852"
},
{
title: "Según la jurisprudencia francesa, ¿qué constituye violencia económica?",
choices: [
  "La explotación abusiva de una situación de dependencia económica",
  "Cualquier tipo de fuerza física",
  "La simple amenaza de daño físico",
  "Cualquier tipo de engaño en el contrato"
],
correctAnswer: "La explotación abusiva de una situación de dependencia económica"
},
{
title: "¿Qué artículo del Código Civil establece que la nulidad de un contrato es simplemente relativa en caso de vicios del consentimiento?",
choices: [
  "Artículo 1513",
  "Artículo 1514",
  "Artículo 1515",
  "Artículo 1520"
],
correctAnswer: "Artículo 1515"
},
{
title: "¿Cuál es el objetivo principal del artículo 1513 del Código Civil respecto a la fuerza como vicio del consentimiento?",
choices: [
  "Proteger la libertad de la voluntad",
  "Asegurar el cumplimiento de los contratos",
  "Evitar el abuso de la posición dominante",
  "Regular el contenido de los contratos"
],
correctAnswer: "Proteger la libertad de la voluntad"
},
{
title: "¿Qué artículo del Código Civil establece que el acto o declaración de la voluntad debe recaer sobre un objeto lícito?",
choices: [
  "Artículo 1502",
  "Artículo 1518",
  "Artículo 1521",
  "Artículo 1869"
],
correctAnswer: "Artículo 1502"
},
{
title: "¿Qué puede ser objeto de una declaración de voluntad según el texto?",
choices: [
  "Solo cosas materiales",
  "Cosas que se tratan de dar, hacer o no hacer",
  "Solo derechos sobre bienes inmuebles",
  "Solo bienes muebles"
],
correctAnswer: "Cosas que se tratan de dar, hacer o no hacer"
},
{
title: "¿Qué diferencia existe entre el objeto de la obligación y el objeto del contrato?",
choices: [
  "No existe diferencia alguna",
  "El objeto de la obligación siempre es más amplio",
  "El objeto del contrato puede incluir la creación de estados o derechos, mientras que el de la obligación es más específico",
  "El objeto del contrato es siempre el mismo que el de la obligación"
],
correctAnswer: "El objeto del contrato puede incluir la creación de estados o derechos, mientras que el de la obligación es más específico"
},
{
title: "En un contrato bilateral como la compraventa, ¿qué objeto persigue cada parte?",
choices: [
  "Ambos persiguen el mismo objeto",
  "El comprador persigue el precio y el vendedor la cosa vendida",
  "El comprador persigue la cosa y el vendedor el precio",
  "Ambos persiguen la cosa vendida"
],
correctAnswer: "El comprador persigue la cosa y el vendedor el precio"
},
{
title: "¿Qué objeto tiene el contrato de sociedad, fuera de las obligaciones accesorias?",
choices: [
  "La explotación o negocio que las partes pretenden desarrollar",
  "La transferencia de bienes inmuebles",
  "La creación de obligaciones unilaterales",
  "La venta de bienes muebles"
],
correctAnswer: "La explotación o negocio que las partes pretenden desarrollar"
},
{
title: "¿Qué objeto tienen los contratos reales que trasladan la propiedad de un bien?",
choices: [
  "Solo el precio del bien",
  "Solo el bien transferido",
  "El bien o derecho transferido",
  "El uso del bien"
],
correctAnswer: "El bien o derecho transferido"
},
{
title: "¿Cuál es el objeto del contrato de comodato?",
choices: [
  "La transferencia de propiedad",
  "El precio del bien",
  "El uso de la cosa dada en comodato",
  "La donación del bien"
],
correctAnswer: "El uso de la cosa dada en comodato"
},
{
title: "Según el artículo 1518 del Código Civil, ¿qué condiciones debe reunir el objeto de una obligación?",
choices: [
  "Existir, ser cierta y estar en el comercio",
  "Ser valioso, tangible y divisible",
  "Ser específico, divisible y tangible",
  "Existir, ser valioso y divisible"
],
correctAnswer: "Existir, ser cierta y estar en el comercio"
},
{
title: "¿Qué sucede si el objeto de la obligación no existe en el momento del consentimiento?",
choices: [
  "La obligación sigue siendo válida",
  "La obligación no nace",
  "La obligación es válida solo si ambas partes lo desconocen",
  "La obligación es válida solo si el objeto es determinado posteriormente"
],
correctAnswer: "La obligación no nace"
},
{
title: "¿Qué tipo de cosas pueden ser objeto de una declaración de voluntad según el derecho romano?",
choices: [
  "Solo bienes inmuebles",
  "Solo bienes muebles",
  "Cosas fuera del comercio económico",
  "Cualquier cosa que esté en el comercio"
],
correctAnswer: "Cualquier cosa que esté en el comercio"
},
{
title: "¿Qué establece el artículo 1518 del Código Civil sobre las cosas futuras?",
choices: [
  "Solo pueden ser objeto de una obligación si existen actualmente",
  "Pueden ser objeto de una obligación si se espera que existan",
  "No pueden ser objeto de una obligación bajo ninguna circunstancia",
  "Solo pueden ser objeto de una obligación si son bienes inmuebles"
],
correctAnswer: "Pueden ser objeto de una obligación si se espera que existan"
},
{
title: "¿Qué significa que el objeto de una obligación sea 'cierto'?",
choices: [
  "Que sea tangible",
  "Que esté determinado o sea determinable",
  "Que tenga valor económico",
  "Que sea divisible"
],
correctAnswer: "Que esté determinado o sea determinable"
},
{
title: "¿Qué condición debe cumplir un hecho para ser objeto de una obligación?",
choices: [
  "Ser tangible y divisible",
  "Ser físicamente y moralmente posible",
  "Ser económico y transferible",
  "Ser valioso y tangible"
],
correctAnswer: "Ser físicamente y moralmente posible"
},
{
title: "¿Qué significa que un objeto sea moralmente imposible?",
choices: [
  "Que sea contrario a la naturaleza",
  "Que sea prohibido por las leyes o contrario a las buenas costumbres",
  "Que no tenga valor económico",
  "Que no pueda ser transferido"
],
correctAnswer: "Que sea prohibido por las leyes o contrario a las buenas costumbres"
},
{
title: "¿Qué sucede si el objeto de la obligación es físicamente imposible?",
choices: [
  "La obligación sigue siendo válida",
  "La obligación no nace",
  "La obligación es válida solo si ambas partes lo desconocen",
  "La obligación es válida solo si el objeto es determinado posteriormente"
],
correctAnswer: "La obligación no nace"
},
{
title: "¿Qué establece el artículo 1870 del Código Civil sobre la compraventa?",
choices: [
  "Que el objeto debe existir al momento del consentimiento",
  "Que el objeto puede ser determinado posteriormente",
  "Que el objeto no necesita existir en el momento del consentimiento",
  "Que el objeto debe ser divisible"
],
correctAnswer: "Que el objeto debe existir al momento del consentimiento"
},
{
title: "¿Qué significa que un objeto esté 'en el comercio'?",
choices: [
  "Que sea valioso",
  "Que pueda ser transferido y negociado legalmente",
  "Que sea tangible",
  "Que sea divisible"
],
correctAnswer: "Que pueda ser transferido y negociado legalmente"
},
{
title: "¿Qué cosas están fuera del comercio según el derecho romano?",
choices: [
  "Solo bienes inmuebles",
  "Cosas que no forman capital y bienes del Estado no negociables",
  "Cualquier cosa que sea tangible",
  "Solo bienes muebles"
],
correctAnswer: "Cosas que no forman capital y bienes del Estado no negociables"
},
{
title: "¿Qué tipo de objetos son considerados ilícitos según el artículo 1521 del Código Civil?",
choices: [
  "Objetos que tienen valor económico",
  "Objetos cuya enajenación está prohibida por las leyes",
  "Objetos que son tangibles",
  "Objetos que son divisibles"
],
correctAnswer: "Objetos cuya enajenación está prohibida por las leyes"
},
{
title: "¿Qué sucede si el objeto de una declaración de voluntad está fuera del comercio económico?",
choices: [
  "La declaración sigue siendo válida",
  "La declaración no es válida",
  "La declaración es válida solo si ambas partes lo desconocen",
  "La declaración es válida solo si el objeto es determinado posteriormente"
],
correctAnswer: "La declaración no es válida"
},
{
title: "¿Qué función cumple la noción jurídica de causa según la lección?",
choices: [
  "Impedir el enriquecimiento a costa ajena sin causa justificada",
  "Garantizar la formalidad de los contratos",
  "Simplificar los procedimientos legales",
  "Establecer la capacidad de los contratantes"
],
correctAnswer: "Impedir el enriquecimiento a costa ajena sin causa justificada"
},
{
title: "¿Qué era la causa de la obligación para los romanos?",
choices: [
  "El consentimiento de las partes",
  "La fuente misma de la obligación",
  "La forma del acto jurídico",
  "La compensación económica"
],
correctAnswer: "La fuente misma de la obligación"
},
{
title: "¿Cómo definieron la causa los canonistas en la Edad Media?",
choices: [
  "Como la forma del contrato",
  "Como la intención psicológica del contratante",
  "Como la capacidad de los contratantes",
  "Como la entrega de un objeto tangible"
],
correctAnswer: "Como la intención psicológica del contratante"
},
{
title: "¿Qué establece el artículo 1524 del Código Civil respecto a la causa?",
choices: [
  "La causa es irrelevante en los contratos",
  "La causa es un elemento esencial para la validez del contrato",
  "La causa solo aplica a los contratos bilaterales",
  "La causa se aplica únicamente a los contratos gratuitos"
],
correctAnswer: "La causa es un elemento esencial para la validez del contrato"
},
{
title: "¿Qué influencia tuvo Jean Domat en la redacción del Código Civil francés de 1804?",
choices: [
  "Separó las obligaciones onerosas de las gratuitas",
  "Introdujo el concepto de enriquecimiento sin causa",
  "Estableció que la causa de la obligación es el motivo razonable o justo",
  "Definió la causa como la formalidad del contrato"
],
correctAnswer: "Estableció que la causa de la obligación es el motivo razonable o justo"
},
{
title: "¿Qué implica la noción de causa en los contratos onerosos bilaterales?",
choices: [
  "La causa es irrelevante",
  "La causa es la contraprestación o contravalor",
  "La causa es solo la entrega de un objeto",
  "La causa es la intención liberal del contratante"
],
correctAnswer: "La causa es la contraprestación o contravalor"
},
{
title: "¿Qué es la acción resolutoria en el contexto de la causa?",
choices: [
  "Un mecanismo para evitar el incumplimiento de contratos",
  "Una acción para resolver el contrato por falta de causa",
  "Un recurso para simplificar la validez de los contratos",
  "Una medida para garantizar la formalidad del contrato"
],
correctAnswer: "Una acción para resolver el contrato por falta de causa"
},
{
title: "¿Qué establece el artículo 1609 del Código Civil sobre la exceptio non adimpleti contractus?",
choices: [
  "Ninguno de los contratantes está en mora si no cumple con lo pactado",
  "La obligación debe cumplirse inmediatamente",
  "La falta de causa anula automáticamente el contrato",
  "Los contratos bilaterales no requieren contraprestación"
],
correctAnswer: "Ninguno de los contratantes está en mora si no cumple con lo pactado"
},
{
title: "¿Qué sucede cuando la causa es inmoral, ilícita o contraria a las buenas costumbres?",
choices: [
  "El contrato sigue siendo válido",
  "El contrato es anulable con nulidad absoluta",
  "La causa es irrelevante para la validez del contrato",
  "El contrato es anulable con nulidad relativa"
],
correctAnswer: "El contrato es anulable con nulidad absoluta"
},
{
title: "¿Qué ejemplo clásico se menciona sobre el error de hecho sobre la causa?",
choices: [
  "Promesa de dar algo en pago de una deuda que no existe",
  "Error en la entrega de un objeto",
  "Error en la identidad del contratante",
  "Error en la cantidad de la prestación"
],
correctAnswer: "Promesa de dar algo en pago de una deuda que no existe"
},
{
title: "¿Qué significa que el motivo que induce a contratar sea ilícito?",
choices: [
  "El contrato es automáticamente válido",
  "El contrato es anulable",
  "El contrato es irrelevante",
  "El contrato se convierte en unilateral"
],
correctAnswer: "El contrato es anulable"
},
{
title: "¿Qué establece el inciso segundo del artículo 1524 del Código Civil sobre la pura liberalidad?",
choices: [
  "Es causa suficiente de obligarse",
  "Es irrelevante para la validez del contrato",
  "Es siempre inmoral",
  "Es solo aplicable a contratos bilaterales"
],
correctAnswer: "Es causa suficiente de obligarse"
},
{
title: "¿Qué relación tiene la teoría anticausalista con la causa en los contratos?",
choices: [
  "La causa es esencial para la validez del contrato",
  "La causa se confunde con el objeto del contrato",
  "La causa es irrelevante en los contratos bilaterales",
  "La causa es más importante que el objeto"
],
correctAnswer: "La causa se confunde con el objeto del contrato"
},
{
title: "¿Qué es la exceptio non adimpleti contractus?",
choices: [
  "Una excepción que permite rehusar el cumplimiento del contrato hasta que la otra parte cumpla con su obligación",
  "Una medida para garantizar el cumplimiento inmediato del contrato",
  "Un recurso para simplificar la formalidad del contrato",
  "Una acción para anular automáticamente el contrato"
],
correctAnswer: "Una excepción que permite rehusar el cumplimiento del contrato hasta que la otra parte cumpla con su obligación"
},
{
title: "¿Qué implica la noción de causa en los contratos gratuitos según Domat?",
choices: [
  "La causa es la contraprestación",
  "La causa es la sola liberalidad",
  "La causa es irrelevante",
  "La causa es la formalidad del contrato"
],
correctAnswer: "La causa es la sola liberalidad"
},
{
title: "¿Qué establece el Código Civil respecto a la intención liberal como causa de la obligación?",
choices: [
  "La intención liberal es siempre inmoral",
  "La intención liberal es inseparable de los motivos que la explican",
  "La intención liberal no tiene ninguna relación con la causa",
  "La intención liberal es irrelevante"
],
correctAnswer: "La intención liberal es inseparable de los motivos que la explican"
},
{
title: "¿Qué teoría influenció al derecho alemán en relación con la causa?",
choices: [
  "Teoría causalista",
  "Teoría formalista",
  "Teoría anticausalista",
  "Teoría del enriquecimiento injusto"
],
correctAnswer: "Teoría anticausalista"
},
{
title: "¿Qué sucede cuando falta el objeto de una obligación en los contratos bilaterales según Planiol?",
choices: [
  "La causa sigue siendo válida",
  "La obligación sigue siendo válida",
  "La falta del objeto es suficiente para anular o resolver el contrato",
  "La causa se convierte en el elemento principal"
],
correctAnswer: "La falta del objeto es suficiente para anular o resolver el contrato"
},
{
title: "¿Qué establece el artículo 1524 del Código Civil sobre la causa en los contratos?",
choices: [
  "La causa es irrelevante para la validez del contrato",
  "La causa es un elemento esencial de validez",
  "La causa es solo aplicable a contratos bilaterales",
  "La causa es siempre inmoral"
],
correctAnswer: "La causa es un elemento esencial de validez"
},
{
title: "¿Qué papel desempeña la causa en el derecho moderno según la lección?",
choices: [
  "Es un elemento abstracto e inoperante",
  "Es un instrumento jurídico-social para la justicia conmutativa y distributiva",
  "Es solo una formalidad técnica",
  "Es irrelevante para la validez de los contratos"
],
correctAnswer: "Es un instrumento jurídico-social para la justicia conmutativa y distributiva"
},
{
title: "¿Qué establece el artículo 1502 del Código Civil respecto al objeto y la causa?",
choices: [
  "Que deben ser válidos.",
  "Que deben ser lícitos.",
  "Que deben ser determinables.",
  "Que deben ser indeterminados."
],
correctAnswer: "Que deben ser lícitos."
},
{
title: "¿Qué significa que algo esté 'fuera del comercio'?",
choices: [
  "Que es propiedad privada.",
  "Que no puede ser objeto de transacciones comerciales.",
  "Que puede ser vendido bajo ciertas condiciones.",
  "Que es ilegal."
],
correctAnswer: "Que no puede ser objeto de transacciones comerciales."
},
{
title: "¿Qué artículos del Código Civil se refieren a la ilicitud del objeto y la causa?",
choices: [
  "1502, 1518 y 1524.",
  "1501, 1517 y 1523.",
  "1500, 1515 y 1522.",
  "1503, 1519 y 1525."
],
correctAnswer: "1502, 1518 y 1524."
},
{
title: "¿Cuáles son las cuatro categorías de objeto ilícito mencionadas?",
choices: [
  "Fuera del comercio, intransferible, embargado y sucesiones futuras.",
  "Intransferible, embargado, ilegal y moralmente incorrecto.",
  "Embargado, discutido, inexistente y ilegal.",
  "Inexistente, intransferible, embargado y legal."
],
correctAnswer: "Fuera del comercio, intransferible, embargado y sucesiones futuras."
},
{
title: "¿Qué se considera como 'cosas fuera del comercio' según el derecho romano?",
choices: [
  "Dinero, tierras y propiedades.",
  "Aire, luz y agua de mar.",
  "Alimentos, agua y ropa.",
  "Muebles, inmuebles y vehículos."
],
correctAnswer: "Aire, luz y agua de mar."
},
{
title: "¿Qué establece el artículo 1518 del Código Civil sobre el objeto de las obligaciones?",
choices: [
  "Que debe ser intangible.",
  "Que debe ser determinado, existir o esperarse que exista, ser posible y estar en el comercio.",
  "Que debe ser transferible.",
  "Que debe ser inmaterial."
],
correctAnswer: "Que debe ser determinado, existir o esperarse que exista, ser posible y estar en el comercio."
},
{
title: "¿Qué tipo de bienes no pueden ser objeto de prescripción?",
choices: [
  "Bienes muebles.",
  "Bienes raíces.",
  "Bienes públicos y bienes de uso público.",
  "Bienes inmuebles."
],
correctAnswer: "Bienes públicos y bienes de uso público."
},
{
title: "¿Qué tipo de derechos se consideran intransferibles por ley?",
choices: [
  "Derechos de propiedad.",
  "Derechos personales y alimenticios.",
  "Derechos de uso comercial.",
  "Derechos de compraventa."
],
correctAnswer: "Derechos personales y alimenticios."
},
{
title: "¿Qué establece el artículo 1521 del Código Civil sobre las cosas embargadas?",
choices: [
  "Que no pueden ser transferidas sin autorización judicial o del acreedor.",
  "Que pueden ser transferidas libremente.",
  "Que pueden ser embargadas varias veces.",
  "Que pueden ser transferidas con permiso del propietario."
],
correctAnswer: "Que no pueden ser transferidas sin autorización judicial o del acreedor."
},
{
title: "¿Qué diferencia existe entre el embargo de bienes inmuebles y muebles?",
choices: [
  "El embargo de inmuebles es permanente, el de muebles es temporal.",
  "El embargo de inmuebles se consuma con la inscripción en el registro, el de muebles con el secuestro.",
  "El embargo de muebles es más fácil de realizar.",
  "El embargo de inmuebles es más rápido."
],
correctAnswer: "El embargo de inmuebles se consuma con la inscripción en el registro, el de muebles con el secuestro."
},
{
title: "¿Qué requisitos establece el artículo 42 de la Ley 95 de 1890 respecto a la enajenación de bienes embargados?",
choices: [
  "Prohíbe la enajenación de bienes embargados bajo cualquier circunstancia.",
  "Permite la enajenación si la realiza una persona distinta del demandado o ejecutado.",
  "Permite la enajenación solo con autorización judicial.",
  "Prohíbe la enajenación de bienes inmuebles embargados."
],
correctAnswer: "Permite la enajenación solo con autorización judicial."
},
{
title: "¿Qué consecuencias tiene vender una finca embargada según la jurisprudencia colombiana?",
choices: [
  "La venta es válida.",
  "La venta es nula y el comprador puede reclamar la devolución del dinero y los perjuicios.",
  "La venta es inválida solo si el comprador estaba informado.",
  "La venta es válida solo con autorización del juez."
],
correctAnswer: "La venta es nula y el comprador puede reclamar la devolución del dinero y los perjuicios."
},
{
title: "¿Qué establece el artículo 1520 del Código Civil sobre el derecho de suceder a una persona viva?",
choices: [
  "Que puede ser objeto de contrato.",
  "Que no puede ser objeto de una donación o contrato.",
  "Que puede ser objeto de contrato solo con autorización judicial.",
  "Que puede ser transferido bajo ciertas condiciones."
],
correctAnswer: "Que no puede ser objeto de una donación o contrato."
},
{
title: "¿Por qué se considera odioso pactar sobre sucesiones futuras?",
choices: [
  "Porque podría vincular de manera definitiva e irredimible al futuro causante.",
  "Porque es una práctica comúnmente aceptada.",
  "Porque es siempre válido.",
  "Porque es una práctica ilegal."
],
correctAnswer: "Porque podría vincular de manera definitiva e irredimible al futuro causante."
},
{
title: "¿Cómo se trata la ilicitud del objeto en el contrato de renta vitalicia y el seguro de vida?",
choices: [
  "Se considera ilícito.",
  "A pesar de implicar un interés en la muerte, son considerados válidos.",
  "Se permite solo en ciertos casos.",
  "Se considera válido solo con autorización judicial."
],
correctAnswer: "A pesar de implicar un interés en la muerte, son considerados válidos."
},
{
title: "¿Qué implica que un objeto sea considerado 'moralmente imposible' según el artículo 1518?",
choices: [
  "Que es posible.",
  "Que está prohibido por las leyes, contrario a las buenas costumbres o al orden público.",
  "Que es permitido por la ley.",
  "Que es legal."
],
correctAnswer: "Que está prohibido por las leyes, contrario a las buenas costumbres o al orden público."
},
{
title: "¿Qué sucede si una enajenación se realiza sin el consentimiento del juez o acreedor sobre un bien embargado?",
choices: [
  "La enajenación es válida.",
  "La enajenación es ilícita y puede ser anulada.",
  "La enajenación es temporalmente válida.",
  "La enajenación es permitida."
],
correctAnswer: "La enajenación es ilícita y puede ser anulada."
},
{
title: "¿Qué papel juega el registrador en la inscripción de bienes embargados o litigiosos?",
choices: [
  "Debe inscribir todas las escrituras presentadas.",
  "Debe abstenerse de inscribir escrituras de enajenación o hipoteca sobre bienes embargados o litigiosos.",
  "Puede inscribir solo bienes inmuebles.",
  "Puede inscribir solo bienes muebles."
],
correctAnswer: "Debe abstenerse de inscribir escrituras de enajenación o hipoteca sobre bienes embargados o litigiosos."
},
{
title: "¿Qué establece el artículo 1518 del Código Civil sobre la existencia del objeto?",
choices: [
  "Que el objeto no necesita existir.",
  "Que el objeto debe existir o esperarse que exista.",
  "Que el objeto debe ser intangible.",
  "Que el objeto debe ser transferible."
],
correctAnswer: "Que el objeto debe existir o esperarse que exista."
},
{
title: "¿Qué se considera un objeto ilícito según el artículo 1521 del Código Civil?",
choices: [
  "La enajenación de bienes muebles.",
  "La enajenación de bienes fuera del comercio.",
  "La enajenación de bienes embargados sin autorización judicial.",
  "La enajenación de bienes transferibles."
],
correctAnswer: "La enajenación de bienes embargados sin autorización judicial."
},
{
title: "¿Qué establece el artículo 6º del Código Civil sobre los actos ejecutados contra expresa prohibición de la ley?",
choices: [
  "Son válidos si no causan daño.",
  "Son nulos si en la ley no se dispone otra cosa.",
  "Son válidos si ambas partes están de acuerdo.",
  "Son válidos si no afectan el orden público."
],
correctAnswer: "Son nulos si en la ley no se dispone otra cosa."
},
{
title: "¿Qué significa que una cláusula sea de orden público?",
choices: [
  "Que es opcional.",
  "Que puede ser modificada por acuerdo entre las partes.",
  "Que es inderogable.",
  "Que es aplicable solo en casos específicos."
],
correctAnswer: "Que es inderogable."
},
{
title: "¿Qué es el orden público según la lección?",
choices: [
  "Conjunto de reglas opcionales.",
  "Conjunto de normas que pueden ser modificadas.",
  "Conjunto de normas de primordial importancia para la existencia del Estado y la colectividad.",
  "Conjunto de reglas económicas."
],
correctAnswer: "Conjunto de normas de primordial importancia para la existencia del Estado y la colectividad."
},
{
title: "¿Qué establece el artículo 1519 del Código Civil?",
choices: [
  "Que los contratos pueden contravenir al derecho público.",
  "Que hay un objeto ilícito en todo lo que contravenga al derecho público de la nación.",
  "Que los contratos pueden ser modificados por las partes.",
  "Que las leyes fiscales no son de orden público."
],
correctAnswer: "Que hay un objeto ilícito en todo lo que contravenga al derecho público de la nación."
},
{
title: "¿Qué establece el artículo 1524 del Código Civil sobre la causa ilícita?",
choices: [
  "Que puede ser aceptada si ambas partes están de acuerdo.",
  "Que es ilícita si contraría el orden público, las buenas costumbres o la ley.",
  "Que no afecta la validez del contrato.",
  "Que es válida si no causa daño a terceros."
],
correctAnswer: "Que es ilícita si contraría el orden público, las buenas costumbres o la ley."
},
{
title: "¿Qué ejemplo se menciona en la lección sobre un contrato nulo por contravenir el orden público?",
choices: [
  "Una hipoteca que garantiza un préstamo para organizar una expedición revolucionaria contra un gobierno.",
  "Un contrato de compraventa entre particulares.",
  "Un contrato de arrendamiento de bienes raíces.",
  "Un contrato de trabajo."
],
correctAnswer: "Una hipoteca que garantiza un préstamo para organizar una expedición revolucionaria contra un gobierno."
},
{
title: "¿Qué tipos de leyes se consideran de orden público?",
choices: [
  "Las leyes que regulan el comercio internacional.",
  "Las leyes penales, fiscales y monetarias.",
  "Las leyes que regulan los contratos privados.",
  "Las leyes que protegen los derechos individuales."
],
correctAnswer: "Las leyes penales, fiscales y monetarias."
},
{
title: "¿Qué establece el artículo 16 del Código Civil sobre la derogación de leyes?",
choices: [
  "No pueden derogarse las leyes en cuya observancia estén interesados el orden y las buenas costumbres.",
  "Pueden derogarse las leyes si ambas partes están de acuerdo.",
  "Pueden derogarse las leyes si no afectan a terceros.",
  "No pueden derogarse las leyes económicas."
],
correctAnswer: "No pueden derogarse las leyes en cuya observancia estén interesados el orden y las buenas costumbres."
},
{
title: "¿Qué papel juega el Estado respecto a los actos que contravienen el orden público?",
choices: [
  "Facilita la ejecución de dichos actos.",
  "Permite la ejecución de dichos actos si no causan daño.",
  "Niega el concurso de sus órganos para la ejecución de dichos actos.",
  "Modifica dichos actos para hacerlos válidos."
],
correctAnswer: "Niega el concurso de sus órganos para la ejecución de dichos actos."
},
{
title: "¿Qué considera la doctrina sobre la venta de bienes embargados sin autorización judicial?",
choices: [
  "Es válida.",
  "Es nula.",
  "Es válida si ambas partes están de acuerdo.",
  "Es válida solo si se registra adecuadamente."
],
correctAnswer: "Es nula."
},
{
title: "¿Qué establece el artículo 1523 del Código Civil sobre los contratos prohibidos por las leyes?",
choices: [
  "Son válidos si ambas partes están de acuerdo.",
  "Son válidos si no causan daño.",
  "Tienen objeto ilícito y son nulos.",
  "Son válidos si se registran adecuadamente."
],
correctAnswer: "Tienen objeto ilícito y son nulos."
},
{
title: "¿Qué es la 'exceptio non adimpleti contractus'?",
choices: [
  "Una excepción de inejecución del contrato.",
  "Una cláusula de cumplimiento obligatorio.",
  "Un tipo de contrato unilateral.",
  "Una acción de nulidad."
],
correctAnswer: "Una excepción de inejecución del contrato."
},
{
title: "¿Qué establece la Ley 67 de 1935 sobre la medicina?",
choices: [
  "Que es una profesión opcional.",
  "Que tiene la condición de función social e impone deberes.",
  "Que es una actividad comercial.",
  "Que no está regulada por el Estado."
],
correctAnswer: "Que tiene la condición de función social e impone deberes."
},
{
title: "¿Qué se considera contrario a las buenas costumbres según la lección?",
choices: [
  "Un préstamo hecho a una mujer casada para que huya con su amante.",
  "Un contrato de compraventa entre particulares.",
  "Un contrato de arrendamiento de bienes raíces.",
  "Un contrato de trabajo."
],
correctAnswer: "Un préstamo hecho a una mujer casada para que huya con su amante."
},
{
title: "¿Qué establece la jurisprudencia francesa reciente sobre las donaciones entre concubinos extramatrimoniales?",
choices: [
  "Que son siempre nulas.",
  "Que son válidas solo si ambas partes están de acuerdo.",
  "Que no son contrarias a las buenas costumbres si buscan mantener la relación.",
  "Que son válidas solo si se registran adecuadamente."
],
correctAnswer: "Que no son contrarias a las buenas costumbres si buscan mantener la relación."
},
{
title: "¿Qué establece el artículo 1525 del Código Civil sobre la devolución del dinero en contratos con fin ilícito?",
choices: [
  "Que siempre debe devolverse el dinero.",
  "Que nunca debe devolverse el dinero.",
  "Que no puede exigirse la devolución si ambas partes conocían el fin ilícito.",
  "Que debe devolverse el dinero solo si lo exige una de las partes."
],
correctAnswer: "Que no puede exigirse la devolución si ambas partes conocían el fin ilícito."
},
{
title: "¿Qué establece la doctrina sobre el pacto de 'quota litis'?",
choices: [
  "Que es válido en todos los casos.",
  "Que es nulo solo si ambas partes no están de acuerdo.",
  "Que es ilícito y contrario al deber profesional del abogado.",
  "Que es válido solo si se registra adecuadamente."
],
correctAnswer: "Que es ilícito y contrario al deber profesional del abogado."
},
{
title: "¿Qué establece el artículo 15 del Código Civil sobre la nulidad de los actos?",
choices: [
  "Son nulos los actos ejecutados contra expresa prohibición de la ley.",
  "Son válidos si ambas partes están de acuerdo.",
  "Son válidos si no causan daño.",
  "Son válidos solo si se registran adecuadamente."
],
correctAnswer: "Son nulos los actos ejecutados contra expresa prohibición de la ley."
},
{
title: "¿Qué se considera de orden público en la organización de la familia según la lección?",
choices: [
  "Solo los derechos individuales.",
  "Solo las obligaciones contractuales.",
  "La autoridad marital, la paterna y la tutela.",
  "Solo los derechos de propiedad."
],
correctAnswer: "La autoridad marital, la paterna y la tutela."
},
{
title: "¿Qué establece el artículo 43 de la Ley 57 de 1887 sobre el registro de bienes embargados?",
choices: [
  "Que deben registrarse todas las escrituras presentadas.",
  "Que no deben registrarse escrituras de enajenación o hipoteca sobre bienes embargados.",
  "Que deben registrarse solo bienes inmuebles.",
  "Que deben registrarse solo bienes muebles."
],
correctAnswer: "Que no deben registrarse escrituras de enajenación o hipoteca sobre bienes embargados."
},
{
title: "¿Qué dice el artículo 1625 del Código Civil sobre los modos de extinguir las obligaciones?",
choices: [
  "Solo se extinguen por la nulidad.",
  "Las obligaciones pueden extinguirse por varios modos, incluyendo la nulidad.",
  "Las obligaciones no pueden extinguirse.",
  "Las obligaciones solo pueden extinguirse por la prescripción."
],
correctAnswer: "Las obligaciones pueden extinguirse por varios modos, incluyendo la nulidad."
},
{
title: "¿Qué es la nulidad en el contexto del Código Civil?",
choices: [
  "Un modo de crear obligaciones.",
  "Un medio para restablecer la equidad y proteger el interés privado o mantener el orden público y las buenas costumbres.",
  "Una forma de validar actos ilícitos.",
  "Un proceso para modificar contratos."
],
correctAnswer: "Un medio para restablecer la equidad y proteger el interés privado o mantener el orden público y las buenas costumbres."
},
{
title: "¿Qué criterios se utilizan para distinguir entre nulidades absolutas y relativas?",
choices: [
  "Solo el criterio de la formalidad.",
  "El criterio del interés protegido (privado o social) y el criterio de confirmabilidad del acto o contrato.",
  "Solo el criterio de la confirmabilidad del acto o contrato.",
  "El criterio de la voluntad de las partes."
],
correctAnswer: "El criterio del interés protegido (privado o social) y el criterio de confirmabilidad del acto o contrato."
},
{
title: "¿Qué establece el artículo 1743 del Código Civil sobre la nulidad relativa?",
choices: [
  "Puede ser declarada por el juez solo a pedimento de parte.",
  "Puede ser declarada por el juez de oficio.",
  "Puede ser declarada por el Ministerio Público en interés de la ley.",
  "No puede ser declarada en ningún caso."
],
correctAnswer: "Puede ser declarada por el juez solo a pedimento de parte."
},
{
title: "¿Qué tipo de nulidades genera la falta de capacidad para el acto o contrato?",
choices: [
  "Nulidades absolutas.",
  "Nulidades relativas.",
  "Nulidades de oficio.",
  "Nulidades perpetuas."
],
correctAnswer: "Nulidades relativas."
},
{
title: "¿Qué establece el artículo 1750 del Código Civil sobre el plazo para pedir la nulidad en casos de error, dolo o violencia?",
choices: [
  "No hay plazo para pedir la nulidad.",
  "Cuatro años desde el día de la celebración del acto o contrato, o desde el día en que la violencia cesó.",
  "Veinte años desde la celebración del acto.",
  "Diez años desde la celebración del acto."
],
correctAnswer: "Cuatro años desde el día de la celebración del acto o contrato, o desde el día en que la violencia cesó."
},
{
title: "¿Qué característica distingue a las nulidades absolutas según el artículo 1741 del Código Civil?",
choices: [
  "Que siempre pueden ser confirmadas por las partes.",
  "Que afectan el interés social y no pueden ser confirmadas por las partes.",
  "Que siempre son relativas.",
  "Que solo pueden ser declaradas por el Ministerio Público."
],
correctAnswer: "Que afectan el interés social y no pueden ser confirmadas por las partes."
},
{
title: "¿Qué establece el artículo 1748 del Código Civil sobre las nulidades judicialmente pronunciadas?",
choices: [
  "No afectan a terceros poseedores.",
  "Dan acción reivindicatoria contra terceros poseedores, sin perjuicio de las excepciones legales.",
  "No permiten la restitución de bienes.",
  "Solo afectan a las partes contratantes."
],
correctAnswer: "Dan acción reivindicatoria contra terceros poseedores, sin perjuicio de las excepciones legales."
},
{
title: "¿Qué implica el principio 'nemo plus iuris ad alium transferre potest quam ipse habet'?",
choices: [
  "Que cualquier persona puede transferir más derechos de los que tiene.",
  "Que los derechos transferidos no tienen límites.",
  "Que nadie puede transferir a otro más derechos de los que tiene.",
  "Que los contratos siempre son válidos independientemente de los derechos involucrados."
],
correctAnswer: "Que nadie puede transferir a otro más derechos de los que tiene."
},
{
title: "¿Qué establece el artículo 1756 del Código Civil sobre la ratificación de actos nulos?",
choices: [
  "Puede ser hecha en cualquier momento.",
  "No vale la ratificación expresa o tácita del que no es capaz de contratar.",
  "Siempre vale, independientemente de quién la haga.",
  "No necesita cumplir con ninguna formalidad."
],
correctAnswer: "No vale la ratificación expresa o tácita del que no es capaz de contratar."
},
{
title: "¿Qué es la simulación según Planiol y Ripert?",
choices: [
  "Cuando se hace conscientemente una declaración inexacta, o cuando se hace una convención aparente cuyos efectos son modificados o descartados por otra convención contemporánea y secreta.",
  "Cuando se modifica una convención anterior seriamente concluida.",
  "Cuando se comete un error en la declaración.",
  "Cuando el fin se alcanza por medio del acto privado."
],
correctAnswer: "Cuando se hace conscientemente una declaración inexacta, o cuando se hace una convención aparente cuyos efectos son modificados o descartados por otra convención contemporánea y secreta."
},
{
title: "¿Cuál de los siguientes NO es un ejemplo de simulación?",
choices: [
  "Vender un bien a un amigo para evitar que los acreedores lo persigan.",
  "Disfrazar una donación de un inmueble como una venta.",
  "Modificar una convención anterior por una nueva convención.",
  "Hacer figurar un precio menor en una escritura para evitar impuestos."
],
correctAnswer: "Modificar una convención anterior por una nueva convención."
},
{
title: "¿Cuál es una diferencia clave entre la simulación y el uso de medios jurídicos sustitutivos?",
choices: [
  "Ambos buscan obtener el mismo resultado.",
  "Ambos requieren un acto secreto.",
  "La simulación requiere la ratificación por acto privado, mientras que el uso de medios sustitutivos no.",
  "Ambos son siempre ilícitos."
],
correctAnswer: "La simulación requiere la ratificación por acto privado, mientras que el uso de medios sustitutivos no."
},
{
title: "Según el artículo 1766 del Código Civil, ¿qué efecto tienen las escrituras privadas sobre los terceros?",
choices: [
  "No producen efectos contra terceros.",
  "Producen efectos contra terceros.",
  "Producen efectos únicamente si están autenticadas.",
  "Producen efectos únicamente si son públicas."
],
correctAnswer: "No producen efectos contra terceros."
},
{
title: "¿Qué deben probar los terceros interesados en invocar un acto secreto según el artículo 1766 del Código Civil?",
choices: [
  "Que el acto secreto es ilegal.",
  "Que el acto secreto es público.",
  "Que el acto secreto existe y tienen un interés en ello protegido por la ley.",
  "Que el acto secreto es inválido."
],
correctAnswer: "Que el acto secreto existe y tienen un interés en ello protegido por la ley."
},
{
title: "¿Quiénes pueden ejercer la acción de simulación?",
choices: [
  "Solo las partes contratantes.",
  "Las partes contratantes, sus causahabientes a título universal, herederos y toda persona con un interés protegido por la ley.",
  "Solo los acreedores.",
  "Solo los herederos."
],
correctAnswer: "Las partes contratantes, sus causahabientes a título universal, herederos y toda persona con un interés protegido por la ley."
},
{
title: "¿Qué establece el artículo 1934 del Código Civil sobre la prueba del precio en una escritura de venta?",
choices: [
  "No se admitirá prueba alguna en contrario sino la nulidad o falsificación de la escritura.",
  "Se admitirá prueba testimonial en contrario.",
  "Se admitirá cualquier medio de prueba en contrario.",
  "No se necesita prueba alguna."
],
correctAnswer: "No se admitirá prueba alguna en contrario sino la nulidad o falsificación de la escritura."
},
{
title: "¿Qué implica la acción de simulación en relación con los acreedores?",
choices: [
  "Que los acreedores no pueden actuar sobre bienes simulados.",
  "Que los acreedores pueden demostrar que un bien no ha salido realmente del patrimonio del deudor y que sigue siendo parte de su prenda general.",
  "Que los acreedores necesitan probar la nulidad del acto simulado.",
  "Que los acreedores no tienen derechos sobre bienes simulados."
],
correctAnswer: "Que los acreedores pueden demostrar que un bien no ha salido realmente del patrimonio del deudor y que sigue siendo parte de su prenda general."
},
{
title: "¿Qué diferencia clave existe entre la acción de simulación y la acción pauliana?",
choices: [
  "Ambas requieren prueba de fraude.",
  "Ambas no afectan a terceros.",
  "La simulación no requiere prueba de fraude mientras que la acción pauliana sí.",
  "Ambas requieren la intervención del Ministerio Público."
],
correctAnswer: "La simulación no requiere prueba de fraude mientras que la acción pauliana sí."
},
{
title: "Según la doctrina moderna, ¿cuál es el efecto de un acto secreto válido entre las partes contratantes?",
choices: [
  "Es nulo por definición.",
  "No produce efectos legales.",
  "Rige las relaciones entre las partes contratantes si cumple con los requisitos de validez.",
  "Solo es válido si está registrado públicamente."
],
correctAnswer: "Rige las relaciones entre las partes contratantes si cumple con los requisitos de validez."
},
{
title: "¿Qué sucede con un acto secreto si no viola las normas de orden público y tiene los elementos esenciales de un contrato?",
choices: [
  "Es nulo.",
  "No tiene efecto alguno.",
  "Es válido y produce efectos entre las partes.",
  "Necesita ser registrado públicamente."
],
correctAnswer: "Es válido y produce efectos entre las partes."
},
{
title: "¿Qué pueden hacer los terceros que tienen interés en invocar la existencia de un acto secreto?",
choices: [
  "Solo pueden invocar el acto aparente.",
  "Pueden hacer prevalecer la realidad del acto secreto si lo pueden demostrar.",
  "No tienen ningún derecho a invocar el acto secreto.",
  "Deben obtener autorización judicial para invocar el acto secreto."
],
correctAnswer: "Pueden hacer prevalecer la realidad del acto secreto si lo pueden demostrar."
},
{
title: "¿Qué regla establece el artículo 1766 del Código Civil sobre las contraletras?",
choices: [
  "Que las contraletras son válidas contra terceros.",
  "Que las contraletras no pueden tener efecto alguno contra terceros.",
  "Que las contraletras solo tienen efecto si están registradas.",
  "Que las contraletras solo tienen efecto si están autenticadas."
],
correctAnswer: "Que las contraletras no pueden tener efecto alguno contra terceros."
},
{
title: "¿Qué implica la acción de simulación cuando los acreedores demuestran que un bien no ha salido del patrimonio del deudor?",
choices: [
  "Que el bien permanece en el patrimonio del deudor.",
  "Que el bien ha sido legalmente transferido.",
  "Que el bien debe ser vendido a un tercero.",
  "Que el bien es confiscado por el Estado."
],
correctAnswer: "Que el bien permanece en el patrimonio del deudor."
},
{
title: "¿En qué caso los herederos de un contratante pueden ejercitar la acción de simulación?",
choices: [
  "Solo si tienen un interés económico.",
  "En los mismos casos en que su causante la hubiera podido ejercitar.",
  "Solo si son los únicos herederos.",
  "Solo si el acto aparente es ilícito."
],
correctAnswer: "En los mismos casos en que su causante la hubiera podido ejercitar."
},
{
title: "¿Qué limita la prueba testimonial según el artículo 91 de la Ley 153 de 1887?",
choices: [
  "Solo limita la prueba escrita.",
  "No limita la prueba en absoluto.",
  "Limita la prueba testimonial para adiciones o alteraciones de actos que valgan más de quinientos pesos.",
  "Limita la prueba documental."
],
correctAnswer: "Limita la prueba testimonial para adiciones o alteraciones de actos que valgan más de quinientos pesos."
},
{
title: "¿Qué dice el artículo 279 del Código de Procedimiento Civil sobre los documentos privados?",
choices: [
  "Que tienen menos valor que los documentos públicos.",
  "Que tienen el mismo valor que los documentos públicos.",
  "Que no pueden ser usados como prueba.",
  "Que necesitan ser autenticados para tener valor."
],
correctAnswer: "Que tienen el mismo valor que los documentos públicos."
},
{
title: "¿Qué deben hacer los herederos que quieran probar un fraude de sus derechos de la herencia?",
choices: [
  "Pueden acudir a cualquier medio probatorio, incluyendo testigos y presunciones.",
  "Deben usar únicamente prueba escrita.",
  "Solo pueden usar la confesión del otro contratante.",
  "No pueden probar el fraude."
],
correctAnswer: "Pueden acudir a cualquier medio probatorio, incluyendo testigos y presunciones."
},
{
title: "¿Qué pasa si un acto secreto carece de causa lícita?",
choices: [
  "El acto es nulo.",
  "El acto es válido.",
  "El acto produce efectos entre las partes.",
  "El acto necesita ser ratificado."
],
correctAnswer: "El acto es nulo."
},
{
title: "¿Qué establece el artículo 1748 del Código Civil sobre la nulidad judicialmente pronunciada?",
choices: [
  "Que no afecta a terceros.",
  "Que solo afecta a los contratantes.",
  "Que da acción reivindicatoria contra terceros poseedores.",
  "Que no tiene efecto alguno."
],
correctAnswer: "Que da acción reivindicatoria contra terceros poseedores."
},
{
title: "¿Cuál es el título que usa el Código Civil para las obligaciones civiles y las meramente naturales?",
choices: [
  "De las obligaciones perfectas e imperfectas",
  "De las obligaciones civiles y de las meramente naturales",
  "De las obligaciones contractuales y extracontractuales",
  "De las obligaciones jurídicas y morales"
],
correctAnswer: "De las obligaciones civiles y de las meramente naturales"
},
{
title: "¿De dónde proviene la noción de obligación natural?",
choices: [
  "Del derecho civil francés",
  "Del derecho romano",
  "Del derecho anglosajón",
  "Del derecho consuetudinario"
],
correctAnswer: "Del derecho romano"
},
{
title: "¿Qué artículo del Código Civil colombiano define las obligaciones naturales?",
choices: [
  "1235",
  "1527",
  "2314",
  "2315"
],
correctAnswer: "1527"
},
{
title: "Según Fernando Vélez, ¿cómo se define una obligación natural?",
choices: [
  "Como una obligación civil plena",
  "Como un deber moral sin implicaciones jurídicas",
  "Como una obligación civil imperfecta que puede servir válidamente a un pago",
  "Como una obligación que no tiene ningún valor legal"
],
correctAnswer: "Como una obligación civil imperfecta que puede servir válidamente a un pago"
},
{
title: "¿Qué permite la ejecución de una obligación natural?",
choices: [
  "La intervención judicial",
  "La coacción del acreedor",
  "La ejecución voluntaria por parte del deudor",
  "La inscripción en el registro público"
],
correctAnswer: "La ejecución voluntaria por parte del deudor"
},
{
title: "¿Cuál es una característica de las obligaciones naturales según el artículo 1527 del Código Civil colombiano?",
choices: [
  "No confieren derecho para exigir su cumplimiento pero, una vez cumplidas, autorizan para retener lo pagado.",
  "Confieren derecho para exigir su cumplimiento mediante acciones judiciales.",
  "No pueden ser objeto de ningún tipo de pago.",
  "Son obligatorias y su cumplimiento puede ser exigido por la fuerza."
],
correctAnswer: "No confieren derecho para exigir su cumplimiento pero, una vez cumplidas, autorizan para retener lo pagado."
},
{
title: "¿Qué diferencia hay entre una obligación civil y una natural en términos de acción legal?",
choices: [
  "La obligación civil da derecho a exigir su cumplimiento, mientras que la natural no.",
  "Ambas dan derecho a exigir su cumplimiento.",
  "Ninguna da derecho a exigir su cumplimiento.",
  "La obligación natural da derecho a exigir su cumplimiento, mientras que la civil no."
],
correctAnswer: "La obligación civil da derecho a exigir su cumplimiento, mientras que la natural no."
},
{
title: "¿Cuál de los siguientes no es un ejemplo de obligación natural?",
choices: [
  "La obligación de pagar impuestos.",
  "La deuda contraída por un menor sin la asistencia del curador.",
  "Las deudas prescritas.",
  "Las apuestas y juegos prohibidos por la ley."
],
correctAnswer: "La obligación de pagar impuestos."
},
{
title: "¿Qué dice el artículo 2314 del Código Civil sobre el pago de obligaciones naturales?",
choices: [
  "Que siempre se puede repetir lo pagado.",
  "Que no se podrá repetir lo que se ha pagado para cumplir una obligación natural.",
  "Que solo se puede repetir lo pagado si hay error de hecho.",
  "Que el pago de obligaciones naturales es nulo."
],
correctAnswer: "Que no se podrá repetir lo que se ha pagado para cumplir una obligación natural."
},
{
title: "Según el artículo 2315 del Código Civil, ¿qué se puede hacer con lo pagado por error de derecho?",
choices: [
  "No se puede repetir bajo ninguna circunstancia.",
  "Se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural.",
  "Se puede retener independientemente del error.",
  "Se debe devolver solo si el error es de hecho."
],
correctAnswer: "Se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural."
},
{
title: "¿Qué debe tener una obligación natural para que el pago sea válido?",
choices: [
  "Ser una obligación contraída en presencia de un notario.",
  "Ser una obligación inscrita en el registro público.",
  "Ser una obligación pagada voluntariamente por el que tenía la libre administración de sus bienes.",
  "Ser una obligación impuesta por sentencia judicial."
],
correctAnswer: "Ser una obligación pagada voluntariamente por el que tenía la libre administración de sus bienes."
},
{
title: "¿Cuál de las siguientes no es una fuente de las obligaciones naturales?",
choices: [
  "Los contratos",
  "Los actos administrativos",
  "Los cuasicontratos",
  "Los delitos"
],
correctAnswer: "Los actos administrativos"
},
{
title: "¿Qué distingue a las obligaciones naturales de los simples deberes morales?",
choices: [
  "Las obligaciones naturales suponen una causa jurídica y un vínculo entre deudor y acreedor.",
  "Los deberes morales implican una obligación legalmente exigible.",
  "Las obligaciones naturales no tienen causa jurídica ni vínculo.",
  "Los deberes morales siempre pueden ser exigidos judicialmente."
],
correctAnswer: "Las obligaciones naturales suponen una causa jurídica y un vínculo entre deudor y acreedor."
},
{
title: "¿Qué efecto tiene el cumplimiento de una obligación natural?",
choices: [
  "Genera una nueva obligación civil.",
  "Constituye un verdadero pago que no puede ser repetido.",
  "No tiene ningún efecto legal.",
  "Puede ser repetido por error de hecho o derecho."
],
correctAnswer: "Constituye un verdadero pago que no puede ser repetido."
},
{
title: "¿Qué establece el artículo 1528 del Código Civil colombiano sobre la sentencia que rechaza la acción contra el naturalmente obligado?",
choices: [
  "Que extingue la obligación natural.",
  "Que no extingue la obligación natural.",
  "Que convierte la obligación natural en civil.",
  "Que permite la ejecución forzada de la obligación natural."
],
correctAnswer: "Que no extingue la obligación natural."
},
{
title: "¿Qué establece el artículo 1529 del Código Civil sobre las cauciones para seguridad de una obligación natural?",
choices: [
  "Que son inválidas.",
  "Que solo valen si la obligación natural se convierte en civil.",
  "Que valdrán.",
  "Que necesitan ser ratificadas por un juez."
],
correctAnswer: "Que valdrán."
},
{
title: "¿Qué dice la doctrina de la Corte sobre los jueces interpretando obligaciones naturales no comprendidas en la ley?",
choices: [
  "Que pueden hacerlo libremente.",
  "Que no es posible aceptar que los jueces pueden interpretar casos no comprendidos en la ley.",
  "Que pueden hacerlo solo con autorización legislativa.",
  "Que deben hacerlo solo en casos de extrema necesidad."
],
correctAnswer: "Que no es posible aceptar que los jueces pueden interpretar casos no comprendidos en la ley."
},
{
title: "¿Qué sucede si se paga una obligación natural antes de tener la capacidad legal para administrar bienes?",
choices: [
  "El pago es válido.",
  "El pago convierte la obligación en civil.",
  "El pago está afectado de la misma incapacidad que la obligación original.",
  "El pago se puede repetir solo por error de hecho."
],
correctAnswer: "El pago está afectado de la misma incapacidad que la obligación original."
},
{
title: "¿Qué es necesario para que el pago de una obligación natural por un menor sea válido?",
choices: [
  "Que el menor tenga el consentimiento de un tutor.",
  "Que el pago se haga en presencia de un notario.",
  "Que el menor sea mayor de edad al momento del pago y tenga la libre administración de sus bienes.",
  "Que el menor lo haga voluntariamente sin ninguna coacción."
],
correctAnswer: "Que el menor sea mayor de edad al momento del pago y tenga la libre administración de sus bienes."
},
{
title: "¿Qué doctrina sigue la Corte Suprema de Justicia sobre la repetición de lo pagado por error de derecho?",
choices: [
  "Que se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural.",
  "Que no se podrá repetir bajo ninguna circunstancia.",
  "Que solo se podrá repetir si hay una sentencia judicial.",
  "Que la repetición está prohibida en todos los casos."
],
correctAnswer: "Que se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural."
},
{
title: "¿Cuál es el título que usa el Código Civil para las obligaciones civiles y las meramente naturales?",
choices: [
  "De las obligaciones perfectas e imperfectas",
  "De las obligaciones civiles y de las meramente naturales",
  "De las obligaciones contractuales y extracontractuales",
  "De las obligaciones jurídicas y morales"
],
correctAnswer: "De las obligaciones civiles y de las meramente naturales"
},
{
title: "¿De dónde proviene la noción de obligación natural?",
choices: [
  "Del derecho civil francés",
  "Del derecho romano",
  "Del derecho anglosajón",
  "Del derecho consuetudinario"
],
correctAnswer: "Del derecho romano"
},
{
title: "¿Qué artículo del Código Civil colombiano define las obligaciones naturales?",
choices: [
  "1235",
  "1527",
  "2314",
  "2315"
],
correctAnswer: "1527"
},
{
title: "Según Fernando Vélez, ¿cómo se define una obligación natural?",
choices: [
  "Como una obligación civil plena",
  "Como un deber moral sin implicaciones jurídicas",
  "Como una obligación civil imperfecta que puede servir válidamente a un pago",
  "Como una obligación que no tiene ningún valor legal"
],
correctAnswer: "Como una obligación civil imperfecta que puede servir válidamente a un pago"
},
{
title: "¿Qué permite la ejecución de una obligación natural?",
choices: [
  "La intervención judicial",
  "La coacción del acreedor",
  "La ejecución voluntaria por parte del deudor",
  "La inscripción en el registro público"
],
correctAnswer: "La ejecución voluntaria por parte del deudor"
},
{
title: "¿Cuál es una característica de las obligaciones naturales según el artículo 1527 del Código Civil colombiano?",
choices: [
  "No confieren derecho para exigir su cumplimiento pero, una vez cumplidas, autorizan para retener lo pagado.",
  "Confieren derecho para exigir su cumplimiento mediante acciones judiciales.",
  "No pueden ser objeto de ningún tipo de pago.",
  "Son obligatorias y su cumplimiento puede ser exigido por la fuerza."
],
correctAnswer: "No confieren derecho para exigir su cumplimiento pero, una vez cumplidas, autorizan para retener lo pagado."
},
{
title: "¿Qué diferencia hay entre una obligación civil y una natural en términos de acción legal?",
choices: [
  "La obligación civil da derecho a exigir su cumplimiento, mientras que la natural no.",
  "Ambas dan derecho a exigir su cumplimiento.",
  "Ninguna da derecho a exigir su cumplimiento.",
  "La obligación natural da derecho a exigir su cumplimiento, mientras que la civil no."
],
correctAnswer: "La obligación civil da derecho a exigir su cumplimiento, mientras que la natural no."
},
{
title: "¿Cuál de los siguientes no es un ejemplo de obligación natural?",
choices: [
  "La obligación de pagar impuestos.",
  "La deuda contraída por un menor sin la asistencia del curador.",
  "Las deudas prescritas.",
  "Las apuestas y juegos prohibidos por la ley."
],
correctAnswer: "La obligación de pagar impuestos."
},
{
title: "¿Qué dice el artículo 2314 del Código Civil sobre el pago de obligaciones naturales?",
choices: [
  "Que siempre se puede repetir lo pagado.",
  "Que no se podrá repetir lo que se ha pagado para cumplir una obligación natural.",
  "Que solo se puede repetir lo pagado si hay error de hecho.",
  "Que el pago de obligaciones naturales es nulo."
],
correctAnswer: "Que no se podrá repetir lo que se ha pagado para cumplir una obligación natural."
},
{
title: "Según el artículo 2315 del Código Civil, ¿qué se puede hacer con lo pagado por error de derecho?",
choices: [
  "No se puede repetir bajo ninguna circunstancia.",
  "Se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural.",
  "Se puede retener independientemente del error.",
  "Se debe devolver solo si el error es de hecho."
],
correctAnswer: "Se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural."
},
{
title: "¿Qué debe tener una obligación natural para que el pago sea válido?",
choices: [
  "Ser una obligación contraída en presencia de un notario.",
  "Ser una obligación inscrita en el registro público.",
  "Ser una obligación pagada voluntariamente por el que tenía la libre administración de sus bienes.",
  "Ser una obligación impuesta por sentencia judicial."
],
correctAnswer: "Ser una obligación pagada voluntariamente por el que tenía la libre administración de sus bienes."
},
{
title: "¿Cuál de las siguientes no es una fuente de las obligaciones naturales?",
choices: [
  "Los contratos",
  "Los actos administrativos",
  "Los cuasicontratos",
  "Los delitos"
],
correctAnswer: "Los actos administrativos"
},
{
title: "¿Qué distingue a las obligaciones naturales de los simples deberes morales?",
choices: [
  "Las obligaciones naturales suponen una causa jurídica y un vínculo entre deudor y acreedor.",
  "Los deberes morales implican una obligación legalmente exigible.",
  "Las obligaciones naturales no tienen causa jurídica ni vínculo.",
  "Los deberes morales siempre pueden ser exigidos judicialmente."
],
correctAnswer: "Las obligaciones naturales suponen una causa jurídica y un vínculo entre deudor y acreedor."
},
{
title: "¿Qué efecto tiene el cumplimiento de una obligación natural?",
choices: [
  "Genera una nueva obligación civil.",
  "Constituye un verdadero pago que no puede ser repetido.",
  "No tiene ningún efecto legal.",
  "Puede ser repetido por error de hecho o derecho."
],
correctAnswer: "Constituye un verdadero pago que no puede ser repetido."
},
{
title: "¿Qué establece el artículo 1528 del Código Civil colombiano sobre la sentencia que rechaza la acción contra el naturalmente obligado?",
choices: [
  "Que extingue la obligación natural.",
  "Que no extingue la obligación natural.",
  "Que convierte la obligación natural en civil.",
  "Que permite la ejecución forzada de la obligación natural."
],
correctAnswer: "Que no extingue la obligación natural."
},
{
title: "¿Qué establece el artículo 1529 del Código Civil sobre las cauciones para seguridad de una obligación natural?",
choices: [
  "Que son inválidas.",
  "Que solo valen si la obligación natural se convierte en civil.",
  "Que valdrán.",
  "Que necesitan ser ratificadas por un juez."
],
correctAnswer: "Que valdrán."
},
{
title: "¿Qué dice la doctrina de la Corte sobre los jueces interpretando obligaciones naturales no comprendidas en la ley?",
choices: [
  "Que pueden hacerlo libremente.",
  "Que no es posible aceptar que los jueces pueden interpretar casos no comprendidos en la ley.",
  "Que pueden hacerlo solo con autorización legislativa.",
  "Que deben hacerlo solo en casos de extrema necesidad."
],
correctAnswer: "Que no es posible aceptar que los jueces pueden interpretar casos no comprendidos en la ley."
},
{
title: "¿Qué sucede si se paga una obligación natural antes de tener la capacidad legal para administrar bienes?",
choices: [
  "El pago es válido.",
  "El pago convierte la obligación en civil.",
  "El pago está afectado de la misma incapacidad que la obligación original.",
  "El pago se puede repetir solo por error de hecho."
],
correctAnswer: "El pago está afectado de la misma incapacidad que la obligación original."
},
{
title: "¿Qué es necesario para que el pago de una obligación natural por un menor sea válido?",
choices: [
  "Que el menor tenga el consentimiento de un tutor.",
  "Que el pago se haga en presencia de un notario.",
  "Que el menor sea mayor de edad al momento del pago y tenga la libre administración de sus bienes.",
  "Que el menor lo haga voluntariamente sin ninguna coacción."
],
correctAnswer: "Que el menor sea mayor de edad al momento del pago y tenga la libre administración de sus bienes."
},
{
title: "¿Qué doctrina sigue la Corte Suprema de Justicia sobre la repetición de lo pagado por error de derecho?",
choices: [
  "Que se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural.",
  "Que no se podrá repetir bajo ninguna circunstancia.",
  "Que solo se podrá repetir si hay una sentencia judicial.",
  "Que la repetición está prohibida en todos los casos."
],
correctAnswer: "Que se podrá repetir si el pago no tenía por fundamento ni aun una obligación natural."
},
{
title: "¿Qué artículo del Código de Comercio consagra el enriquecimiento sin causa como regla institucional?",
choices: [
  "730",
  "741",
  "831",
  "902"
],
correctAnswer: "831"
},
{
title: "¿Qué nombre se da a la acción que sanciona el enriquecimiento sin causa?",
choices: [
  "Conditio indebiti",
  "Actio legis Aquiliae",
  "In rem verso",
  "Actio Pauliana"
],
correctAnswer: "In rem verso"
},
{
title: "¿Qué acción utilizaban los romanos para sancionar en general el enriquecimiento sin causa?",
choices: [
  "Actio legis Aquiliae",
  "Conditio indebiti",
  "In rem verso",
  "Actio furti"
],
correctAnswer: "Conditio indebiti"
},
{
title: "En el derecho romano, ¿contra quién se otorgaba la acción de in rem verso?",
choices: [
  "Contra el deudor",
  "Contra el comprador",
  "Contra el dueño de un esclavo o pater familias",
  "Contra el heredero"
],
correctAnswer: "Contra el dueño de un esclavo o pater familias"
},
{
title: "¿Qué otra acción personal permitía a la víctima de un enriquecimiento injusto reclamar una reparación?",
choices: [
  "Actio legis Aquiliae",
  "Conditio causa data causa non secuta",
  "Actio doli",
  "Actio redhibitoria"
],
correctAnswer: "Conditio causa data causa non secuta"
},
{
title: "¿Cómo se denominaba el enriquecimiento sin causa en el derecho español clásico?",
choices: [
  "Enriquecimiento ilícito",
  "Enriquecimiento torticero",
  "Enriquecimiento injusto",
  "Enriquecimiento fraudulento"
],
correctAnswer: "Enriquecimiento torticero"
},
{
title: "¿Qué principio informa a los códigos de todos los países en relación con el enriquecimiento sin causa?",
choices: [
  "Ninguno puede enriquecerse legalmente a expensas de otro",
  "Nadie puede enriquecerse injustamente a expensas de otro",
  "Todos tienen derecho a enriquecerse sin restricciones",
  "El enriquecimiento es siempre justo"
],
correctAnswer: "Nadie puede enriquecerse injustamente a expensas de otro"
},
{
title: "¿Qué dice la jurisprudencia colombiana sobre la acción de in rem verso?",
choices: [
  "Solo se aplica en casos de enriquecimiento ilícito",
  "Siempre se aplica en casos de enriquecimiento injusto",
  "No puede prosperar solo con el hecho de enriquecimiento de una parte",
  "Es aplicable en todos los casos de enriquecimiento"
],
correctAnswer: "No puede prosperar solo con el hecho de enriquecimiento de una parte"
},
{
title: "¿Qué condición es necesaria para que prospere la acción de in rem verso?",
choices: [
  "Solo debe haber enriquecimiento",
  "Solo debe haber empobrecimiento",
  "Debe haber tanto enriquecimiento como empobrecimiento correlativos",
  "Solo debe haber perjuicio de una parte"
],
correctAnswer: "Debe haber tanto enriquecimiento como empobrecimiento correlativos"
},
{
title: "¿Cuál es la primera condición requerida por la acción de in rem verso?",
choices: [
  "Que haya un empobrecimiento de una persona y un enriquecimiento de otra",
  "Que haya una relación contractual",
  "Que haya un beneficio para el Estado",
  "Que haya una sanción penal"
],
correctAnswer: "Que haya un empobrecimiento de una persona y un enriquecimiento de otra"
},
{
title: "¿Qué debe existir además del enriquecimiento y empobrecimiento según la segunda condición de la acción de in rem verso?",
choices: [
  "Una prueba documental",
  "Una correlación entre el enriquecimiento y el empobrecimiento",
  "Una relación familiar",
  "Un contrato escrito"
],
correctAnswer: "Una correlación entre el enriquecimiento y el empobrecimiento"
},
{
title: "¿Cuál es la tercera condición para la acción de in rem verso?",
choices: [
  "El enriquecimiento debe ser sin causa",
  "El enriquecimiento debe ser intencional",
  "El empobrecimiento debe ser voluntario",
  "El empobrecimiento debe ser permanente"
],
correctAnswer: "El enriquecimiento debe ser sin causa"
},
{
title: "¿Qué ejemplo ilustra el concepto de enriquecimiento con causa según la tercera condición?",
choices: [
  "Un arrendador que se beneficia de las mejoras hechas por un arrendatario",
  "Un vecino que se beneficia de las obras de otro vecino",
  "Un acreedor que cobra una deuda prescripta",
  "Un contratista que realiza trabajos sin autorización"
],
correctAnswer: "Un arrendador que se beneficia de las mejoras hechas por un arrendatario"
},
{
title: "¿Qué carácter presenta la acción de in rem verso según la cuarta condición?",
choices: [
  "Carácter obligatorio",
  "Carácter contractual",
  "Carácter subsidiario",
  "Carácter penal"
],
correctAnswer: "Carácter subsidiario"
},
{
title: "¿Qué no puede hacer el perjudicado si tiene a su disposición una vía o acción directa para reparar su perjuicio?",
choices: [
  "Demandar civilmente",
  "Reclamar una indemnización",
  "Intentar la acción de in rem verso",
  "Solicitar la anulación del contrato"
],
correctAnswer: "Intentar la acción de in rem verso"
},
{
title: "¿Qué acción no se puede intentar si el acreedor ha dejado prescribir su crédito?",
choices: [
  "Acción penal",
  "Acción contractual",
  "Acción de in rem verso",
  "Acción administrativa"
],
correctAnswer: "Acción de in rem verso"
},
{
title: "¿Qué condición adicional exige la acción de in rem verso en comparación con la acción del negotiorum gestor?",
choices: [
  "Que el empobrecimiento sea mayor que el enriquecimiento",
  "Que el enriquecimiento exista en el momento de ejercitarla",
  "Que el empobrecimiento no exista en el momento de ejercitarla",
  "Que el enriquecimiento haya desaparecido"
],
correctAnswer: "Que el enriquecimiento exista en el momento de ejercitarla"
},
{
title: "¿Qué pasa si la acción de in rem verso es intentada cuando hay una vía directa disponible?",
choices: [
  "La acción no prospera",
  "La acción se suspende",
  "La acción se archiva",
  "La acción se transforma en acción contractual"
],
correctAnswer: "La acción no prospera"
},
{
title: "¿Cuándo corren los intereses en la acción de in rem verso?",
choices: [
  "Desde la fecha de la demanda",
  "Desde el día en que se consumó el enriquecimiento",
  "Desde la fecha del juicio",
  "Desde la fecha del pago"
],
correctAnswer: "Desde el día en que se consumó el enriquecimiento"
},
{
title: "¿Cuál es el límite de la condena en la acción de in rem verso?",
choices: [
  "El valor del empobrecimiento",
  "El valor del enriquecimiento",
  "El menor valor entre el enriquecimiento y el empobrecimiento",
  "El valor determinado por el juez"
],
correctAnswer: "El menor valor entre el enriquecimiento y el empobrecimiento"
},
{
title: "¿Qué define una obligación pura y simple?",
choices: [
  "Afectada por una condición",
  "Afectada por un plazo",
  "No afectada por ninguna modalidad",
  "Afectada por una pluralidad de objetos"
],
correctAnswer: "No afectada por ninguna modalidad"
},
{
title: "¿Qué afecta el plazo en una obligación?",
choices: [
  "La existencia de la obligación",
  "La exigibilidad de la obligación",
  "La validez de la obligación",
  "La nulidad de la obligación"
],
correctAnswer: "La exigibilidad de la obligación"
},
{
title: "¿Qué tipo de plazo suspende la exigibilidad de una obligación?",
choices: [
  "Plazo suspensivo",
  "Plazo extintivo",
  "Plazo incierto",
  "Plazo expreso"
],
correctAnswer: "Plazo suspensivo"
},
{
title: "¿Qué tipo de plazo extiende la obligación hasta un evento futuro incierto?",
choices: [
  "Plazo suspensivo",
  "Plazo extintivo",
  "Plazo incierto",
  "Plazo expreso"
],
correctAnswer: "Plazo extintivo"
},
{
title: "¿Cuál es un ejemplo de plazo cierto?",
choices: [
  "La muerte de una persona",
  "Tal fecha",
  "Una calamidad natural",
  "Un evento inesperado"
],
correctAnswer: "Tal fecha"
},
{
title: "¿Qué ocurre si se paga una obligación antes del plazo fijado?",
choices: [
  "El pago es inválido",
  "Se debe repetir el pago",
  "No está sujeto a restitución",
  "El acreedor debe hacer un descuento"
],
correctAnswer: "No está sujeto a restitución"
},
{
title: "¿Qué puede hacer el juez en casos especiales según las leyes designadas?",
choices: [
  "Señalar plazos para el cumplimiento de una obligación",
  "Modificar la naturaleza de la obligación",
  "Anular la obligación",
  "Extender la obligación indefinidamente"
],
correctAnswer: "Señalar plazos para el cumplimiento de una obligación"
},
{
title: "¿Qué afecta una condición en una obligación?",
choices: [
  "La exigibilidad de la obligación",
  "La validez de la obligación",
  "El nacimiento o la extinción de la obligación",
  "La nulidad de la obligación"
],
correctAnswer: "El nacimiento o la extinción de la obligación"
},
{
title: "¿Cuál es un ejemplo de condición suspensiva?",
choices: [
  "Prometo pagar si me eligen juez",
  "Pagaré el 15 de junio",
  "Pago si no muero en un año",
  "Te doy dinero si no vas a la luna"
],
correctAnswer: "Prometo pagar si me eligen juez"
},
{
title: "¿Qué ocurre si se paga una obligación antes de cumplirse la condición suspensiva?",
choices: [
  "No se puede pagar",
  "El pago es inválido",
  "Puede repetirse lo pagado",
  "El pago es definitivo"
],
correctAnswer: "Puede repetirse lo pagado"
},
{
title: "¿Qué tipo de condición depende de la mera voluntad de la persona que se obliga?",
choices: [
  "Condición casual",
  "Condición potestativa",
  "Condición mixta",
  "Condición negativa"
],
correctAnswer: "Condición potestativa"
},
{
title: "¿Qué ocurre si una condición moralmente imposible es positiva o negativa?",
choices: [
  "La obligación es nula",
  "La obligación es válida",
  "La condición se cumple automáticamente",
  "La condición se ignora"
],
correctAnswer: "La obligación es nula"
},
{
title: "¿Qué tipo de condición depende de la voluntad de un tercero o un caso?",
choices: [
  "Condición potestativa",
  "Condición mixta",
  "Condición suspensiva",
  "Condición resolutoria"
],
correctAnswer: "Condición mixta"
},
{
title: "¿Qué ocurre si se establece una cláusula meramente potestativa en un contrato?",
choices: [
  "Anula la obligación",
  "Hace la obligación condicional",
  "Fortalece la obligación",
  "No afecta la obligación"
],
correctAnswer: "Anula la obligación"
},
{
title: "¿Qué tipo de condición es cuando el derecho nace inmediatamente pero se extingue si se realiza un determinado acontecimiento?",
choices: [
  "Condición suspensiva",
  "Condición resolutoria",
  "Condición mixta",
  "Condición potestativa"
],
correctAnswer: "Condición resolutoria"
},
{
title: "¿Qué implica la condición resolutoria para la propiedad?",
choices: [
  "El derecho de propiedad desaparece si se verifica la condición",
  "El derecho de propiedad se mantiene inalterado",
  "El derecho de propiedad se transfiere automáticamente",
  "El derecho de propiedad se suspende temporalmente"
],
correctAnswer: "El derecho de propiedad desaparece si se verifica la condición"
},
{
title: "¿Qué sucede si la condición fallida no se realiza?",
choices: [
  "La obligación se convierte en pura y simple",
  "La obligación no ha existido jamás",
  "La obligación se modifica automáticamente",
  "La obligación se suspende indefinidamente"
],
correctAnswer: "La obligación no ha existido jamás"
},
{
title: "¿Qué puede hacer el acreedor de una obligación condicional durante el período antes de realizarse la condición?",
choices: [
  "Exigir el cumplimiento de la obligación",
  "Impetrar las providencias conservativas necesarias",
  "Modificar los términos de la obligación",
  "Anular la obligación"
],
correctAnswer: "Impetrar las providencias conservativas necesarias"
},
{
title: "¿Qué ocurre con el derecho eventual del acreedor si fallece antes de realizarse la condición?",
choices: [
  "Se extingue automáticamente",
  "Se transmite a sus herederos",
  "Se transfiere al deudor",
  "Se convierte en derecho absoluto"
],
correctAnswer: "Se transmite a sus herederos"
},
{
title: "¿Qué puede hacer el acreedor si el deterioro de la cosa debida procede de culpa del deudor?",
choices: [
  "Pedir que se rescinda el contrato o que se le entregue la cosa y exigir indemnización de perjuicios",
  "Aceptar la cosa en el estado en que se encuentra",
  "Exigir un nuevo contrato",
  "Renunciar a la obligación"
],
correctAnswer: "Pedir que se rescinda el contrato o que se le entregue la cosa y exigir indemnización de perjuicios"
},
{
title: "¿Qué es la exceptio non adimpleti contractus?",
choices: [
  "Una defensa en contratos bilaterales para no cumplir si la otra parte no ha cumplido",
  "Una acción unilateral para exigir el cumplimiento de un contrato",
  "Una sanción por incumplimiento de un contrato",
  "Una cláusula penal en los contratos bilaterales"
],
correctAnswer: "Una defensa en contratos bilaterales para no cumplir si la otra parte no ha cumplido"
},
{
title: "¿Qué sucede cuando en los contratos bilaterales falta el objeto de la obligación de uno de los contratantes?",
choices: [
  "El contrato es válido",
  "El contrato es nulo desde el principio",
  "El contrato cae por falta de causa",
  "El contrato se modifica automáticamente"
],
correctAnswer: "El contrato cae por falta de causa"
},
{
title: "¿Cuál es la diferencia entre nulidad y resolución en contratos bilaterales?",
choices: [
  "La nulidad se aplica solo a contratos unilaterales",
  "La resolución se aplica solo a contratos unilaterales",
  "La nulidad se aplica cuando falta la causa en el momento de contratar, la resolución cuando falta después",
  "No hay diferencia entre nulidad y resolución"
],
correctAnswer: "La nulidad se aplica cuando falta la causa en el momento de contratar, la resolución cuando falta después"
},
{
title: "¿Qué establece el artículo 1609 del Código Civil?",
choices: [
  "Ninguno de los contratantes está en mora si el otro no cumple o no se allana a cumplir",
  "Ninguno de los contratantes puede renunciar al cumplimiento del contrato",
  "Ambos contratantes deben cumplir simultáneamente sus obligaciones",
  "El incumplimiento de uno de los contratantes anula el contrato"
],
correctAnswer: "Ninguno de los contratantes está en mora si el otro no cumple o no se allana a cumplir"
},
{
title: "¿Qué doctrina consagra la exceptio non adimpleti contractus en el derecho colombiano?",
choices: [
  "Derecho francés",
  "Derecho romano",
  "Doctrina alemana",
  "Derecho anglosajón"
],
correctAnswer: "Doctrina alemana"
},
{
title: "¿Qué puede hacer el vendedor si después del contrato mengua considerablemente la fortuna del comprador?",
choices: [
  "Exigir el pago del precio de inmediato",
  "Anular el contrato",
  "Rehusar la entrega hasta que se pague o asegure el pago",
  "Entregar la mercancía sin condiciones"
],
correctAnswer: "Rehusar la entrega hasta que se pague o asegure el pago"
},
{
title: "¿Qué relación guarda la exceptio non adimpleti contractus con el derecho de retención?",
choices: [
  "Ambas permiten retener el cumplimiento hasta recibir la contraprestación",
  "No tienen relación alguna",
  "La exceptio non adimpleti contractus es una forma de anular el contrato",
  "El derecho de retención solo aplica a contratos unilaterales"
],
correctAnswer: "Ambas permiten retener el cumplimiento hasta recibir la contraprestación"
},
{
title: "¿Qué se requiere para que prospere la excepción de inejecución?",
choices: [
  "La existencia de una acción judicial previa",
  "La conexidad, la exigibilidad del crédito, la certeza y liquidez del crédito inejecutado y la inejecución no provocada",
  "La aceptación previa del acreedor",
  "La mora del deudor"
],
correctAnswer: "La conexidad, la exigibilidad del crédito, la certeza y liquidez del crédito inejecutado y la inejecución no provocada"
},
{
title: "¿Qué significa conexidad en la excepción de inejecución?",
choices: [
  "Las deudas obedecen al mismo contrato",
  "Las deudas son de contratos diferentes",
  "Las deudas son de la misma naturaleza",
  "Las deudas son recíprocas"
],
correctAnswer: "Las deudas obedecen al mismo contrato"
},
{
title: "¿Qué ocurre si se cumple la condición resolutoria en un contrato bilateral?",
choices: [
  "El contrato se modifica automáticamente",
  "El contrato sigue vigente",
  "El contrato se resuelve y las partes deben restituir lo recibido",
  "El contrato se suspende temporalmente"
],
correctAnswer: "El contrato se resuelve y las partes deben restituir lo recibido"
},
{
title: "¿Qué permite la acción resolutoria tácita en contratos bilaterales?",
choices: [
  "Pedir la resolución o el cumplimiento del contrato con indemnización de perjuicios",
  "Modificar los términos del contrato",
  "Renunciar al contrato sin consecuencias",
  "Exigir el cumplimiento sin indemnización de perjuicios"
],
correctAnswer: "Pedir la resolución o el cumplimiento del contrato con indemnización de perjuicios"
},
{
title: "¿Qué principio subyace a la exceptio non adimpleti contractus?",
choices: [
  "Equidad y reciprocidad en el cumplimiento de los contratos",
  "Autoridad del juez para modificar contratos",
  "Derecho del acreedor a exigir cumplimiento incondicional",
  "Derecho del deudor a anular el contrato"
],
correctAnswer: "Equidad y reciprocidad en el cumplimiento de los contratos"
},
{
title: "¿Qué ocurre si el deudor provoca la inejecución en un contrato bilateral?",
choices: [
  "El contrato se modifica automáticamente",
  "No puede oponer la excepción de inejecución",
  "El contrato se resuelve automáticamente",
  "El contrato sigue vigente"
],
correctAnswer: "No puede oponer la excepción de inejecución"
},
{
title: "¿Qué sucede cuando una parte está en mora de ejecutar su obligación en un contrato bilateral?",
choices: [
  "La otra parte debe cumplir igualmente",
  "La otra parte puede pedir la resolución o el cumplimiento del contrato con indemnización de perjuicios",
  "El contrato se anula automáticamente",
  "El contrato se modifica automáticamente"
],
correctAnswer: "La otra parte puede pedir la resolución o el cumplimiento del contrato con indemnización de perjuicios"
},
{
title: "¿Qué implica la resolución en un contrato bilateral?",
choices: [
  "Las partes deben restituir lo recibido",
  "Las partes quedan exentas de toda obligación",
  "El contrato se modifica automáticamente",
  "Las partes deben cumplir igualmente"
],
correctAnswer: "Las partes deben restituir lo recibido"
},
{
title: "¿Qué ocurre si el deudor rehúsa cumplir su obligación en un contrato bilateral?",
choices: [
  "La otra parte debe cumplir igualmente",
  "La otra parte puede pedir la resolución o el cumplimiento del contrato con indemnización de perjuicios",
  "El contrato se anula automáticamente",
  "El contrato se modifica automáticamente"
],
correctAnswer: "La otra parte puede pedir la resolución o el cumplimiento del contrato con indemnización de perjuicios"
},
{
title: "¿Qué debe hacer el acreedor si el deudor no cumple su obligación en un contrato bilateral?",
choices: [
  "Esperar indefinidamente",
  "Pedir judicialmente la resolución o el cumplimiento del contrato con indemnización de perjuicios",
  "Modificar los términos del contrato",
  "Renunciar al contrato"
],
correctAnswer: "Pedir judicialmente la resolución o el cumplimiento del contrato con indemnización de perjuicios"
},
{
title: "¿Qué implica la acción de rescisión?",
choices: [
  "Anular el contrato por vicio o defecto inherente al contrato mismo",
  "Modificar los términos del contrato",
  "Exigir el cumplimiento sin indemnización de perjuicios",
  "Renunciar al contrato sin consecuencias"
],
correctAnswer: "Anular el contrato por vicio o defecto inherente al contrato mismo"
},
{
title: "¿Qué establece el artículo 1546 del Código Civil?",
choices: [
  "La acción de rescisión en contratos bilaterales",
  "La acción resolutoria en contratos bilaterales",
  "La acción unilateral en contratos bilaterales",
  "La modificación automática de contratos bilaterales"
],
correctAnswer: "La acción resolutoria en contratos bilaterales"
},
{
title: "¿Qué sucede si la cosa debida en un contrato bilateral perece sin culpa del deudor antes de cumplirse la condición?",
choices: [
  "El contrato sigue vigente",
  "El deudor es obligado al precio y a la indemnización de perjuicios",
  "El contrato se anula automáticamente",
  "La otra parte debe cumplir igualmente"
],
correctAnswer: "El deudor es obligado al precio y a la indemnización de perjuicios"
},
{
title: "¿Qué principio fundamental manda que los contratos sean cumplidos?",
choices: [
  "Bona fide",
  "Pacta sunt servanda",
  "Res perit domino",
  "Exceptio non adimpleti contractus"
],
correctAnswer: "Pacta sunt servanda"
},
{
title: "¿Qué justifica el derecho de resolución por alteración de las circunstancias según la jurisprudencia alemana?",
choices: [
  "La voluntad unilateral del deudor",
  "Los principios de la buena fe",
  "La cláusula penal",
  "La exceptio non adimpleti contractus"
],
correctAnswer: "Los principios de la buena fe"
},
{
title: "¿Qué teoría establece que todo contrato obligatorio solo es vinculante mientras las circunstancias bajo las cuales fue concluido no se hayan modificado?",
choices: [
  "Teoría de la cláusula rebus sic stantibus",
  "Teoría de la condición resolutoria",
  "Teoría del caso fortuito",
  "Teoría de la exceptio non adimpleti contractus"
],
correctAnswer: "Teoría de la cláusula rebus sic stantibus"
},
{
title: "¿Qué tipo de contratos puede ser afectado por la teoría de la imprevisión según el artículo 868 del Código de Comercio?",
choices: [
  "Contratos aleatorios",
  "Contratos de ejecución sucesiva, periódica o diferida",
  "Contratos unilaterales",
  "Contratos de ejecución instantánea"
],
correctAnswer: "Contratos de ejecución sucesiva, periódica o diferida"
},
{
title: "¿Qué puede hacer el juez si las circunstancias alteran las bases del contrato según el artículo 868 del Código de Comercio?",
choices: [
  "Rescindir el contrato automáticamente",
  "Ordenar reajustes que la equidad indique o decretar la terminación del contrato",
  "Modificar unilateralmente el contrato",
  "Ignorar las alteraciones"
],
correctAnswer: "Ordenar reajustes que la equidad indique o decretar la terminación del contrato"
},
{
title: "¿Qué evento histórico llevó al desarrollo de la teoría de la imprevisión en Alemania?",
choices: [
  "La Guerra Civil Alemana",
  "La Revolución Industrial",
  "La Primera Guerra Mundial",
  "La Gran Depresión"
],
correctAnswer: "La Primera Guerra Mundial"
},
{
title: "¿Qué requisito debe cumplirse para que se aplique la teoría de la imprevisión?",
choices: [
  "Las circunstancias deben ser previsibles",
  "Las partes deben haberlo previsto en el contrato",
  "Las circunstancias deben ser extraordinarias, imprevistas o imprevisibles",
  "Las circunstancias deben ser triviales"
],
correctAnswer: "Las circunstancias deben ser extraordinarias, imprevistas o imprevisibles"
},
{
title: "¿Cuál de las siguientes NO es una condición para que prospere la teoría de la imprevisión según la jurisprudencia alemana?",
choices: [
  "La alteración debe ser completamente extraordinaria",
  "La ruina inminente debe amenazar al deudor",
  "Las partes no deben haber contado con la alteración al momento de contratar",
  "La alteración debe producir un desequilibrio importante en las prestaciones"
],
correctAnswer: "La ruina inminente debe amenazar al deudor"
},
{
title: "¿Qué artículo del Código Civil colombiano se relaciona con la teoría de la imprevisión?",
choices: [
  "Artículo 1500",
  "Artículo 1550",
  "Artículo 1602",
  "Artículo 1700"
],
correctAnswer: "Artículo 1602"
},
{
title: "¿Qué fundamento da la teoría de la imprevisión para justificar la modificación o terminación de un contrato?",
choices: [
  "La cláusula penal",
  "La exceptio non adimpleti contractus",
  "La buena fe y la equidad",
  "La voluntad unilateral del acreedor"
],
correctAnswer: "La buena fe y la equidad"
},
{
title: "¿Qué sucede si una alteración de las circunstancias hace que la prestación de una de las partes sea excesivamente onerosa según el artículo 868 del Código de Comercio?",
choices: [
  "El contrato se modifica automáticamente",
  "La parte afectada puede pedir la revisión del contrato",
  "El contrato se anula automáticamente",
  "La parte afectada debe cumplir igualmente"
],
correctAnswer: "La parte afectada puede pedir la revisión del contrato"
},
{
title: "¿Qué debe tener en cuenta el juez al aplicar la teoría de la imprevisión?",
choices: [
  "Solo la voluntad del acreedor",
  "Las circunstancias del caso concreto y la buena fe",
  "Solo el contenido del contrato",
  "Solo la voluntad del deudor"
],
correctAnswer: "Las circunstancias del caso concreto y la buena fe"
},
{
title: "¿Qué se entiende por circunstancias imprevistas según la teoría de la imprevisión?",
choices: [
  "Circunstancias que no pueden ser previstas",
  "Circunstancias que no se previeron pero pudieron haber sido previstas",
  "Circunstancias previstas en el contrato",
  "Circunstancias sin importancia"
],
correctAnswer: "Circunstancias que no se previeron pero pudieron haber sido previstas"
},
{
title: "¿Qué principio de la teoría de la imprevisión se relaciona con el derecho de resolución por alteración de las circunstancias?",
choices: [
  "Res perit domino",
  "Bona fide",
  "Exceptio non adimpleti contractus",
  "Pacta sunt servanda"
],
correctAnswer: "Bona fide"
},
{
title: "¿Qué tipo de contratos no se ve afectado por la teoría de la imprevisión según el artículo 868 del Código de Comercio?",
choices: [
  "Contratos aleatorios y de ejecución instantánea",
  "Contratos de ejecución sucesiva",
  "Contratos de prestación periódica",
  "Contratos de prestación diferida"
],
correctAnswer: "Contratos aleatorios y de ejecución instantánea"
},
{
title: "¿Qué efecto tiene la inflación en la aplicación de la teoría de la imprevisión?",
choices: [
  "Ninguno",
  "Hace que el contrato se anule automáticamente",
  "Puede justificar la revisión del contrato si produce una desproporción insoportable entre la prestación y la contraprestación",
  "Hace que la parte afectada deba cumplir igualmente"
],
correctAnswer: "Puede justificar la revisión del contrato si produce una desproporción insoportable entre la prestación y la contraprestación"
},
{
title: "¿Qué ocurre si una circunstancia básica no existía ya al concluirse el contrato según la jurisprudencia alemana?",
choices: [
  "El contrato se anula automáticamente",
  "Se justifica el derecho de resolución por defecto de la base del negocio",
  "El contrato se modifica automáticamente",
  "La parte afectada debe cumplir igualmente"
],
correctAnswer: "Se justifica el derecho de resolución por defecto de la base del negocio"
},
{
title: "¿Qué objetivo persigue la teoría de la imprevisión al revisar un contrato?",
choices: [
  "Indemnizar a la parte perjudicada",
  "Evitar el incumplimiento de las obligaciones",
  "Modificar unilateralmente el contrato",
  "Anular el contrato"
],
correctAnswer: "Evitar el incumplimiento de las obligaciones"
},
{
title: "¿Qué circunstancias permiten la aplicación de la teoría de la imprevisión según el artículo 868 del Código de Comercio?",
choices: [
  "Circunstancias previstas en el contrato",
  "Circunstancias extraordinarias, imprevistas o imprevisibles",
  "Circunstancias triviales",
  "Circunstancias acordadas por las partes"
],
correctAnswer: "Circunstancias extraordinarias, imprevistas o imprevisibles"
},
{
title: "¿Qué sucedió en 1936 respecto a la teoría de la imprevisión en Colombia?",
choices: [
  "Se eliminó su aplicación",
  "Se modificó su fundamento legal",
  "La Corte aceptó por primera vez que el juez corrigiera un contrato afectado por circunstancias posteriores",
  "Se restringió su aplicación a contratos unilaterales"
],
correctAnswer: "La Corte aceptó por primera vez que el juez corrigiera un contrato afectado por circunstancias posteriores"
}
];

// Función para seleccionar aleatoriamente 20 preguntas
function getRandomQuestions(allQuestions, numQuestions = 20) {
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numQuestions);
}

let questions = getRandomQuestions(allQuestions);
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function showQuestion() {
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const question = questions[currentQuestionIndex];

  questionElement.textContent = `${currentQuestionIndex + 1}. ${question.title}`;
  choicesElement.innerHTML = '';

  question.choices.forEach(choice => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'choice';
      input.value = choice;
      label.appendChild(input);
      label.appendChild(document.createTextNode(choice));
      choicesElement.appendChild(label);
      choicesElement.appendChild(document.createElement('br'));
  });
}

function nextQuestion() {
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (selectedChoice) {
      const answer = selectedChoice.value;
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;
      userAnswers.push({ question: questions[currentQuestionIndex].title, answer, correctAnswer, correct: answer === correctAnswer });

      if (answer === correctAnswer) {
          score++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < questions.length) {
          showQuestion();
      } else {
          showScore();
      }
  } else {
      alert('Por favor, selecciona una respuesta.');
  }
}

function showScore() {
  const quizContainer = document.getElementById('quiz-container');
  const scoreContainer = document.getElementById('score-container');
  const scoreElement = document.getElementById('score');

  quizContainer.style.display = 'none';
  scoreContainer.style.display = 'block';

  scoreElement.textContent = `Tu puntaje es ${score} de ${questions.length}.`;
  showSummary();
}

function showSummary() {
  const summaryContainer = document.getElementById('summary');
  summaryContainer.innerHTML = '';
  userAnswers.forEach((answer, index) => {
      const questionElement = document.createElement('p');
      questionElement.textContent = `${index + 1}. ${answer.question}`;
      summaryContainer.appendChild(questionElement);
      const answerElement = document.createElement('p');
      answerElement.textContent = `Tu respuesta: ${answer.answer} - ${answer.correct ? 'Correcto' : 'Incorrecto'}`;
      summaryContainer.appendChild(answerElement);
  });
  const finalEvaluation = document.createElement('p');
  finalEvaluation.textContent = evaluateScore(score);
  summaryContainer.appendChild(finalEvaluation);
}

function evaluateScore(score) {
  const totalQuestions = questions.length;
  const percentage = (score / totalQuestions) * 100;

  if (percentage === 100) {
      return 'Excelente, has hecho un gran trabajo!';
  } else if (percentage >= 75) {
      return 'Muy bien, tienes un conocimiento sólido.';
  } else if (percentage >= 50) {
      return 'Bien, pero hay margen de mejora.';
  } else if (percentage >= 25) {
      return 'Regular, necesitas estudiar un poco más.';
  } else {
      return 'Insuficiente, sigue estudiando y mejorando.';
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questions = getRandomQuestions(allQuestions);
  userAnswers = [];

  const quizContainer = document.getElementById('quiz-container');
  const scoreContainer = document.getElementById('score-container');

  quizContainer.style.display = 'block';
  scoreContainer.style.display = 'none';

  showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  showQuestion();
});
