<template>

    <div>

        <div class="bg-success py-5 text-center">
            <h1 class="text-white display-1">
                About Me 
            </h1>
        </div>

        <div class="container pt-5">

            <h2 class="text-center">
                How It All Began
            </h2>

            <div class="row mt-3 mb-5">
                <div class="col-md-7">

                    <div class="card">
                        <div class="card-body">
                            <p class="card-text lead">
                                I am a front-end web developer, passionate about building beautiful applications that are accessible by all. 
                            </p>
                            <p class="card-text">
                                My interest in web development began in junior high. 
                                During high school, I competed in state-wide web design competitions through SkillsUSA (formerly known as VICA), 
                                and even had the cool privilege to help maintain the website for my school district. 
                            </p>
                            <p class="card-text">
                                In college, I was determined to pursue anything but a desk job. I felt burned out of coding because I associated it with school, and wanted nothing to do with it. 
                                I set my sights on becoming a missionary and travelling the world. 
                            </p>
                            <p class="card-text">
                                However, God had different plans for me. 
                            </p>
                            <p class="card-text">
                                During sophomore year, I was hired on as a student worker in the Communications department to help maintain the university website. 
                                I had the skills for it, so it was easy money for me, and convenient because it was on-campus. 
                            </p>
                            <p class="card-text">
                                I fell in love with my co-worker, the web developer who managed the website and built the custom CMS that ran it. 
                                His excitement for programming re-fueled my own.
                                We gradually began to date and, a few years later, I had a ring on my finger. 
                            </p>
                            <p class="card-text">
                                From my experience at Concordia University and onward, web development has been more than a day job.
                                I find the work very meaningful, helping people find and share information quickly and efficiently on the sites that I build. 
                                I also get to solve fun puzzles all day long! 
                            </p>
                            <p class="card-text">
                                I currently reside in Texas with my husband, newborn daughter, and 3 cats. 
                            </p>
                        </div>
                    </div>   

                </div>

                <div class="col-md-5">

                    <div class="card">
                        <img class="card-img-top" src="src/img/me-and-husband.jpeg" alt="Me and My Husband" />
                        <div class="card-body">
                            <p class="card-text">
                                <small>me and my husband</small>
                            </p>
                        </div>
                    </div>   

                </div>
            </div>

            <h2 class="text-center">
                Meet the Gatos
            </h2>

            <div class="row mt-3 mb-5">

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="text-center rounded-circle bg-info mx-auto" style="max-width: 150px; height: 150px;">
                                <img src="src/img/nimbus-ascii.png" alt="Nimbus as ASCII" />
                            </div>
                            <h3 class="card-title">
                                Nimbus
                            </h3>
                            <p class="card-text">
                                Nutmeg's brother, a very affectionate cat that loves people and hates loud noises.
                            </p>
                            <p class="card-text">
                                He's also (not so affectionately) called Mr. Poopy-paws. 
                            </p>
                        </div>
                        <img class="card-img-bottom" src="src/img/nimbus.jpeg" alt="Nimbus" />
                    </div>   
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="text-center rounded-circle bg-dark mx-auto" style="max-width: 150px; height: 150px;">
                                <img src="src/img/nutmeg-ascii.png" alt="Nutmeg as ASCII" />
                            </div>
                            <h3 class="card-title">
                                Nutmeg
                            </h3>
                            <p class="card-text">
                                Nimboo's sister, she's blind, but boy, is she smart! Daredevil in cat form.
                            </p>
                        </div>
                        <img class="card-img-bottom" src="src/img/nutmeg.jpeg" alt="Nutmeg" />
                    </div>   
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="text-center rounded-circle bg-success mx-auto" style="max-width: 150px; height: 150px;">
                                <img src="src/img/cedar-ascii.png" alt="Cedar as ASCII" />
                            </div>
                            <h3 class="card-title">
                                Cedar
                            </h3>
                            <p class="card-text">
                                Only a year old, but HUGE already. He's the master of his domain.
                            </p>
                        </div>
                        <img class="card-img-bottom" src="src/img/cedar.jpg" alt="Cedar" />
                    </div>   
                </div>

            </div>
        </div>

    </div>

</template>

<script>
    export default {
        name: 'About',
        components: {
        },
        data(){
            return {
            }
        }
    }
</script>