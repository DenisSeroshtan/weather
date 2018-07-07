
class Translate {
  constructor(words) {
    this.words = words;
    this.apiKey = 'trnsl.1.1.20180707T140951Z.b1a2c56dd671ae30.f58874011bdbd9540bbb4073f9ab45956898e7d1';
  }



  async getTranslate() {

    const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-ru&key=${this.apiKey}&text=${this.words}`)
    
    const resData = await response.json();

    return resData;
  }
} 