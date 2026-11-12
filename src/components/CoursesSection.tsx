import React, { useState } from 'react';
import { ArtCourse } from '../types';
import { 
  GraduationCap, Clock, Calendar, CheckCircle2, 
  ChevronDown, ChevronUp, BookOpen, Award, Sparkles, Download, ArrowRight 
} from 'lucide-react';

interface CoursesSectionProps {
  courses: ArtCourse[];
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ courses }) => {
  const [selectedModality, setSelectedModality] = useState<string>('all');
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>('cur-01');
  const [enrollingCourse, setEnrollingCourse] = useState<ArtCourse | null>(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);
  const [studentName, setStudentName] = useState('Angie Paola Madrigal');
  const [studentEmail, setStudentEmail] = useState('paola.madrigal@unilibre.edu.co');

  const filteredCourses = courses.filter((c) => {
    if (selectedModality === 'all') return true;
    if (selectedModality === 'presencial') return c.modality.includes('Presencial');
    if (selectedModality === 'hibrido') return c.modality.includes('Híbrida');
    if (selectedModality === 'virtual') return c.modality.includes('Virtual');
    return true;
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolledSuccess(true);
  };

  return (
    <section id="cursos" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-1">
              Academia de Formación Lumina · Ciclo 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 leading-tight">
              Cursos, Talleres y Diplomados de Extensión
            </h2>
            <p className="text-sm text-stone-600 mt-3 leading-relaxed">
              Programas diseñados para entusiastas y creadores. Temarios completos sesión por sesión, materiales profesionales incluidos y certificación institucional avalada.
            </p>
          </div>

          {/* Modality Tabs Filter */}
          <div className="inline-flex rounded-lg border border-stone-200 p-1 bg-stone-50 shadow-xs self-start md:self-end">
            {[
              { id: 'all', label: 'Todos los Cursos' },
              { id: 'presencial', label: '100% Presencial (Taller)' },
              { id: 'hibrido', label: 'Híbrido (Virtual + Campo)' },
              { id: 'virtual', label: 'Virtual a tu Ritmo' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedModality(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedModality === tab.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-8">
          {filteredCourses.map((course) => {
            const isExpanded = expandedCourseId === course.id;

            return (
              <div
                key={course.id}
                className="rounded-2xl border border-stone-200 bg-[#FAF8F5] overflow-hidden transition-all shadow-xs hover:shadow-sm"
              >
                {/* Course Primary Card Header */}
                <div className="p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-stone-200/80 bg-white">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-medium font-mono uppercase px-2.5 py-0.5 rounded bg-stone-100 text-stone-800 border border-stone-200">
                        {course.modality}
                      </span>
                      <span className="text-[11px] text-stone-500 font-medium">
                        Nivel: {course.targetLevel}
                      </span>
                      <span className="text-stone-300">·</span>
                      <span className="text-[11px] text-stone-500 font-medium">
                        {course.durationWeeks} semanas ({course.totalHours} horas)
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-xs text-stone-700 leading-relaxed font-sans">
                      {course.description}
                    </p>

                    <div className="pt-1 flex items-center gap-2 text-xs text-stone-600">
                      <span className="font-medium text-stone-900">Docente titular:</span>
                      <span>{course.instructorName}</span>
                      <span className="text-stone-400">·</span>
                      <span className="text-stone-500">{course.instructorTitle}</span>
                    </div>
                  </div>

                  {/* Price & Action Column */}
                  <div className="lg:text-right shrink-0 flex flex-col justify-between space-y-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-100">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 block font-mono">
                        Inversión Total
                      </span>
                      <div className="text-2xl font-mono font-bold text-stone-900">
                        ${course.priceCOP.toLocaleString('es-CO')} <span className="text-xs font-sans text-stone-500 font-normal">COP</span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                        {course.seatsAvailable} cupos disponibles para esta cohorte
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setEnrollingCourse(course);
                          setEnrolledSuccess(false);
                        }}
                        className="py-2.5 px-5 bg-stone-900 text-white rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm whitespace-nowrap text-center"
                      >
                        Inscribirme al Taller
                      </button>

                      <button
                        type="button"
                        onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                        className="py-2 px-3 text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isExpanded ? 'Ocultar Temario Detallado' : 'Ver Temario y Materiales'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Collapsible Syllabus & Details Drawer */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 space-y-6 bg-[#FAF8F5]">
                    {/* Operational Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-white border border-stone-200 text-xs text-stone-700">
                      <div className="flex items-start gap-2.5">
                        <Calendar className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-stone-900">Fecha de Inicio</strong>
                          <span>{course.startDate}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Clock className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-stone-900">Horario de Clases</strong>
                          <span>{course.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Award className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-stone-900">Certificación Oficial</strong>
                          <span>{course.certificationBadge}</span>
                        </div>
                      </div>
                    </div>

                    {/* Materials Included */}
                    <div className="space-y-3">
                      <h4 className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        <span>Kit de Materiales y Recursos Incluidos en la Matrícula</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.materialsIncluded.map((mat, idx) => (
                          <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-stone-200/80 text-xs text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{mat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Session by Session Syllabus Accordion */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs uppercase tracking-widest text-stone-500 font-mono font-semibold">
                          Temario Oficial Sesión por Sesión
                        </h4>
                        <button
                          type="button"
                          onClick={() => alert(`Descargando Guía Académica Completa (PDF) para el programa ${course.title}`)}
                          className="text-xs text-stone-700 hover:text-stone-950 font-medium underline flex items-center gap-1"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Descargar Sílabo (PDF)</span>
                        </button>
                      </div>

                      <div className="space-y-2">
                        {course.syllabus.map((session) => (
                          <div
                            key={session.sessionNumber}
                            className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold text-stone-800 bg-stone-100 px-2 py-0.5 rounded">
                                  Sesión {session.sessionNumber}
                                </span>
                                <h5 className="font-serif font-bold text-stone-900 text-sm">
                                  {session.title}
                                </h5>
                              </div>
                              <ul className="text-xs text-stone-600 space-y-0.5 list-disc list-inside pt-1">
                                {session.topics.map((t, tidx) => (
                                  <li key={tidx}>{t}</li>
                                ))}
                              </ul>
                            </div>
                            <span className="text-[11px] font-mono text-stone-500 whitespace-nowrap sm:self-start">
                              {session.duration}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Course Enrollment Modal */}
      {enrollingCourse && (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-stone-800" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  {enrolledSuccess ? '¡Inscripción Confirmada!' : 'Inscripción a Taller Artístico'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEnrollingCourse(null)}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-900"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {!enrolledSuccess ? (
                <form onSubmit={handleEnrollSubmit} className="space-y-4">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-stone-900">{enrollingCourse.title}</h4>
                    <p className="text-xs text-stone-600 mt-1">
                      {enrollingCourse.modality} · {enrollingCourse.schedule}
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5 text-xs">
                    <div className="flex justify-between text-stone-700">
                      <span>Valor de la Matrícula:</span>
                      <strong className="font-mono">${enrollingCourse.priceCOP.toLocaleString('es-CO')} COP</strong>
                    </div>
                    <div className="flex justify-between text-stone-700">
                      <span>Materiales y Soporte:</span>
                      <span className="text-emerald-700 font-medium">100% Incluidos</span>
                    </div>
                    <div className="flex justify-between text-stone-700">
                      <span>Certificación Institucional:</span>
                      <span className="text-emerald-700 font-medium">Avalada</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Nombre Completo del Estudiante</label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Correo Electrónico (para acceso al Aula Virtual)</label>
                    <input
                      type="email"
                      required
                      value={studentEmail}
                      onChange={(e) => setStudentEmail(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">Modalidad de Pago Preferida</label>
                    <select className="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 bg-white focus:outline-none">
                      <option>Nequi / Daviplata (Transferencia instantánea)</option>
                      <option>PSE (Débito bancario en línea)</option>
                      <option>Tarjeta de Crédito (Hasta 3 cuotas sin interés)</option>
                      <option>Pago en taquilla el primer día de clase</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setEnrollingCourse(null)}
                      className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-sm"
                    >
                      Confirmar Matrícula (${enrollingCourse.priceCOP.toLocaleString('es-CO')} COP)
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4 text-center py-2">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-900">¡Bienvenido(a) al Taller Lumina!</h4>
                  <p className="text-xs text-stone-600">
                    Tu cupo para <strong>{enrollingCourse.title}</strong> ha quedado reservado. Hemos enviado las credenciales de acceso al campus y el listado de bienvenida a <strong>{studentEmail}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnrollingCourse(null)}
                    className="mt-4 px-6 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
