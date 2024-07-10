const allQuestions = [
  {
    title: "¿Qué comprende el Código Civil según el Artículo 1?",
    choices: [
      "Las disposiciones legales sustantivas sobre los derechos de los particulares en materia penal.",
      "Las disposiciones legales sustantivas sobre los derechos de los particulares, por razón del estado de las personas, de sus bienes, obligaciones, contratos y acciones civiles.",
      "Solo las disposiciones legales sobre los bienes y contratos.",
      "Las disposiciones legales sobre las acciones civiles únicamente."
    ],
    correctAnswer: "Las disposiciones legales sustantivas sobre los derechos de los particulares, por razón del estado de las personas, de sus bienes, obligaciones, contratos y acciones civiles.",
    explanation: "El Código Civil es fundamental para regular diversos aspectos de la vida civil de los individuos, estableciendo un marco legal para los derechos y obligaciones que emergen de las relaciones personales y patrimoniales."
  },
  {
    title: "¿Cómo se aplica el Código Civil en los territorios administrados por el gobierno general según el Artículo 2?",
    choices: [
      "El Código Civil se aplica solo en asuntos internacionales.",
      "El Código Civil se aplica en los asuntos de competencia del gobierno general y en los civiles comunes de los habitantes de los territorios administrados por él.",
      "El Código Civil es aplicable únicamente en el ámbito penal.",
      "El Código Civil no se aplica en los territorios administrados por el gobierno general."
    ],
    correctAnswer: "El Código Civil se aplica en los asuntos de competencia del gobierno general y en los civiles comunes de los habitantes de los territorios administrados por él.",
    explanation: "Esto garantiza la coherencia en la aplicación de la ley civil en todo el territorio nacional bajo la administración del gobierno central, promoviendo un marco legal uniforme."
  },
  {
    title: "¿Qué significa que el Código Civil tenga fuerza de ley según el Artículo 3?",
    choices: [
      "Que el Código Civil es una sugerencia para los ciudadanos.",
      "Que el Código Civil es la norma establecida por el legislador colombiano y debe ser seguida en asuntos civiles por los particulares.",
      "Que el Código Civil es opcional para las empresas.",
      "Que el Código Civil solo se aplica en casos de emergencia nacional."
    ],
    correctAnswer: "Que el Código Civil es la norma establecida por el legislador colombiano y debe ser seguida en asuntos civiles por los particulares.",
    explanation: "La obligatoriedad del Código Civil asegura que todos los individuos y entidades deben regirse por las mismas normas en asuntos civiles, lo que proporciona estabilidad y previsibilidad en las relaciones jurídicas."
  },
  {
    title: "¿Cuál es el propósito de la ley según el Artículo 4 del Código Civil?",
    choices: [
      "La ley solo se utiliza para registrar contratos.",
      "La ley es una declaración de la voluntad soberana manifestada en la forma prevenida en la Constitución Nacional y su carácter general es mandar, prohibir, permitir o castigar.",
      "La ley únicamente tiene fines fiscales.",
      "La ley no tiene ningún propósito definido en el Código Civil."
    ],
    correctAnswer: "La ley es una declaración de la voluntad soberana manifestada en la forma prevenida en la Constitución Nacional y su carácter general es mandar, prohibir, permitir o castigar.",
    explanation: "La ley, al ser una manifestación de la voluntad soberana, es un instrumento para el orden social, estableciendo normas de conducta y mecanismos de control social a través de mandatos, prohibiciones y sanciones."
  },
  {
    title: "¿Es necesario que la ley civil contenga penas o castigos explícitos según el Artículo 5?",
    choices: [
      "Sí, siempre debe contener penas explícitas.",
      "No, la ley civil puede mandar, prohibir o permitir sin contener penas explícitas, ya que el Código Penal es el que define los delitos y les señala penas.",
      "Solo en casos de infracciones graves.",
      "Sí, pero solo si se trata de leyes fiscales."
    ],
    correctAnswer: "No, la ley civil puede mandar, prohibir o permitir sin contener penas explícitas, ya que el Código Penal es el que define los delitos y les señala penas.",
    explanation: "La separación de funciones entre el Código Civil y el Código Penal permite que el primero regule las relaciones privadas sin necesidad de especificar castigos, mientras que el segundo se encarga de definir y sancionar las conductas delictivas."
  },
  {
    title: "¿Qué efectos legales tienen los actos ejecutados contra expresa prohibición de la ley en materia civil según el Artículo 6?",
    choices: [
      "Son completamente válidos y se pueden ejecutar sin consecuencias.",
      "Son nulos a menos que la ley disponga otra cosa.",
      "Deben ser aprobados por un juez para ser válidos.",
      "Son automáticamente considerados como delitos penales."
    ],
    correctAnswer: "Son nulos a menos que la ley disponga otra cosa.",
    explanation: "La nulidad de los actos contrarios a la ley asegura que cualquier acción en contravención de la normativa carezca de efectos jurídicos, protegiendo así la integridad del orden legal."
  },
  {
    title: "¿Qué diferencia existe entre la sanción constitucional y la sanción legal mencionadas en los Artículos 6 y 7?",
    choices: [
      "No hay ninguna diferencia entre la sanción constitucional y la sanción legal.",
      "La sanción constitucional se refiere a la aprobación de proyectos por el poder ejecutivo, mientras que la sanción legal se refiere a las consecuencias del cumplimiento o transgresión de la ley.",
      "La sanción constitucional se aplica solo a delitos graves, mientras que la sanción legal se aplica a delitos menores.",
      "La sanción constitucional solo se aplica en casos de emergencia."
    ],
    correctAnswer: "La sanción constitucional se refiere a la aprobación de proyectos por el poder ejecutivo, mientras que la sanción legal se refiere a las consecuencias del cumplimiento o transgresión de la ley.",
    explanation: "Esta distinción subraya la separación de poderes y funciones dentro del sistema legal, donde la sanción constitucional es parte del proceso legislativo y la sanción legal pertenece al ámbito de la aplicación y ejecución de la ley."
  },
  {
    title: "¿Puede la costumbre prevalecer sobre la ley según el Artículo 8?",
    choices: [
      "Sí, siempre que sea una práctica inveterada y general.",
      "No, la costumbre nunca tiene fuerza contra la ley.",
      "Sí, si es aprobada por una corte superior.",
      "No, excepto en casos de desuso prolongado."
    ],
    correctAnswer: "No, la costumbre nunca tiene fuerza contra la ley.",
    explanation: "La supremacía de la ley sobre la costumbre asegura que las normas establecidas por el legislador prevalezcan sobre las prácticas sociales, garantizando uniformidad y previsibilidad en la aplicación de la ley."
  },
  {
    title: "¿Puede la ignorancia de la ley ser usada como excusa para su incumplimiento según el Artículo 9?",
    choices: [
      "Sí, en casos de leyes recién promulgadas.",
      "No, la ignorancia de las leyes no sirve de excusa.",
      "Sí, pero solo para ciudadanos extranjeros.",
      "No, excepto si la persona puede probar que nunca tuvo acceso a la ley."
    ],
    correctAnswer: "No, la ignorancia de las leyes no sirve de excusa.",
    explanation: "Este principio es crucial para la eficacia del sistema legal, ya que obliga a todos los ciudadanos a conocer y respetar las leyes, promoviendo así el orden y la justicia en la sociedad."
  },
  {
    title: "¿Cuándo surten efecto las leyes según el Artículo 11 del Código Civil?",
    choices: [
      "Desde el momento de su promulgación en el Diario Oficial.",
      "Desde el día en que ellas mismas se designan o después de su promulgación.",
      "Desde la fecha en que son aprobadas por el Congreso.",
      "Desde la fecha en que son discutidas en público."
    ],
    correctAnswer: "Desde el día en que ellas mismas se designan o después de su promulgación.",
    explanation: "La especificación del momento en que las leyes surten efecto proporciona claridad y certeza sobre cuándo las normas son aplicables y vinculantes para todos los ciudadanos."
  },
  {
    title: "¿Cómo se promulgan las leyes según el Artículo 12?",
    choices: [
      "Por aprobación del Presidente de la República.",
      "Por publicación en el Diario Oficial y distribución a los estados y territorios.",
      "Por votación pública en el Congreso.",
      "Por notificación directa a cada ciudadano."
    ],
    correctAnswer: "Por publicación en el Diario Oficial y distribución a los estados y territorios.",
    explanation: "La promulgación en el Diario Oficial asegura que las leyes sean accesibles y conocidas por todos, mientras que su distribución a los estados y territorios garantiza su aplicación uniforme en todo el país."
  },
  {
    title: "¿Tienen las leyes efecto retroactivo según el Artículo 13?",
    choices: [
      "Sí, siempre y cuando lo apruebe el Congreso.",
      "No, las leyes no tienen efecto retroactivo.",
      "Sí, pero solo en casos específicos.",
      "No, excepto si se trata de derechos adquiridos."
    ],
    correctAnswer: "No, las leyes no tienen efecto retroactivo.",
    explanation: "La prohibición de la retroactividad de las leyes protege los derechos adquiridos y asegura la seguridad jurídica, evitando que las nuevas leyes alteren situaciones ya consolidadas bajo legislaciones anteriores."
  },
  {
    title: "¿Cómo debe ser utilizado el contexto de la ley en la interpretación?",
    choices: [
      "Solo como una referencia secundaria.",
      "Para ilustrar el sentido de cada una de sus partes y asegurar la correspondencia y armonía entre ellas.",
      "Para ignorar las partes oscuras de la ley.",
      "Para modificar el significado literal de las palabras."
    ],
    correctAnswer: "Para ilustrar el sentido de cada una de sus partes y asegurar la correspondencia y armonía entre ellas.",
    explanation: "Utilizar el contexto de la ley ayuda a interpretar sus disposiciones de manera coherente, asegurando que todas las partes de la ley se comprendan y apliquen de forma armoniosa, lo que refuerza la integridad del marco legal."
  },
  {
    title: "¿Cómo deben interpretarse las disposiciones legales en relación con su favorabilidad u odiosidad?",
    choices: [
      "Lo favorable u odioso de una disposición siempre debe tomarse en cuenta.",
      "La extensión de la ley se determina por su genuino sentido y las reglas de interpretación precedentes.",
      "Las disposiciones pueden ampliarse según la necesidad del caso.",
      "El contexto no es relevante para interpretar la extensión de una ley."
    ],
    correctAnswer: "La extensión de la ley se determina por su genuino sentido y las reglas de interpretación precedentes.",
    explanation: "La interpretación de una ley debe basarse en su genuino sentido y en las reglas de interpretación ya establecidas, sin tomar en cuenta si una disposición es favorable u odiosa."
  },
  {
    title: "¿Qué criterios se utilizan en casos de interpretación de pasajes oscuros o contradictorios?",
    choices: [
      "Siempre se deben seguir las interpretaciones literales.",
      "Se deben interpretar conforme al espíritu general de la legislación y a la equidad natural.",
      "Se debe consultar a expertos externos.",
      "Los pasajes oscuros deben ser ignorados."
    ],
    correctAnswer: "Se deben interpretar conforme al espíritu general de la legislación y a la equidad natural.",
    explanation: "Cuando no se pueden aplicar las reglas de interpretación anteriores, los pasajes oscuros o contradictorios deben interpretarse de la manera más conforme al espíritu general de la legislación y a la equidad natural."
  },
  {
    title: "¿Cómo se interpretan las palabras relacionadas con las personas en las disposiciones de las leyes?",
    choices: [
      "Siempre se aplican con distinción de sexo.",
      "Se entienden que comprenden ambos sexos a menos que el contexto indique lo contrario.",
      "Se aplican exclusivamente al sexo masculino.",
      "Se deben interpretar según el uso común."
    ],
    correctAnswer: "Se entienden que comprenden ambos sexos a menos que el contexto indique lo contrario.",
    explanation: "Términos como 'hombre' o 'persona' se aplican a individuos de ambos sexos, salvo que el contexto o la naturaleza de la disposición indiquen claramente una limitación a un solo sexo."
  },
  {
    title: "¿Cómo se define la edad de una persona en el Código Civil?",
    choices: [
      "Infante es quien no ha cumplido diez años.",
      "Adulto es el que ha cumplido veintiún años.",
      "Menor de edad es quien no ha llegado a cumplir veintiún años.",
      "Impúber es el varón que no ha cumplido doce años."
    ],
    correctAnswer: "Menor de edad es quien no ha llegado a cumplir veintiún años.",
    explanation: "El Código Civil define varias categorías de edad, estableciendo que una persona es menor de edad hasta cumplir veintiún años y que distintas edades tienen implicaciones legales diferentes."
  },
  {
    title: "¿Qué es el parentesco de consanguinidad?",
    choices: [
      "La relación entre personas que comparten una propiedad.",
      "La conexión entre personas unidas por vínculos de sangre.",
      "La relación legal entre cónyuges.",
      "La conexión entre individuos que trabajan juntos."
    ],
    correctAnswer: "La conexión entre personas unidas por vínculos de sangre.",
    explanation: "El parentesco de consanguinidad es la relación que existe entre personas que descienden de un mismo tronco o raíz, o que están unidas por los vínculos de la sangre."
  },
  {
    title: "¿Cuáles son los tipos de parentesco de consanguinidad?",
    choices: [
      "Paternal y maternal.",
      "Legítimo o ilegítimo.",
      "Directo y colateral.",
      "Ascendente y descendente."
    ],
    correctAnswer: "Legítimo o ilegítimo.",
    explanation: "El parentesco de consanguinidad se clasifica en legítimo o ilegítimo, dependiendo de la conformidad de las generaciones a la ley."
  },
  {
    title: "¿Cómo se cuentan los grados de consanguinidad entre dos personas?",
    choices: [
      "Por el número de vínculos directos.",
      "Por el número de generaciones.",
      "Por la cantidad de propiedades compartidas.",
      "Por la cercanía geográfica."
    ],
    correctAnswer: "Por el número de generaciones.",
    explanation: "Los grados de consanguinidad se determinan por el número de generaciones que separan a dos personas de su antepasado común."
  },
  {
    title: "¿Qué caracteriza al parentesco legítimo de consanguinidad?",
    choices: [
      "Las generaciones resultantes no están autorizadas por la ley.",
      "Todas las generaciones de que resulta han sido autorizadas por la ley.",
      "Es una relación entre personas que no tienen vínculos de sangre.",
      "Es la relación entre cónyuges."
    ],
    correctAnswer: "Todas las generaciones de que resulta han sido autorizadas por la ley.",
    explanation: "El parentesco legítimo de consanguinidad es aquel en que todas las generaciones involucradas han sido conformes a la ley, lo que implica una legitimidad reconocida por el marco jurídico."
  },
  {
    title: "¿Qué efectos tiene la legitimidad conferida a los hijos por matrimonio posterior de los padres?",
    choices: [
      "No produce ningún efecto legal.",
      "Produce los mismos efectos civiles que la legitimidad nativa.",
      "Solo afecta a la herencia.",
      "Solo se aplica a los hijos mayores de edad."
    ],
    correctAnswer: "Produce los mismos efectos civiles que la legitimidad nativa.",
    explanation: "La legitimidad conferida por el matrimonio posterior de los padres otorga a los hijos los mismos derechos y estatus legales que si hubieran sido legítimos desde el nacimiento."
  },
  {
    title: "¿Qué es una línea de parentesco en la consanguinidad?",
    choices: [
      "La relación entre personas que trabajan juntas.",
      "La serie y orden de las personas que descienden de una raíz o tronco común.",
      "La conexión entre personas que comparten una propiedad.",
      "La relación legal entre cónyuges."
    ],
    correctAnswer: "La serie y orden de las personas que descienden de una raíz o tronco común.",
    explanation: "En el parentesco de consanguinidad, una línea se refiere a la secuencia de personas que descienden de un antepasado común, estableciendo así la conexión familiar."
  },
  {
    title: "¿Cómo se divide la línea de parentesco en la consanguinidad?",
    choices: [
      "En directo y colateral.",
      "En legítimo e ilegítimo.",
      "En ascendente y descendente.",
      "En cercano y lejano."
    ],
    correctAnswer: "En directo y colateral.",
    explanation: "La línea de parentesco en la consanguinidad se divide en directa o recta y en colateral, transversal u oblicua, reflejando la dirección de los lazos familiares."
  },
  {
    title: "¿Cómo se diferencian las líneas rectas descendentes y ascendentes?",
    choices: [
      "Las descendentes van desde el tronco a los miembros, y las ascendentes desde los miembros al tronco.",
      "Las descendentes son siempre legítimas y las ascendentes son siempre ilegítimas.",
      "Las descendentes son horizontales y las ascendentes son verticales.",
      "Las descendentes son colaterales y las ascendentes son directas."
    ],
    correctAnswer: "Las descendentes van desde el tronco a los miembros, y las ascendentes desde los miembros al tronco.",
    explanation: "En la línea recta descendente se cuenta desde el ancestro común hacia los descendientes, mientras que en la línea recta ascendente se cuenta desde el individuo hacia los ancestros."
  },
  {
    title: "¿Qué caracteriza a la línea colateral en la consanguinidad?",
    choices: [
      "Es la relación entre personas que no proceden unas de otras pero descienden de un tronco común.",
      "Es la relación entre cónyuges.",
      "Es la relación entre personas que comparten una propiedad.",
      "Es la conexión entre individuos que trabajan juntos."
    ],
    correctAnswer: "Es la relación entre personas que no proceden unas de otras pero descienden de un tronco común.",
    explanation: "La línea colateral incluye a personas que, aunque no descienden directamente unas de otras, comparten un ancestro común, como hermanos y primos."
  },
  {
    title: "¿Qué se entiende por líneas paterna y materna?",
    choices: [
      "Parientes por parte de padre y por parte de madre.",
      "Parientes cercanos y lejanos.",
      "Parientes legítimos e ilegítimos.",
      "Parientes directos y colaterales."
    ],
    correctAnswer: "Parientes por parte de padre y por parte de madre.",
    explanation: "Las líneas paterna y materna se refieren a los parientes relacionados a través del padre o la madre respectivamente, estableciendo diferentes ramas en el árbol genealógico."
  },
  {
    title: "¿Cómo se cuentan los grados en la línea transversal?",
    choices: [
      "Por el número de propiedades compartidas.",
      "Por el número de generaciones desde un pariente hasta la raíz común y desde ésta hasta el otro pariente.",
      "Por la cantidad de vínculos directos.",
      "Por la cercanía geográfica."
    ],
    correctAnswer: "Por el número de generaciones desde un pariente hasta la raíz común y desde ésta hasta el otro pariente.",
    explanation: "Los grados en la línea transversal se cuentan sumando las generaciones que separan a cada individuo del ancestro común, estableciendo así el grado de parentesco colateral."
  },
  {
    title: "¿Qué es la afinidad legítima?",
    choices: [
      "La relación entre cónyuges y los consanguíneos legítimos del otro cónyuge.",
      "La relación entre personas que comparten una propiedad.",
      "La conexión entre individuos que trabajan juntos.",
      "La relación entre parientes lejanos."
    ],
    correctAnswer: "La relación entre cónyuges y los consanguíneos legítimos del otro cónyuge.",
    explanation: "La afinidad legítima se refiere a la relación legal que se establece entre un cónyuge y los parientes consanguíneos legítimos del otro cónyuge, como suegros y cuñados."
  },
  {
    title: "¿Cómo se califican las líneas y grados de la afinidad ilegítima?",
    choices: [
      "De la misma manera que en la afinidad legítima.",
      "Según la cantidad de propiedades compartidas.",
      "Por la cercanía geográfica.",
      "De manera distinta a la afinidad legítima."
    ],
    correctAnswer: "De la misma manera que en la afinidad legítima.",
    explanation: "Las líneas y grados de la afinidad ilegítima se califican siguiendo los mismos criterios que para la afinidad legítima, asegurando la consistencia en la determinación del parentesco."
  },
  {
    title: "¿Cómo se aplican las denominaciones de legítimos, ilegítimos y naturales a los hijos?",
    choices: [
      "Solo a los hijos de matrimonio.",
      "Correlativamente a sus padres.",
      "Solo a los hijos adoptados.",
      "No se aplican en la legislación actual."
    ],
    correctAnswer: "Correlativamente a sus padres.",
    explanation: "Las denominaciones de legítimos, ilegítimos y naturales que se aplican a los hijos también se aplican a sus padres, reflejando la situación legal y social del linaje familiar."
  },
  {
    title: "¿Qué se entiende por hermanos carnales, paternos y maternos?",
    choices: [
      "Hermanos carnales son los hijos de los mismos padres; paternos, solo del mismo padre; maternos, solo de la misma madre.",
      "Hermanos carnales son solo los que comparten una propiedad.",
      "Hermanos paternos y maternos son términos sin relevancia legal.",
      "Hermanos carnales son los hijos del mismo padre, maternos, solo de la misma madre."
    ],
    correctAnswer: "Hermanos carnales son los hijos de los mismos padres; paternos, solo del mismo padre; maternos, solo de la misma madre.",
    explanation: "Estos términos describen diferentes tipos de relaciones fraternales, indicando si los hermanos comparten ambos progenitores (carnales) o solo uno de ellos (paternos o maternos)."
  },
  {
    title: "¿Qué relación tienen los hijos legítimos con los hijos naturales del mismo padre o madre?",
    choices: [
      "No tienen ninguna relación legal.",
      "Son considerados hermanos naturales entre sí.",
      "Solo se consideran parientes lejanos.",
      "Son considerados primos."
    ],
    correctAnswer: "Son considerados hermanos naturales entre sí.",
    explanation: "Los hijos legítimos y los hijos naturales de un mismo progenitor son considerados hermanos naturales, compartiendo así una relación fraternal reconocida legalmente."
  },
  {
    title: "¿Qué establece la normativa sobre el estado civil adquirido conforme a la ley vigente?",
    choices: [
      "El estado civil adquirido pierde su fuerza si la ley cambia.",
      "El estado civil adquirido subsiste aunque esa ley pierda después su fuerza.",
      "El estado civil adquirido debe ser reevaluado periódicamente.",
      "El estado civil adquirido solo es válido en el lugar de origen."
    ],
    correctAnswer: "El estado civil adquirido subsiste aunque esa ley pierda después su fuerza.",
    explanation: "El estado civil adquirido conforme a la ley vigente se mantiene válido incluso si la ley cambia posteriormente, garantizando la estabilidad y certeza en las relaciones personales."
  },
  {
    title: "¿Cómo deben los jueces interpretar la ley en casos particulares?",
    choices: [
      "Por medio de consultas públicas.",
      "Aplicando la doctrina y buscando el verdadero sentido de la ley.",
      "Siguiendo estrictamente la interpretación del legislador sin análisis adicional.",
      "Utilizando siempre interpretaciones literales."
    ],
    correctAnswer: "Aplicando la doctrina y buscando el verdadero sentido de la ley.",
    explanation: "La interpretación doctrinal permite a los jueces adaptar las normas legales a las circunstancias particulares de cada caso, buscando la justicia y equidad en la aplicación de la ley."
  },
  {
    title: "¿Qué se establece sobre la interpretación gramatical de la ley?",
    choices: [
      "Siempre se debe seguir el espíritu de la ley.",
      "Cuando el sentido de la ley sea claro, no se desatenderá su tenor literal.",
      "La interpretación literal nunca debe ser utilizada.",
      "La interpretación gramatical es opcional."
    ],
    correctAnswer: "Cuando el sentido de la ley sea claro, no se desatenderá su tenor literal.",
    explanation: "La interpretación gramatical asegura que el lenguaje claro y preciso de la ley se aplique tal como está escrito, evitando interpretaciones arbitrarias."
  },
  {
    title: "¿Cómo se deben entender las palabras de la ley?",
    choices: [
      "En su sentido técnico específico.",
      "En su sentido natural y obvio, según el uso general de las mismas palabras.",
      "En cualquier sentido que sea conveniente en el contexto.",
      "En su sentido metafórico."
    ],
    correctAnswer: "En su sentido natural y obvio, según el uso general de las mismas palabras.",
    explanation: "El uso del sentido natural y obvio de las palabras garantiza que la ley sea accesible y comprensible para todos, evitando confusiones."
  },
  {
    title: "¿Cómo se deben interpretar las palabras técnicas?",
    choices: [
      "En el sentido que les den los que profesan la misma ciencia o arte.",
      "En su sentido más común.",
      "Siempre de manera literal.",
      "En el sentido que determine el juez en cada caso."
    ],
    correctAnswer: "En el sentido que les den los que profesan la misma ciencia o arte.",
    explanation: "Interpretar las palabras técnicas según su uso en la respectiva ciencia o arte asegura que se mantenga la precisión y exactitud en áreas especializadas del derecho."
  },
  {
    title: "¿Quiénes son responsables de los hijos menores de edad no sometidos a patria potestad?",
    choices: [
      "Los abuelos.",
      "El tutor o curador que ejerciere la guarda.",
      "El Estado.",
      "Los hermanos mayores."
    ],
    correctAnswer: "El tutor o curador que ejerciere la guarda.",
    explanation: "Los menores de edad que no están bajo la patria potestad de sus padres deben ser representados por un tutor o curador designado para garantizar su protección y bienestar legal."
  },
  {
    title: "¿Qué se entiende por culpa grave en materia civil?",
    choices: [
      "La falta de diligencia y cuidado ordinario.",
      "No manejar los negocios ajenos con el cuidado que las personas negligentes emplean en sus propios negocios.",
      "La intención positiva de inferir injuria.",
      "La falta de esmerada diligencia en la administración de negocios importantes."
    ],
    correctAnswer: "No manejar los negocios ajenos con el cuidado que las personas negligentes emplean en sus propios negocios.",
    explanation: "La culpa grave en materia civil equivale al dolo y se caracteriza por la falta de cuidado en la gestión de negocios ajenos, incluso por debajo del estándar de las personas normalmente negligentes."
  },
  {
    title: "¿Cómo se define la fuerza mayor o caso fortuito?",
    choices: [
      "Un evento planeado con antelación.",
      "Un imprevisto o que no es posible resistir, como un naufragio o un terremoto.",
      "Un desacuerdo contractual.",
      "Un cambio en la legislación."
    ],
    correctAnswer: "Un imprevisto o que no es posible resistir, como un naufragio o un terremoto.",
    explanation: "La fuerza mayor o caso fortuito se refiere a eventos inesperados e irresistibles que pueden excusar el cumplimiento de ciertas obligaciones debido a su naturaleza imprevisible."
  },
  {
    title: "¿Qué significa el término 'caución' en el contexto del Código Civil?",
    choices: [
      "Una sanción legal por incumplimiento.",
      "Una obligación que se contrae para la seguridad de otra obligación propia o ajena.",
      "Un contrato de compraventa de bienes raíces.",
      "Una forma de prueba testimonial en juicio."
    ],
    correctAnswer: "Una obligación que se contrae para la seguridad de otra obligación propia o ajena.",
    explanation: "Caución se refiere a cualquier obligación que se asume para garantizar el cumplimiento de otra obligación, como una fianza, hipoteca o prenda."
  },
  {
    title: "¿Qué es una presunción legal en el ámbito del Código Civil?",
    choices: [
      "Un hecho que se deduce sin necesidad de antecedentes.",
      "Un hecho deducido de ciertos antecedentes o circunstancias conocidas y determinadas por la ley.",
      "Una prueba concluyente sin posibilidad de refutación.",
      "Una norma que se aplica exclusivamente en derecho penal."
    ],
    correctAnswer: "Un hecho deducido de ciertos antecedentes o circunstancias conocidas y determinadas por la ley.",
    explanation: "Una presunción legal es un hecho que se deduce de ciertos antecedentes o circunstancias que la ley determina, permitiendo en algunos casos probar la no existencia del hecho presumido."
  },
  {
    title: "¿Cómo se computan los plazos de días, meses o años según el Código Civil?",
    choices: [
      "Se computan excluyendo el primer día.",
      "Se computan incluyendo solo días hábiles.",
      "Se computan como plazos completos y corren hasta la medianoche del último día.",
      "Se computan solo en días laborables."
    ],
    correctAnswer: "Se computan como plazos completos y corren hasta la medianoche del último día.",
    explanation: "Todos los plazos de días, meses o años en el Código Civil se entienden como completos y se extienden hasta la medianoche del último día del plazo."
  },
  {
    title: "¿Qué se entiende por 'medidas y pesos' en el Código Civil?",
    choices: [
      "Se refiere a las unidades utilizadas en transacciones internacionales.",
      "Se refiere a las definiciones dadas en el Código Administrativo y Fiscal de la Unión.",
      "Se refiere a las medidas locales de cada región.",
      "Se refiere a las unidades definidas por el Tribunal Supremo."
    ],
    correctAnswer: "Se refiere a las definiciones dadas en el Código Administrativo y Fiscal de la Unión.",
    explanation: "Las medidas de extensión, peso, las pesas y las monedas se entienden según las definiciones establecidas en el Código Administrativo y el Fiscal de la Unión."
  },
  {
    title: "¿Qué incluye el cómputo de plazos en el Código Civil?",
    choices: [
      "Solo días hábiles.",
      "Solo días feriados.",
      "Días hábiles y feriados, a menos que se especifique días útiles.",
      "Solo días laborables."
    ],
    correctAnswer: "Días hábiles y feriados, a menos que se especifique días útiles.",
    explanation: "En los plazos señalados en el Código Civil se incluyen todos los días, salvo que se especifique que el plazo es de días útiles, en cuyo caso no se contarán los días feriados."
  },
  {
    title: "¿Qué tipos de derogación de leyes existen?",
    choices: [
      "Derogación formal y material.",
      "Derogación implícita y explícita.",
      "Derogación expresa y tácita.",
      "Derogación total y parcial."
    ],
    correctAnswer: "Derogación expresa y tácita.",
    explanation: "La derogación de leyes puede ser expresa, cuando se dice explícitamente que una ley deroga otra, o tácita, cuando las nuevas disposiciones no pueden conciliarse con las de la ley anterior."
  },
  {
    title: "¿Qué implica la derogación tácita de una ley?",
    choices: [
      "La eliminación completa de todas las leyes anteriores.",
      "La vigencia de todas las disposiciones anteriores.",
      "La permanencia de las disposiciones de la ley anterior que no contradicen la nueva ley.",
      "La necesidad de un nuevo proceso legislativo."
    ],
    correctAnswer: "La permanencia de las disposiciones de la ley anterior que no contradicen la nueva ley.",
    explanation: "La derogación tácita implica que las disposiciones de la ley anterior que no sean incompatibles con la nueva ley permanecen vigentes."
  },
  {
    title: "¿Cómo se dividen las personas según el Código Civil?",
    choices: [
      "Naturales y jurídicas.",
      "Adultos y menores.",
      "Nacionales y extranjeros.",
      "Trabajadores y empleadores."
    ],
    correctAnswer: "Naturales y jurídicas.",
    explanation: "El Código Civil distingue entre personas naturales, que son los individuos de la especie humana, y personas jurídicas, que son entidades con personalidad jurídica."
  },
  {
    title: "¿Quiénes son consideradas personas naturales?",
    choices: [
      "Solo los mayores de edad.",
      "Solo los ciudadanos de un país.",
      "Todos los individuos de la especie humana, cualquiera que sea su edad, sexo, estirpe o condición.",
      "Solo los contribuyentes."
    ],
    correctAnswer: "Todos los individuos de la especie humana, cualquiera que sea su edad, sexo, estirpe o condición.",
    explanation: "Según el Código Civil, las personas naturales son todos los individuos de la especie humana sin distinción de edad, sexo, estirpe o condición."
  },
  {
    title: "¿Cómo se dividen las personas en relación con su residencia?",
    choices: [
      "Ciudadanos y residentes.",
      "Locales y extranjeros.",
      "Domiciliadas y transeúntes.",
      "Habitantes y visitantes."
    ],
    correctAnswer: "Domiciliadas y transeúntes.",
    explanation: "Las personas se dividen en domiciliadas, que tienen una residencia fija, y transeúntes, que no tienen un domicilio permanente."
  },
  {
    title: "¿Qué constituye el domicilio según el Código Civil?",
    choices: [
      "La propiedad de una vivienda.",
      "La residencia acompañada, real o presuntivamente, del ánimo de permanecer en ella.",
      "La inscripción en el registro electoral.",
      "La dirección de correspondencia."
    ],
    correctAnswer: "La residencia acompañada, real o presuntivamente, del ánimo de permanecer en ella.",
    explanation: "El domicilio consiste en la residencia acompañada del ánimo de permanecer en ella, ya sea de forma real o presuntiva."
  },
  {
    title: "¿Qué determina el domicilio civil de un individuo?",
    choices: [
      "El lugar de nacimiento.",
      "El lugar donde ejerce habitualmente su profesión u oficio.",
      "El país de origen.",
      "La dirección de correo electrónico."
    ],
    correctAnswer: "El lugar donde ejerce habitualmente su profesión u oficio.",
    explanation: "El domicilio civil se determina por el lugar donde un individuo tiene su residencia habitual o donde ejerce su profesión u oficio."
  },
  {
    title: "¿Se presume el ánimo de permanencia por el solo hecho de habitar una casa en un lugar?",
    choices: [
      "Sí, siempre se presume el ánimo de permanencia.",
      "No, si tiene en otra parte su hogar doméstico o si la residencia es accidental.",
      "Sí, si la casa es propia.",
      "No, a menos que se declare ante un notario."
    ],
    correctAnswer: "No, si tiene en otra parte su hogar doméstico o si la residencia es accidental.",
    explanation: "No se presume el ánimo de permanencia si el individuo tiene su hogar doméstico en otra parte o si la residencia es considerada accidental."
  },
  {
    title: "¿Qué circunstancias presumen el ánimo de permanecer en un lugar?",
    choices: [
      "Abrir una tienda, fábrica u otro establecimiento durable para administrarlo en persona.",
      "Residir temporalmente en una casa alquilada.",
      "Tener una propiedad en otro país.",
      "Solo visitar el lugar por vacaciones."
    ],
    correctAnswer: "Abrir una tienda, fábrica u otro establecimiento durable para administrarlo en persona.",
    explanation: "Se presume el ánimo de permanecer en un lugar si se realizan actos que indiquen una intención de establecerse de forma duradera, como abrir un negocio."
  },
  {
    title: "¿Se muda el domicilio civil por residir largo tiempo en otra parte?",
    choices: [
      "Sí, siempre se muda el domicilio civil.",
      "No, si conserva su familia y el asiento principal de sus negocios en el domicilio anterior.",
      "Sí, si se reside más de un año en otro lugar.",
      "No, si se declara ante un juez."
    ],
    correctAnswer: "No, si conserva su familia y el asiento principal de sus negocios en el domicilio anterior.",
    explanation: "El domicilio civil no se considera mudado si la persona mantiene su familia y el centro principal de sus negocios en el domicilio original."
  },
  {
    title: "¿Cómo se presume el domicilio por manifestación ante un prefecto o corregidor?",
    choices: [
      "No se puede presumir el domicilio por manifestación.",
      "Se presume el domicilio si se declara el ánimo de avecindarse en un determinado distrito.",
      "Solo se presume el domicilio si se presenta un contrato de arrendamiento.",
      "La manifestación debe ser ratificada por un juez."
    ],
    correctAnswer: "Se presume el domicilio si se declara el ánimo de avecindarse en un determinado distrito.",
    explanation: "El domicilio se presume si una persona manifiesta ante el prefecto o corregidor su intención de establecerse en un distrito específico."
  },
  {
    title: "¿Qué sucede cuando ocurren circunstancias constitutivas de domicilio en varias secciones territoriales?",
    choices: [
      "Se pierde el domicilio en todas las secciones.",
      "Se entiende que el individuo tiene domicilio en todas ellas.",
      "Solo se considera domicilio la primera sección donde residió.",
      "Debe elegir una sola sección como su domicilio oficial."
    ],
    correctAnswer: "Se entiende que el individuo tiene domicilio en todas ellas.",
    explanation: "Cuando una persona cumple con las condiciones de domicilio en varias secciones territoriales, se considera que tiene domicilio en todas esas secciones."
  },
  {
    title: "¿Cómo afecta la mera residencia en cuanto al domicilio civil?",
    choices: [
      "La mera residencia no tiene ningún efecto.",
      "La mera residencia hace las veces de domicilio civil para quienes no tienen domicilio en otra parte.",
      "La mera residencia cambia automáticamente el domicilio civil.",
      "La mera residencia requiere un registro oficial para ser válida."
    ],
    correctAnswer: "La mera residencia hace las veces de domicilio civil para quienes no tienen domicilio en otra parte.",
    explanation: "Para las personas que no tienen domicilio en otra parte, la mera residencia se considera como su domicilio civil."
  },
  {
    title: "¿Qué permite un contrato en relación con el domicilio?",
    choices: [
      "Establecer un domicilio temporal para vacaciones.",
      "Establecer un domicilio civil especial para actos judiciales o extrajudiciales relacionados con el contrato.",
      "Modificar el domicilio de nacimiento.",
      "Eliminar la necesidad de un domicilio fijo."
    ],
    correctAnswer: "Establecer un domicilio civil especial para actos judiciales o extrajudiciales relacionados con el contrato.",
    explanation: "Un contrato puede establecer un domicilio específico para todos los actos judiciales o extrajudiciales que resulten del mismo, facilitando la administración de justicia."
  },
  {
    title: "¿Dónde se considera el domicilio de establecimientos, corporaciones y asociaciones reconocidas por la ley?",
    choices: [
      "En la ciudad donde se fundaron.",
      "En el lugar donde está situada su administración o dirección.",
      "En el país de origen de los fundadores.",
      "En el lugar de residencia de sus miembros."
    ],
    correctAnswer: "En el lugar donde está situada su administración o dirección.",
    explanation: "El domicilio de estas entidades es el lugar donde se encuentra su administración o dirección, salvo lo que dispongan sus estatutos o leyes especiales."
  },
  {
    title: "¿Cuál es el domicilio de las personas que viven bajo patria potestad o tutela?",
    choices: [
      "El domicilio donde nacieron.",
      "El domicilio de su tutor o curador.",
      "El domicilio de la escuela a la que asisten.",
      "El domicilio que elijan libremente."
    ],
    correctAnswer: "El domicilio de su tutor o curador.",
    explanation: "Las personas que viven bajo patria potestad siguen el domicilio paterno, y las que están bajo tutela o curaduría siguen el domicilio de su tutor o curador."
  },
  {
    title: "¿Cuándo comienza la existencia legal de una persona según el Código Civil?",
    choices: [
      "Al ser concebida.",
      "Al nacer, es decir, al separarse completamente de su madre.",
      "Al cumplir un año de edad.",
      "Al ser registrada oficialmente."
    ],
    correctAnswer: "Al nacer, es decir, al separarse completamente de su madre.",
    explanation: "La existencia legal de una persona comienza al nacer, es decir, cuando se separa completamente del cuerpo de su madre."
  },
  {
    title: "¿Cómo protege la ley al que está por nacer?",
    choices: [
      "No ofrece protección específica.",
      "Solo protege al nacido vivo.",
      "El juez puede tomar providencias para proteger la existencia del no nacido si considera que está en peligro.",
      "Protege al no nacido solo si se solicita formalmente."
    ],
    correctAnswer: "El juez puede tomar providencias para proteger la existencia del no nacido si considera que está en peligro.",
    explanation: "La ley protege la vida del que está por nacer, permitiendo al juez tomar medidas para asegurar su bienestar si se percibe algún peligro."
  },
  {
    title: "¿Qué presume la ley respecto a la concepción en relación con el nacimiento?",
    choices: [
      "Que la concepción ocurrió exactamente nueve meses antes del nacimiento.",
      "Que la concepción ha precedido al nacimiento no menos que ciento ochenta días y no más que trescientos días.",
      "Que la concepción ocurrió en el mismo mes del nacimiento.",
      "Que la concepción puede probarse sin restricciones."
    ],
    correctAnswer: "Que la concepción ha precedido al nacimiento no menos que ciento ochenta días y no más que trescientos días.",
    explanation: "La ley presume que la concepción ocurrió entre ciento ochenta y trescientos días antes del nacimiento, lo que ayuda a establecer la paternidad y otros derechos legales relacionados con el nacimiento."
  },

  {
    title: "¿Qué sucede con las leyes que declaran el sentido de otras leyes según el Artículo 14?",
    choices: [
      "Se entienden incorporadas en las leyes originales pero no afectan sentencias ejecutoriadas.",
      "Anulan automáticamente las leyes originales.",
      "Se aplican solo a futuros casos judiciales.",
      "No tienen ningún efecto legal."
    ],
    correctAnswer: "Se entienden incorporadas en las leyes originales pero no afectan sentencias ejecutoriadas.",
    explanation: "Las leyes interpretativas clarifican el significado de las leyes anteriores y se incorporan a ellas, asegurando coherencia legal, pero no pueden modificar las decisiones judiciales ya finalizadas, respetando así la cosa juzgada."
  },
  {
    title: "¿Pueden renunciarse los derechos conferidos por las leyes según el Artículo 15?",
    choices: [
      "No, los derechos conferidos por las leyes son inalienables.",
      "Sí, siempre que miren al interés individual del renunciante y no esté prohibida la renuncia.",
      "Sí, pero solo mediante un proceso judicial.",
      "No, excepto en casos de fuerza mayor."
    ],
    correctAnswer: "Sí, siempre que miren al interés individual del renunciante y no esté prohibida la renuncia.",
    explanation: "La posibilidad de renunciar a ciertos derechos permite a los individuos mayor libertad y autonomía en sus decisiones personales, siempre y cuando no se contravenga el interés público o normas imperativas."
  },
  {
    title: "¿Pueden derogarse por convenios particulares las leyes según el Artículo 16?",
    choices: [
      "Sí, siempre que las partes estén de acuerdo.",
      "No, las leyes en cuya observancia están interesados el orden y las buenas costumbres no pueden derogarse por convenios particulares.",
      "Sí, pero solo en contratos comerciales.",
      "No, excepto si se trata de leyes fiscales."
    ],
    correctAnswer: "No, las leyes en cuya observancia están interesados el orden y las buenas costumbres no pueden derogarse por convenios particulares.",
    explanation: "La inderogabilidad de ciertas leyes por convenios privados asegura que el orden público y las buenas costumbres prevalezcan, protegiendo así los intereses colectivos y evitando abusos contractuales."
  },
  {
    title: "¿Tienen las sentencias judiciales fuerza obligatoria según el Artículo 17?",
    choices: [
      "Sí, tienen fuerza obligatoria en todos los casos similares.",
      "No, solo tienen fuerza obligatoria respecto de las causas en que fueron pronunciadas.",
      "Sí, pero solo si son emitidas por la Corte Suprema.",
      "No, excepto en casos de delitos graves."
    ],
    correctAnswer: "No, solo tienen fuerza obligatoria respecto de las causas en que fueron pronunciadas.",
    explanation: "Esto garantiza que las decisiones judiciales se limiten a los casos específicos en que fueron dictadas, evitando la creación de jurisprudencia obligatoria y permitiendo la flexibilidad en la interpretación de la ley en casos futuros."
  },
  {
    title: "¿Es obligatoria la ley tanto para nacionales como extranjeros residentes en Colombia según el Artículo 18?",
    choices: [
      "Sí, la ley es obligatoria tanto para nacionales como para extranjeros residentes en Colombia.",
      "No, solo es obligatoria para los ciudadanos colombianos.",
      "Sí, pero solo para extranjeros con residencia permanente.",
      "No, excepto en casos de emergencia nacional."
    ],
    correctAnswer: "Sí, la ley es obligatoria tanto para nacionales como para extranjeros residentes en Colombia.",
    explanation: "Esto asegura que todos los residentes en Colombia, independientemente de su nacionalidad, están sujetos a las mismas normas legales, promoviendo la igualdad ante la ley y el cumplimiento de las obligaciones civiles."
  },
  {
    title: "¿Cómo afecta la extraterritorialidad de la ley a los colombianos residentes en el extranjero según el Artículo 19?",
    choices: [
      "No afecta a los colombianos residentes en el extranjero.",
      "Los colombianos residentes en el extranjero están sujetos a las disposiciones del Código Civil en relación al estado de las personas y las relaciones familiares.",
      "Solo aplica a los bienes inmuebles situados en Colombia.",
      "Solo afecta a los contratos comerciales celebrados en el extranjero."
    ],
    correctAnswer: "Los colombianos residentes en el extranjero están sujetos a las disposiciones del Código Civil en relación al estado de las personas y las relaciones familiares.",
    explanation: "Esto garantiza que ciertos aspectos fundamentales de la vida civil de los colombianos, como su estado civil y relaciones familiares, se rijan por la ley nacional, incluso cuando residen fuera del país, protegiendo así la coherencia legal y los derechos fundamentales."
  },
  {
    title: "¿Cómo se determina la forma de los instrumentos públicos según el Artículo 21?",
    choices: [
      "Por la ley del país en que hayan sido otorgados.",
      "Por las normas internacionales de derecho.",
      "Por la Constitución Nacional.",
      "Por las costumbres locales."
    ],
    correctAnswer: "Por la ley del país en que hayan sido otorgados.",
    explanation: "La determinación de la forma de los instrumentos públicos por la ley del país de origen asegura que estos documentos tengan validez y autenticidad reconocidas, facilitando su aceptación y aplicación en otros países."
  },
  {
    title: "¿Qué función probatoria tienen los instrumentos públicos según el Artículo 22?",
    choices: [
      "No tienen ninguna función probatoria.",
      "Sirven como pruebas irrefutables en cualquier jurisdicción.",
      "Tienen función probatoria solo en asuntos de competencia de la unión y no valen las escrituras privadas.",
      "Solo pueden ser utilizados en casos civiles."
    ],
    correctAnswer: "Tienen función probatoria solo en asuntos de competencia de la unión y no valen las escrituras privadas.",
    explanation: "Esto resalta la importancia de los instrumentos públicos en la evidencia legal, asegurando que solo estos documentos, y no las escrituras privadas, sean aceptados como prueba en ciertos asuntos, lo que protege la integridad y veracidad de la información presentada."
  },
  {
    title: "¿Qué sucede con el estado civil adquirido conforme a la ley vigente según el Artículo 23?",
    choices: [
      "Se pierde si la ley cambia posteriormente.",
      "Subsiste aunque esa ley pierda después su fuerza.",
      "Debe ser reevaluado cada cinco años.",
      "Solo se mantiene en el país de origen."
    ],
    correctAnswer: "Subsiste aunque esa ley pierda después su fuerza.",
    explanation: "La continuidad del estado civil, incluso si la ley cambia, asegura la estabilidad y certeza en las relaciones personales y los derechos adquiridos, evitando situaciones de inseguridad jurídica."
  },
  {
    title: "¿Qué establece el Artículo 25 sobre la interpretación de la ley por el legislador?",
    choices: [
      "La interpretación de la ley solo corresponde a los jueces.",
      "La interpretación de la ley, cuando es oscura, corresponde al legislador.",
      "La interpretación de la ley puede ser realizada por cualquier ciudadano.",
      "La interpretación de la ley solo se hace en tribunales internacionales."
    ],
    correctAnswer: "La interpretación de la ley, cuando es oscura, corresponde al legislador.",
    explanation: "Este principio asegura que la autoridad para clarificar y establecer el significado de leyes ambiguas reside en el legislador, manteniendo la coherencia y uniformidad en el marco legal."
  },
  {
    title: "¿Cómo deben los jueces interpretar la ley en casos particulares según el Artículo 26?",
    choices: [
      "Por medio de consultas públicas.",
      "Aplicando la doctrina y buscando el verdadero sentido de la ley.",
      "Siguiendo estrictamente la interpretación del legislador sin análisis adicional.",
      "Utilizando siempre interpretaciones literales."
    ],
    correctAnswer: "Aplicando la doctrina y buscando el verdadero sentido de la ley.",
    explanation: "La interpretación doctrinal permite a los jueces adaptar las normas legales a las circunstancias particulares de cada caso, buscando la justicia y equidad en la aplicación de la ley, y asegurando que las decisiones sean razonadas y fundamentadas."
  },
  {
    title: "¿Qué establece el Artículo 27 sobre la interpretación gramatical de la ley?",
    choices: [
      "Que siempre se debe seguir el espíritu de la ley.",
      "Que cuando el sentido de la ley sea claro, no se desatenderá su tenor literal.",
      "Que la interpretación literal nunca debe ser utilizada.",
      "Que la interpretación gramatical es opcional."
    ],
    correctAnswer: "Que cuando el sentido de la ley sea claro, no se desatenderá su tenor literal.",
    explanation: "La interpretación gramatical asegura que el lenguaje claro y preciso de la ley se aplique tal como está escrito, evitando interpretaciones arbitrarias y manteniendo la integridad del texto legal."
  },
  {
    title: "¿Cómo se deben entender las palabras de la ley según el Artículo 28?",
    choices: [
      "En su sentido técnico específico.",
      "En su sentido natural y obvio, según el uso general de las mismas palabras.",
      "En cualquier sentido que sea conveniente en el contexto.",
      "En su sentido metafórico."
    ],
    correctAnswer: "En su sentido natural y obvio, según el uso general de las mismas palabras.",
    explanation: "El uso del sentido natural y obvio de las palabras garantiza que la ley sea accesible y comprensible para todos, evitando confusiones y asegurando que las normas se apliquen de manera coherente y predecible."
  },
  {
    title: "¿Cómo se deben interpretar las palabras técnicas según el Artículo 29?",
    choices: [
      "En el sentido que les den los que profesan la misma ciencia o arte.",
      "En su sentido más común.",
      "Siempre de manera literal.",
      "En el sentido que determine el juez en cada caso."
    ],
    correctAnswer: "En el sentido que les den los que profesan la misma ciencia o arte.",
    explanation: "Interpretar las palabras técnicas según su uso en la respectiva ciencia o arte asegura que se mantenga la precisión y exactitud en áreas especializadas del derecho, garantizando que las normas técnicas se apliquen correctamente."
  },
  {
    title: "¿Cómo debe ser utilizado el contexto de la ley según el Artículo 30?",
    choices: [
      "Solo como una referencia secundaria.",
      "Para ilustrar el sentido de cada una de sus partes y asegurar la correspondencia y armonía entre ellas.",
      "Para ignorar las partes oscuras de la ley.",
      "Para modificar el significado literal de las palabras."
    ],
    correctAnswer: "Para ilustrar el sentido de cada una de sus partes y asegurar la correspondencia y armonía entre ellas.",
    explanation: "Utilizar el contexto de la ley ayuda a interpretar sus disposiciones de manera coherente, asegurando que todas las partes de la ley se comprendan y apliquen de forma armoniosa, lo que refuerza la integridad del marco legal."
  },
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
},
{
  title: "¿Cómo define el Código Civil el matrimonio?",
  choices: [
    "Un acuerdo verbal entre dos personas.",
    "Un contrato solemne por el cual un hombre y una mujer se unen con el fin de vivir juntos, de procrear y de auxiliarse mutuamente.",
    "Un contrato informal reconocido solo por la comunidad.",
    "Una asociación temporal sin obligaciones legales."
  ],
  correctAnswer: "Un contrato solemne por el cual un hombre y una mujer se unen con el fin de vivir juntos, de procrear y de auxiliarse mutuamente.",
  explanation: "Según el artículo 113, el matrimonio es un contrato solemne por el cual un hombre y una mujer se unen con el fin de vivir juntos, de procrear y de auxiliarse mutuamente."
},
{
  title: "¿Cómo se constituye y perfecciona el contrato de matrimonio según el Código Civil?",
  choices: [
    "Por un acuerdo verbal entre las partes.",
    "Por el libre y mutuo consentimiento de los contrayentes expresado ante el funcionario competente, con las formalidades y requisitos establecidos en el Código.",
    "Por la aprobación de los padres de los contrayentes.",
    "Por una ceremonia religiosa sin necesidad de formalidades legales."
  ],
  correctAnswer: "Por el libre y mutuo consentimiento de los contrayentes expresado ante el funcionario competente, con las formalidades y requisitos establecidos en el Código.",
  explanation: "El contrato de matrimonio se constituye y perfecciona por el libre y mutuo consentimiento de los contrayentes, expresado ante el funcionario competente y cumpliendo las formalidades y requisitos establecidos en el Código, según el artículo 115."
},
{
  title: "¿Qué capacidad se requiere para contraer matrimonio según el Código Civil?",
  choices: [
    "Ser mayor de 21 años.",
    "Ser mayor de 18 años.",
    "Ser mayor de 16 años con el consentimiento de los padres.",
    "Ser mayor de 15 años."
  ],
  correctAnswer: "Ser mayor de 18 años.",
  explanation: "Según el artículo 116, las personas mayores de 18 años pueden contraer matrimonio libremente."
},
{
  title: "¿Qué permiso se necesita para que los menores de edad puedan contraer matrimonio?",
  choices: [
    "Permiso del juez de familia.",
    "Permiso expreso y por escrito de sus padres legítimos o naturales.",
    "No necesitan permiso.",
    "Permiso del alcalde de su localidad."
  ],
  correctAnswer: "Permiso expreso y por escrito de sus padres legítimos o naturales.",
  explanation: "Los menores de edad necesitan el permiso expreso y por escrito de sus padres legítimos o naturales para contraer matrimonio, según el artículo 117."
},
{
  title: "¿Qué se entiende por la falta del padre o la madre según el Código Civil?",
  choices: [
    "Que no están de acuerdo con el matrimonio.",
    "Que han fallecido, están dementes, ausentes del territorio nacional, o se ignora su paradero.",
    "Que no pueden asistir a la boda.",
    "Que no tienen los recursos para organizar la boda."
  ],
  correctAnswer: "Que han fallecido, están dementes, ausentes del territorio nacional, o se ignora su paradero.",
  explanation: "Se entiende faltar el padre o la madre si han fallecido, están dementes, ausentes del territorio nacional o se ignora su paradero, según el artículo 118."
},
{
  title: "¿Qué implica la privación de la patria potestad respecto al consentimiento para el matrimonio?",
  choices: [
    "No afecta en nada.",
    "El padre o madre privado de la patria potestad no puede dar el consentimiento para el matrimonio.",
    "El padre o madre privado de la patria potestad puede dar el consentimiento con permiso del juez.",
    "El consentimiento debe ser solicitado al tutor legal."
  ],
  correctAnswer: "El padre o madre privado de la patria potestad no puede dar el consentimiento para el matrimonio.",
  explanation: "Según el artículo 119, el padre o madre privado de la patria potestad no puede dar el consentimiento para el matrimonio."
},
{
  title: "¿Quién debe dar el consentimiento para el matrimonio en ausencia de los padres o ascendientes?",
  choices: [
    "El juez de familia.",
    "El curador general o un curador especial.",
    "El alcalde de la localidad.",
    "El tutor legal."
  ],
  correctAnswer: "El curador general o un curador especial.",
  explanation: "A falta de los padres o ascendientes, el consentimiento debe ser dado por el curador general o un curador especial, según el artículo 120."
},
{
  title: "¿Quién está obligado a expresar la causa de su negativa al consentimiento para el matrimonio?",
  choices: [
    "El padre.",
    "La madre.",
    "El curador.",
    "El juez de familia."
  ],
  correctAnswer: "El curador.",
  explanation: "Solo el curador que niega su consentimiento está obligado a expresar la causa, según el artículo 121."
},
{
  title: "¿Qué razones justifican el disenso del curador para el matrimonio?",
  choices: [
    "La oposición personal del curador.",
    "La existencia de cualquier impedimento legal, grave peligro para la salud del menor, vida licenciosa de la persona con quien el menor desea casarse, entre otras.",
    "La falta de acuerdo entre los contrayentes.",
    "La opinión de la comunidad."
  ],
  correctAnswer: "La existencia de cualquier impedimento legal, grave peligro para la salud del menor, vida licenciosa de la persona con quien el menor desea casarse, entre otras.",
  explanation: "Las razones que justifican el disenso del curador incluyen la existencia de cualquier impedimento legal, grave peligro para la salud del menor, vida licenciosa de la persona con quien el menor desea casarse, entre otras, según el artículo 122."
},
{
  title: "¿Qué sucede si no se obtiene el consentimiento necesario para el matrimonio?",
  choices: [
    "El matrimonio se celebra de todas formas.",
    "No podrá procederse a la celebración del matrimonio.",
    "Se requiere una autorización del juez.",
    "El matrimonio se pospone indefinidamente."
  ],
  correctAnswer: "No podrá procederse a la celebración del matrimonio.",
  explanation: "No podrá procederse a la celebración del matrimonio sin el consentimiento necesario, según el artículo 123."
},
{
  title: "¿Qué puede hacer un ascendiente si un descendiente se casa sin el necesario consentimiento?",
  choices: [
    "Puede desheredar al descendiente.",
    "Puede denunciar al descendiente.",
    "Puede otorgar una nueva herencia.",
    "Puede anular el matrimonio."
  ],
  correctAnswer: "Puede desheredar al descendiente.",
  explanation: "Según el artículo 124, el ascendiente puede desheredar al descendiente si este se casa sin el necesario consentimiento."
},
{
  title: "¿Qué puede hacer un ascendiente con respecto a las donaciones si un descendiente se casa sin el necesario consentimiento?",
  choices: [
    "Nada, las donaciones no se ven afectadas.",
    "Puede revocar las donaciones realizadas antes del matrimonio.",
    "Puede aumentar las donaciones.",
    "Puede transferir las donaciones a otra persona."
  ],
  correctAnswer: "Puede revocar las donaciones realizadas antes del matrimonio.",
  explanation: "El ascendiente puede revocar las donaciones realizadas antes del matrimonio si el descendiente se casa sin el necesario consentimiento, según el artículo 125."
},
{
  title: "¿Qué tipos de testigos son inhábiles para presenciar y autorizar un matrimonio?",
  choices: [
    "Menores de dieciocho años.",
    "Familiares de los contrayentes.",
    "Vecinos de los contrayentes.",
    "Personas mayores de sesenta años."
  ],
  correctAnswer: "Menores de dieciocho años.",
  explanation: "Según el artículo 127, los menores de dieciocho años son inhábiles para presenciar y autorizar un matrimonio."
},
{
  title: "¿Qué debe hacer el juez si hay oposición a la celebración del matrimonio?",
  choices: [
    "Desestimar la oposición.",
    "Permitir que los interesados presenten pruebas y resolver la oposición dentro de tres días.",
    "Cancelar el matrimonio automáticamente.",
    "Aplazar el matrimonio indefinidamente."
  ],
  correctAnswer: "Permitir que los interesados presenten pruebas y resolver la oposición dentro de tres días.",
  explanation: "El juez debe permitir que los interesados presenten pruebas y resolver la oposición dentro de tres días, según el artículo 132."
},
{
  title: "¿Qué procedimiento debe seguirse si los contrayentes son de distintos distritos parroquiales?",
  choices: [
    "El matrimonio se celebra sin ninguna formalidad adicional.",
    "El juez de la vecindad de la mujer debe requerir al juez de la vecindad del varón para que fije un edicto.",
    "Los contrayentes deben esperar un año.",
    "El matrimonio debe ser aprobado por un juez superior."
  ],
  correctAnswer: "El juez de la vecindad de la mujer debe requerir al juez de la vecindad del varón para que fije un edicto.",
  explanation: "Si los contrayentes son de distintos distritos parroquiales, el juez de la vecindad de la mujer debe requerir al juez de la vecindad del varón para que fije un edicto, según el artículo 131."
},
{
  title: "¿Qué sucede si el matrimonio se celebra sin oposición y se declara infundada la oposición si se presenta?",
  choices: [
    "El matrimonio no puede celebrarse.",
    "Se procede a señalar día y hora para la celebración del matrimonio dentro de los ocho días siguientes.",
    "El matrimonio se cancela.",
    "Los contrayentes deben solicitar un nuevo permiso."
  ],
  correctAnswer: "Se procede a señalar día y hora para la celebración del matrimonio dentro de los ocho días siguientes.",
  explanation: "Si no hay oposición o esta se declara infundada, se procede a señalar día y hora para la celebración del matrimonio dentro de los ocho días siguientes, según el artículo 134."
},
{
  title: "¿Qué ocurre con un matrimonio celebrado en inminente peligro de muerte sin cumplir todas las formalidades?",
  choices: [
    "Es automáticamente válido.",
    "No surte efectos si no se revalida observando las formalidades legales pasados cuarenta días.",
    "Se cancela inmediatamente.",
    "Se convierte en una unión libre."
  ],
  correctAnswer: "No surte efectos si no se revalida observando las formalidades legales pasados cuarenta días.",
  explanation: "Un matrimonio celebrado en inminente peligro de muerte sin cumplir todas las formalidades no surte efectos si no se revalida observando las formalidades legales pasados cuarenta días, según el artículo 136."
},
{
  title: "¿Qué debe incluir el acta de matrimonio según el Código Civil?",
  choices: [
    "Solo los nombres de los contrayentes.",
    "El lugar, día, mes y año de la celebración, nombres y apellidos de los casados, del juez, testigos y secretario.",
    "Los detalles del vestido de la novia.",
    "La cantidad de invitados presentes."
  ],
  correctAnswer: "El lugar, día, mes y año de la celebración, nombres y apellidos de los casados, del juez, testigos y secretario.",
  explanation: "El acta de matrimonio debe incluir el lugar, día, mes y año de la celebración, los nombres y apellidos de los casados, del juez, testigos y secretario, según el artículo 137."
},
{
  title: "¿Cómo debe manifestarse el consentimiento de los esposos durante la celebración del matrimonio?",
  choices: [
    "A través de una firma.",
    "En voz perceptible o por señales que no dejen duda.",
    "Por escrito.",
    "A través de un representante legal."
  ],
  correctAnswer: "En voz perceptible o por señales que no dejen duda.",
  explanation: "El consentimiento de los esposos debe manifestarse en voz perceptible o por señales que no dejen duda, según el artículo 138."
},
{
  title: "¿Cuándo se considera nulo un matrimonio?",
  choices: [
    "Cuando los contrayentes son menores de edad.",
    "Cuando ha habido error acerca de las personas de los contrayentes, falta de consentimiento, fuerza, miedo, o si los contrayentes están en la misma línea de ascendientes y descendientes o son hermanos.",
    "Cuando los padres no están de acuerdo.",
    "Cuando el matrimonio no se celebra en una iglesia."
  ],
  correctAnswer: "Cuando ha habido error acerca de las personas de los contrayentes, falta de consentimiento, fuerza, miedo, o si los contrayentes están en la misma línea de ascendientes y descendientes o son hermanos.",
  explanation: "El matrimonio es nulo en los casos de error acerca de las personas de los contrayentes, falta de consentimiento, fuerza, miedo, o si los contrayentes están en la misma línea de ascendientes y descendientes o son hermanos, según el artículo 140."
},
{
  title: "¿Cuál es una de las causales de divorcio en el Código Civil?",
  choices: [
      "El desacuerdo sobre las finanzas familiares",
      "Las relaciones sexuales extramatrimoniales de uno de los cónyuges",
      "La falta de comunicación",
      "La diferencia de opiniones políticas"
  ],
  correctAnswer: "Las relaciones sexuales extramatrimoniales de uno de los cónyuges",
  explanation: "Una de las causales de divorcio según el artículo 154 son las relaciones sexuales extramatrimoniales, salvo que el demandante las haya consentido, facilitado o perdonado."
},
{
  title: "¿Qué constituye un grave e injustificado incumplimiento por parte de alguno de los cónyuges?",
  choices: [
      "No participar en actividades sociales",
      "No cumplir con los deberes que la ley les impone como tales y como padres",
      "No compartir los mismos intereses",
      "No hacer tareas domésticas"
  ],
  correctAnswer: "No cumplir con los deberes que la ley les impone como tales y como padres",
  explanation: "El grave e injustificado incumplimiento de los deberes legales como cónyuges y padres es una causal de divorcio, según el artículo 154."
},
{
  title: "¿Qué acciones de uno de los cónyuges pueden ser causales de divorcio según el Código Civil?",
  choices: [
      "Viajar frecuentemente",
      "Los ultrajes, el trato cruel y los maltratamientos de obra",
      "La diferencia de opinión sobre la crianza de los hijos",
      "El desacuerdo sobre la gestión financiera"
  ],
  correctAnswer: "Los ultrajes, el trato cruel y los maltratamientos de obra",
  explanation: "Los ultrajes, el trato cruel y los maltratamientos de obra constituyen causales de divorcio según el artículo 154."
},
{
  title: "¿Cómo afecta la embriaguez habitual de uno de los cónyuges el matrimonio?",
  choices: [
      "No afecta el matrimonio",
      "Es una causal de divorcio",
      "Debe ser perdonada por el otro cónyuge",
      "Solo afecta si ocurre en público"
  ],
  correctAnswer: "Es una causal de divorcio",
  explanation: "La embriaguez habitual de uno de los cónyuges es una causal de divorcio conforme al artículo 154."
},
{
  title: "¿Qué condición sobre el uso de sustancias alucinógenas o estupefacientes puede llevar al divorcio?",
  choices: [
      "El uso habitual, salvo prescripción médica",
      "El uso ocasional en fiestas",
      "El uso de medicamentos recetados",
      "La posesión de estas sustancias"
  ],
  correctAnswer: "El uso habitual, salvo prescripción médica",
  explanation: "El uso habitual de sustancias alucinógenas o estupefacientes, salvo prescripción médica, es una causal de divorcio según el artículo 154."
},
{
  title: "¿Qué tipo de enfermedad puede ser causal de divorcio?",
  choices: [
      "Enfermedades comunes como resfriados",
      "Toda enfermedad o anormalidad grave e incurable que ponga en peligro la salud del otro cónyuge e imposibilite la comunidad matrimonial",
      "Enfermedades que requieren tratamiento médico",
      "Cualquier enfermedad diagnosticada por un médico"
  ],
  correctAnswer: "Toda enfermedad o anormalidad grave e incurable que ponga en peligro la salud del otro cónyuge e imposibilite la comunidad matrimonial",
  explanation: "Según el artículo 154, una enfermedad o anormalidad grave e incurable que ponga en peligro la salud del otro cónyuge e imposibilite la comunidad matrimonial es una causal de divorcio."
},
{
  title: "¿Qué conducta de uno de los cónyuges puede llevar al divorcio?",
  choices: [
      "La falta de intereses comunes",
      "La tendencia a corromper o pervertir al otro, a un descendiente, o a personas que convivan bajo el mismo techo",
      "El desacuerdo sobre la educación de los hijos",
      "La falta de participación en las tareas del hogar"
  ],
  correctAnswer: "La tendencia a corromper o pervertir al otro, a un descendiente, o a personas que convivan bajo el mismo techo",
  explanation: "Según el artículo 154, la conducta tendiente a corromper o pervertir al otro cónyuge, a un descendiente, o a personas que estén a su cuidado y convivan bajo el mismo techo es una causal de divorcio."
},
{
  title: "¿Cuánto tiempo debe durar la separación de cuerpos para ser causal de divorcio?",
  choices: [
      "Un año",
      "Seis meses",
      "Más de dos años",
      "Cinco años"
  ],
  correctAnswer: "Más de dos años",
  explanation: "La separación de cuerpos, judicial o de hecho, que haya perdurado por más de dos años, es una causal de divorcio según el artículo 154."
},
{
  title: "¿Qué debe hacer un juez competente respecto al consentimiento de ambos cónyuges para el divorcio?",
  choices: [
      "Ignorarlo",
      "Rechazarlo",
      "Reconocerlo mediante sentencia",
      "Solicitar una segunda opinión"
  ],
  correctAnswer: "Reconocerlo mediante sentencia",
  explanation: "El consentimiento de ambos cónyuges manifestado ante un juez competente y reconocido por éste mediante sentencia es una causal de divorcio, conforme al artículo 154."
},
{
  title: "¿Quién puede demandar el divorcio y en qué plazo?",
  choices: [
      "El cónyuge que no haya cometido las causales de divorcio, dentro del término de un año desde que tuvo conocimiento de ellas",
      "Cualquier persona interesada, en cualquier momento",
      "Solo el juez, en cualquier momento",
      "Cualquier familiar, dentro de dos años"
  ],
  correctAnswer: "El cónyuge que no haya cometido las causales de divorcio, dentro del término de un año desde que tuvo conocimiento de ellas",
  explanation: "El divorcio solo puede ser demandado por el cónyuge que no haya dado lugar a los hechos que lo motivan y dentro del término de un año desde que tuvo conocimiento de ellos respecto de algunas causales, conforme al artículo 156."
},
{
  title: "¿Quiénes pueden ser partes en el proceso de divorcio según el Código Civil colombiano?",
  choices: [
      "Solo los cónyuges involucrados",
      "Los cónyuges y sus abogados",
      "Cualquier familiar de los cónyuges",
      "Solo el juez y los cónyuges"
  ],
  correctAnswer: "Solo los cónyuges involucrados",
  explanation: "Las partes en el proceso de divorcio son solo los cónyuges involucrados, conforme al artículo 157."
},
{
  title: "¿Qué medidas se pueden tomar durante el proceso de divorcio para proteger los intereses de las partes?",
  choices: [
      "Medidas cautelares para asegurar el cumplimiento de las obligaciones",
      "Multas a los cónyuges",
      "Confiscación de bienes",
      "Suspensión de derechos civiles"
  ],
  correctAnswer: "Medidas cautelares para asegurar el cumplimiento de las obligaciones",
  explanation: "Durante el proceso de divorcio, se pueden tomar medidas cautelares para proteger los intereses de las partes, conforme al artículo 158."
},
{
  title: "¿Qué sucede al finalizar el proceso de divorcio?",
  choices: [
      "Se dicta una sentencia final que puede ser apelada",
      "Se disuelve el matrimonio de inmediato",
      "Se suspenden temporalmente los derechos de los cónyuges",
      "Los cónyuges deben esperar seis meses para la sentencia final"
  ],
  correctAnswer: "Se dicta una sentencia final que puede ser apelada",
  explanation: "Al finalizar el proceso de divorcio, se dicta una sentencia final que puede ser apelada, conforme al artículo 159."
},
{
  title: "¿Qué efectos tiene la sentencia de divorcio sobre el matrimonio civil y religioso?",
  choices: [
      "Solo afecta el matrimonio civil",
      "Disuelve el matrimonio civil y cesan los efectos civiles del matrimonio religioso",
      "Solo afecta el matrimonio religioso",
      "No tiene ningún efecto"
  ],
  correctAnswer: "Disuelve el matrimonio civil y cesan los efectos civiles del matrimonio religioso",
  explanation: "La sentencia de divorcio disuelve el matrimonio civil y cesan los efectos civiles del matrimonio religioso, conforme al artículo 160."
},
{
  title: "¿Cómo se regula la custodia y patria potestad de los hijos después del divorcio?",
  choices: [
      "Por decisión de los cónyuges",
      "Por las disposiciones contenidas en los títulos XII y XIV del libro I del Código Civil",
      "Por la ley del lugar donde viven los hijos",
      "Por un acuerdo entre los cónyuges y el juez"
  ],
  correctAnswer: "Por las disposiciones contenidas en los títulos XII y XIV del libro I del Código Civil",
  explanation: "La custodia y patria potestad de los hijos se regulan por las disposiciones contenidas en los títulos XII y XIV del libro I del Código Civil, conforme al artículo 161."
},
{
  title: "¿Qué puede hacer el cónyuge inocente respecto a las donaciones en caso de divorcio?",
  choices: [
      "Solicitar una compensación económica",
      "Revocar las donaciones hechas al cónyuge culpable",
      "Solicitar la nulidad del matrimonio",
      "Retener todos los bienes conyugales"
  ],
  correctAnswer: "Revocar las donaciones hechas al cónyuge culpable",
  explanation: "En casos de divorcio por ciertas causales, el cónyuge inocente puede revocar las donaciones hechas al cónyuge culpable, conforme al artículo 162."
},
{
  title: "¿Cómo se regula el divorcio de un matrimonio civil celebrado en el extranjero?",
  choices: [
      "Por la ley del país de origen de los cónyuges",
      "Por la ley del lugar donde se celebró el matrimonio",
      "Por la ley del domicilio conyugal",
      "Por las leyes internacionales de divorcio"
  ],
  correctAnswer: "Por la ley del domicilio conyugal",
  explanation: "El divorcio de un matrimonio civil celebrado en el extranjero se regula por la ley del domicilio conyugal, conforme al artículo 163."
},
{
  title: "¿Qué condiciones debe cumplir un divorcio decretado en el exterior para ser válido en Colombia?",
  choices: [
      "Cumplir con las leyes internacionales",
      "Ser notificado al gobierno colombiano",
      "Que la causal sea admitida por la ley colombiana y que el demandado haya sido notificado",
      "Ser aprobado por ambos cónyuges"
  ],
  correctAnswer: "Que la causal sea admitida por la ley colombiana y que el demandado haya sido notificado",
  explanation: "Para que un divorcio decretado en el exterior sea válido en Colombia, la causal debe ser admitida por la ley colombiana y el demandado debe haber sido notificado, conforme al artículo 164."
},
{
  title: "¿En qué casos hay lugar a la separación de cuerpos?",
  choices: [
      "Solo en casos de mutuo consentimiento",
      "Solo en casos de violencia doméstica",
      "En los casos contemplados en el artículo 154 y por mutuo consentimiento de los cónyuges",
      "Solo cuando uno de los cónyuges lo solicita"
  ],
  correctAnswer: "En los casos contemplados en el artículo 154 y por mutuo consentimiento de los cónyuges",
  explanation: "Hay lugar a la separación de cuerpos en los casos contemplados en el artículo 154 y por mutuo consentimiento de los cónyuges, conforme al artículo 165."
},
{
  title: "¿Qué debe hacer el juez para decretar la separación de cuerpos por mutuo consentimiento?",
  choices: [
      "Seguir las restricciones del artículo 155 del Código Civil",
      "Consultar con un abogado de familia",
      "No está sujeto a las restricciones del artículo 155 y debe asegurar el interés de los hijos",
      "Solicitar una autorización especial"
  ],
  correctAnswer: "No está sujeto a las restricciones del artículo 155 y debe asegurar el interés de los hijos",
  explanation: "El juez para decretar la separación de cuerpos por mutuo consentimiento no está sujeto a las restricciones del artículo 155 y debe asegurar el interés de los hijos, conforme al artículo 166."
},
{
  title: "¿Qué efecto tiene la separación de cuerpos sobre el matrimonio?",
  choices: [
      "Disuelve el matrimonio",
      "Suspende la vida en común de los casados",
      "No tiene ningún efecto",
      "Otorga la custodia de los hijos a uno de los cónyuges"
  ],
  correctAnswer: "Suspende la vida en común de los casados",
  explanation: "La separación de cuerpos no disuelve el matrimonio, pero suspende la vida en común de los casados, conforme al artículo 167."
},
{
  title: "¿Son aplicables las normas de divorcio a la separación de cuerpos?",
  choices: [
      "No, son completamente diferentes",
      "Sí, en cuanto no sean incompatibles",
      "Solo en casos de violencia doméstica",
      "Sí, pero solo si ambos cónyuges están de acuerdo"
  ],
  correctAnswer: "Sí, en cuanto no sean incompatibles",
  explanation: "Son aplicables a la separación de cuerpos las normas que regulan el divorcio en cuanto no fueren incompatibles con ella, conforme al artículo 168."
},
{
  title: "¿Qué debe hacer una persona con hijos de un matrimonio anterior si quiere volver a casarse?",
  choices: [
      "Obtener el consentimiento de los hijos",
      "Hacer un inventario solemne de los bienes que esté administrando",
      "Esperar a que los hijos sean mayores de edad",
      "Vender todos los bienes del primer matrimonio"
  ],
  correctAnswer: "Hacer un inventario solemne de los bienes que esté administrando",
  explanation: "La persona que quiera volver a casarse, teniendo hijos de un precedente matrimonio bajo su patria potestad, tutela o curatela, deberá proceder al inventario solemne de los bienes que esté administrando, conforme al artículo 169."
},
{
  title: "¿Es necesario nombrar un curador si los hijos no tienen bienes propios?",
  choices: [
      "No, solo si tienen bienes propios",
      "Sí, siempre se debe nombrar un curador",
      "No, el padre o la madre puede actuar como curador",
      "Sí, pero solo si el juez lo requiere"
  ],
  correctAnswer: "Sí, siempre se debe nombrar un curador",
  explanation: "Habrá lugar al nombramiento de curador aunque los hijos no tengan bienes propios de ninguna clase en poder del padre o de la madre, conforme al artículo 170."
},
{
  title: "¿Qué debe presentar una persona que pretende contraer nuevas nupcias al juez para autorizar el matrimonio?",
  choices: [
      "Una copia del testamento",
      "Una copia auténtica de la providencia de designación de curador, el auto que le discernió el cargo y el inventario de bienes de los menores",
      "Un acuerdo prenupcial",
      "La autorización del otro cónyuge"
  ],
  correctAnswer: "Una copia auténtica de la providencia de designación de curador, el auto que le discernió el cargo y el inventario de bienes de los menores",
  explanation: "El juez se abstendrá de autorizar el matrimonio hasta que la persona presente copia auténtica de la providencia de designación de curador, el auto que le discernió el cargo y el inventario de bienes de los menores, conforme al artículo 171."
},
{
  title: "¿Qué sanción se impone por la mala administración de los bienes del hijo?",
  choices: [
      "Multa económica",
      "Pérdida del usufructo legal y del derecho a sucederle",
      "Cárcel",
      "Nada, no hay sanción"
  ],
  correctAnswer: "Pérdida del usufructo legal y del derecho a sucederle",
  explanation: "La persona que hubiere administrado con culpa grave o dolo, los bienes del hijo, perderá el usufructo legal y el derecho a sucederle como legitimario o como heredero abintestato, conforme al artículo 172."
},
{
  title: "¿Qué establece el artículo 173 sobre el segundo matrimonio de una mujer embarazada?",
  choices: [
      "Prohíbe el segundo matrimonio de una mujer embarazada",
      "Permite el segundo matrimonio con ciertas restricciones",
      "Es inconstitucional",
      "No establece nada al respecto"
  ],
  correctAnswer: "Es inconstitucional",
  explanation: "El artículo 173 es declarado INEXEQUIBLE y, por lo tanto, no es aplicable."
},
{
  title: "¿Qué establece el artículo 174 sobre la celebración de un segundo matrimonio?",
  choices: [
      "Prohíbe la celebración de un segundo matrimonio",
      "Permite el segundo matrimonio con el consentimiento del primer cónyuge",
      "Permite el segundo matrimonio sin restricciones",
      "Es inconstitucional"
  ],
  correctAnswer: "Es inconstitucional",
  explanation: "El artículo 174 es declarado INEXEQUIBLE y, por lo tanto, no es aplicable."
},
{
  title: "¿Cuáles son las obligaciones entre cónyuges según el artículo 176?",
  choices: [
      "Solo obligaciones económicas",
      "Solo obligaciones morales",
      "Guardarse fe, socorrerse y ayudarse mutuamente en todas las circunstancias de la vida",
      "No tienen obligaciones entre sí"
  ],
  correctAnswer: "Guardarse fe, socorrerse y ayudarse mutuamente en todas las circunstancias de la vida",
  explanation: "Los cónyuges están obligados a guardarse fe, socorrerse y ayudarse mutuamente en todas las circunstancias de la vida, conforme al artículo 176."
},
{
  title: "¿Quién tiene la dirección del hogar según el artículo 177?",
  choices: [
      "Solo el marido",
      "Solo la mujer",
      "Ambos cónyuges conjuntamente",
      "El juez de familia"
  ],
  correctAnswer: "Ambos cónyuges conjuntamente",
  explanation: "El marido y la mujer tienen conjuntamente la dirección del hogar, conforme al artículo 177."
},
{
  title: "¿Qué obligación tienen los cónyuges respecto a la cohabitación?",
  choices: [
      "No tienen obligación de vivir juntos",
      "Deben vivir juntos salvo causa justificada",
      "Deben vivir separados por defecto",
      "Solo deben vivir juntos los primeros años de matrimonio"
  ],
  correctAnswer: "Deben vivir juntos salvo causa justificada",
  explanation: "Salvo causa justificada, los cónyuges tienen la obligación de vivir juntos y cada uno de ellos tiene derecho a ser recibido en la casa del otro, conforme al artículo 178."
},
{
  title: "¿Cómo se fija la residencia del hogar en caso de desacuerdo entre los cónyuges?",
  choices: [
      "Por el cónyuge con mayor ingresos",
      "Por el juez teniendo en cuenta el interés de la familia",
      "Por los padres de los cónyuges",
      "Por sorteo"
  ],
  correctAnswer: "Por el juez teniendo en cuenta el interés de la familia",
  explanation: "En caso de desacuerdo, corresponderá al juez fijar la residencia teniendo en cuenta el interés de la familia, conforme al artículo 179."
},
{
  title: "¿Qué sucede con la sociedad conyugal al contraer matrimonio?",
  choices: [
      "Se disuelve automáticamente",
      "Se mantiene separada de bienes",
      "Se contrae sociedad de bienes entre los cónyuges",
      "No se forman sociedades"
  ],
  correctAnswer: "Se contrae sociedad de bienes entre los cónyuges",
  explanation: "Por el hecho del matrimonio se contrae sociedad de bienes entre los cónyuges, conforme al artículo 180."
},
{
  title: "¿Qué capacidad tiene la mujer casada mayor de edad respecto a sus bienes?",
  choices: [
      "Necesita autorización marital para administrar sus bienes",
      "No necesita autorización para administrar y disponer de sus bienes",
      "Debe obtener una licencia del juez para disponer de sus bienes",
      "No puede administrar sus bienes"
  ],
  correctAnswer: "No necesita autorización para administrar y disponer de sus bienes",
  explanation: "La mujer casada, mayor de edad, puede administrar y disponer de sus bienes sin necesidad de autorización marital ni licencia del juez, conforme al artículo 181."
},
{
  title: "¿Cuáles son las excepciones a las reglas de los artículos precedentes según el artículo 194?",
  choices: [
      "El ejercicio de una profesión, industria u oficio por parte de la mujer y la separación de bienes",
      "El cambio de domicilio",
      "El nacimiento de un hijo",
      "El fallecimiento de un cónyuge"
  ],
  correctAnswer: "El ejercicio de una profesión, industria u oficio por parte de la mujer y la separación de bienes",
  explanation: "Las reglas de los artículos precedentes sufren excepciones o modificaciones por el ejercicio de una profesión, industria u oficio por parte de la mujer y por la separación de bienes, conforme al artículo 194."
},
{
  title: "¿Qué dice el artículo 195 sobre la profesión u oficio de la mujer?",
  choices: [
      "El artículo está derogado",
      "La mujer no puede ejercer una profesión",
      "La mujer debe obtener permiso para ejercer una profesión",
      "La mujer tiene prioridad sobre el hombre en la profesión"
  ],
  correctAnswer: "El artículo está derogado",
  explanation: "El artículo 195 fue derogado por la Ley 28 de 1932, la cual introdujo reformas al régimen patrimonial del matrimonio que suprimieron la potestad marital."
},
{
  title: "¿Qué indica el artículo 196 sobre el cónyuge comerciante?",
  choices: [
      "El artículo está derogado",
      "El cónyuge comerciante debe obtener permiso para comerciar",
      "El cónyuge comerciante tiene privilegios fiscales",
      "El cónyuge comerciante debe compartir ganancias"
  ],
  correctAnswer: "El artículo está derogado",
  explanation: "El artículo 196 fue derogado tácitamente por la Ley 28 de 1932, según sostiene la Corte Constitucional en Sentencia C-379-98."
},
{
  title: "¿Qué se entiende por simple separación de bienes según el artículo 197?",
  choices: [
      "Separación de bienes que se efectúa sin divorcio, en virtud de decreto judicial o por disposición de la ley",
      "Separación de bienes mediante acuerdo mutuo",
      "Separación de bienes temporal",
      "Separación de bienes en caso de muerte"
  ],
  correctAnswer: "Separación de bienes que se efectúa sin divorcio, en virtud de decreto judicial o por disposición de la ley",
  explanation: "La simple separación de bienes es la que se efectúa sin divorcio, en virtud de decreto judicial o por disposición de la ley, conforme al artículo 197."
},
{
  title: "¿Puede alguno de los cónyuges renunciar a la facultad de pedir la separación de bienes?",
  choices: [
      "Sí, mediante acuerdo prenupcial",
      "Sí, mediante contrato privado",
      "No, no puede renunciar a esta facultad",
      "Solo con el consentimiento del otro cónyuge"
  ],
  correctAnswer: "No, no puede renunciar a esta facultad",
  explanation: "Ninguno de los cónyuges podrá renunciar en las capitulaciones matrimoniales o fuera de ellas a la facultad de pedir la separación de bienes, conforme al artículo 198."
},
{
  title: "¿Qué debe hacerse para que un cónyuge incapaz pueda pedir la separación de bienes?",
  choices: [
      "Obtener el consentimiento del otro cónyuge",
      "Contratar un abogado",
      "Designar un curador especial",
      "Obtener una orden judicial"
  ],
  correctAnswer: "Designar un curador especial",
  explanation: "Para que el cónyuge incapaz pueda pedir la separación de bienes, deberá designársele un curador especial, conforme al artículo 199."
},
{
  title: "¿En qué casos puede cualquiera de los cónyuges demandar la separación de bienes?",
  choices: [
      "Solo en casos de infidelidad",
      "En los casos de separación de cuerpos y cesación de pagos, quiebra, insolvencia u otros actos que menoscaben gravemente los intereses del demandante",
      "Solo si hay mutuo acuerdo",
      "Solo en casos de violencia doméstica"
  ],
  correctAnswer: "En los casos de separación de cuerpos y cesación de pagos, quiebra, insolvencia u otros actos que menoscaben gravemente los intereses del demandante",
  explanation: "Cualquiera de los cónyuges podrá demandar la separación de bienes por las mismas causas que autorizan la separación de cuerpos y por cesación de pagos, quiebra, insolvencia, etc., conforme al artículo 200."
},
{
  title: "¿Qué sucede con los gananciales después de ejecutoriada la sentencia de separación de bienes?",
  choices: [
      "Ambos cónyuges siguen compartiendo los gananciales",
      "Ninguno de los cónyuges tendrá parte alguna en los gananciales del otro",
      "El cónyuge demandante recibe todos los gananciales",
      "Los gananciales se dividen equitativamente"
  ],
  correctAnswer: "Ninguno de los cónyuges tendrá parte alguna en los gananciales del otro",
  explanation: "Ejecutoriada la sentencia que decreta la separación de bienes, ninguno de los cónyuges tendrá desde entonces parte alguna en los gananciales que resulten de la administración del otro, conforme al artículo 203."
},
{
  title: "¿Qué obligaciones tienen los cónyuges en estado de separación respecto a la familia común?",
  choices: [
      "No tienen ninguna obligación",
      "Deben proveer a las necesidades de la familia común en proporción a sus facultades",
      "El cónyuge demandante debe proveer todas las necesidades",
      "El Estado se hace cargo de la familia"
  ],
  correctAnswer: "Deben proveer a las necesidades de la familia común en proporción a sus facultades",
  explanation: "En el estado de separación, ambos cónyuges deben proveer a las necesidades de la familia común a proporción de sus facultades, conforme al artículo 205."
},
{
  title: "¿Quién es responsable de las deudas contraídas por la mujer separada de bienes?",
  choices: [
      "Solo la mujer es responsable",
      "El marido es siempre responsable",
      "El marido es responsable solo si accedió como fiador o benefició de la obligación",
      "Ambos cónyuges son solidariamente responsables"
  ],
  correctAnswer: "El marido es responsable solo si accedió como fiador o benefició de la obligación",
  explanation: "El marido no será responsable con sus bienes de las deudas de la mujer separada de bienes, excepto cuando hubiere accedido como fiador o de otro modo, o se benefició de la obligación, conforme al artículo 206."
},
{
  title: "¿Cómo se considera al marido si la mujer separada de bienes le confiere la administración de alguna parte de los suyos?",
  choices: [
      "Como copropietario",
      "Como simple mandatario",
      "Como tutor legal",
      "Como fiador"
  ],
  correctAnswer: "Como simple mandatario",
  explanation: "Si la mujer separada de bienes confiere al marido la administración de alguna parte de los suyos, será obligado el marido a la mujer como simple mandatario, conforme al artículo 207."
},
{
  title: "¿Qué debe hacer el juez en un proceso de reclamación o impugnación de la paternidad o maternidad?",
  choices: [
      "Desestimar el caso",
      "Solo escuchar a los padres biológicos",
      "Vincular al presunto padre biológico o madre biológica al proceso",
      "Tomar una decisión sin pruebas"
  ],
  correctAnswer: "Vincular al presunto padre biológico o madre biológica al proceso",
  explanation: "El juez competente debe vincular al presunto padre biológico o madre biológica al proceso de reclamación o impugnación de la paternidad o maternidad, conforme al artículo 218."
},
{
  title: "¿En qué momento pueden los herederos impugnar la paternidad o la maternidad según el artículo 219?",
  choices: [
      "En cualquier momento después de la muerte del padre o la madre",
      "Solo durante los primeros 30 días después del nacimiento del hijo",
      "Desde el momento en que conocieron del fallecimiento del padre o la madre o del nacimiento del hijo",
      "Solo si el hijo no ha sido reconocido en un testamento"
  ],
  correctAnswer: "Desde el momento en que conocieron del fallecimiento del padre o la madre o del nacimiento del hijo",
  explanation: "Los herederos podrán impugnar la paternidad o la maternidad desde el momento en que conocieron del fallecimiento del padre o la madre o desde el momento en que conocieron del nacimiento del hijo, conforme al artículo 219."
},
{
  title: "¿Qué puede solicitar una persona interesada respecto a la ilegitimidad de un hijo nacido después de los trescientos días de la disolución del matrimonio?",
  choices: [
      "Que se declare la legitimidad del hijo",
      "Que el juez declare la ilegitimidad del hijo",
      "Que se anulen todos los derechos del hijo",
      "Que el hijo sea enviado a un orfanato"
  ],
  correctAnswer: "Que el juez declare la ilegitimidad del hijo",
  explanation: "A petición de cualquier persona que tenga interés actual en ello, declarará el juez la ilegitimidad del hijo nacido después de expirados los trescientos días subsiguientes a la disolución del matrimonio, conforme al artículo 220."
},
{
  title: "¿Qué derecho tienen los ascendientes del padre o la madre respecto a la paternidad o maternidad del hijo?",
  choices: [
      "Ningún derecho",
      "Derecho a impugnar la paternidad o maternidad solo después de la muerte del padre o la madre",
      "Derecho a impugnar la paternidad o maternidad en cualquier momento",
      "Derecho a reclamar la paternidad o maternidad en nombre del hijo"
  ],
  correctAnswer: "Derecho a impugnar la paternidad o maternidad solo después de la muerte del padre o la madre",
  explanation: "Los ascendientes del padre o la madre tendrán derecho para impugnar la paternidad o la maternidad solo después de la muerte de estos y a más tardar dentro de los 140 días al conocimiento de la muerte, conforme al artículo 222."
},
{
  title: "¿Qué debe hacer el juez si se impugna la filiación de un hijo menor de edad?",
  choices: [
      "Nada, ya que no se puede impugnar la filiación de un menor",
      "Nombrar un curador para que defienda al menor en el proceso",
      "Transferir la custodia del menor al estado",
      "Ordenar pruebas de ADN"
  ],
  correctAnswer: "Nombrar un curador para que defienda al menor en el proceso",
  explanation: "Una vez impugnada la filiación del hijo, si este fuere menor de edad, el juez nombrará curador al que lo necesitare para que le defienda en el proceso, conforme al artículo 223."
},
{
  title: "¿Qué derecho tiene el actor en un juicio de impugnación de paternidad o maternidad cuando existe sentencia en firme?",
  choices: [
      "Derecho a apelar la decisión",
      "Derecho a que se le indemnice por los perjuicios causados",
      "Derecho a solicitar un nuevo juicio",
      "Derecho a adoptar al hijo"
  ],
  correctAnswer: "Derecho a que se le indemnice por los perjuicios causados",
  explanation: "Durante el juicio de impugnación de la paternidad o la maternidad se presumirá la paternidad del hijo, pero cuando exista sentencia en firme el actor tendrá derecho a que se le indemnice por todos los perjuicios causados, conforme al artículo 224."
},
{
  title: "¿Qué debe hacer una mujer que se creyere embarazada tras la muerte de su marido?",
  choices: [
      "Nada, ya que no tiene ningún derecho",
      "Denunciar su embarazo a los que serían llamados a suceder al difunto",
      "Solicitar la nulidad del matrimonio",
      "Pedir inmediatamente la custodia de los bienes del difunto"
  ],
  correctAnswer: "Denunciar su embarazo a los que serían llamados a suceder al difunto",
  explanation: "Muerto el marido, la mujer que se creyere embarazada podrá denunciarlo a los que, no existiendo el póstumo, serían llamados a suceder al difunto, conforme al artículo 232."
},
{
  title: "¿Qué derecho tiene la madre respecto a los bienes del hijo póstumo?",
  choices: [
      "Ningún derecho sobre los bienes del hijo póstumo",
      "Derecho a la totalidad de los bienes",
      "Derecho a lo necesario para su subsistencia y para el parto",
      "Derecho a vender los bienes del hijo póstumo"
  ],
  correctAnswer: "Derecho a lo necesario para su subsistencia y para el parto",
  explanation: "La madre tendrá derecho para que de los bienes que han de corresponder al póstumo, si nace vivo y en el tiempo debido, se le asigne lo necesario para su subsistencia y para el parto, conforme al artículo 233."
},
{
  title: "¿Qué sucede si se duda a cuál de los dos matrimonios pertenece un hijo cuando la madre ha pasado a otras nupcias?",
  choices: [
      "El hijo se considera ilegítimo",
      "El hijo pertenece al primer matrimonio por defecto",
      "El juez decidirá tomando en consideración las circunstancias y oyendo el dictamen de facultativos si lo creyere conveniente",
      "El hijo pertenece al segundo matrimonio por defecto"
  ],
  correctAnswer: "El juez decidirá tomando en consideración las circunstancias y oyendo el dictamen de facultativos si lo creyere conveniente",
  explanation: "Cuando por haber pasado la madre a otras nupcias se dudare a cuál de los dos matrimonios pertenece un hijo, el juez decidirá tomando en consideración las circunstancias y oyendo el dictamen de facultativos si lo creyere conveniente, conforme al artículo 234."
},
{
  title: "¿Quiénes son obligados a indemnizar por los perjuicios causados por la incertidumbre de la paternidad en caso de nuevas nupcias?",
  choices: [
      "Solo la mujer",
      "Solo el nuevo marido",
      "La mujer y su nuevo marido solidariamente",
      "El padre biológico del hijo"
  ],
  correctAnswer: "La mujer y su nuevo marido solidariamente",
  explanation: "Serán obligados solidariamente a la indemnización de todos los perjuicios y costas ocasionados a terceros por la incertidumbre de la paternidad, la mujer que antes del tiempo debido hubiere pasado a otras nupcias y su nuevo marido, conforme al artículo 235."
},
{
  title: "¿Qué condición debe cumplirse para que un hijo nacido fuera del matrimonio sea legitimado por el matrimonio posterior de sus padres?",
  choices: [
      "El hijo debe haber nacido después del matrimonio",
      "El hijo debe ser reconocido como legítimo por el padre",
      "El matrimonio posterior legitima automáticamente al hijo concebido fuera del matrimonio",
      "El hijo debe solicitar su legitimación"
  ],
  correctAnswer: "El matrimonio posterior legitima automáticamente al hijo concebido fuera del matrimonio",
  explanation: "El matrimonio posterior legitima ipso jure a los hijos concebidos antes y nacidos en él, conforme al artículo 237."
},
{
  title: "¿Qué debe hacer el instrumento público de legitimación cuando la legitimación no se produce ipso jure?",
  choices: [
      "Ser firmado por el padre biológico",
      "Ser registrado en una oficina pública",
      "Notificarse a la persona que se trate de legitimar",
      "Ser aprobado por un juez"
  ],
  correctAnswer: "Notificarse a la persona que se trate de legitimar",
  explanation: "Cuando la legitimación no se produce ipso jure, el instrumento público de legitimación deberá notificarse a la persona que se trate de legitimar, conforme al artículo 240."
},
{
  title: "¿Qué puede hacer una persona capaz respecto a la legitimación?",
  choices: [
      "Nada, la decisión es del padre",
      "Aceptar o repudiar la legitimación libremente",
      "Aceptar la legitimación solo con permiso del tutor",
      "Repudiar la legitimación solo con permiso del curador"
  ],
  correctAnswer: "Aceptar o repudiar la legitimación libremente",
  explanation: "La persona que no necesite de tutor o curador para la administración de sus bienes o que no vive bajo potestad marital, podrá aceptar o repudiar la legitimación libremente, conforme al artículo 241."
},
{
  title: "¿Quién puede aceptar o repudiar la legitimación en nombre de una persona incapaz?",
  choices: [
      "Solo el padre biológico",
      "Solo el cónyuge",
      "El tutor o curador con previo decreto judicial",
      "El juez de familia"
  ],
  correctAnswer: "El tutor o curador con previo decreto judicial",
  explanation: "El que necesite de tutor o curador para la administración de sus bienes no podrá aceptar ni repudiar la legitimación sino por el ministerio o con el consentimiento de su tutor o curador general o de un curador especial, y previo decreto judicial, conforme al artículo 242."
},
{
  title: "¿Cuál es el plazo para declarar la aceptación o repudio de la legitimación?",
  choices: [
      "30 días",
      "60 días",
      "90 días",
      "120 días"
  ],
  correctAnswer: "90 días",
  explanation: "La persona que acepte o repudie, deberá declararlo por instrumento público dentro de los noventa días subsiguientes a la notificación, conforme al artículo 243."
},
{
  title: "¿A quiénes aprovecha la legitimación según el artículo 244?",
  choices: [
      "Solo al hijo legitimado",
      "A todos los descendientes del hijo legitimado",
      "Solo al padre biológico",
      "Solo al cónyuge del hijo legitimado"
  ],
  correctAnswer: "A todos los descendientes del hijo legitimado",
  explanation: "La legitimación aprovecha a la posteridad legítima de los hijos legitimados, conforme al artículo 244."
},
{
  title: "¿Cuál es el estado legal de los hijos legitimados por matrimonio posterior en comparación con los legítimos concebidos en matrimonio?",
  choices: [
      "Son considerados inferiores",
      "Son considerados superiores",
      "Son iguales en todo a los legítimos concebidos en matrimonio",
      "No tienen derechos legales"
  ],
  correctAnswer: "Son iguales en todo a los legítimos concebidos en matrimonio",
  explanation: "Los legitimados por matrimonio posterior son iguales en todo a los legítimos concebidos en matrimonio, conforme al artículo 245."
},
{
  title: "¿Qué se entiende por hijos legítimos en leyes y actos testamentarios?",
  choices: [
      "Solo los concebidos dentro del matrimonio",
      "Incluye a los legitimados por matrimonio posterior, salvo que se exceptúe expresamente",
      "Solo los hijos biológicos",
      "Solo los adoptados"
  ],
  correctAnswer: "Incluye a los legitimados por matrimonio posterior, salvo que se exceptúe expresamente",
  explanation: "La designación de hijos legítimos, aun con la calificación de nacidos de legítimo matrimonio, se entenderá comprender a los legitimados tanto en las leyes y decretos como en los actos testamentarios y en los contratos, salvo que se exceptúe señalada y expresamente a los legitimados, conforme al artículo 246."
},
{
  title: "¿Quién puede impugnar la legitimación del que ha nacido después de celebrado el matrimonio?",
  choices: [
      "Cualquier persona",
      "Solo el padre biológico",
      "Solo las mismas personas y de la misma manera que la legitimidad del concebido en matrimonio",
      "El tutor o curador"
  ],
  correctAnswer: "Solo las mismas personas y de la misma manera que la legitimidad del concebido en matrimonio",
  explanation: "La legitimación del que ha nacido después de celebrado el matrimonio no podrá ser impugnada sino por las mismas personas y de la misma manera que la legitimidad del concebido en matrimonio, conforme al artículo 247."
},
{
  title: "¿En qué casos puede impugnarse la paternidad según el artículo 248?",
  choices: [
      "En cualquier momento y por cualquier motivo",
      "Solo si el hijo no es biológicamente del padre",
      "Solo si el hijo no ha podido tener por padre al que pasa por tal o no ha tenido por madre a la que pasa por tal",
      "Solo si el hijo ha cometido un delito"
  ],
  correctAnswer: "Solo si el hijo no ha podido tener por padre al que pasa por tal o no ha tenido por madre a la que pasa por tal",
  explanation: "Podrá impugnarse la paternidad probando que el hijo no ha podido tener por padre al que pasa por tal o no ha tenido por madre a la que pasa por tal, conforme al artículo 248."
},
{
  title: "¿Quiénes tienen derecho para impugnar la legitimación por omisión de notificación o aceptación?",
  choices: [
      "Cualquier persona interesada",
      "Solo el juez",
      "Solo el supuesto legitimado y sus descendientes legítimos llamados al beneficio",
      "El tutor o curador"
  ],
  correctAnswer: "Solo el supuesto legitimado y sus descendientes legítimos llamados al beneficio",
  explanation: "Solo el supuesto legitimado, y en el caso del artículo 244 sus descendientes legítimos llamados inmediatamente al beneficio de la legitimación, tendrán derecho para impugnarla por haberse omitido la notificación o la aceptación prevenidas, conforme al artículo 249."
},
{
  "title": "¿Qué deben los hijos a sus padres según el artículo 250?",
  "choices": [
      "Dinero",
      "Respeto y obediencia",
      "Independencia",
      "Desobediencia"
  ],
  "correctAnswer": "Respeto y obediencia",
  "explanation": "Según el artículo 250, los hijos deben respeto y obediencia a sus padres."
},
{
  "title": "¿Qué obligación tienen los hijos emancipados hacia sus padres en ciertas circunstancias?",
  "choices": [
      "Ninguna obligación",
      "Cuidar de los padres en su ancianidad o estado de demencia",
      "Obedecer todas sus órdenes",
      "Pagar sus deudas"
  ],
  "correctAnswer": "Cuidar de los padres en su ancianidad o estado de demencia",
  "explanation": "El artículo 251 establece que los hijos emancipados están obligados a cuidar de los padres en su ancianidad, en el estado de demencia y en todas las circunstancias de la vida en que necesitaren sus auxilios."
},
{
  "title": "¿Quiénes tienen derecho al mismo socorro que los padres si estos no están presentes o son insuficientes?",
  "choices": [
      "Hermanos",
      "Tíos",
      "Primos",
      "Ascendientes legítimos"
  ],
  "correctAnswer": "Ascendientes legítimos",
  "explanation": "El artículo 252 establece que tienen derecho al mismo socorro todos los demás ascendientes legítimos en caso de inexistencia o insuficiencia de los inmediatos descendientes."
},
{
  "title": "¿A quién corresponde el cuidado personal de la crianza y educación de los hijos legítimos?",
  "choices": [
      "Solo al padre",
      "Solo a la madre",
      "A los padres de consuno, o al padre o madre sobreviviente",
      "A los abuelos"
  ],
  "correctAnswer": "A los padres de consuno, o al padre o madre sobreviviente",
  "explanation": "El artículo 253 dice que toca de consuno a los padres, o al padre o madre sobreviviente, el cuidado personal de la crianza y educación de sus hijos legítimos."
},
{
  "title": "¿Qué puede hacer el juez en caso de inhabilidad física o moral de ambos padres?",
  "choices": [
      "Confiar el cuidado personal de los hijos a otra persona o personas competentes",
      "Enviar a los hijos a un orfanato",
      "Dejar a los hijos sin supervisión",
      "Permitir que los hijos vivan solos"
  ],
  "correctAnswer": "Confiar el cuidado personal de los hijos a otra persona o personas competentes",
  "explanation": "El artículo 254 permite al juez, en caso de inhabilidad física o moral de ambos padres, confiar el cuidado personal de los hijos a otra persona o personas competentes."
},
{
  "title": "¿Cómo procederá el juez para las resoluciones relacionadas con el cuidado de los hijos?",
  "choices": [
      "Con un juicio largo y complejo",
      "Breve y sumariamente, oyendo a los parientes",
      "Sin escuchar a nadie más",
      "Con una votación pública"
  ],
  "correctAnswer": "Breve y sumariamente, oyendo a los parientes",
  "explanation": "El artículo 255 establece que el juez procederá para todas estas resoluciones breve y sumariamente, oyendo a los parientes."
},
{
  "title": "¿Qué regula el artículo 256 sobre las visitas a los hijos?",
  "choices": [
      "Que los padres no tienen derecho a visitar a sus hijos",
      "Que el juez regulará las visitas según el interés superior del niño",
      "Que solo la madre puede visitar a los hijos",
      "Que las visitas están prohibidas"
  ],
  "correctAnswer": "Que el juez regulará las visitas según el interés superior del niño",
  "explanation": "El artículo 256 establece que el juez ordenará la regulación de visitas teniendo en cuenta el interés superior del niño."
},
{
  "title": "¿De dónde deben provenir los gastos de crianza, educación y establecimiento de los hijos legítimos?",
  "choices": [
      "De la sociedad conyugal",
      "Solo del padre",
      "Solo de la madre",
      "De los abuelos"
  ],
  "correctAnswer": "De la sociedad conyugal",
  "explanation": "El artículo 257 establece que los gastos de crianza, educación y establecimiento de los hijos legítimos pertenecen a la sociedad conyugal."
},
{
  "title": "¿Quién asume los gastos de crianza, educación y establecimiento de los hijos si uno de los padres muere?",
  "choices": [
      "El estado",
      "El padre sobreviviente",
      "Los tíos",
      "Nadie"
  ],
  "correctAnswer": "El padre sobreviviente",
  "explanation": "El artículo 258 establece que, muerto uno de los padres, los gastos de crianza, educación y establecimiento de los hijos tocarán al sobreviviente."
},
{
  "title": "¿Qué puede hacer el juez con respecto a las resoluciones bajo los artículos anteriores?",
  "choices": [
      "Modificarlas o revocarlas si sobreviene motivo justo",
      "Dejarlas como están para siempre",
      "Transferirlas a otra persona",
      "Ignorarlas"
  ],
  "correctAnswer": "Modificarlas o revocarlas si sobreviene motivo justo",
  "explanation": "El artículo 259 establece que las resoluciones del juez pueden modificarse o revocarse si sobreviene motivo justo."
},
{
  "title": "¿A quién pasa la obligación de alimentar y educar al hijo que carece de bienes si los padres no pueden hacerlo?",
  "choices": [
      "A los tíos",
      "A los abuelos legítimos",
      "Al estado",
      "A los hermanos mayores"
  ],
  "correctAnswer": "A los abuelos legítimos",
  "explanation": "El artículo 260 establece que la obligación de alimentar y educar al hijo que carece de bienes pasa a los abuelos legítimos si los padres no pueden hacerlo."
},
{
  "title": "¿Qué facultad tienen las familias y personas encargadas del cuidado de los niños según el artículo 262?",
  "choices": [
      "Vigilar su conducta, corregirlos y sancionarlos sin usar violencia",
      "Pueden usar cualquier método de corrección",
      "Solo pueden observar su comportamiento",
      "No tienen ninguna facultad"
  ],
  "correctAnswer": "Vigilar su conducta, corregirlos y sancionarlos sin usar violencia",
  "explanation": "El artículo 262 establece que las familias, los padres y las personas encargadas del cuidado de los niños tienen la facultad de vigilar su conducta, corregirlos y sancionarlos sin usar violencia."
},
{
  "title": "¿A quién se extienden los derechos conferidos a los padres en ausencia de uno de ellos?",
  "choices": [
      "Al hermano mayor",
      "Al tutor o curador",
      "Al otro padre o a quien tenga el cuidado personal del hijo",
      "A los amigos de la familia"
  ],
  "correctAnswer": "Al otro padre o a quien tenga el cuidado personal del hijo",
  "explanation": "El artículo 263 establece que los derechos conferidos a los padres se extienden al otro padre en ausencia de uno de ellos, o a quien tenga el cuidado personal del hijo."
},
{
  "title": "¿Quién dirige la educación de los hijos menores según el artículo 264?",
  "choices": [
      "Solo el padre",
      "Solo la madre",
      "Ambos padres de común acuerdo",
      "Los abuelos"
  ],
  "correctAnswer": "Ambos padres de común acuerdo",
  "explanation": "El artículo 264 establece que los padres, de común acuerdo, dirigen la educación de sus hijos menores."
},
{
  "title": "¿Qué ocurre con el derecho de dirección de la educación si los hijos son sacados del poder del padre o madre por mala conducta de estos?",
  "choices": [
      "Nada cambia",
      "El derecho cesa respecto de esos hijos",
      "Se transfiere automáticamente a los abuelos",
      "El estado toma el control"
  ],
  "correctAnswer": "El derecho cesa respecto de esos hijos",
  "explanation": "El artículo 265 establece que el derecho de dirección de la educación cesa respecto de los hijos que, por mala conducta del padre o madre, hayan sido sacados de su poder."
},
{
  "title": "¿Pueden los padres reclamar derechos sobre un hijo que han abandonado o llevado a una casa de expósitos?",
  "choices": [
      "Sí, siempre",
      "No, nunca",
      "Solo en algunos casos",
      "Solo si el juez lo permite"
  ],
  "correctAnswer": "No, nunca",
  "explanation": "El artículo 266 establece que los padres no pueden reclamar derechos sobre un hijo que han abandonado o llevado a una casa de expósitos."
},
{
  "title": "¿Qué causa la privación de derechos de los padres según el artículo 267?",
  "choices": [
      "Buena conducta",
      "Mala conducta",
      "Problemas financieros",
      "Enfermedad"
  ],
  "correctAnswer": "Mala conducta",
  "explanation": "El artículo 267 establece que los padres que por mala conducta hayan dado motivo a la providencia de separar a los hijos de su lado incurrirán en la privación de derechos."
},

