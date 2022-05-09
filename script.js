import keys from './assets/src/keys.js';

class Keyboard {
  constructor() {
    this.isCaps = false;
    this.isShift = false;
    this.isVolume = true;
    this.isSpeech = false;
    this.language = localStorage.getItem('lang') || 'en';
    this.keyButtons = keys.flatMap((item) => item);
    this.init();
  }

  init() {
    const container = document.createElement('div');
    this.output = document.createElement('textarea');
    this.keyboard = document.createElement('div');

    container.className = 'wrapper';
    document.body.prepend(container);
    this.output.setAttribute('placeholder', 'CLick here to start');
    this.keyboard.className = 'keyboard hidden';
    this.keyboard.dataset.language = this.language;
    container.append(this.output, this.keyboard);

    for (let line of keys) {
      const row = document.createElement('div');
      row.className = 'row';
      this.keyboard.append(row);

      for (let button of line) {
        const key = document.createElement('div');
        key.className = `key ${button.code}`;
        key.setAttribute('code', button.code);
        key.textContent = button[this.language];
        key.addEventListener('click', this.inputHandler);
        row.append(key);
      }
    }
    document.querySelector('.Volume').classList.add('activated');
    this.layout = document.querySelectorAll('.key');
  }

  inputHandler = (e) => {
    let { code, type } = e;
    code = code ? code : e.target.getAttribute('code');
    const keyObj = this.keyButtons.find((key) => key.code === code);
    if (!keyObj) { return; }
    const keyPressed = document.querySelector(`.${code}`);

    if (type === 'keydown') { keyPressed.classList.add('active'); }
    if (type === 'keyup') { keyPressed.classList.remove('active'); }

    if (type === 'click' && this.isVolume) {
      const special = ['Enter', 'CapsLock', 'ShiftLeft', 'Backspace', 'Delete'];
      const curLang = this.getCurrentLanguage();
      if (special.includes(code)) {
        this.playSound(`./assets/sounds/${code.toLowerCase()}.wav`)
      } else {
        this.playSound(`./assets/sounds/${curLang}.wav`)
      }
    }

    if (code.includes('Arrow') && type !== 'click') { return; }

    if (type !== 'keyup') {
      e.preventDefault();
      let start = this.output.selectionStart,
        end = this.output.selectionEnd;
      const left = this.output.value.slice(0, start),
        right = this.output.value.slice(end),
        value = keyPressed.textContent;

      if (keyObj.isVisible) {
        this.output.textContent = `${left}${value}${right}`;
        start++;
      }

      if (code === 'Backspace') {
        this.output.textContent = `${left.slice(0, -1)}${right}`;
        start > 0 ? start-- : start += 0;
      }

      if (code === 'Enter') {
        this.output.textContent = `${left}\n${right}`;
        start++;
      }

      if (code === 'Delete') {
        this.output.textContent = `${left}${right.slice(1)}`;
      }

      if (code === 'Tab') {
        this.output.textContent = `${left}\t${right}`;
        start++;
      }

      if (code === 'ShiftLeft' && type != 'click') {
        if (this.isShift) { return; }
        this.isShift = !this.isShift;
        keyPressed.classList.toggle('activated');
        this.render();
      }

      if (code === 'ArrowLeft' && type === 'click') {
        start > 0 ? start-- : start += 0;
      }

      if (code === 'ArrowRight' && type === 'click') {
        start++;
      }

      if (code === 'ArrowUp' && type === 'click') {
        start = 0;
      }

      if (code === 'ArrowDown' && type === 'click') {
        start = this.output.value.length;
      }

      this.output.blur();
      this.output.setSelectionRange(start, start);
      this.output.focus();
    }

    if (type !== 'keydown') {

      if (code === 'CapsLock') {
        this.isCaps = !this.isCaps;
        keyPressed.classList.toggle('activated');
        this.render();
      }

      if (code === 'ShiftLeft') {
        this.isShift = !this.isShift;
        keyPressed.classList.toggle('activated');
        this.render();
      }

      if (code === 'Hide') {
        this.keyboard.classList.add('hidden');
        this.output.blur();
      }

      if (code === 'Lang') {
        let lang = this.getCurrentLanguage();
        lang = (lang === 'en') ? 'ru' : 'en';
        this.keyboard.dataset.language = lang;
        localStorage.setItem('lang', lang);
        this.render();
      }

      if (code === 'Volume') {
        this.isVolume = !this.isVolume;
        keyPressed.classList.toggle('activated');
      }

      if (code === 'Speech') {
        this.isSpeech = !this.isSpeech;
        keyPressed.classList.toggle('activated');

        if (this.isSpeech) {
          this.recognizeSpeech();
        } else {
          this.recognition.stop();
        }
      }
    }
  }

  render() {
    let lang = this.getCurrentLanguage();

    if (this.isCaps && !this.isShift) {
      this.layout.forEach((key, i) => {
        if (this.keyButtons[i][lang].match(/^[a-zа-я]$/i)) {
          key.textContent = this.keyButtons[i][`big${lang}`];
        } else {
          key.textContent = this.keyButtons[i][lang];
        }
      });
    }
    else if (this.isShift && !this.isCaps) {
      this.layout.forEach((key, i) => {
        key.textContent = this.keyButtons[i][`big${lang}`];
      });
    }
    else if (this.isShift && this.isCaps) {
      this.layout.forEach((key, i) => {
        if (this.keyButtons[i][lang].match(/^[a-zа-я]$/i)) {
          key.textContent = this.keyButtons[i][lang];
        } else {
          key.textContent = this.keyButtons[i][`big${lang}`];
        }
      });
    }
    else {
      this.layout.forEach((key, i) => {
        key.textContent = this.keyButtons[i][lang];
      });
    }
  }

  showKeyboard = () => {
    if (!this.keyboard.classList.contains('hidden')) { return; }
    this.keyboard.classList.remove('hidden');
    this.output.removeAttribute('placeholder');
  }

  getCurrentLanguage() {
    return this.keyboard.dataset.language;
  }

  playSound(src) {
    const audio = document.createElement('audio');
    audio.setAttribute('src', src);
    audio.load();
    audio.play();
  }

  recognizeSpeech() {
    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = false;
    this.recognition.continuous = true;
    this.recognition.lang = (this.getCurrentLanguage() === 'en') ? 'en-US' : 'ru-RU';

    this.recognition.addEventListener('result', e => {
      if (e.results[0].isFinal) {
        let start = this.output.selectionStart;
        const transcript = e.results[e.results.length - 1][0].transcript,
          end = this.output.selectionEnd,
          left = this.output.value.slice(0, start),
          right = this.output.value.slice(end);

        this.output.textContent = `${left}${transcript}${right}`;
        start += transcript.length;
        this.output.setSelectionRange(start, start);
        this.output.focus();
      }
    });

    this.recognition.start();
  }
}

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const keyboard = new Keyboard(),
  output = document.querySelector('textarea');

document.addEventListener('keydown', keyboard.inputHandler);
document.addEventListener('keyup', keyboard.inputHandler);
output.addEventListener('focus', keyboard.showKeyboard);