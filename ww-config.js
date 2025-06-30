export default {
  editor: {
    label: {
      en: 'Input OTP',
      fr: 'Code OTP'
    },
    icon: 'cursor-text',
    bubble: {
      icon: 'cursor-text'
    }
  },
  triggerEvents: [
    { name: 'change', label: { en: 'On change', fr: 'Lors du changement' } },
    { name: 'complete', label: { en: 'On complete', fr: 'Lors de la completion' } },
    { name: 'focus', label: { en: 'On focus', fr: 'Lors du focus' } },
    { name: 'blur', label: { en: 'On blur', fr: 'Lors de la perte de focus' } },
    { name: 'resend', label: { en: 'On resend', fr: 'Lors du renvoi' } }
  ],
  properties: {
    // Comportement
    length: {
      label: { en: 'Code length', fr: 'Longueur du code' },
      type: 'Number',
      defaultValue: 6,
      bindable: true,
      section: 'settings'
    },
    password: {
      label: { en: 'Password mode', fr: 'Mode mot de passe' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    numbersOnly: {
      label: { en: 'Numbers only', fr: 'Chiffres uniquement' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'settings'
    },
    alphanumeric: {
      label: { en: 'Alphanumeric', fr: 'Alphanumérique' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    disabled: {
      label: { en: 'Disabled', fr: 'Désactivé' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    autoFocus: {
      label: { en: 'Auto focus', fr: 'Focus automatique' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    
    // Apparence
    size: {
      label: { en: 'Size', fr: 'Taille' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'style'
    },
    alignment: {
      label: { en: 'Alignment', fr: 'Alignement' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'left', label: { en: 'Left', fr: 'Gauche' } },
          { value: 'center', label: { en: 'Center', fr: 'Centre' } },
          { value: 'right', label: { en: 'Right', fr: 'Droite' } }
        ]
      },
      defaultValue: 'center',
      bindable: true,
      section: 'style'
    },
    showPlaceholder: {
      label: { en: 'Show placeholder', fr: 'Afficher le placeholder' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'style'
    },
    
    // Messages
    helpText: {
      label: { en: 'Help text', fr: "Texte d'aide" },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'content'
    },
    hasError: {
      label: { en: 'Has error', fr: 'A une erreur' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'validation'
    },
    errorMessage: {
      label: { en: 'Error message', fr: "Message d'erreur" },
      type: 'Text',
      defaultValue: '',
      bindable: true,
      multiLang: true,
      section: 'validation'
    },
    
    // Fonctionnalités avancées
    showResend: {
      label: { en: 'Show resend button', fr: 'Afficher le bouton renvoyer' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'advanced'
    },
    showTimer: {
      label: { en: 'Show timer', fr: 'Afficher le timer' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'advanced'
    },
    resendCooldown: {
      label: { en: 'Resend cooldown (seconds)', fr: 'Délai de renvoi (secondes)' },
      type: 'Number',
      defaultValue: 60,
      bindable: true,
      section: 'advanced'
    },
    
    // Style
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      section: 'style'
    }
  },
  
  defaultContent: {
    length: 6,
    password: false,
    numbersOnly: true,
    alphanumeric: false,
    disabled: false,
    autoFocus: false,
    size: 'default',
    alignment: 'center',
    showPlaceholder: true,
    helpText: '',
    hasError: false,
    errorMessage: '',
    showResend: false,
    showTimer: false,
    resendCooldown: 60,
    customClass: ''
  },
  
  settingsOptions: {
    autoByContent: true
  },
  
  actions: [
    {
      label: { en: 'Clear', fr: 'Effacer' },
      action: 'clear'
    },
    {
      label: { en: 'Focus', fr: 'Focus' },
      action: 'focus'
    }
  ]
} 