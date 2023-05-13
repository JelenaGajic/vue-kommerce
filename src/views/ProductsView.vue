<template>
  <div>
    <h1>This is products page</h1>
    <SearchWidget />
    <div class="search">
      <AttributesList :attributes="attributes" />
      <ProductsList :products="products" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';
import AttributesList from '@/components/AttributesList';
import SearchWidget from '@/components/SearchWidget';
import ProductsList from '@/components/ProductsList';
// @ is an alias to /src

export default {
  name: 'ProductsView',
  components: {
    AttributesList,
    ProductsList,
    SearchWidget
  },
  computed: {
    products () {
      return this.$store.state.results;
    },
    attributes () {
      return this.$store.state.attributes;
    }
  },
  async mounted() {
    // get attributs and products
    // this.$store.dispatch('getResultsAndAttributes', { color: [], commonSize: []});
  },
  methods: {
    ...mapActions(['getResultsAndAttributes']),
  }
};
</script>

<style>
.search {
  display: flex;
  padding: 50px;
}
</style>