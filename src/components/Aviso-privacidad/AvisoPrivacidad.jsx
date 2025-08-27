import React from 'react';

const AvisoPrivacidad = () => {
  return (
    <div className="container mx-auto p-8">
  <p className="text-3xl font-bold mb-6 text-gray-800">Aviso de Privacidad</p>

  <p className="mb-4 text-gray-700">
    <strong>PARTELUZ ARQUITECTURA</strong> (en adelante, "El Responsable") con domicilio en{' '}
    <strong>Calle Hidalgo 3, Colonia Centro, C.P. 37700</strong>,
    en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (en adelante, la "Ley"),
    su Reglamento y demás disposiciones aplicables, pone a su disposición el presente Aviso de Privacidad.
  </p>

  {/* --- Sección 1: Datos Personales Recabados --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">1. Datos Personales Recabados</p>
  <p className="mb-4 text-gray-700">
    El Responsable podrá recabar de usted los siguientes datos personales:
  </p>
  <ul className="list-disc list-inside mb-4 text-gray-700">
    <li><strong>Datos de Identificación y Contacto:</strong> Nombre completo, correo electrónico, número de teléfono, dirección postal (en caso de requerirse para proyectos o correspondencia).</li>
    <li><strong>Datos de Proyecto/Servicio:</strong> Información relacionada con sus necesidades de arquitectura o diseño, preferencias, ubicación del proyecto, presupuestos estimados (cuando usted nos los proporcione voluntariamente a través de formularios de contacto, correos electrónicos o llamadas telefónicas).</li>
    <li><strong>Datos de Navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas en nuestro sitio web, tiempo de navegación (a través de cookies y herramientas de análisis web como Google Analytics).</li>
  </ul>

  {/* --- Sección 2: Finalidades del Tratamiento de Datos Personales --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">2. Finalidades del Tratamiento de Datos Personales</p>
  <p className="mb-4 text-gray-700">
    Sus datos personales serán utilizados para las siguientes finalidades:
  </p>

  <p className="text-xl font-medium mb-2 mt-4 text-gray-800">Finalidades Primarias (Necesarias para la prestación del servicio):</p>
  <ul className="list-disc list-inside mb-4 text-gray-700">
    <li>Contactarlo(a) para responder a sus solicitudes de información, consultas o presupuestos.</li>
    <li>Prestarle los servicios de arquitectura, diseño, construcción o consultoría que nos solicite.</li>
    <li>Gestionar la relación contractual o comercial que se establezca con usted.</li>
    <li>Facturación y cobro de los servicios prestados.</li>
    <li>Cumplimiento de obligaciones legales y requerimientos de autoridades competentes.</li>
  </ul>

  <p className="text-xl font-medium mb-2 mt-4 text-gray-800">Finalidades Secundarias (No esenciales, pero que nos permiten mejorar nuestros servicios):</p>
  <ul className="list-disc list-inside mb-4 text-gray-700">
    <li>Envío de comunicaciones de marketing, promociones, novedades de nuestros servicios o eventos relacionados con la arquitectura (siempre que usted no manifieste su negativa).</li>
    <li>Realizar encuestas de satisfacción o evaluaciones de calidad del servicio.</li>
    <li>Análisis estadísticos y de rendimiento del sitio web para mejorar su experiencia y nuestros servicios.</li>
  </ul>
  <p className="mb-4 text-gray-700">
    Si usted no desea que sus datos personales sean tratados para las finalidades secundarias, puede manifestar su negativa al momento de proporcionarlos, o posteriormente enviando un correo electrónico a la dirección de contacto indicada en este aviso.
  </p>

  {/* --- Sección 3: Transferencia de Datos Personales --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">3. Transferencia de Datos Personales</p>
  <p className="mb-4 text-gray-700">
    Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la Ley, tales como:
  </p>
  <ul className="list-disc list-inside mb-4 text-gray-700">
    <li>Autoridades competentes que lo requieran legalmente.</li>
    <li>En caso de que los datos personales se sometan a un proceso de disociación para fines estadísticos.</li>
  </ul>

  {/* --- Sección 4: Medios para Ejercer los Derechos ARCO --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">4. Medios para Ejercer los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)</p>
  <p className="mb-4 text-gray-700">
    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
  </p>
  <p className="mb-4 text-gray-700">
    Para ejercer cualquiera de estos derechos ARCO, usted deberá enviar su solicitud por escrito a la siguiente dirección de correo electrónico: <strong>[Tu Correo Electrónico de Contacto, ej. contacto@parteluzarquitectura.com]</strong>. Su solicitud deberá incluir:
  </p>
  <ul className="list-disc list-inside mb-4 text-gray-700">
    <li>Su nombre completo y domicilio o cualquier otro medio para comunicarle la respuesta.</li>
    <li>Documento que acredite su identidad (copia de INE, pasaporte, etc.).</li>
    <li>Descripción clara y precisa de los datos personales respecto de los que busca ejercer alguno de los derechos ARCO.</li>
    <li>Cualquier otro elemento o documento que facilite la localización de los datos personales.</li>
  </ul>

  {/* --- Sección 5: Medios para Revocar el Consentimiento --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">5. Medios para Revocar el Consentimiento</p>
  <p className="mb-4 text-gray-700">
    Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Para revocar su consentimiento, deberá enviar su solicitud a la misma dirección de correo electrónico indicada para los derechos ARCO.
  </p>

  {/* --- Sección 6: Opciones y Medios para Limitar el Uso o Divulgación de los Datos --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">6. Opciones y Medios para Limitar el Uso o Divulgación de los Datos</p>
  <p className="mb-4 text-gray-700">
    Adicionalmente al ejercicio de los derechos ARCO, usted puede limitar el uso y divulgación de sus datos personales, por ejemplo, para no recibir comunicaciones de marketing, enviando su solicitud a la dirección de correo electrónico <strong>[Tu Correo Electrónico de Contacto]</strong>.
  </p>

  {/* --- Sección 7: Uso de Cookies y Tecnologías de Rastreo --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">7. Uso de Cookies y Tecnologías de Rastreo</p>
  <p className="mb-4 text-gray-700">
    Nuestro sitio web utiliza cookies y otras tecnologías similares (como Google Analytics) que nos permiten monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia de usuario al navegar en nuestra página. La mayoría de los navegadores permiten gestionar las cookies para aceptar, rechazar o eliminar. Consulte las opciones de su navegador para más detalles.
  </p>

  {/* --- Sección 8: Cambios al Presente Aviso de Privacidad --- */}
  <p className="text-2xl font-semibold mb-4 mt-6 text-gray-800">8. Cambios al Presente Aviso de Privacidad</p>
  <p className="mb-4 text-gray-700">
    El Responsable se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios. Cualquier cambio a este aviso de privacidad será publicado y notificado a través de nuestro sitio web{' '}
    <strong>www.parteluzarquitectura.com</strong>.
  </p>

  <p className="text-right text-sm text-gray-600 mt-8">
    <strong>Fecha de última actualización:</strong> <strong>18</strong> de <strong>Junio</strong> de <strong>2025</strong>
  </p>
</div>
  );
};

export default AvisoPrivacidad;