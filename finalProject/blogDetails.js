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
            article: {
                id: 7, imgUrl: 'img/blogDetails1.jpg',
                groupArticle: 'Interior Design',
                title: 'Low Cost Latest Invented Interior Designing Ideas',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.',
                simpleText: 'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                dataArticle: '26 December,2022',
                tag: ['Kitchen Planning', 'Kitchen']
            }
        }
    },

    template: `<article class="blogDetails">
    <h3 class="blogDetails__title">
      {{article.title}}
    </h3>
    <img class="blogImg" :src="article.imgUrl" alt="blog" />
    <div class="blogDetails__info">
      <div class="blogDetails__data">{{article.dataArticle}}</div>
      <nav class="breadCrumb">
        <a class="breadCrumb__link blogDetails__crumbs" href="#"
          >Interior</a
        >
        <a class="breadCrumb__link blogDetails__crumbs" href="#"
          >Home</a
        >
        <a class="breadCrumb__link blogDetails__crumbs" href="#"
          >Decore</a
        >
      </nav>
    </div>
    <p>
      {{article.text}}
    </p>
    <p>
      {{article.simpleText}}
    </p>
  </article>`,
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

    template: ` <div>
                    <div class="quotes">
                        <svg
                        width="74"
                        height="56"
                        viewBox="0 0 74 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M58.2516 0.600003C62.6516 0.600003 66.2516 2.06667 69.0516 5C71.7182 7.93334 73.0516 11.8667 73.0516 16.8C73.0516 25.4667 70.1849 33 64.4516 39.4C58.5849 45.8 51.5849 51.0667 43.4516 55.2L41.4516 51.8C44.7849 49.6667 47.9182 46.9333 50.8516 43.6C53.6516 40.2667 55.8516 36.6667 57.4516 32.8L51.8516 28.6C49.5849 27.1333 47.7182 25.1333 46.2516 22.6C44.7849 20.2 44.0516 17.8667 44.0516 15.6C44.0516 11.3333 45.3849 7.73334 48.0516 4.8C50.5849 2 53.9849 0.600002 58.2516 0.600003ZM17.0516 0.599999C21.4516 0.6 25.0516 2.06667 27.8516 5C30.5182 7.93333 31.8516 11.8667 31.8516 16.8C31.8516 25.4667 28.9849 33 23.2516 39.4C17.3849 45.8 10.3849 51.0667 2.25155 55.2L0.251554 51.8C3.58489 49.6667 6.71822 46.9333 9.65155 43.6C12.4516 40.2667 14.6516 36.6667 16.2516 32.8L10.6516 28.6C8.38489 27.1333 6.51822 25.1333 5.05155 22.6C3.58489 20.2 2.85156 17.8667 2.85156 15.6C2.85156 11.3333 4.18489 7.73333 6.85156 4.8C9.38489 2 12.7849 0.599999 17.0516 0.599999Z"
                            fill="#CDA274"
                        />
                        </svg>
                        <blockquote>
                            The details are not the details. They make the design.
                        </blockquote>
                    </div>
                    <div class="blogsList">
                        <h3 class="blogsList__title">Design sprints are great</h3>
                        <p class="blogsList__text">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many
                            variations of passages of Lorem Ipsum available, but the majority
                            have suffered.
                        </p>
                        <ol>
                            <li v-for="article in getArticlesList" :key="article.id" class="blogsList__li">
                                <a href="#" class="blogsList__text"
                                >{{article.title}}</a
                                >
                            </li>              
                        </ol>
                        <img
                        class="blogImg blogsList__img"
                        src="img/blogDetails2.png"
                        alt="blog"
                        />
                        <p class="blogsList__text">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to popular belief.There are many
                            variations of passages of Lorem Ipsum available, but the majority
                            have suffered.
                        </p>
                    </div>
                </div>`,
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

    template: ` <section class="blogDetails-box container">        
                    <div>
                        <blog-details></blog-details>
                        <blogs-list :activeTag="activeTag"></blogs-list>  
                    </div>  
                    <tag-button-list @targetTag="getActiveTag"></tag-button-list>
                </section>`,
});


const app2 = new Vue({
    el: '#app2',
    data: {
    },
})


// доделать компонент со статьей
// покрасить циферки
// сделать компонент для цитаты?