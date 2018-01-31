<template>
  <div>
    <b-table class="table" small striped hover :fields="fields" :items="banners">
      <template slot="images" slot-scope="data">
        <progressive-img :src="data.item.images[0]" class="image" :alt="data.item.title" />
      </template>
    </b-table>
    <paginate
      :page-count="pages"
      :page-range="3"
      :margin-pages="+currentPage"
      :initial-page="initPage"
      :click-handler="clickCallback"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>
  </div>
</template>
<script>
  export default from './Banners';
</script>
<style lang="stylus">
  @import 'Banners.styl';
</style>
