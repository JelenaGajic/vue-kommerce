<template>
  <div>
    <div class="wrapper">
      <div
        v-for="product in products"
        :key="product.id"
        class="product">
        <p>{{ product.name.en }}</p>
        <img
          class="product-img"
          :src="product.masterVariant.images[0].url">
        <p class="list-group-item-heading">Price ${{ product.masterVariant.prices[0].value.centAmount/100 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    console.log('products mounted--------------------------------------');
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.product {
  width: 30%;
  border: 1px solid #d6d6d6;
  background: white;
  text-align: center;
  /* max-height: 300px; */
}

.product-img {
  width: 100%;
}
</style>