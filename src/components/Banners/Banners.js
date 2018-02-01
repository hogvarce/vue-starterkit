import { mapActions, mapGetters } from 'vuex';
import Paginate from 'vuejs-paginate';

export default {
  data() {
    return {
      fields: {
        id: {
          label: 'ID',
          sortable: true,
        },
        title: {
          lable: 'Заголовок',
          sortable: true,
        },
        images: {
          lable: 'Картинка',
          sortable: false,
        }
      },
      limit: 10,
    };
  },
  created() {
    this.fetchBanner();
  },
  computed: {
    ...mapGetters({
      banners: 'banners/banners',
      totalItems: 'banners/totalItems',
    }),
    currentPage: {
      get: function () {
        const { page } = this.$route.query;
        return page || 1;
      },
      set: function (page) {
        this.currentPage = page;
      },
    },
    initPage: {
      get: function () {
        return this.currentPage - 1;
      },
      set: function(page) {
        this.initPage = page;
      }
    },
    pages: {
      get: function () {
        return Math.ceil(this.totalItems / this.limit);
      },
      set: function (pages) {
        this.pages = pages;
      },
    },
  },
  methods: {
    ...mapActions({
      getBanners: 'banners/getBanners',
    }),
    clickCallback(page) {
      this.$router.push('?page=' + page);
    },
    fetchBanner() {
      const page = this.currentPage;
      this.getBanners(page);
    },
  },
  watch: {
    '$route': 'fetchBanner'
  },
  components: {
    'paginate': Paginate
  },
};
