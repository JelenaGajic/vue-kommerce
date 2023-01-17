<template>
  <div class="home">
    <p>This is homepage</p>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      message: '',
    };
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      const res = await axios.get('/api/products');
      console.log(res.data);
    },
  },
};
</script>