{
    title: "¿Qué sucede con los derechos que se diferirían a una criatura que está en el vientre materno?",
    choices: [
      "Se otorgan automáticamente a los padres.",
      "Están suspensos hasta que el nacimiento se efectúe.",
      "Se transfieren al Estado.",
      "Se otorgan al tutor legal."
    ],
    correctAnswer: "Están suspensos hasta que el nacimiento se efectúe.",
    explanation: "Según el artículo 93, los derechos diferidos a una criatura en el vientre materno están suspensos hasta que el nacimiento se efectúe."
  },
  {
    title: "¿Cuándo termina la existencia de una persona según el Código Civil?",
    choices: [
      "Al cumplir 100 años.",
      "Con la muerte.",
      "Al ser declarado incapacitado.",
      "Al perder todos sus bienes."
    ],
    correctAnswer: "Con la muerte.",
    explanation: "La existencia de una persona termina con la muerte, conforme al artículo 94."
  },
  {
    "title": "¿Cuándo puede el cónyuge demandar el divorcio según el artículo 156?",
    "choices": [
        "En cualquier momento",
        "Cuando lo desee el demandante",
        "Dentro del término de un año desde que tuvo conocimiento de los hechos",
        "Después de dos años de los hechos"
    ],
    "correctAnswer": "Dentro del término de un año desde que tuvo conocimiento de los hechos",
    "explanation": "El artículo 156 establece que el divorcio sólo podrá ser demandado por el cónyuge que no haya dado lugar a los hechos que lo motivan y dentro del término de un año, contado desde cuando tuvo conocimiento de ellos respecto de las causales 1a. y 7a."
},
{
    "title": "¿Quiénes son las partes en el proceso de divorcio según el artículo 157?",
    "choices": [
        "Los cónyuges únicamente",
        "Los hijos y los cónyuges",
        "Los cónyuges y el juez",
        "Este artículo fue derogado"
    ],
    "correctAnswer": "Este artículo fue derogado",
    "explanation": "El artículo 157 fue derogado por el literal c) del artículo 626 de la Ley 1564 de 2012."
},
{
    "title": "¿Qué medidas cautelares se pueden aplicar en el proceso de divorcio según el artículo 158?",
    "choices": [
        "Ninguna",
        "Embargo de bienes",
        "Retiro de la patria potestad",
        "Este artículo fue derogado"
    ],
    "correctAnswer": "Este artículo fue derogado",
    "explanation": "El artículo 158 fue derogado por el literal c) del artículo 626 de la Ley 1564 de 2012."
},
{
    "title": "¿Qué sucede al finalizar el proceso de divorcio según el artículo 159?",
    "choices": [
        "Los cónyuges se reconcilian",
        "Se inicia un nuevo proceso",
        "El vínculo matrimonial se disuelve",
        "Este artículo fue derogado"
    ],
    "correctAnswer": "Este artículo fue derogado",
    "explanation": "El artículo 159 fue derogado por el literal c) del artículo 626 de la Ley 1564 de 2012."
},
{
    "title": "¿Cuáles son los efectos del divorcio según el artículo 160?",
    "choices": [
        "No hay efectos civiles",
        "Se mantiene la sociedad conyugal",
        "Se disuelven el vínculo matrimonial y la sociedad conyugal",
        "Los hijos pierden derechos"
    ],
    "correctAnswer": "Se disuelven el vínculo matrimonial y la sociedad conyugal",
    "explanation": "El artículo 160 establece que, ejecutoriada la sentencia que decreta el divorcio, se disuelven el vínculo matrimonial y la sociedad conyugal, pero subsisten los deberes y derechos de las partes respecto de los hijos comunes."
},
{
    "title": "¿Qué efectos tiene el divorcio respecto a los hijos según el artículo 161?",
    "choices": [
        "Los hijos pierden derechos",
        "Los efectos se rigen por el Código Penal",
        "Se rigen por las disposiciones contenidas en los títulos XII y XIV del libro I del Código Civil",
        "No hay efectos específicos"
    ],
    "correctAnswer": "Se rigen por las disposiciones contenidas en los títulos XII y XIV del libro I del Código Civil",
    "explanation": "El artículo 161 establece que los efectos del divorcio respecto de los hijos comunes se rigen por las disposiciones contenidas en los títulos XII y XIV del libro I del Código Civil."
},
{
    "title": "¿Qué puede hacer el cónyuge inocente respecto a las donaciones según el artículo 162?",
    "choices": [
        "Nada",
        "Reclamar porción conyugal",
        "Revocar las donaciones hechas al cónyuge culpable",
        "Herederar abintestato"
    ],
    "correctAnswer": "Revocar las donaciones hechas al cónyuge culpable",
    "explanation": "El artículo 162 establece que el cónyuge inocente puede revocar las donaciones hechas por causa de matrimonio al cónyuge culpable en caso de divorcio."
},
{
    "title": "¿Cómo se rige el divorcio de un matrimonio realizado en el extranjero según el artículo 163?",
    "choices": [
        "Por la ley colombiana",
        "Por la ley del país de origen",
        "Por la ley del domicilio conyugal",
        "Por la ley internacional"
    ],
    "correctAnswer": "Por la ley del domicilio conyugal",
    "explanation": "El artículo 163 establece que el divorcio del matrimonio civil celebrado en el extranjero se rige por la ley del domicilio conyugal."
},
{
    "title": "¿Qué condición debe cumplirse para que el divorcio decretado en el exterior produzca efectos según el artículo 164?",
    "choices": [
        "Debe ser admitido por la ley colombiana",
        "No necesita condiciones",
        "Debe ser notificado en Colombia",
        "Debe ser aprobado por el Congreso"
    ],
    "correctAnswer": "Debe ser admitido por la ley colombiana",
    "explanation": "El artículo 164 establece que el divorcio decretado en el exterior respecto del matrimonio civil celebrado en Colombia solo producirá efectos si la causal respectiva es admitida por la ley colombiana y el demandado ha sido notificado personalmente o emplazado según la ley de su domicilio."
},
{
    "title": "¿En qué casos hay lugar a la separación de cuerpos según el artículo 165?",
    "choices": [
        "Por decisión unilateral",
        "Por mutuo consentimiento manifestado ante el juez",
        "Por incumplimiento de deberes conyugales",
        "Este artículo fue derogado"
    ],
    "correctAnswer": "Por mutuo consentimiento manifestado ante el juez",
    "explanation": "El artículo 165 establece que hay lugar a la separación de cuerpos en los casos contemplados en el artículo 154 del Código Civil y por mutuo consentimiento de los cónyuges manifestado ante el juez competente."
},
{
    "title": "¿Qué deben indicar los cónyuges al expresar su mutuo consentimiento en la separación según el artículo 166?",
    "choices": [
        "Nada",
        "El estado en que queda la sociedad conyugal",
        "La duración de la separación",
        "Ambas respuestas anteriores"
    ],
    "correctAnswer": "Ambas respuestas anteriores",
    "explanation": "El artículo 166 establece que los cónyuges, al expresar su mutuo consentimiento en la separación, deben indicar el estado en que queda la sociedad conyugal y la duración de la separación si es temporal."
},
{
    "title": "¿Qué efecto tiene la separación de cuerpos según el artículo 167?",
    "choices": [
        "Disuelve el matrimonio",
        "Suspende la vida en común de los casados",
        "No tiene efecto alguno",
        "Elimina los deberes conyugales"
    ],
    "correctAnswer": "Suspende la vida en común de los casados",
    "explanation": "El artículo 167 establece que la separación de cuerpos no disuelve el matrimonio, pero suspende la vida en común de los casados."
},
{
    "title": "¿Qué normas se aplican a la separación de cuerpos según el artículo 168?",
    "choices": [
        "Las normas de la separación de bienes",
        "Las normas del matrimonio",
        "Las normas que regulan el divorcio",
        "Ninguna norma aplica"
    ],
    "correctAnswer": "Las normas que regulan el divorcio",
    "explanation": "El artículo 168 establece que son aplicables a la separación de cuerpos las normas que regulan el divorcio en cuanto no fueren incompatibles con ella."
},
{
    "title": "¿Qué debe hacer una persona con hijos de un matrimonio anterior antes de volver a casarse según el artículo 169?",
    "choices": [
        "Nada",
        "Pedir permiso a sus hijos",
        "Hacer un inventario solemne de los bienes que esté administrando",
        "Divorciarse legalmente"
    ],
    "correctAnswer": "Hacer un inventario solemne de los bienes que esté administrando",
    "explanation": "El artículo 169 establece que una persona con hijos de un matrimonio anterior debe proceder al inventario solemne de los bienes que esté administrando antes de volver a casarse."
},
{
    "title": "¿Habrá lugar al nombramiento de curador si los hijos no tienen bienes según el artículo 170?",
    "choices": [
        "Sí",
        "No",
        "Solo si el juez lo considera necesario",
        "Depende de la situación económica del padre"
    ],
    "correctAnswer": "Sí",
    "explanation": "El artículo 170 establece que habrá lugar al nombramiento de curador aunque los hijos no tengan bienes propios de ninguna clase en poder del padre o de la madre."
},
{
    "title": "¿Qué debe presentar la persona que pretende contraer nuevas nupcias al juez según el artículo 171?",
    "choices": [
        "Un testamento",
        "Una copia auténtica de la providencia por la cual se designó curador a los hijos",
        "Una autorización firmada por los hijos",
        "Nada"
    ],
    "correctAnswer": "Una copia auténtica de la providencia por la cual se designó curador a los hijos",
    "explanation": "El artículo 171 establece que el juez se abstendrá de autorizar el matrimonio hasta que la persona que pretende contraer nuevas nupcias presente una copia auténtica de la providencia por la cual se designó curador a los hijos."
},
{
    "title": "¿Qué ocurre si una persona administra con culpa grave los bienes del hijo según el artículo 172?",
    "choices": [
        "Pierde el derecho a sucederle como legitimario",
        "No ocurre nada",
        "Recibe una multa",
        "Es condenado a prisión"
    ],
    "correctAnswer": "Pierde el derecho a sucederle como legitimario",
    "explanation": "El artículo 172 establece que la persona que administra con culpa grave o dolo los bienes del hijo perderá el usufructo legal y el derecho a sucederle como legitimario o como heredero abintestato."
},
{
    "title": "¿Puede una mujer embarazada celebrar un segundo matrimonio según el artículo 173?",
    "choices": [
        "Sí",
        "No",
        "Solo con autorización judicial",
        "Solo si el embarazo es reconocido por el futuro esposo"
    ],
    "correctAnswer": "No",
    "explanation": "El artículo 173 es declarado inexequible, lo que indica que una mujer embarazada no puede celebrar un segundo matrimonio."
},
{
    "title": "¿Qué prohibición establece el artículo 174 respecto a las segundas nupcias?",
    "choices": [
        "No se puede casar con el mismo cónyuge",
        "No se puede casar si hay hijos menores",
        "No se puede celebrar un segundo matrimonio mientras esté vigente el primero",
        "Este artículo fue declarado inexequible"
    ],
    "correctAnswer": "Este artículo fue declarado inexequible",
    "explanation": "El artículo 174 fue declarado inexequible, por lo tanto, no establece ninguna prohibición vigente."
},
{
    "title": "¿Qué obligación tienen los cónyuges entre sí según el artículo 176?",
    "choices": [
        "No tienen ninguna obligación",
        "Están obligados a guardarse fe, a socorrerse y ayudarse mutuamente",
        "Deben vivir separados",
        "Deben compartir todos los bienes"
    ],
    "correctAnswer": "Están obligados a guardarse fe, a socorrerse y ayudarse mutuamente",
    "explanation": "El artículo 176 establece que los cónyuges están obligados a guardarse fe, a socorrerse y ayudarse mutuamente en todas las circunstancias de la vida."
},
{
    "title": "¿Quién tiene la dirección del hogar según el artículo 177?",
    "choices": [
        "El marido",
        "La mujer",
        "Ambos cónyuges conjuntamente",
        "El hijo mayor"
    ],
    "correctAnswer": "Ambos cónyuges conjuntamente",
    "explanation": "El artículo 177 establece que el marido y la mujer tienen conjuntamente la dirección del hogar."
},
{
    "title": "¿Tienen los cónyuges la obligación de vivir juntos según el artículo 178?",
    "choices": [
        "No, pueden vivir separados",
        "Sí, salvo causa justificada",
        "Solo si tienen hijos",
        "Solo si el juez lo ordena"
    ],
    "correctAnswer": "Sí, salvo causa justificada",
    "explanation": "El artículo 178 establece que, salvo causa justificada, los cónyuges tienen la obligación de vivir juntos."
},
{
    "title": "¿Quién fija la residencia del hogar en caso de desacuerdo según el artículo 179?",
    "choices": [
        "El marido",
        "La mujer",
        "El juez",
        "El hijo mayor"
    ],
    "correctAnswer": "El juez",
    "explanation": "El artículo 179 establece que, en caso de desacuerdo, corresponde al juez fijar la residencia del hogar teniendo en cuenta el interés de la familia."
},
{
    "title": "¿Qué ocurre con la sociedad de bienes por el hecho del matrimonio según el artículo 180?",
    "choices": [
        "Se disuelve",
        "Se mantiene separada",
        "Se contrae",
        "Se elimina"
    ],
    "correctAnswer": "Se contrae",
    "explanation": "El artículo 180 establece que por el hecho del matrimonio se contrae una sociedad de bienes entre los cónyuges, según las reglas del título 22, libro IV del Código Civil."
},
{
    "title": "¿Necesita la mujer casada mayor de edad autorización marital para administrar sus bienes según el artículo 181?",
    "choices": [
        "Sí",
        "No",
        "Solo en casos especiales",
        "Depende de la ley"
    ],
    "correctAnswer": "No",
    "explanation": "El artículo 181 establece que la mujer casada, mayor de edad, puede administrar y disponer de sus bienes sin necesidad de autorización marital ni licencia del juez."
},
{
    "title": "¿Cuál es el estado legal de los artículos 182 a 187 según sus notas de vigencia?",
    "choices": [
        "Están vigentes",
        "Están modificados",
        "Están derogados",
        "Están en revisión"
    ],
    "correctAnswer": "Están derogados",
    "explanation": "Los artículos 182 a 187 fueron derogados por la Ley 28 de 1932, la cual introdujo reformas al régimen patrimonial del matrimonio que suprimieron la potestad marital."
}
,
{
  "title": "¿Qué se entiende por impugnación de la maternidad según el artículo 335?",
  "choices": [
      "La madre puede renunciar a sus derechos sobre el hijo",
      "La impugnación de la maternidad se refiere a probar que una mujer no es la verdadera madre del hijo",
      "El hijo puede elegir a sus padres biológicos",
      "La madre puede reclamar la patria potestad sobre cualquier niño"
  ],
  "correctAnswer": "La impugnación de la maternidad se refiere a probar que una mujer no es la verdadera madre del hijo",
  "explanation": "El artículo 335 establece que la impugnación de la maternidad es el hecho de probar que una mujer no es la verdadera madre del hijo que pasa por suyo, mediante la demostración de un falso parto o suplantación del hijo."
},
{
  "title": "¿Quiénes tienen derecho a impugnar la maternidad según el artículo 335?",
  "choices": [
      "Solo el padre biológico",
      "Cualquier persona interesada",
      "El marido de la supuesta madre, la madre supuesta, los verdaderos padres legítimos y la verdadera madre",
      "Solo la madre biológica"
  ],
  "correctAnswer": "El marido de la supuesta madre, la madre supuesta, los verdaderos padres legítimos y la verdadera madre",
  "explanation": "El artículo 335 menciona que tienen derecho a impugnar la maternidad el marido de la supuesta madre, la madre supuesta, los verdaderos padre y madre legítimos del hijo, y la verdadera madre."
},
{
  "title": "¿En qué circunstancias fue derogado el artículo 336?",
  "choices": [
      "Por la Ley 1060 de 2006",
      "Por la Ley 153 de 1887",
      "Por el Decreto 2820 de 1974",
      "No fue derogado"
  ],
  "correctAnswer": "Por la Ley 1060 de 2006",
  "explanation": "El artículo 336 fue derogado por el artículo 12 de la Ley 1060 de 2006."
},
{
  "title": "¿Qué derecho se concede a terceros según el artículo 337?",
  "choices": [
      "Impugnar la paternidad",
      "Adoptar al hijo",
      "Impugnar la maternidad si perjudica sus derechos sucesorios",
      "Reclamar la patria potestad del hijo"
  ],
  "correctAnswer": "Impugnar la maternidad si perjudica sus derechos sucesorios",
  "explanation": "El artículo 337 establece que se concede la acción de impugnación de la maternidad a toda persona a quien la maternidad putativa perjudique actualmente en sus derechos sobre sucesión testamentaria o abintestato."
},
{
  "title": "¿Qué sucede con los que participaron en el fraude de falso parto según el artículo 338?",
  "choices": [
      "Podrán reclamar los derechos de patria potestad",
      "Podrán exigir alimentos al hijo",
      "No podrán beneficiarse del descubrimiento del fraude",
      "Podrán suceder en los bienes del hijo por causa de muerte"
  ],
  "correctAnswer": "No podrán beneficiarse del descubrimiento del fraude",
  "explanation": "El artículo 338 establece que aquellos que participaron en el fraude de falso parto o suplantación no podrán beneficiarse del descubrimiento del fraude, ni aun para ejercer sobre el hijo los derechos de patria potestad, exigirle alimentos o suceder en sus bienes por causa de muerte."
}
,

  {
    title: "¿Qué se asume si dos o más personas perecen en un mismo acontecimiento y no puede saberse el orden de sus fallecimientos?",
    choices: [
      "Que una persona sobrevivió a las otras.",
      "Que todas perecieron en el mismo momento.",
      "Que las personas desaparecieron.",
      "Que el evento no afectó a ninguna de las personas."
    ],
    correctAnswer: "Que todas perecieron en el mismo momento.",
    explanation: "Si no puede determinarse el orden de fallecimientos en un mismo acontecimiento, se procede como si todas las personas hubiesen perecido en el mismo momento, según el artículo 95."
  },
  {
    title: "¿Qué se considera cuando una persona desaparece del lugar de su domicilio ignorándose su paradero?",
    choices: [
      "Se asume que ha fallecido.",
      "Se mira el desaparecimiento como mera ausencia.",
      "Se le declara prófugo.",
      "Se le confiscan todos sus bienes."
    ],
    correctAnswer: "Se mira el desaparecimiento como mera ausencia.",
    explanation: "Según el artículo 96, si una persona desaparece de su domicilio y se ignora su paradero, se considera como mera ausencia y se encargarán de sus intereses sus apoderados o representantes legales."
  },
  {
    title: "¿Qué condiciones deben cumplirse para declarar la presunción de muerte de una persona ausente?",
    choices: [
      "Que pasen cinco años sin noticias.",
      "Que pasen dos años sin noticias y se cumplan condiciones específicas.",
      "Que se encuentre el cuerpo.",
      "Que la familia lo solicite."
    ],
    correctAnswer: "Que pasen dos años sin noticias y se cumplan condiciones específicas.",
    explanation: "Para declarar la presunción de muerte, deben pasar dos años sin noticias del ausente y cumplirse varias condiciones, según el artículo 97."
  },
  {
    title: "¿Quiénes son considerados herederos presuntivos de una persona desaparecida?",
    choices: [
      "Sus amigos cercanos.",
      "El Estado.",
      "Los testamentarios o legítimos que lo eran a la fecha de la muerte presunta.",
      "Cualquier persona que lo reclame."
    ],
    correctAnswer: "Los testamentarios o legítimos que lo eran a la fecha de la muerte presunta.",
    explanation: "Los herederos presuntivos son los testamentarios o legítimos a la fecha de la muerte presunta, conforme al artículo 100."
  },
  {
    title: "¿Qué ocurre con el derecho de posesión definitiva si el desaparecido reaparece?",
    choices: [
      "El derecho de posesión se mantiene.",
      "El decreto de posesión definitiva se rescinde a favor del desaparecido.",
      "El desaparecido pierde todos sus derechos.",
      "El derecho de posesión se transfiere al Estado."
    ],
    correctAnswer: "El decreto de posesión definitiva se rescinde a favor del desaparecido.",
    explanation: "Si el desaparecido reaparece, el decreto de posesión definitiva puede rescindirse a su favor, conforme al artículo 108."
  },
  {
    title: "¿Qué establece el Código Civil sobre los esponsales o desposorios?",
    choices: [
      "Que son un contrato legalmente vinculante.",
      "Que no producen obligación alguna ante la ley civil.",
      "Que siempre requieren la aprobación de un juez.",
      "Que implican una sanción en caso de incumplimiento."
    ],
    correctAnswer: "Que no producen obligación alguna ante la ley civil.",
    explanation: "Los esponsales o desposorios no producen ninguna obligación ante la ley civil, según el artículo 110."
  },
  {
    title: "¿Puede pedirse una multa por incumplimiento de la promesa de matrimonio?",
    choices: [
      "Sí, siempre que se haya estipulado en el acuerdo.",
      "No, la promesa de matrimonio no produce obligaciones legales.",
      "Sí, si ambas partes están de acuerdo.",
      "No, a menos que se haya registrado oficialmente."
    ],
    correctAnswer: "No, la promesa de matrimonio no produce obligaciones legales.",
    explanation: "No puede pedirse una multa por incumplimiento de la promesa de matrimonio, conforme al artículo 111."
  },
  {
    title: "¿Qué se puede demandar si un matrimonio prometido no se efectúa?",
    choices: [
      "Indemnización por daños y perjuicios.",
      "Restitución de las cosas donadas bajo la condición de matrimonio.",
      "Multa compensatoria.",
      "Nada, ya que no se producen obligaciones legales."
    ],
    correctAnswer: "Restitución de las cosas donadas bajo la condición de matrimonio.",
    explanation: "Si un matrimonio prometido no se efectúa, se puede demandar la restitución de las cosas donadas bajo esa condición, según el artículo 112."
  },
  {
    title: "¿Qué sucede con los derechos que se diferirían a una criatura que está en el vientre materno?",
    choices: [
      "Se otorgan automáticamente a los padres.",
      "Están suspensos hasta que el nacimiento se efectúe.",
      "Se transfieren al Estado.",
      "Se otorgan al tutor legal."
    ],
    correctAnswer: "Están suspensos hasta que el nacimiento se efectúe.",
    explanation: "Según el artículo 93, los derechos diferidos a una criatura en el vientre materno están suspensos hasta que el nacimiento se efectúe."
  },
  {
    title: "¿Cuándo termina la existencia de una persona según el Código Civil?",
    choices: [
      "Al cumplir 100 años.",
      "Con la muerte.",
      "Al ser declarado incapacitado.",
      "Al perder todos sus bienes."
    ],
    correctAnswer: "Con la muerte.",
    explanation: "La existencia de una persona termina con la muerte, conforme al artículo 94."
  },
  {
    title: "¿Qué se asume si dos o más personas perecen en un mismo acontecimiento y no puede saberse el orden de sus fallecimientos?",
    choices: [
      "Que una persona sobrevivió a las otras.",
      "Que todas perecieron en el mismo momento.",
      "Que las personas desaparecieron.",
      "Que el evento no afectó a ninguna de las personas."
    ],
    correctAnswer: "Que todas perecieron en el mismo momento.",
    explanation: "Si no puede determinarse el orden de fallecimientos en un mismo acontecimiento, se procede como si todas las personas hubiesen perecido en el mismo momento, según el artículo 95."
  },
  {
    title: "¿Qué se considera cuando una persona desaparece del lugar de su domicilio ignorándose su paradero?",
    choices: [
      "Se asume que ha fallecido.",
      "Se mira el desaparecimiento como mera ausencia.",
      "Se le declara prófugo.",
      "Se le confiscan todos sus bienes."
    ],
    correctAnswer: "Se mira el desaparecimiento como mera ausencia.",
    explanation: "Según el artículo 96, si una persona desaparece de su domicilio y se ignora su paradero, se considera como mera ausencia y se encargarán de sus intereses sus apoderados o representantes legales."
  },
  {
    title: "¿Qué condiciones deben cumplirse para declarar la presunción de muerte de una persona ausente?",
    choices: [
      "Que pasen cinco años sin noticias.",
      "Que pasen dos años sin noticias y se cumplan condiciones específicas.",
      "Que se encuentre el cuerpo.",
      "Que la familia lo solicite."
    ],
    correctAnswer: "Que pasen dos años sin noticias y se cumplan condiciones específicas.",
    explanation: "Para declarar la presunción de muerte, deben pasar dos años sin noticias del ausente y cumplirse varias condiciones, según el artículo 97."
  },
  {
    title: "¿Quiénes son considerados herederos presuntivos de una persona desaparecida?",
    choices: [
      "Sus amigos cercanos.",
      "El Estado.",
      "Los testamentarios o legítimos que lo eran a la fecha de la muerte presunta.",
      "Cualquier persona que lo reclame."
    ],
    correctAnswer: "Los testamentarios o legítimos que lo eran a la fecha de la muerte presunta.",
    explanation: "Los herederos presuntivos son los testamentarios o legítimos a la fecha de la muerte presunta, conforme al artículo 100."
  },
  {
    title: "¿Qué ocurre con el derecho de posesión definitiva si el desaparecido reaparece?",
    choices: [
      "El derecho de posesión se mantiene.",
      "El decreto de posesión definitiva se rescinde a favor del desaparecido.",
      "El desaparecido pierde todos sus derechos.",
      "El derecho de posesión se transfiere al Estado."
    ],
    correctAnswer: "El decreto de posesión definitiva se rescinde a favor del desaparecido.",
    explanation: "Si el desaparecido reaparece, el decreto de posesión definitiva puede rescindirse a su favor, conforme al artículo 108."
  },
  {
    title: "¿Qué establece el Código Civil sobre los esponsales o desposorios?",
    choices: [
      "Que son un contrato legalmente vinculante.",
      "Que no producen obligación alguna ante la ley civil.",
      "Que siempre requieren la aprobación de un juez.",
      "Que implican una sanción en caso de incumplimiento."
    ],
    correctAnswer: "Que no producen obligación alguna ante la ley civil.",
    explanation: "Los esponsales o desposorios no producen ninguna obligación ante la ley civil, según el artículo 110."
  },
  {
    title: "¿Puede pedirse una multa por incumplimiento de la promesa de matrimonio?",
    choices: [
      "Sí, siempre que se haya estipulado en el acuerdo.",
      "No, la promesa de matrimonio no produce obligaciones legales.",
      "Sí, si ambas partes están de acuerdo.",
      "No, a menos que se haya registrado oficialmente."
    ],
    correctAnswer: "No, la promesa de matrimonio no produce obligaciones legales.",
    explanation: "No puede pedirse una multa por incumplimiento de la promesa de matrimonio, conforme al artículo 111."
  },
  {
    title: "¿Qué se puede demandar si un matrimonio prometido no se efectúa?",
    choices: [
      "Indemnización por daños y perjuicios.",
      "Restitución de las cosas donadas bajo la condición de matrimonio.",
      "Multa compensatoria.",
      "Nada, ya que no se producen obligaciones legales."
    ],
    correctAnswer: "Restitución de las cosas donadas bajo la condición de matrimonio.",
    explanation: "Si un matrimonio prometido no se efectúa, se puede demandar la restitución de las cosas donadas bajo esa condición, según el artículo 112."
  },
];

