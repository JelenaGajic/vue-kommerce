<template>
  <div>
    <form>
      <p>Search for products:</p>
      <input
        v-model="searchText"
        type="text"
        placeholder="Search..."
        name="search">
      <button @click="search">
        Submit
      </button>
      <input
        v-model="language"
        type="radio"
        value="en"
        name="lang"
        checked>EN
      <input
        v-model="language"
        type="radio"
        value="de"
        name="lang">DE
    </form>
  </div>
</template>

<script>
import readQueryData from "../mixins/readQueryData";
export default {
  mixins: [readQueryData],
  data () {
    return {
      language: 'en',
      searchText: ''
    };
  },
  mounted () {
    console.log('search widget mounted--------------------------------------');
  },
  methods: {
    search () {
      const data = this.readQueryData({ text: this.searchText, lang: this.language, ...this.query}) ;
      console.log('----------string tdatao console--------------------------------------');
      console.log(data);

      // this.$router.replace({ query: { ...data} });
      // this.$store.dispatch('getResultsAndAttributes', data);
    }
  }
};
</script>
