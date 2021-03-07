<template>
  <div class="project-header row m-0">
    <div class="project-name">
      {{ projectName }}
    </div>
    <div class="project-github-icon-container">
      <div
        class="project-github-icon"
        @click="openLink(`https://github.com/kdembski/${projectLink}`)"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="project-github-icon-svg"
        >
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
        <p>
          GitHub
        </p>
      </div>
    </div>

    <div class="project-description">
      <slot></slot>
    </div>
    <div class="project-technologies">
      <div
        v-for="(technologie, index) in technologiesArray"
        :key="index"
        class="project-technologies-item"
      >
        {{ technologie }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectHeader",
  props: {
    projectName: {
      type: String,
      required: true,
    },
    projectLink: {
      type: String,
      required: true,
    },
    technologiesArray: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openLink(link) {
      window.open(link, "mywindow");
    },
  },
};
</script>

<style lang="scss">
.project-header {
  & .project-name {
    font-size: 35px;
    font-weight: 700;
    color: $primaryGrey;
    width: 60%;
    margin-bottom: 10px;
    line-height: 110%;
  }
  & .project-github-icon-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
    margin-bottom: 10px;
    & .project-github-icon {
      display: flex;
      cursor: pointer;
      color: $primaryGrey;
      font-size: 25px;
      font-weight: 700;
      letter-spacing: 2px;
      &:hover {
        color: $darkBlue;
        & .project-github-icon-svg {
          fill: $darkBlue;
        }
      }
      & p {
        margin: 0;
        position: relative;
        top: 2px;
      }
      &-svg {
        position: relative;
        width: 35px;
        height: 35px;
        margin-right: 5px;
      }
    }
  }
  & .project-description {
    font-size: 22px;
    font-weight: 300;
    color: $lightGrey;
    text-align: justify;
    text-justify: inter-word;
  }
  & .project-technologies {
    margin-top: 1rem;
    &-item {
      @include flex-center;
      float: left;
      background-color: $darkBlue;
      color: white;
      font-size: 16px;
      font-weight: 700;
      padding: 6px 12px;
      margin-right: 1rem;
      margin-bottom: 1rem;
    }
  }
}

@media (max-width: 576px) {
  .project-header {
    & .project-name {
      font-size: 28px;
    }
    & .project-github-icon-container {
      & .project-github-icon {
        font-size: 18px;
        letter-spacing: 2px;
        & p {
          top: 1px;
        }
        &-svg {
          width: 25px;
          height: 25px;
        }
      }
    }
    & .project-description {
      font-size: 18px;
    }
    & .project-technologies {
      margin-top: 1rem;
      &-item {
        font-size: 14px;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
