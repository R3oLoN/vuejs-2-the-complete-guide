export const countsMixin = {
  data() {
    return {
      textMixnCount: ""
    };
  },
  computed: {
    countsMixinText() {
      if (!this.textMixnCount) return this.textMixnCount;
      const length = this.textMixnCount.length;
      return `${this.textMixnCount} (${length})`;
    }
  }
};
