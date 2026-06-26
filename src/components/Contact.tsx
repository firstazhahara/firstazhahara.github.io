import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError]       = useState(false);
  const [emailError, setEmailError]     = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sent, setSent] = useState(false);

  const WHATSAPP_NUMBER = '6288216753313';

  const sendWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameError    = name.trim() === '';
    const isEmailError   = email.trim() === '';
    const isMessageError = message.trim() === '';

    setNameError(isNameError);
    setEmailError(isEmailError);
    setMessageError(isMessageError);

    if (isNameError || isEmailError || isMessageError) return;

    const text = `Hello, I'm ${name}\n\nContact:\n${email}\n\nMessage:\n${message}`.trim();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');

    setName('');
    setEmail('');
    setMessage('');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="gradient-divider" />
        <p className="section-subtitle" style={{ marginTop: 16, margin: '16px auto 0' }}>
          Have a project or opportunity in mind? Reach out and let's make it happen.
        </p>
      </div>

      {/* Contact info row */}
      <div className="contact-info-row">
        <div className="contact-info-item glass">
          <EmailIcon />
          <div>
            <span className="contact-info-label">Email</span>
            <a href="mailto:firstazh@gmail.com" className="contact-info-value">firstazh@gmail.com</a>
          </div>
        </div>
        <div className="contact-info-item glass">
          <WhatsAppIcon />
          <div>
            <span className="contact-info-label">WhatsApp</span>
            <a href="https://wa.me/6288216753313" target="_blank" rel="noreferrer" className="contact-info-value">+62 882 1675 3313</a>
          </div>
        </div>
        <div className="contact-info-item glass">
          <LocationOnIcon />
          <div>
            <span className="contact-info-label">Location</span>
            <span className="contact-info-value">Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      <div className="contact-glass-card">
        {/* Social quick links */}
        <div className="contact-social-row">
          <a
            href="https://wa.me/6288216753313"
            target="_blank"
            rel="noreferrer"
            className="contact-social-btn whatsapp"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
          <a
            href="https://t.me/088216753313"
            target="_blank"
            rel="noreferrer"
            className="contact-social-btn telegram"
          >
            <TelegramIcon /> Telegram
          </a>
          <a
            href="https://www.linkedin.com/in/firstazhahara"
            target="_blank"
            rel="noreferrer"
            className="contact-social-btn linkedin"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </div>

        {/* Divider */}
        <div className="contact-or-divider">
          <div className="contact-or-line" />
          <span>or send a message</span>
          <div className="contact-or-line" />
        </div>

        {/* Form */}
        <form onSubmit={sendWhatsApp} noValidate>
          <div className="glass-field">
            <label htmlFor="contact-name">Your Name</label>
            <div className="field-input-wrap">
              <span className="field-icon"><PersonIcon /></span>
              <input
                id="contact-name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={e => { setName(e.target.value); if (nameError) setNameError(false); }}
                className={nameError ? 'error' : ''}
              />
            </div>
            {nameError && <span className="field-error">Name is required</span>}
          </div>

          <div className="glass-field">
            <label htmlFor="contact-email">Email or Phone</label>
            <div className="field-input-wrap">
              <span className="field-icon"><EmailIcon /></span>
              <input
                id="contact-email"
                type="text"
                placeholder="email@example.com"
                value={email}
                onChange={e => { setEmail(e.target.value); if (emailError) setEmailError(false); }}
                className={emailError ? 'error' : ''}
              />
            </div>
            {emailError && <span className="field-error">Contact info is required</span>}
          </div>

          <div className="glass-field">
            <label htmlFor="contact-message">Your Message</label>
            <div className="field-input-wrap">
              <span className="field-icon" style={{ alignItems: 'flex-start', paddingTop: '14px' }}><MessageIcon /></span>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                value={message}
                onChange={e => { setMessage(e.target.value); if (messageError) setMessageError(false); }}
                className={messageError ? 'error' : ''}
              />
            </div>
            {messageError && <span className="field-error">Message is required</span>}
          </div>

          <button type="submit" className="submit-btn">
            {sent ? '✓ Sent!' : (
              <>
                <span>Send via WhatsApp</span>
                <SendIcon style={{ fontSize: '1rem' }} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
