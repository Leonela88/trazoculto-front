export interface MainService {
  id: string;
  title: string;
  description: string;
}

export const mainServices: MainService[] = [
  {
    id: "01",
    title: "Informe de Lectura",
    description: "Análisis detallado del texto con observaciones sobre estructura, coherencia, estilo y potencial editorial. Ideal para autores que buscan una mirada profesional antes de publicar."
  },
  {
    id: "02",
    title: "Corrección de Estilo",
    description: "Revisión profunda del texto para mejorar claridad, fluidez y cohesión, respetando la voz del autor y adecuando el registro al público objetivo."
  },
  {
    id: "03",
    title: "Corrección Ortotipográfica",
    description: "Revisión exhaustiva de ortografía, puntuación, tipografía y normas de escritura según las convenciones del español y los criterios editoriales vigentes."
  },
  {
    id: "04",
    title: "Macroedición, Microedición",
    description: "Intervención integral del texto: desde la estructura global (macroedición) hasta el detalle de cada párrafo, oración y palabra (microedición)."
  }
];

export const otherServices: string[] = [
  "Reescritura / reformulación de textos",
  "Adaptación de tono y registro (formal, divulgativo, académico, etc.)",
  "Adaptación a guías de estilo específicas (APA, Chicago, MLA, etc.)",
  "Corrección de traducciones (post-edición / revisión bilingüe)",
  "Control de calidad editorial (QA de textos ya maquetados)",
  "Revisión de pruebas de imprenta (galeradas)",
  "Asesoría editorial (estructura, enfoque, público objetivo)",
  "Sensitivity reading (lectura con perspectiva de género, diversidad, etc.)",
  "Fact-checking básico (verificación de datos simples)",
  "Normalización terminológica (especialmente en textos técnicos)",
  "Redacción y copywriting",
  "Adaptación de textos para distintos formatos (web, redes, print)",
  "Simplificación de textos (lectura fácil / accesibilidad)",
  "Revisión de consistencia (nombres, fechas, términos)",
  "Preparación de originales para publicación"
];
