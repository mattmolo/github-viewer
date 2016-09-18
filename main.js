// main.js
var Vue = require('vue')

Vue.use(require('vue-resource'));

import SearchBar from './components/SearchBar.vue'
import Dashboard from './components/Dashboard.vue'
import Column from './components/Column.vue'

// User/Org to grab repo's from
// User: users/user_name
// Org: orgs/org_name
var repo_list = 'orgs/purduerov';

new Vue({
    el: 'body',
    components: {
        SearchBar,
        Dashboard,
        Column
    },

    data: {
        list: {},
        filter: ''
    },

    methods: {
        loadData: function() {
            this.$http.jsonp('https://api.github.com/' + repo_list + '/repos?callback=jsonp').then(r => {

                // Column lists. We predefine some here to set a default ordering
                var accumulator = {
                    lists: ["#electrical", "#software", "#other"],
                    '#electrical': [],
                    '#software': [],
                    '#other': []
                };

                var matches = r.data.data.reduce((matches, repo) => {
                    repo = {
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url,
                        last_updated: repo.updated_at
                    };

                    var tag_re = /(#\w*)/i;

                    var found = false;
                    if (repo.description != null) {
                        found = repo.description.match(tag_re);
                    }

                    if (found) {
                        if (matches.lists.indexOf(found[0]) < 0) {
                            matches.lists.push(found[0]);
                            matches[found[0]] = [];
                        }
                        matches[found[0]].push(repo);
                    } else {

                        if (matches.lists.indexOf('#uncategorized') < 0) {
                            matches.lists.push('#uncategorized');
                            matches['#uncategorized'] = [];
                        }
                        matches['#uncategorized'].push(repo);

                    }

                    return matches;
                }, accumulator)

                var list = matches.lists.map(x => {
                    return {
                        key: x,
                        value: matches[x]
                    };
                })

                this.$set("list", list);
            })
        }
    },

    ready: function() {
        this.loadData();
    }
})
