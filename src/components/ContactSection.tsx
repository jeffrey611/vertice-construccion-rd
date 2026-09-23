import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Mail, MapPin, FileUp, AlertCircle, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/constructionData.ts';

interface ContactSectionProps {
  prefillData?: {
    constructionType?: string;
    area?: number;
    quality?: string;
    estimatedCost?: string;
    durationMonths?: number;
    projectReference?: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefillData }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'residencial',
    location: '',
    area: '450',
    budgetRange: '',
    message: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);

  // Synchronize prefillData when updated
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefillData.constructionType || prev.projectType,
        area: prefillData.area ? String(prefillData.area) : prev.area,
        budgetRange: prefillData.estimatedCost || prev.budgetRange,
        message: prefillData.projectReference
          ? `Solicito estudio técnico detallado para un proyecto de características similares a ${prefillData.projectReference}.`
          : prefillData.estimatedCost
          ? `Solicitud basada en el cotizador paramétrico:\n- Tipología: ${prefillData.constructionType}\n- Superficie: ${prefillData.area} m²\n- Acabados: ${prefillData.quality}\n- Presupuesto estimado: ${prefillData.estimatedCost}\n- Plazo estimado: ${prefillData.durationMonths} meses`
          : prev.message,
      }));
    }
  }, [prefillData]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Indique su nombre o el de la empresa.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Introduzca un correo electrónico válido.';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Indique un número de teléfono de contacto.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Especifique la localidad o provincia de la obra.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate high-reliability API registration
    setTimeout(() => {
      const randomCode = `VTX-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedCode(randomCode);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedCode(null);
    setFormData({
      fullName: '',
      company: '',
      email: '',
      phone: '',
      projectType: 'residencial',
      location: '',
      area: '450',
      budgetRange: '',
      message: '',
    });
    setFileName(null);
    setErrors({});
  };

  return (
    <section id="contacto" className="py-24 bg-[#0B0F17] border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info and trust markers (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-500 uppercase mb-2">
                <span>Departamento Técnico & Licitaciones</span>
                <span aria-hidden="true" className="text-neutral-600">/</span>
                <span>Respuesta en 24h</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 text-balance">
                Iniciemos el estudio de su próxima obra
              </h2>
              <p className="text-neutral-300 text-sm font-light leading-relaxed mb-8">
                Nuestro equipo de ingenieros de caminos, arquitectos y directores de obra senior revisará su anteproyecto o mediciones para formular una propuesta técnica y económica con compromiso vinculante.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3.5 p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">Línea Directa de Contratación (RD)</span>
                    <a href="tel:+18095678890" className="text-sm font-semibold text-white hover:text-amber-400 font-mono">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">Recepción de Proyectos & Licitaciones</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-white hover:text-amber-400 font-mono">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-neutral-400 block">Sede Central & Dirección Facultativa</span>
                    <span className="text-xs font-medium text-neutral-200 leading-normal">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-xs text-neutral-400 font-light flex items-center gap-3">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>
                Horario técnico: Lunes a Viernes de 08:00 a 19:30 h ininterrumpido.
              </span>
            </div>
          </div>

          {/* Right Column: Lead Form or Confirmation State (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 sm:p-8">
            {submittedCode ? (
              <div className="py-8 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Solicitud Técnica Registrada con Éxito
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto mb-4 font-light">
                  Hemos generado el expediente técnico correspondiente. Un Director de Obra asignado se pondrá en contacto en un plazo máximo de 24 horas laborables.
                </p>

                <div className="inline-block px-4 py-2 bg-black/60 border border-neutral-800 rounded-lg text-xs font-mono text-amber-400 mb-8">
                  Referencia de Expediente: <span className="font-bold text-white">{submittedCode}</span>
                </div>

                <div>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="px-5 py-2.5 text-xs font-medium text-neutral-300 bg-neutral-800 rounded hover:bg-neutral-700 transition-colors"
                  >
                    Enviar Otra Consulta o Añadir Documentación
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="border-b border-neutral-800 pb-3 mb-2">
                  <h3 className="font-display text-lg font-bold text-white">
                    Formulario de Solicitud de Presupuesto y Licitación
                  </h3>
                  <p className="text-xs text-neutral-400 font-light">
                    Complete los datos básicos para que el equipo de presupuestos prepare la propuesta correspondiente.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-neutral-300 mb-1">
                      Nombre y Apellidos *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="p. ej. Javier Soto Morales"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs bg-neutral-950 border rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.fullName ? 'border-rose-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-neutral-300 mb-1">
                      Empresa / Promotora (Opcional)
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="p. ej. Inversiones Residenciales S.L."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-neutral-300 mb-1">
                      Correo Corporativo o Personal *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="javier.soto@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs bg-neutral-950 border rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.email ? 'border-rose-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-neutral-300 mb-1">
                      Teléfono de Contacto (RD / WhatsApp) *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (809) 567-0000 / +1 (829) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2 text-xs bg-neutral-950 border rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.phone ? 'border-rose-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-medium text-neutral-300 mb-1">
                      Tipología de Proyecto
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="residencial">Torre Residencial Prime (Santo Domingo)</option>
                      <option value="corporativo">Torre Corporativa / Oficinas</option>
                      <option value="reforma">Villas de Lujo (Punta Cana / Cap Cana)</option>
                      <option value="industrial">Hub Logístico / Parque Industrial (Caucedo / Haina)</option>
                      <option value="obra_civil">Cimentaciones Sísmicas & Pilotes MOPC</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-xs font-medium text-neutral-300 mb-1">
                      Ubicación de la Parcela / Terreno *
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="p. ej. Piantini, Bella Vista, Punta Cana, Santiago..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={`w-full px-3 py-2 text-xs bg-neutral-950 border rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        errors.location ? 'border-rose-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.location && (
                      <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.location}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="area" className="block text-xs font-medium text-neutral-300 mb-1">
                      Superficie Estimada (m²)
                    </label>
                    <input
                      id="area"
                      type="text"
                      placeholder="450 m²"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-neutral-300 mb-1">
                    Descripción Técnica o Necesidades Específicas
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Detalles sobre estado de licencias, plazos previstos, requerimientos geotécnicos o certificaciones de eficiencia deseadas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950 border border-neutral-800 rounded text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none font-sans"
                  />
                </div>

                {/* File attachment simulator */}
                <div className="p-3 bg-neutral-950/60 border border-dashed border-neutral-800 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <FileUp className="w-4 h-4 text-amber-500" />
                    <span>
                      {fileName ? `Archivo adjunto: ${fileName}` : 'Adjuntar planos, pliegos o mediciones (PDF, DWG, IFC hasta 50MB)'}
                    </span>
                  </div>
                  <label className="px-3 py-1 text-xs font-medium bg-neutral-800 text-neutral-200 hover:bg-neutral-700 rounded cursor-pointer transition-colors">
                    Examinar
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFileName(e.target.files[0].name);
                        }
                      }}
                    />
                  </label>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs sm:text-sm font-semibold text-[#0B0F17] bg-amber-500 rounded hover:bg-amber-400 transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Registrando Expediente...</span>
                    ) : (
                      <>
                        <span>Solicitar Estudio Técnico y Presupuesto Vinculante</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
