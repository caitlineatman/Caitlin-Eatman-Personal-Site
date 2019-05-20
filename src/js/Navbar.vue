<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md">
        <router-link to="/" class="navbar-brand">Caitlin Eatman</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        components: {
        },
        data(){
            return {
            }
        }
    }
</script>