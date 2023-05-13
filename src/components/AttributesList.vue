<template>
  <div class="attributes">
    <button
      :disabled="$route.fullPath === '/products'"
      @click="clearAll">
      Clear all
    </button>
    <h4>Filters:</h4>
    <form
      ref="form"
      @submit.prevent="preformSearch">
      <button type="submit">
        Submit
      </button>
      <div
        v-for="(attribute, id) in attributes"
        :key="id">
        <h5 class="dropdown">
          {{ attribute.name }}
        </h5>
        <div
          v-for="val in attribute.terms"
          :key="val.term">
          <div v-if="attribute.name === 'color'">
            <label :for="val.term">
              {{ val.term }}
              {{ val.count }}
            </label>
            <input
              :id="val.term"
              v-model="color.checkedProducts"
              type="checkbox"
              class="dpn-item"
              :name="attribute.name"
              :value="val.term">
          </div>
          <div v-if="attribute.name === 'commonSize'">
            <label :for="val.term">
              {{ val.term }}
              {{ val.count }}
            </label>
            <input
              :id="val.term"
              v-model="commonSize.checkedProducts"
              type="checkbox"
              class="dpn-item"
              :name="attribute.name"
              :value="val.term">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import readQueryData from "../mixins/readQueryData";
export default {
  mixins: [readQueryData],
  props: {
    attributes: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      color: {
        checkedProducts: []
      },
      commonSize: {
        checkedProducts: []
      }
    };
  },
  mounted () {
    console.log('attributes mounted--------------------------------------');
    console.log('----------string to console--------------------------------------');
    console.log(this.$route.fullPath);

    const data = { ...this.query };
    if (!data.color) {
      data.color = [];
    }
    if (!data.commonSize) {
      data.commonSize = [];
    }
    this.prefillCheckboxes(data);
    this.applyQuery(data);
  },
  methods: {
    ...mapActions(['getResultsAndAttributes']),

    clearAll () {
      const data = { color: [], commonSize: []};
      this.prefillCheckboxes(data);
      this.$store.dispatch('getResultsAndAttributes', data);
      this.$router.push({ path: '/products'});
    },

    prefillCheckboxes (data) {
      this.color.checkedProducts = data.color;
      this.commonSize.checkedProducts = data.commonSize;
    },

    preformSearch () {
      const data = {
        ...this.query,
        color: this.color.checkedProducts,
        commonSize: this.commonSize.checkedProducts,
      };
      this.applyQuery(data);
      this.$router.replace({ query: { ...data} });
      console.log('preform search function--------------------------');

    },
    applyQuery (data) {
      this.$store.dispatch('getResultsAndAttributes', data);
    }
  }
};
</script>

<style scoped>
.attributes {
  min-width: 150px;
  text-align: left;
}
.dropdown {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
</style>

