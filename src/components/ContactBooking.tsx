import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { SERVICES_DATA } from '../data/servicesData';
import { BookingFormData } from '../types';
import { getBookingWhatsAppMessage, createWhatsAppUrl } from '../utils/whatsapp';

export const ContactBooking: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: SERVICES_DATA[0].title,
    areaAddress: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.areaAddress.trim()) {
      newErrors.areaAddress = 'Please enter your area or address in Sialkot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Generate formatted WhatsApp message and URL
    const message = getBookingWhatsAppMessage(formData);
    const whatsappUrl = createWhatsAppUrl(message);

    // Show friendly success confirmation state
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      service: SERVICES_DATA[0].title,
      areaAddress: '',
      notes: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-softBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Quick CTAs */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-lightBlue text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
              Get In Touch
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-darkText tracking-tight mb-4 leading-tight">
              Ready for a Cleaner, <br className="hidden sm:inline" />
              <span className="text-brand-blue">Fresher Space?</span>
            </h2>

            <p className="text-base text-brand-mutedText leading-relaxed mb-8">
              Contact us today to discuss your cleaning needs and arrange your service. Reach out directly or fill out the booking inquiry to connect via WhatsApp.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              
              {/* Phone Card */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft hover:border-brand-blue/40 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-lightBlue flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-mutedText uppercase tracking-wider block">Phone & Call</span>
                  <span className="text-base sm:text-lg font-bold text-brand-darkText group-hover:text-brand-blue transition-colors block mt-0.5">
                    {BUSINESS_INFO.phone}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">Available Mon - Sun for immediate inquiries</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-brand-lightBlue flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-mutedText uppercase tracking-wider block">Head Office & Landmark</span>
                  <span className="text-sm sm:text-base font-bold text-brand-darkText block mt-0.5">
                    {BUSINESS_INFO.landmark}
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">Hajipura, Sialkot, Pakistan • Email: {BUSINESS_INFO.email}</span>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-emerald-900">Direct WhatsApp Assistance</h4>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                Send photos of your sofa or carpets directly on WhatsApp for an immediate assessment.
              </p>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-xs text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
              >
                <span>Open WhatsApp now</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-slate-200/80">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-darkText mb-1.5">
                  Request a Service Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-brand-mutedText">
                  Fill in your details below. Submitting will format and launch a WhatsApp inquiry directly to our team.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 mb-2">
                    Opening WhatsApp to Send Inquiry!
                  </h4>
                  <p className="text-sm text-emerald-800 mb-6 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formatted. If WhatsApp did not open automatically in your browser or app, click the button below:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppUrl(getBookingWhatsAppMessage(formData))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      Open WhatsApp Manually
                    </a>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 rounded-xl bg-white text-slate-700 font-bold text-sm border border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-brand-darkText uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Muhammad Usman"
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-400/50 bg-red-50/20'
                          : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-brand-darkText uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0300 1234567"
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-400/50 bg-red-50/20'
                          : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-brand-darkText uppercase tracking-wider mb-1.5">
                      Select Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 bg-slate-50/50 focus:bg-white transition-all focus:outline-none cursor-pointer"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Area / Address */}
                  <div>
                    <label htmlFor="areaAddress" className="block text-xs font-bold text-brand-darkText uppercase tracking-wider mb-1.5">
                      Area / Address in Sialkot <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="areaAddress"
                      type="text"
                      value={formData.areaAddress}
                      onChange={(e) => setFormData({ ...formData, areaAddress: e.target.value })}
                      placeholder="e.g. Hajipura / Model Town / Cantt Sialkot"
                      className={`w-full px-4 py-3 rounded-xl text-sm border transition-all focus:outline-none focus:ring-2 ${
                        errors.areaAddress
                          ? 'border-red-400 focus:ring-red-400/50 bg-red-50/20'
                          : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-slate-50/50 focus:bg-white'
                      }`}
                    />
                    {errors.areaAddress && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.areaAddress}
                      </p>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs font-bold text-brand-darkText uppercase tracking-wider mb-1.5">
                      Additional Details / Item count (Optional)
                    </label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. 5-seater sofa set and 2 bedroom carpets..."
                      className="w-full px-4 py-3 rounded-xl text-sm border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 bg-slate-50/50 focus:bg-white transition-all focus:outline-none resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-md hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 No payment required now. This launches WhatsApp directly with your service details.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
