import React, { useState } from 'react';
import './contactUs.css';

const ContactUs = () => {
  const language = localStorage.getItem('language') || 'en';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const translations = {
    en: {
      title: 'Get in <span>Touch</span>',
      description: 'For collaboration or other proposals,<br />feel free to contact us.',
      namePlaceholder: 'Name *',
      emailPlaceholder: 'Email *',
      phonePlaceholder: 'Phone number *',
      messagePlaceholder: 'Message',
      submitButton: 'SEND',
      socialMediaTitle: 'Social Media',
      phoneLabel: 'Phone:',
      emailLabel: 'Email:',
      addressLabel: 'Address:',
      phoneValue: '+37477800031',
      emailValue: 'info@centerup.org',
      addressValue: 'Sayat-Nova 11/2',
      successMessage: 'Your message has been sent successfully!',
      errorMessage: 'Failed to send your message. Please try again.',
      requiredField: 'This field is required.',
      invalidEmail: 'Please enter a valid email.',
      invalidPhone: 'Please enter a valid phone number.',
    },
    am: {
      title: 'Կապ <span>Մեզ Հետ</span>',
      description: 'Համագործակցության կամ այլ առաջարկների համար, խնդրում ենք կապվել մեզ հետ:',
      namePlaceholder: 'Անուն *',
      emailPlaceholder: 'Էլ․ փոստ *',
      phonePlaceholder: 'Հեռախոսահամար *',
      messagePlaceholder: 'Հաղորդագրություն',
      submitButton: 'ՈՒՂԱՐԿԵԼ',
      socialMediaTitle: 'Սոցիալական Ցանցեր',
      phoneLabel: 'Հեռախոս՝',
      emailLabel: 'Էլ․ փոստ՝',
      addressLabel: 'Հասցե՝',
      phoneValue: '+37477800031',
      emailValue: 'info@centerup.org',
      addressValue: 'Սայաթ-Նովա 11/2',
      successMessage: 'Ձեր հաղորդագրությունն ուղարկվել է հաջողությամբ։',
      errorMessage: 'Հաղորդագրությունն ուղարկել չհաջողվեց։ Խնդրում ենք կրկին փորձել։',
      requiredField: 'Այս դաշտը պարտադիր է։',
      invalidEmail: 'Խնդրում ենք մուտքագրել վավեր էլ․ փոստ։',
      invalidPhone: 'Խնդրում ենք մուտքագրել վավեր հեռախոսահամար։',
    },
  };

  const t = translations[language];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.requiredField;
    if (!formData.email.trim()) {
      newErrors.email = t.requiredField;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t.requiredField;
    } else if (!/^\+?\d{8,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = t.invalidPhone;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-us">
      <div className="contact-us__form">
        <div className="contact-us__form--info">
          <h1 className="contact-us__form-title" dangerouslySetInnerHTML={{ __html: t.title }} />
          <p className="contact-us__form-desc" dangerouslySetInnerHTML={{ __html: t.description }} />
        </div>

        <form className="contact-us__form--form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t.namePlaceholder}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t.emailPlaceholder}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t.phonePlaceholder}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePlaceholder}
            />
          </div>
          <div>
            <button type="submit" className="form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : t.submitButton}
            </button>
          </div>
          {submitStatus === 'success' && (
            <p className="form-message success">{t.successMessage}</p>
          )}
          {submitStatus === 'error' && (
            <p className="form-message error">{t.errorMessage}</p>
          )}
        </form>
      </div>

      <div className="contact-us__info">
        <div>
          <h1>{t.socialMediaTitle}</h1>
        </div>
        <div className="contact-us__info--info">
          <div className="contact-us__icons">
            <a href="https://www.instagram.com/center__up/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src="/instacontact.png" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/share/1BwYEKYwyq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <img src="/facebookcontact.png" alt="Facebook" />
            </a>
            <a href="https://t.me/centerup01" target="_blank" rel="noopener noreferrer">
              <img src="/tgcontact.png" alt="Telegram" />
            </a>
            <a href="https://www.linkedin.com/company/center-up" target="_blank" rel="noopener noreferrer">
              <img src="/licontact.png" alt="LinkedIn" />
            </a>
          </div>
          <div className="contact-us__info--numbers">
            <div>
              <img src="/phonneenumber.png" alt="Phone Icon" />
              <strong>{t.phoneLabel}</strong> {t.phoneValue}
            </div>
            <div>
              <img src="/emaiil.png" alt="Email Icon" />
              <strong>{t.emailLabel}</strong> {t.emailValue}
            </div>
            <div>
              <img src="/mapp.png" alt="Address Icon" />
              <strong>{t.addressLabel}</strong> {t.addressValue}
            </div>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '218px',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://yandex.com/map-widget/v1/-/CHSqAAMg"
            frameBorder="0"
            style={{
              border: '0',
              borderRadius: '12px',
              width: '100%',
              height: '100%',
            }}
            allowFullScreen
            title="Yandex Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;