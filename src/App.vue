<template>
  <div id="app">
    <div class="custom-navbar" :class="{ collapsed: navbarCollapsed }">
      <div class="navbar-container">
        <div class="name-container" @click="pushRouterToHome">
          <div v-for="(letter, index) in name" :key="index" class="name-letter">
            {{ letter.letter }}
          </div>
        </div>
        <div class="router-links-container">
          <router-link to="/about" class="custom-router-link"
            >O mnie</router-link
          >
          <router-link to="/projects" class="custom-router-link"
            >Projekty</router-link
          >
          <router-link to="/contact" class="custom-router-link"
            >Kontakt</router-link
          >
        </div>
        <div class="collapse-navbar-button-container">
          <div
            class="collapse-navbar-button"
            @click="navbarCollapsed = !navbarCollapsed"
          >
            <div class="collapse-navbar-button-bar"></div>
          </div>
        </div>
      </div>
    </div>
    <transition-group name="router-view-transition" mode="out-in">
      <page-loader v-if="!isLoaded" key="pageLoader" />
      <router-view v-if="isLoaded" key="routerView" />
    </transition-group>
  </div>
</template>
<script>
import pageLoader from "./components/pageLoader.vue";
export default {
  components: { pageLoader },
  name: "App",
  data() {
    return {
      name: [
        {
          letter: "K",
        },
        {
          letter: "a",
        },
        {
          letter: "r",
        },
        {
          letter: "o",
        },
        {
          letter: "l",
        },
        {
          letter: "D",
        },
        {
          letter: "e",
        },
        {
          letter: "m",
        },
        {
          letter: "b",
        },
        {
          letter: "s",
        },
        {
          letter: "k",
        },
        {
          letter: "i",
        },
      ],
      navbarCollapsed: true,
      isLoaded: false,
    };
  },
  computed: {
    isComponentHome: function() {
      if (this.$route.name == "Home") {
        return true;
      } else {
        return false;
      }
    },
    currentYear: function() {
      return new Date().getFullYear();
    },
    currentPath: function() {
      return this.$route.path;
    },
  },
  methods: {
    pushRouterToHome() {
      if (this.$route.name != "Home") {
        this.$router.push("/");
      }
    },
  },
  watch: {
    currentPath: function() {
      this.navbarCollapsed = true;
    },
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isLoaded = true;
        }, 500);
      }
    };
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
#app {
  position: relative;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
}

$navBarTransitionTime: 0.6s;
.navbar-container {
  position: relative;
  width: 1500px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}
.custom-navbar {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
  background-color: white;

  &.collapsed {
    & .name-container {
      width: 95%;
    }
    & .collapse-navbar-button {
      & .collapse-navbar-button-bar {
        opacity: 1;
        transition: opacity 0.2s $navBarTransitionTime - 0.3s ease-in-out;
      }
      &::before {
        transform: rotate(0deg) translateY(-18px);
        transition: transform $navBarTransitionTime ease-in-out;
      }
      &::after {
        transform: rotate(0deg) translateY(18px);
        transition: transform $navBarTransitionTime ease-in-out;
      }
    }
    & .router-links-container {
      width: 0%;
      & .custom-router-link {
        opacity: 0;
        transform: translate(50px);
        transition: opacity $navBarTransitionTime/2 ease-in-out,
          transform $navBarTransitionTime/2 ease-in-out;
      }
    }
  }
}
.name-container {
  width: 50%;
  display: inline-block;
  transition: width $navBarTransitionTime ease-in-out;
  cursor: pointer;
  & .name-letter {
    display: inline-block;
    width: calc(93% / 12);
    font-size: 50px;
    font-weight: 300;
    text-transform: uppercase;
    color: $primaryGrey;
    transition: color 0.2s ease-in-out;
    &:nth-child(5) {
      margin-right: 5%;
    }
    &:nth-child(9) {
      margin-left: 1.5%;
    }
  }
}
.collapse-navbar-button-container {
  display: inline-block;
  position: absolute;
  right: 26px;
  top: 22px;
}
.collapse-navbar-button {
  @include flex-center;
  overflow: hidden;
  height: 60px;
  border-radius: 5px;
  cursor: pointer;
  transition: all $navBarTransitionTime ease-in-out;
  &:hover {
    & .collapse-navbar-button-bar,
    &::before,
    &::after {
      background-color: $darkBlue;
    }
  }
  & .collapse-navbar-button-bar {
    width: 60px;
    height: 2px;
    background-color: $primaryGrey;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: $primaryGrey;
    border-radius: 10px;
    transition: transform $navBarTransitionTime - 0.2s 0.2s ease-in-out,
      background-color 0.2s ease-in-out;
  }
  &::before {
    transform: rotate(-30deg);
  }
  &::after {
    transform: rotate(30deg);
  }
}
.router-links-container {
  display: inline-block;
  position: relative;
  top: 2px;
  width: 43%;
  transition: width $navBarTransitionTime ease-in-out;
}
.custom-router-link {
  display: inline-block;
  text-align: center;
  width: calc(100% / 3);
  max-height: 40px;
  overflow: hidden;
  font-size: 25px;
  font-weight: 400;
  color: $lightGrey;
  letter-spacing: 5px;
  transition: color 0.2s ease-in-out,
    opacity $navBarTransitionTime/2 $navBarTransitionTime/2 ease-in-out,
    transform $navBarTransitionTime/2 $navBarTransitionTime/2 ease-in-out;

  &:hover {
    color: $darkBlue;
    text-decoration: none;
  }
  &.router-link-exact-active {
    color: $darkBlue;
    font-weight: 400;
  }
}

