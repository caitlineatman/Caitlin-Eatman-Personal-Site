<template>

    <div>

        <div class="bg-info py-5 text-center">
            <h1 class="text-white display-1">
                My Portfolio
            </h1>
        </div>

        <div class="container pt-5">

            <div class="row mb-5">

                <div class="col-md-8">

                    <h2 class="text-center mb-3">
                        Latest Projects
                    </h2>

                    <p class="mb-5">
                        The following websites were public at one point in time.
                        <br /><br />
                        While I have more recent work, it is not public, so please contact me for more recent samples of my work. 
                        My GitHub account has more recent work as well.
                    </p>

                    <div class="card mb-5">
                        <img class="card-img-top" src="src/img/CAN-DOMissions-Screenshot-DesktopView-12-19-15.jpg" alt="CAN-DO Missions site, desktop version" />
                        <div class="card-body">
                            <h3 class="card-title">
                                CAN-DO Missions
                            </h3>
                            <p class="card-text">
                                I created this site from scratch. 
                                It's no longer accessible. 
                                It was responsive and built as a template to work with an in-house ColdFusion CMS.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a target="_blank" title="Opens in a new tab" href="src/img/CAN-DOMissions-Screenshot-MobileView-12-19-15.jpg">
                                See a screenshot of the mobile version (JPG).
                            </a>
                        </div>
                    </div>   

                    <div class="card mb-5">
                        <img class="card-img-top" src="src/img/concordia.edu-Screenshot-NavigationOpen-12-19-15.jpg" alt="CAN-DO Missions site, desktop version" />
                        <div class="card-body">
                            <h3 class="card-title">
                                Concordia University Texas
                            </h3>
                            <p class="card-text">
                                I translated this website design from U/I mock-ups created by the graphic artist. 
                                The CSS is written from scratch, back when I didn't use Bootstrap or CSS pre-processors yet. 
                                However, I know CSS like the back of my hand from working on this project.
                                <br /> <br />
                                Responsive, complete with transitions. 
                                Even the tabs and accordion menus within the pages were responsive. 
                                This site is public, but the design may have changed slightly over time.
                            </p>
                        </div>
                        <div class="card-footer">
                            <a target="_blank" title="Opens in a new tab" href="src/img/concordia.edu-Screenshot-MobileView-12-19-15.jpg">
                                Mobile Version (JPG)
                            </a>
                            <br />
                            <a target="_blank" title="Opens in a new tab" href="src/img/concordia.edu-Screenshot-DesktopView-12-19-15.jpg">
                                Homepage (JPG)
                            </a>
                            <br />
                            <a target="_blank" title="Opens in a new tab" href="src/img/concordia.edu-Screenshot-InnerPageWithResponsiveTabs-12-19-15.jpg">
                                Inner Page (JPG)
                            </a>
                        </div>
                    </div> 

                    <h2 class="text-center mb-3">
                        Find Me on GitHub
                    </h2>

                    <div class="text-center mt-4 mb-5 pb-5">
                        <a class="mx-4" href="https://github.com/caitlineatman/" target="_blank" title="Opens in a new tab">
                            <img alt="GitHub" src="src/img/GitHub-Mark-64px.png" />
                        </a>
                    </div>
                </div>

                <div class="col-md-4">
                    <h2 class="text-center mb-3">
                        I've mastered:
                    </h2>

                    <ul class="list-group">
                        <li class="list-group-item">
                            <strong>ES2015+</strong>
                            <br />
                            Including module imports/exports, classes, promises.
                        </li>
                        <li class="list-group-item">
                            <strong>JavaScript Unit Testing</strong>
                            <br />
                            Using Karma and Jasmine.
                        </li>
                        <li class="list-group-item">
                            <strong>Compiled JavaScript and Bundling</strong>
                            <br />
                            With Webpack (my all-time favorite), Grunt and Gulp.
                        </li>
                        <li class="list-group-item">
                            <strong>JavaScript Frameworks</strong>
                            <br />
                            Namely Handlebars, Vue.JS (including Vuex), and jQuery.
                        </li>
                        <li class="list-group-item">
                            <strong>CSS Pre-processing</strong>
                            <br />
                            Sass, Less, and Stylus (my underrated fave).
                        </li>
                        <li class="list-group-item">
                            <strong>U/I Frameworks</strong>
                            <br />
                            Bootstrap 3 &amp; 4
                        </li>
                        <li class="list-group-item">
                            <strong>A11y and SEO</strong>
                            <br />
                            Strong knowledge of good HTML and CSS semantics. 
                            I've used SiteImprove and SortSite for Section 508 compliance, 
                            and Google Analytics for SEO.
                        </li>
                        <li class="list-group-item">
                            <strong>Back-End Development</strong>
                            <br />
                            I have worked extensively with .NET and C#, 
                            using web methods, .NET MVC, and Entity Framework. 
                            <br />
                            I have also worked with PHP (using Twig), ColdFusion, and Ruby on Rails.
                        </li>
                        <li class="list-group-item">
                            <strong>Microsoft SharePoint</strong>
                            <br />
                            Consumed SharePoint REST APIs with both JavaScript and C#. 
                            Strong understanding of SharePoint app principals. 
                        </li>
                        <li class="list-group-item">
                            <strong>Productivity Software</strong>
                            <br />
                            Proficient with Adobe Creative Suite, Atlassian (Jira and Confluence), TFS, and GitLab.
                        </li>
                    </ul>
                </div>

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'Portfolio',
        components: {
        },
        data(){
            return {
            }
        }
    }
</script>