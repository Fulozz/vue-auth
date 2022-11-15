<template>
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
          <router-link to="/">Home</router-link> <!-- a href -->
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <router-link to="/login" class="nav-link">Login</router-link>
              </li> <!-- a href -->
              <li class="nav-item">
                <router-link to="/sing-up" class="nav-link">Sing-up</router-link>
              </li> <!-- a href -->
            </ul>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>