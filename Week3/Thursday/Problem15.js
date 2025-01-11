let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",
  
    buildSentence: function () {
      return this.subject && this.verb && this.object
        ? `${this.subject} ${this.verb} ${this.object}`
        : "Incomplete Sentence";
    },
  
    updateProperty: function (Prop, value) {
      if (this.hasOwnProperty(Prop)) {
        this[Prop] = value;
        return this;
      } else {
        return "Invalid Property";
      }
    }
  };
  
  console.log(sentenceBuilder.buildSentence());
  sentenceBuilder.updateProperty("verb", "are");
  console.log(sentenceBuilder.buildSentence());
  sentenceBuilder.updateProperty("subject", "The cat");
  console.log(sentenceBuilder.buildSentence());
  sentenceBuilder.updateProperty("mood", "happy");
  console.log(sentenceBuilder.buildSentence());
  sentenceBuilder.updateProperty("verb", "");
  console.log(sentenceBuilder.buildSentence());
  