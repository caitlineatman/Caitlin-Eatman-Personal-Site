<template>

    <div>

        <div class="bg-secondary py-5 text-center">
            <h1 class="text-dark display-4">
                Headlines JSON Project
            </h1>
        </div>

        <div class="container pt-5">

            <div class="row">
                <div class="col-md-6">
                    <h2 class="text-center">
                        Option 1
                    </h2>
                    <ul class="list-group mt-4">
                        <li v-for="headline in headlinesByDate" :key="headline.title" class="list-group-item">
                            <small class="text-info" title="Publish Date">
                                {{ headline.published_at }}
                            </small>
                            <br />
                            <strong>
                                {{ headline.title }}
                            </strong>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <h2 class="text-center">
                        Option 2
                    </h2>

                    <div v-for="headline in headlinesByDate" :key="headline.title" class="card mt-4 border-info border-top-0 border-right-0 border-bottom-0 rounded-0">
                        <div class="card-body">
                            <p class="card-heading">
                                <strong>
                                    {{ headline.title }}
                                </strong>
                            </p>
                            <p class="card-text text-info">
                                <small>
                                    Published on {{ showLongDate(headline.published_at) }}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

    // use Moment JS to ensure correct date parsing
    import moment from "moment";

    export default {
        name: 'HeadlinesProject',
        methods: {
            /**
             * @param {string} date
             * To display date in long format.
             */
            showLongDate: function (date) {
                return moment(date).format("LL");
            }
        },
        data(){
            return {
                headlines: [
                    {
                        "published_at":"2018-07-01",
                        "title":"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "_kw":[]
                    },
                    {
                        "published_at":"2019-07-02",
                        "title":"Vestibulum in arcu neque. Pellentesque feugiat, mauris at congue semper. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2017-07-03",
                        "title":"Nulla iaculis, massa sit amet tempor pellentesque, sem ligula euismod metus, eget blandit tortor arcu eu nisl",
                        "_kw":[]
                    },
                    {
                        "published_at":"2018-06-01",
                        "title":"Pellentesque non feugiat ante. Donec dignissim turpis id orci consectetur. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2014-09-02",
                        "title":"Aliquam convallis turpis urna, ut dapibus arcu faucibus interdum",
                        "_kw":[]
                    },
                    {
                        "published_at":"2017-12-03",
                        "title":"Duis id elit eu metus commodo volutpat at at velit. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2018-01-01",
                        "title":"Aliquam tristique dui turpis, nec facilisis tellus eleifend id. Morbi. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2019-05-02",
                        "title":"Nam arcu mauris, porttitor ut leo id, luctus malesuada orci. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2017-07-03",
                        "title":"Donec ut mi bibendum, pharetra dolor sed, dapibus mauris. In. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2015-01-01",
                        "title":"Morbi enim metus, mollis in ultrices molestie, sagittis quis elit. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2017-02-02",
                        "title":"Curabitur vestibulum lorem in ex semper iaculis. Mauris vel facilisis. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2015-03-22",
                        "title":"Donec interdum nibh blandit bibendum hendrerit. Lorem ipsum dolor sit. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2016-06-19",
                        "title":"Etiam ac tellus quis felis cursus vulputate. Maecenas at felis. ",
                        "_kw":[]
                    },
                    {
                        "published_at":"2019-04-30",
                        "title":"Integer mi sapien, pharetra at nunc vel, tristique sollicitudin augue. ",
                        "_kw":[]
                    }
                ]
            }
        },
        computed: {
            /**
             * To show the headlines, sorted by date descending.
             */
            headlinesByDate: function() {
                return this.headlines.sort(function(a, b) {
                    return moment(b.published_at) - moment(a.published_at);
                });
            }
        }
    }
</script>