const keys = [
  [
    {
      code: 'Backquote', en: '`', bigen: '~', ru: 'ё', bigru: 'Ё', isVisible: true,
    },
    {
      code: 'Digit1', en: '1', bigen: '!', ru: '1', bigru: '!', isVisible: true,
    },
    {
      code: 'Digit2', en: '2', bigen: '@', ru: '2', bigru: '"', isVisible: true,
    },
    {
      code: 'Digit3', en: '3', bigen: '#', ru: '3', bigru: '№', isVisible: true,
    },
    {
      code: 'Digit4', en: '4', bigen: '$', ru: '4', bigru: ';', isVisible: true,
    },
    {
      code: 'Digit5', en: '5', bigen: '%', ru: '5', bigru: '%', isVisible: true,
    },
    {
      code: 'Digit6', en: '6', bigen: '^', ru: '6', bigru: ':', isVisible: true,
    },
    {
      code: 'Digit7', en: '7', bigen: '&', ru: '7', bigru: '?', isVisible: true,
    },
    {
      code: 'Digit8', en: '8', bigen: '*', ru: '8', bigru: '*', isVisible: true,
    },
    {
      code: 'Digit9', en: '9', bigen: '(', ru: '9', bigru: '(', isVisible: true,
    },
    {
      code: 'Digit0', en: '0', bigen: ')', ru: '0', bigru: ')', isVisible: true,
    },
    {
      code: 'Minus', en: '-', bigen: '_', ru: '-', bigru: '_', isVisible: true,
    },
    {
      code: 'Equal', en: '=', bigen: '+', ru: '=', bigru: '+', isVisible: true,
    },
    {
      code: 'Backspace', en: 'Backspace', bigen: 'Backspace', ru: 'Backspace', bigru: 'Backspace', isVisible: false,
    },
  ],

  [
    {
      code: 'Tab', en: 'Tab', bigen: 'Tab', ru: 'Tab', bigru: 'Tab', isVisible: false,
    },
    {
      code: 'KeyQ', en: 'q', bigen: 'Q', ru: 'й', bigru: 'Й', isVisible: true,
    },
    {
      code: 'KeyW', en: 'w', bigen: 'W', ru: 'ц', bigru: 'Ц', isVisible: true,
    },
    {
      code: 'KeyE', en: 'e', bigen: 'E', ru: 'у', bigru: 'У', isVisible: true,
    },
    {
      code: 'KeyR', en: 'r', bigen: 'R', ru: 'к', bigru: 'К', isVisible: true,
    },
    {
      code: 'KeyT', en: 't', bigen: 'T', ru: 'е', bigru: 'Е', isVisible: true,
    },
    {
      code: 'KeyY', en: 'y', bigen: 'Y', ru: 'н', bigru: 'Н', isVisible: true,
    },
    {
      code: 'KeyU', en: 'u', bigen: 'U', ru: 'г', bigru: 'Г', isVisible: true,
    },
    {
      code: 'KeyI', en: 'i', bigen: 'I', ru: 'ш', bigru: 'Ш', isVisible: true,
    },
    {
      code: 'KeyO', en: 'o', bigen: 'O', ru: 'щ', bigru: 'Щ', isVisible: true,
    },
    {
      code: 'KeyP', en: 'p', bigen: 'P', ru: 'з', bigru: 'З', isVisible: true,
    },
    {
      code: 'BracketLeft', en: '[', bigen: '{', ru: 'х', bigru: 'Х', isVisible: true,
    },
    {
      code: 'BracketRight', en: ']', bigen: '}', ru: 'ъ', bigru: 'Ъ', isVisible: true,
    },
    {
      code: 'Backslash', en: '\\', bigen: '|', ru: '\\', bigru: '/', isVisible: true,
    },
  ],

  [
    {
      code: 'CapsLock', en: 'Caps Lock', bigen: 'Caps Lock', ru: 'Caps Lock', bigru: 'Caps Lock', isVisible: false,
    },
    {
      code: 'KeyA', en: 'a', bigen: 'A', ru: 'ф', bigru: 'Ф', isVisible: true,
    },
    {
      code: 'KeyS', en: 's', bigen: 'S', ru: 'ы', bigru: 'Ы', isVisible: true,
    },
    {
      code: 'KeyD', en: 'd', bigen: 'D', ru: 'в', bigru: 'В', isVisible: true,
    },
    {
      code: 'KeyF', en: 'f', bigen: 'F', ru: 'а', bigru: 'А', isVisible: true,
    },
    {
      code: 'KeyG', en: 'g', bigen: 'G', ru: 'п', bigru: 'П', isVisible: true,
    },
    {
      code: 'KeyH', en: 'h', bigen: 'H', ru: 'р', bigru: 'Р', isVisible: true,
    },
    {
      code: 'KeyJ', en: 'j', bigen: 'J', ru: 'о', bigru: 'О', isVisible: true,
    },
    {
      code: 'KeyK', en: 'k', bigen: 'K', ru: 'л', bigru: 'Л', isVisible: true,
    },
    {
      code: 'KeyL', en: 'l', bigen: 'L', ru: 'д', bigru: 'Д', isVisible: true,
    },
    {
      code: 'Semicolon', en: ';', bigen: ':', ru: 'ж', bigru: 'Ж', isVisible: true,
    },
    {
      code: 'Quote', en: '\'', bigen: '"', ru: 'э', bigru: 'Э', isVisible: true,
    },
    {
      code: 'Enter', en: 'Enter', bigen: 'Enter', ru: 'Enter', bigru: 'Enter', isVisible: false,
    },
  ],

  [
    {
      code: 'ShiftLeft', en: 'Shift', bigen: 'Shift', ru: 'Shift', bigru: 'Shift', isVisible: false,
    },
    {
      code: 'KeyZ', en: 'z', bigen: 'Z', ru: 'я', bigru: 'Я', isVisible: true,
    },
    {
      code: 'KeyX', en: 'x', bigen: 'X', ru: 'ч', bigru: 'Ч', isVisible: true,
    },
    {
      code: 'KeyC', en: 'c', bigen: 'C', ru: 'с', bigru: 'С', isVisible: true,
    },
    {
      code: 'KeyV', en: 'v', bigen: 'V', ru: 'м', bigru: 'М', isVisible: true,
    },
    {
      code: 'KeyB', en: 'b', bigen: 'B', ru: 'и', bigru: 'И', isVisible: true,
    },
    {
      code: 'KeyN', en: 'n', bigen: 'N', ru: 'т', bigru: 'Т', isVisible: true,
    },
    {
      code: 'KeyM', en: 'm', bigen: 'M', ru: 'ь', bigru: 'Ь', isVisible: true,
    },
    {
      code: 'Comma', en: ',', bigen: '<', ru: 'б', bigru: 'Б', isVisible: true,
    },
    {
      code: 'Period', en: '.', bigen: '>', ru: 'ю', bigru: 'Ю', isVisible: true,
    },
    {
      code: 'Slash', en: '/', bigen: '?', ru: '.', bigru: ',', isVisible: true,
    },
    {
      code: 'ArrowUp', en: '↑', bigen: '↑', ru: '↑', bigru: '↑', isVisible: false,
    },
    {
      code: 'Delete', en: 'Del', bigen: 'Del', ru: 'Del', bigru: 'Del', isVisible: false,
    },
  ],

  [
    {
      code: 'Hide', en: '', bigen: '', ru: '', bigru: '', isVisible: false,
    },
    {
      code: 'Lang', en: 'en', bigen: 'en', ru: 'ru', bigru: 'ru', isVisible: false,
    },
    {
      code: 'AltLeft', en: 'Alt', bigen: 'Alt', ru: 'Alt', bigru: 'Alt', isVisible: false,
    },
    {
      code: 'Space', en: ' ', bigen: ' ', ru: ' ', bigru: ' ', isVisible: true,
    },
    {
      code: 'Speech', en: '', bigen: '', ru: '', bigru: '', isVisible: false,
    },
    {
      code: 'ArrowLeft', en: '←', bigen: '←', ru: '←', bigru: '←', isVisible: false,
    },
    {
      code: 'ArrowDown', en: '↓', bigen: '↓', ru: '↓', bigru: '↓', isVisible: false,
    },
    {
      code: 'ArrowRight', en: '→', bigen: '→', ru: '→', bigru: '→', isVisible: false,
    },
    {
      code: 'Volume', en: '', bigen: '', ru: '', bigru: '', isVisible: false,
    },
  ],
];

export default keys;