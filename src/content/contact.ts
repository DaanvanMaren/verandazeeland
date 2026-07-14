import type { GlobalConfig } from 'payload'

// Contact & offerte page. Text = editable fields with the design copy as
// defaultValue; stats + service-area chips = arrays. Read in
// src/app/(frontend)/contact/page.tsx. Images use an upload field with a
// static fallback path (public/uploads/...). The offerte form markup stays
// structural (it does not submit yet) — only its labels/copy are fields.
export const contact: GlobalConfig = {
  slug: 'contact',
  label: 'Contact & offerte',
  access: { read: () => true },
  admin: { group: 'Content' },
  fields: [
    // hero
    { name: 'heroBadge', type: 'text', defaultValue: 'Welkom in Serooskerke' },
    { name: 'heroTitle', type: 'text', required: true, defaultValue: 'Kom langs in onze showroom' },
    {
      name: 'heroText',
      type: 'textarea',
      defaultValue:
        "Veranda Zeeland is uw complete leverancier van veranda's, tuinkamers en glasschuifwanden. In onze showroom van 800 m² ervaart u alle modellen in het echt en krijgt u deskundig, vrijblijvend advies op maat.",
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'heroImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/DJI_20260527082041_0005_D.jpg' },
    {
      name: 'stats',
      type: 'array',
      fields: [
        { name: 'value', type: 'text' },
        { name: 'label', type: 'text' },
      ],
      defaultValue: [
        { value: '800 m²', label: 'Showroom' },
        { value: '9,2', label: '327 reviews' },
        { value: '10 jaar', label: 'Specialist' },
      ],
    },

    // contactgegevens
    { name: 'contactHeading', type: 'text', defaultValue: 'Contactgegevens' },
    { name: 'addressLabel', type: 'text', defaultValue: 'Adres' },
    { name: 'addressLine1', type: 'text', defaultValue: 'De Stekelweie 2' },
    { name: 'addressLine2', type: 'text', defaultValue: '4353 RX Serooskerke' },
    { name: 'phoneLabel', type: 'text', defaultValue: 'Telefoon' },
    { name: 'phone', type: 'text', defaultValue: '0118-853055' },
    { name: 'emailLabel', type: 'text', defaultValue: 'E-mail' },
    { name: 'email', type: 'text', defaultValue: 'info@verandazeeland.nl' },
    { name: 'hoursLabel', type: 'text', defaultValue: 'Openingstijden' },
    { name: 'hoursDays', type: 'text', defaultValue: 'Dinsdag t/m zaterdag' },
    { name: 'hoursTime', type: 'text', defaultValue: '10.00–17.00 uur' },
    { name: 'hoursNote', type: 'text', defaultValue: 'Bij voorkeur op afspraak' },
    { name: 'contactImage', type: 'upload', relationTo: 'media' },
    { name: 'contactImageFallback', type: 'text', admin: { description: 'Standaard-afbeelding (pad in /uploads)' }, defaultValue: '/uploads/Profiline_Veenendaal_VS_20250611_430_LR.jpg' },

    // offerte-formulier (copy only — form does not submit yet)
    { name: 'formHeading', type: 'text', defaultValue: 'Vraag een offerte aan' },
    { name: 'formIntro', type: 'textarea', defaultValue: 'Vul het formulier in en wij nemen binnen 2 werkdagen contact met u op.' },
    { name: 'formFirstName', type: 'text', defaultValue: 'Voornaam' },
    { name: 'formLastName', type: 'text', defaultValue: 'Achternaam' },
    { name: 'formEmail', type: 'text', defaultValue: 'E-mailadres' },
    { name: 'formPhone', type: 'text', defaultValue: 'Telefoonnummer' },
    { name: 'formInterest', type: 'text', defaultValue: 'Ik ben geïnteresseerd in' },
    { name: 'formMessage', type: 'text', defaultValue: 'Uw bericht' },
    { name: 'formButton', type: 'text', defaultValue: 'Verstuur aanvraag →' },
    { name: 'formDisclaimer', type: 'text', defaultValue: 'Wij gaan zorgvuldig om met uw gegevens. Zie ons privacybeleid.' },

    // servicegebied
    { name: 'serviceHeading', type: 'text', defaultValue: 'Actief in heel Zeeland' },
    {
      name: 'serviceText',
      type: 'textarea',
      defaultValue:
        'Van Walcheren tot Zeeuws-Vlaanderen en de Bevelanden: wij leveren en monteren in de hele provincie.',
    },
    {
      name: 'serviceAreas',
      type: 'array',
      fields: [{ name: 'name', type: 'text' }],
      defaultValue: [
        { name: 'Middelburg' },
        { name: 'Vlissingen' },
        { name: 'Goes' },
        { name: 'Zierikzee' },
        { name: 'Terneuzen' },
        { name: 'Kapelle' },
        { name: 'Domburg' },
      ],
    },
  ],
}