// Función para seleccionar aleatoriamente 20 preguntas
function getRandomQuestions(allQuestions, numQuestions = 10) {
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
      userAnswers.push({
          question: questions[currentQuestionIndex].title,
          selected: selectedChoice.value,
          correctAnswer: questions[currentQuestionIndex].correctAnswer,
          correct: selectedChoice.value === questions[currentQuestionIndex].correctAnswer
      });

      if (selectedChoice.value === questions[currentQuestionIndex].correctAnswer) {
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
  const summaryElement = document.getElementById('summary');

  quizContainer.style.display = 'none';
  scoreContainer.style.display = 'block';

  scoreElement.textContent = `Tu puntaje es ${score} de ${questions.length}`;

  let summaryHTML = '<h3>Resumen de respuestas:</h3>';
  userAnswers.forEach((answer, index) => {
      summaryHTML += `<div class="summary-item">
                          <p class="summary-question">${index + 1}. ${answer.question}</p>
                          <p class="summary-response ${answer.correct ? 'correct' : 'incorrect'}">
                              Tu respuesta: ${answer.selected} ${answer.correct ? '✅' : '❌'}
                          </p>
                          ${!answer.correct ? `<p class="summary-response correct-answer">Respuesta correcta: ${answer.correctAnswer}</p>` : ''}
                      </div>`;
  });

  let feedback = '';
  if (score === questions.length) {
      feedback = 'Excelente, has hecho un gran trabajo!';
  } else if (score >= questions.length * 0.7) {
      feedback = 'Muy bien, buen trabajo!';
  } else if (score >= questions.length * 0.5) {
      feedback = 'Bien, pero puedes mejorar.';
  } else {
      feedback = 'Necesitas estudiar más. ¡No te desanimes!';
  }
  summaryHTML += `<h3>${feedback}</h3>`;
  summaryElement.innerHTML = summaryHTML;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  questions = getRandomQuestions(allQuestions);

  const quizContainer = document.getElementById('quiz-container');
  const scoreContainer = document.getElementById('score-container');

  quizContainer.style.display = 'block';
  scoreContainer.style.display = 'none';

  showQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  showQuestion();
});