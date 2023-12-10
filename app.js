const template = {
   letters: {
      'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
      'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
      'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽', 'z': '⠵'
   },
   contractions: {
      'but': '⠃', 'can': '⠉', 'do': '⠙', 'every': '⠑', 'from': '⠋', 'go': '⠛', 'have': '⠓', 'just': '⠚',
      'knowledge': '⠞⠢', 'like': '⠎⠊', 'more': '⠍⠕', 'not': '⠝⠕⠞', 'people': '⠏⠑⠑⠏⠇', 'quite': '⠟⠍⠑',
      'rather': '⠗⠑⠞⠓', 'so': '⠎⠕', 'that': '⠞⠕', 'us': '⠥⠎', 'very': '⠧⠑⠗', 'it': '⠊⠞', 'you': '⠽⠕⠥',
      'as': '⠎⠎⠎', 'and': '⠃⠝⠙', 'for': '⠕⠗', 'of': '⠕⠋', 'the': '⠎⠑', 'with': '⠺⠊', 'will': '⠺⠊⠇',
      'his': '⠓⠊⠎', 'in': '⠊⠝', 'was': '⠺⠕⠎', 'to': '⠕⠑'
   },
   punctuation: {
      ',': '⠲', ';': '⠆⠖⠆', ':': '⠆⠆⠆', '.': '⠲', '!': '⠖', '(': '⠘', ')': '⠘⠆', '“': '⠘⠸', '”': '⠘⠸',
      '?': '⠈⠻', '/': '⠘⠤⠇', '#': '⠼⠼', '\'': '⠄', '…': '⠤⠤⠤', '’': '⠄', '­': '⠤⠤', '-': '⠤⠤', '‐': '⠤⠤',
      '‑': '⠤⠤', '‒': '⠤⠤', '–': '⠤⠤', '—': '⠤⠤', '―': '⠤⠤',
      '&': '⠈⠛⠎', '%': '⠨⠴', '$': '⠤⠎⠞', '@': '⠈⠹', '*': '⠈⠻'
   },
   numbers: { '1': '⠂', '2': '⠆', '3': '⠒', '4': '⠲', '5': '⠤', '6': '⠖', '7': '⠶', '8': '⠦', '9': '⠔', '0': '⠶⠂' },
   CAPITAL: '⠠',
   NUMBER: '⠼',
   UNRECOGNIZED: '?'
};

new Vue({
   el: '#app',
   data: {
      inputText: 'Aku & kamu 90',
      brailleText: ''
   },
   methods: {
      convertText() {
         function charToBraille(char) {
            if (char.toLowerCase() in template.letters) {
               return template.letters[char.toLowerCase()];
            } else if (char.toLowerCase() in template.contractions) {
               return template.contractions[char.toLowerCase()];
            } else if (char in template.punctuation) {
               return template.punctuation[char];
            } else if (char in template.numbers) {
               return template.numbers[char];
            } else if (char === ' ') {
               return ' ';
            } else {
               return template.UNRECOGNIZED;
            }
         }

         function translate(input) {
            const characters = input.split('');
            let result = [];
            for (const char of characters) {
               result.push(charToBraille(char));
            }
            return result;
         }

         this.brailleText = translate(this.inputText);
      }
   }
});