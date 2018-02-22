new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'red'
    }
  },
  methods: {
    startEffect() {
      setInterval(() => {
        this.effectClasses.highlight = !this.effectClasses.highlight;
        this.effectClasses.shrink = !this.effectClasses.shrink;
      }, 1000);
    },
    startProgress() {
      var width = 0;
      setInterval(() => {
        width = width + 10;
        this.progressBar.width = width + 'px';
      }, 500);
    }
  }
});