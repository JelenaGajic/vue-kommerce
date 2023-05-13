export default {
    data() {
        return {
            msg: 'Hello World',
        };
    },
    computed: {
        query() {
            return this.$route.query;
        }
    },
    methods: {
        prepareQuery(query) {
            let data = {};
            data = { ...query };
            if (typeof query.color === 'string') {
                data.color = [query.color];
            }
            if (typeof query.commonSize === 'string') {
                data.commonSize = [query.commonSize];
            }
            return data;
        },
    },
};