@keyframes router-link-animation {
  0% {
    transform: translateX(-20%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}

.router-view-transition {
  &-enter {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.3s ease-in-out;
  }
  &-leave-active {
    transition: all 0.3s ease-in-out;
  }
}

@media (max-width: 1500px) {
  .navbar-container {
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .router-links-container {
    display: block;
    width: 100%;
    transition: padding-top 0.5s ease-in-out, border-color 0.5s ease-in-out;
    padding-top: 45px;
    border-bottom: 1px solid $darkBlue;
  }
  .custom-router-link {
    display: flex;
    justify-content: center;
    width: 100%;
    max-height: 100px;
    height: 100px;
    overflow: hidden;
    font-size: 30px;
    letter-spacing: 10px;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        transition: color 0.2s ease-in-out, opacity 0.3s 0.2s * $i ease-in-out,
          transform 0.3s 0.2s * $i ease-in-out, max-height 0.5s ease-in-out;
      }
    }
  }
  .name-container {
    width: 90%;
    display: block;
  }
  .custom-navbar {
    &.collapsed {
      & .name-container {
        width: 90%;
      }
      & .router-links-container {
        width: 100%;
        padding-top: 0;
        border-bottom: 1px solid transparent;
        transition: padding-top 0.5s ease-in-out, border-color 0.5s ease-in-out;

        & .custom-router-link {
          opacity: 0;
          transform: translateY(-30px);
          max-height: 0;
          transition: color 0.2s ease-in-out, opacity 0.2s ease-in-out,
            transform 0.2s ease-in-out, max-height 0.5s ease-in-out;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .collapse-navbar-button {
    & .collapse-navbar-button-bar {
      width: 50px;
    }
    &::before,
    &::after {
      width: 50px;
    }
  }
  .name-container {
    & .name-letter {
      font-size: 50px;
    }
  }
  .collapse-navbar-button-container {
    top: 22px;
  }
}
@media (max-width: 768px) {
  .name-container {
    & .name-letter {
      font-size: 45px;
    }
  }
  .collapse-navbar-button-container {
    top: 18px;
  }
  .custom-navbar {
    &.collapsed {
      & .collapse-navbar-button {
        &::before {
          transform: rotate(0deg) translateY(-16px);
        }
        &::after {
          transform: rotate(0deg) translateY(16px);
        }
      }
    }
  }
  .collapse-navbar-button {
    & .collapse-navbar-button-bar {
      width: 40px;
    }
    &::before,
    &::after {
      width: 40px;
    }
  }
}
@media (max-width: 576px) {
  .name-container {
    & .name-letter {
      font-size: 30px;
      font-weight: 400;
    }
  }
  .collapse-navbar-button-container {
    top: 7px;
  }
  .collapse-navbar-button {
    & .collapse-navbar-button-bar {
      width: 35px;
    }
    &::before,
    &::after {
      width: 35px;
    }
  }
  .custom-navbar {
    &.collapsed {
      & .collapse-navbar-button {
        &::before {
          transform: rotate(0deg) translateY(-12px);
        }
        &::after {
          transform: rotate(0deg) translateY(12px);
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .name-container {
    & .name-letter {
      font-size: 22px;
      font-weight: 400;
    }
  }
  .collapse-navbar-button-container {
    top: 2px;
  }
  .collapse-navbar-button {
    & .collapse-navbar-button-bar {
      width: 22px;
    }
    &::before,
    &::after {
      width: 22px;
    }
  }
  .custom-navbar {
    &.collapsed {
      & .collapse-navbar-button {
        &::before {
          transform: rotate(0deg) translateY(-8px);
        }
        &::after {
          transform: rotate(0deg) translateY(8px);
        }
      }
    }
  }
}
</style>
