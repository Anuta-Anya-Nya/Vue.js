Vue.component('tag-button', {
    props: ['tag'],
    methods: {
        makeActive(id) {
            this.$emit("makeActive", id);
        },
    },
    computed: {
        activeClass() {
            if (this.tag.isActive) {
                return "tags__button-active";
            } else {
                return '';
            }
        },
    },
    template: `        
            <button @click="makeActive(tag.id)" class="tags__button" :class="activeClass">{{tag.tag}}</button>          
    `,
});
Vue.component('tag-button-list', {
    props: [],

    data() {
        return {
            tagList: [{ id: 1, tag: 'Kitchen', isActive: false },
            { id: 2, tag: 'Bedroom', isActive: false },
            { id: 3, tag: 'Building', isActive: false },
            { id: 4, tag: 'Architecture', isActive: false },
            { id: 5, tag: 'Kitchen Planning', isActive: false },
            { id: 6, tag: 'Bedroom', isActive: false }],
        }
    },
    methods: {
        makeActive(id) {
            const selectedTag = this.tagList.find(el => el.id === id);
            if (selectedTag.isActive) {
                selectedTag.isActive = false;
                this.$emit('targetTag', '');
            } else {
                const activeTag = this.tagList.find(el => el.isActive === true);
                if (activeTag) {
                    activeTag.isActive = false;
                }
                selectedTag.isActive = true;
                this.$emit('targetTag', selectedTag.tag);
            }
        },
    },

    template: `
        <section class="tags">
          <h4 class="tags__title">Tags</h4>
          <div class="tags__box">
            <tag-button v-for="button in tagList" :key="button.id" :tag="button" @makeActive="makeActive" ></tag-button>
          </div>
        </section>
    `,
});

Vue.component('blog-details', {
    props: [],

    data() {
        return {

        }
    },

    template: ``,
});
Vue.component('blog', {
    props: [],

    data() {
        return {

        }
    },

    template: ``,
});

Vue.component('blogs-list', {
    props: ["activeTag"],

    data() {
        return {
            articles: [
                {
                    id: 1, imgUrl: 'img/blog1.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Kitchen']
                },
                {
                    id: 2, imgUrl: 'img/blog2.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Bedroom']
                },
                {
                    id: 3, imgUrl: 'img/blog3.jpg', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Building']
                },
                {
                    id: 4, imgUrl: 'img/blog4.jpg', groupArticle: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '26 December,2022', tag: ['Architecture']
                },
                {
                    id: 5, imgUrl: 'img/blog5.jpg', groupArticle: 'Living Design', title: 'Low Cost Latest Invented Interior Designing Ideas.', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '22 December,2022', tag: ['Kitchen Planning', 'Kitchen']
                },
                {
                    id: 6, imgUrl: 'img/blog6.png', groupArticle: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', dataArticle: '25 December,2022', tag: ['Bedroom']
                },
                {
                    id: 7, imgUrl: 'img/post-latest.jpg', groupArticle: 'Interior Design', title: 'Low Cost Latest Invented Interior Designing Ideas', text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.', simpleText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.', dataArticle: '26 December,2022', tag: ['Kitchen Planning', 'Kitchen']
                }
            ],
        }
    },
    computed: {
        getArticlesList() {
            if (this.activeTag === '') {
                return this.articles;
            } else {
                return this.articles.filter(el => el.tag.includes(this.activeTag));
            }

        },
    },
    methods: {
        created() {
            app2.$on('targetTag', (selectedTag) => {
                console.log(selectedTag);
            })
        }
    },
    template: `<ol>
    <li v-for="article in getArticlesList" :key="article.id">{{article.id}} - {{article.groupArticle}}</li>
</ol>`,
});
Vue.component('blog-details-box', {
    props: {},

    data() {
        return {
            activeTag: '',
        }
    },
    methods: {
        getActiveTag(tag) {
            this.activeTag = tag;
        },
    },

    template: `<div>
    <blogs-list :activeTag="activeTag"></blogs-list>
    <tag-button-list @targetTag="getActiveTag"></tag-button-list>
    
    </div>`,
});





const app2 = new Vue({
    el: '#app2',
    data: {

    },
    computed: {
        latestPost() {
            return this.articles[this.articles.length - 1];
        },
        postsForBlog() {
            return this.articles.slice(0, this.articles.length - 1);
        },
        postsForIndex() {
            return this.articles.slice(0, 3);
        },

    }
})