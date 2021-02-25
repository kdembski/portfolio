<template>
  <div class="about">
    <div class="main-container overflow-hidden">
      <!--gallery-->
      <div class="gallery-container" id="gallery-container">
        <div class="gallery-wrap">
          <div
            v-for="index in imagesNumber"
            :key="index"
            class="item"
            :style="{
              backgroundImage:
                'url(' + require(`../assets/images/${images[index - 1]}`) + ')',
            }"
          ></div>
          <div class="item-zoomed-container">
            <div class="button-left" @click="decreaseDisplayedImageIndex">
              <i class="fas fa-chevron-left"></i>
            </div>
            <div class="button-right" @click="increaseDisplayedImageIndex">
              <i class="fas fa-chevron-right"></i>
            </div>
            <transition :name="imageTransitionDirection">
              <img
                class="item-zoomed"
                :key="displayedImageIndex"
                :src="
                  require(`../assets/images/${images[displayedImageIndex]}`)
                "
              />
            </transition>
          </div>
        </div>
        <div
          class="next-page-button-container"
          data-aos="zoom-in-down"
          data-aos-duration="600"
          data-aos-delay="800"
          data-aos-easing="ease-out-quart"
        >
          <div
            class="next-page-button"
            @click="scrollIntoView('music-container')"
          >
            <div class="next-page-button-arrow down"></div>
          </div>
        </div>
      </div>
      <!--music-->
      <div class="music-container" id="music-container">
        <div class="music-wrap">
          <div class="music-header">
            Muzyka
          </div>
          <div class="music-text">
            Gdyby ktoś mnie zapytał o mój ulubiony gatunek muzyki, miałbym nie
            mały problem z odpowiedzią. Jeżeli już musiałbym wskazać jeden,
            byłoby to prawdopodobnie coś z okolic Soft rock'a. Poniżej znajdują
            się kilka utworów, które wybrałem z moich playlist.
          </div>
          <div class="music-item-container">
            <div
              v-for="(item, index) in music"
              :key="index"
              class="music-item"
              data-aos="zoom-out-up"
              :data-aos-delay="windowWidth >= 1200 ? 200 * index : 0"
              data-aos-duration="800"
            >
              <iframe
                :src="item"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          class="next-page-button-container"
          data-aos="zoom-in-down"
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos-easing="ease-out-quart"
        >
          <div
            class="next-page-button"
            @click="scrollIntoView('cooking-container')"
          >
            <div class="next-page-button-arrow down"></div>
          </div>
        </div>
      </div>
      <!--cooking-->
      <div class="cooking-container" id="cooking-container">
        <div class="cooking-wrap row">
          <div class="col-lg-6 d-flex align-items-center">
            <div>
              <div class="cooking-header">Gotowanie</div>
              <div class="cooking-text">
                W gotowaniu nie chodzi mi o sam fakt przygotowywania jedzenia.
                Chodzi mi o poznawanie i poszukiwanie nowych smaków. Lubię
                eksperymentować z jedzeniem, łączyć ze sobą składniki, które na
                pierwszy rzut oka do siebie nie pasują.
              </div>
            </div>
          </div>
          <div class="cooking-item-container col-lg-6">
            <div
              v-for="(image, index) in cookingImages"
              :key="index"
              class="cooking-item-wrap"
              data-aos="flip-left"
              data-aos-duration="1000"
              :data-aos-delay="windowWidth >= 1200 ? 100 * index : 0"
            >
              <div class="cooking-item">
                <img
                  class="cooking-item-image"
                  :src="require(`../assets/cooking/${image.src}`)"
                />
                <div class="cooking-item-name">{{ image.name }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="next-page-button-container"
          data-aos="zoom-in-down"
          data-aos-duration="600"
          data-aos-delay="500"
          data-aos-easing="ease-out-quart"
        >
          <div
            class="next-page-button"
            @click="scrollIntoView('games-container')"
          >
            <div class="next-page-button-arrow down"></div>
          </div>
        </div>
      </div>
      <!--games-->
      <div class="games-container" id="games-container">
        <div class="games-wrap">
          <div class="games-header">Gry strategiczne</div>
          <div class="games-text">
            Grami strategicznymi interesuję się od najmłodszych lat – zarówno
            komputerowymi, planszowymi, jak i karcianymi. Lubię, kiedy gra
            pomaga się rozwinąć. Oto kilka przykładów gier, w które w wolnym
            czasie pogrywałem (kliknij na kartę, aby zobaczyć szczegóły):
          </div>
          <div class="games-item-container">
            <div
              v-for="(game, index) in games"
              :key="index"
              class="games-item"
              @click="flipCard(game)"
              data-aos="zoom-out-up"
              data-aos-duration="600"
              :data-aos-delay="windowWidth >= 1200 ? 150 * index : 0"
            >
              <transition name="games-item-transition">
                <img
                  v-if="!game.flipped"
                  class="games-item-img"
                  :src="require(`../assets/games/${game.img}`)"
                  key="front"
                />
                <div v-else class="games-item-details" key="back">
                  <div class="games-item-name">{{ game.name }}</div>
                  <div class="games-item-description">
                    {{ game.description }}
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div
          class="next-page-button-container"
          data-aos="zoom-in-down"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-easing="ease-out-quart"
        >
          <div
            class="next-page-button"
            @click="scrollIntoView('gallery-container')"
          >
            <div class="next-page-button-arrow up first"></div>
            <div class="next-page-button-arrow up second"></div>
            <div class="next-page-button-arrow up third"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      windowWidth: "",
      imagesNumber: 12,
      music: [
        "https://open.spotify.com/embed/track/37Tmv4NnfQeb0ZgUC4fOJj",
        "https://open.spotify.com/embed/track/72Z17vmmeQKAg8bptWvpVG",
        "https://open.spotify.com/embed/track/3fbnbn6A5O5RNb08tlUEgd",
        "https://open.spotify.com/embed/track/1X60z5rwi3IkF5wVtmyjZY",
      ],
      cookingImages: [
        { src: "1.jpg", name: "Zupa krem z pomidorów" },
        { src: "4.jpg", name: "Pierś z kuraczaka nadziewana serem fetą" },
        { src: "2.jpg", name: "Pieczony arbuz" },
        { src: "3.jpg", name: "Makaron ze szpinakiem i suszonymi pomidorami" },
        {
          src: "5.jpg",
          name: "Pierś z kurczaka z pomidorami i mozzarellą",
        },
      ],
      games: [
        {
          name: "Civilization V",
          img: "civ5.jpg",
          description:
            "Rozbudowana strategia turowa, stanowiąca piątą odsłonę sygnowanego nazwiskiem Sida Meiera cyklu Civilization. Sid Meier's Civilization V zostało wydane przez studio Firaxis Games we wrześniu 2010 roku",
          flipped: false,
        },
        {
          name: "Europa Universalis IV",
          img: "eu.jpg",
          description:
            "Wydana w roku 2013 przez ekipę deweloperską Paradox Development Studio, czwarta odsłona cieszącego się dużą popularnością cyklu gier strategicznych Europa Universalis.",
          flipped: false,
        },
        {
          name: "Stronghold",
          img: "stronghold.jpg",
          description:
            "Osadzona w realiach średniowiecznej Europy strategia stanowiąca oryginalne połączenie symulatora rozbudowy zamku z grą ekonomiczną, polegającą na zarządzaniu osadą. Została wydana w 2001 roku przez studio FireFly Studios",
          flipped: false,
        },
        {
          name: "They are billions",
          img: "tab.jpg",
          description:
            "Steampunkowa strategia czasu rzeczywistego, w której musimy bronić kolonię ludzką przed gigantycznymi hordami zombie. Wydana przez Numantian Games w 2019 roku",
          flipped: false,
        },
        {
          name: "Tablut",
          img: "tablut.png",
          description:
            "Ludowa gra planszowa Lapończyków przeznaczona dla dwóch graczy. Elementem który odróżnia tabluta od innych gier tego typu jest to, że każda ze stron ma różną ilość inaczej rozłożonych pionów oraz inny warunek wygrania rozgrywki",
          flipped: false,
        },
      ],
      displayedImageIndex: 0,
      displayZoomedImage: false,
      imageTransitionDirection: "",
    };
  },
  computed: {
    images: function() {
      return this.$store.state.images;
    },
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    scrollIntoView(target) {
      document.getElementById(target).scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
    flipCard(game) {
      game.flipped = !game.flipped;
    },
    decreaseDisplayedImageIndex() {
      this.imageTransitionDirection = "image-transition-slide-right";
      if (this.displayedImageIndex == 0) {
        this.displayedImageIndex = 11;
      } else {
        this.displayedImageIndex--;
      }
    },
    increaseDisplayedImageIndex() {
      this.imageTransitionDirection = "image-transition-slide-left";
      if (this.displayedImageIndex == 11) {
        this.displayedImageIndex = 0;
      } else {
        this.displayedImageIndex++;
      }
    },
  },
  watch: {
    windowWidth: function() {
      if (this.windowWidth < 1200) {
        this.imagesNumber = 8;
      } else {
        this.imagesNumber = 12;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss">
.gallery-container {
  width: 100%;
  height: 86vh;
  padding-bottom: 4vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & .gallery-wrap {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60vh;
    background-color: $lightGrey;
    border: 1px solid $lightGrey;
    opacity: 0;
    animation: gallery-item-animation 1s 0.25s ease-out forwards;

    & .item {
      flex: 1;
      height: 100%;
      background-position-x: 50%;
      background-position-y: 30%;
      background-size: cover;
      background-repeat: none;
      background-color: $primaryGrey;
      background-blend-mode: luminosity;
      transition: all 0.5s 0.1s ease;
      &:hover {
        flex: 4;
        background-color: transparent;
      }
    }
    & .item-zoomed-container {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
      & .item-zoomed {
        position: absolute;
        width: 70%;
        height: 90%;
        top: 5%;
        left: 15%;
        object-fit: cover;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 1);
      }
      & .button-left,
      & .button-right {
        @include flex-center;
        position: absolute;
        top: 0;
        height: 100%;
        width: 15%;
        font-size: 30px;
        color: $darkBlue;
        z-index: 1;
        &:hover {
          color: $primaryBlue;
        }
      }
      & .button-left {
        left: 0;
      }
      & .button-right {
        left: 85%;
      }
    }
  }
}
.next-page-button-container {
  @include flex-center;
  width: 100%;
}
.next-page-button {
  @include flex-center;
  position: relative;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3),
    inset 0px 0px 0px 3px $darkBlue;
  transition: all 0.2s ease-in-out;
  animation: next-page-button-animation 1.5s ease-in-out infinite;
  & .next-page-button-arrow {
    height: 30px;
    width: 30px;
    position: relative;

    transition: all 0.2s ease-in-out;
    transform: rotate(45deg);
    &.up {
      position: absolute;
      left: 32%;
      border-top: 3px solid $darkBlue;
      border-left: 3px solid $darkBlue;
      &.first {
        top: 25%;
      }
      &.second {
        top: 40%;
      }
      &.third {
        top: 55%;
      }
    }
    &.down {
      top: -2px;
      border-bottom: 3px solid $darkBlue;
      border-right: 3px solid $darkBlue;
    }
  }
  &:hover {
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.3),
      inset 0px 0px 0px 40px $primaryBlue;
    & .next-page-button-arrow {
      border-color: $primaryGrey;
    }
  }
}
.cooking-container,
.games-container,
.music-container {
  height: 86vh;
  padding-bottom: 4vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & .cooking-header,
  & .games-header,
  & .music-header {
    font-size: 40px;
    font-weight: 700;
    color: $primaryGrey;
    text-align: center;
  }
  & .cooking-text,
  & .games-text,
  & .music-text {
    font-size: 28px;
    font-weight: 300;
    color: $lightGrey;
    text-align: center;
  }
  & .games-item-container,
  & .music-item-container {
    margin-top: 2rem;
  }
  & .music-item {
    display: inline-block;
    width: calc(95% / 4);
    margin-right: calc(5% / 3);
    &:nth-child(4) {
      margin-right: 0;
    }
    height: 260px;
    border-radius: 10px;
    & iframe {
      height: 100%;
      width: calc(100% + 2px);
      border: 0;
      object-fit: contain;
      opacity: 0.9;
      border-radius: 15px;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
    }
  }
  & .games-item {
    display: inline-block;
    position: relative;
    width: calc(95% / 5);
    margin-right: calc(5% / 4);
    padding-top: calc(95% / 5);
    &:nth-child(5n) {
      margin-right: 0;
    }
    perspective: 1500px;
    cursor: pointer;
    & .games-item-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.4);
      border-radius: 10px;
    }
    & .games-item-details {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
    }
    & .games-item-description,
    & .games-item-name {
      @include flex-center;
      position: absolute;
      width: 90%;
      left: 5%;
      color: $darkBlue;
      text-align: center;
      transition: opacity 0.2s ease-in-out;
    }
    & .games-item-name {
      height: 20%;
      top: 0;
      font-size: 20px;
      font-weight: 700;
    }
    & .games-item-description {
      height: 80%;
      top: 20%;
      font-size: 15px;
      font-weight: 400;
    }
  }
  & .cooking-wrap {
    height: 50vh;
  }
  & .cooking-item-container {
    position: relative;
  }
  & .cooking-item-wrap {
    position: absolute;
    width: 40%;
    height: 55%;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    background: white;
    padding: 10px;
    &:nth-child(1) {
      top: 0%;
      left: 7%;
      z-index: 5;
    }
    &:nth-child(2) {
      top: 30%;
      left: 18%;
      z-index: 4;
    }
    &:nth-child(3) {
      top: 10%;
      left: 50%;
      z-index: 3;
    }
    &:nth-child(4) {
      top: 50%;
      left: 53%;
      z-index: 2;
    }
    &:nth-child(5) {
      top: 60%;
      left: 10%;
      z-index: 1;
    }
    & .cooking-item {
      width: 100%;
      height: 100%;
      & .cooking-item-image {
        width: 100%;
        height: 70%;
        object-fit: cover;
      }
      & .cooking-item-name {
        padding: 10px 0;
        font-size: 15px;
        letter-spacing: 2px;
        font-weight: 300;
        text-align: center;
      }
    }
  }
}
.games-container {
  margin-bottom: 0;
}
.games-item-transition {
  &-enter {
    transform: rotateY(90deg) scale(1.2);
  }
  &-leave-to {
    transform: rotateY(-90deg) scale(1.2);
  }
  &-enter-active {
    transition: all 0.6s 0.3s cubic-bezier(0.2, 0.4, 0.6, 0.8);
  }
  &-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0.2, 0.8, 0.6);
  }
}
.image-transition-slide-left {
  &-enter {
    transform: translateX(200%);
  }
  &-leave-to {
    transform: translateX(-200%);
  }
  &-enter-active {
    transition: all 0.25s ease-in-out;
  }
  &-leave-active {
    transition: all 0.25s ease-in-out;
  }
}
.image-transition-slide-right {
  &-enter {
    transform: translateX(-200%);
  }
  &-leave-to {
    transform: translateX(200%);
  }
  &-enter-active {
    transition: all 0.25s ease-in-out;
  }
  &-leave-active {
    transition: all 0.25s ease-in-out;
  }
}
@keyframes gallery-item-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    pointer-events: initial;
  }
}
@keyframes next-page-button-animation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes cooking-item-animation {
  0% {
    transform: translate(0%);
  }
  100% {
    transform: translate(-500%);
  }
}

@media (max-width: 1500px) {
  .games-container {
    & .games-item {
      & .games-item-name {
        font-size: 18px;
      }
      & .games-item-description {
        font-size: 12px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .cooking-container,
  .music-container,
  .games-container,
  .gallery-container {
    height: unset;
    padding-bottom: 0;
    margin-bottom: 3rem;
    & .music-item {
      width: calc(95% / 4);
      margin-right: calc(5% / 3);
    }
    & .games-item {
      width: calc(95% / 3);
      margin-right: calc(5% / 2);
      margin-bottom: 2%;
      padding-top: calc(95% / 3);
      &:nth-child(3n) {
        margin-right: 0;
      }
      & .games-item-name {
        font-size: 25px;
      }
      & .games-item-description {
        font-size: 18px;
      }
    }
    & .cooking-wrap {
      & .cooking-item-container {
        height: 45vh;
      }
      & .cooking-item {
        & .cooking-item-name {
          font-size: 11px;
        }
      }
    }
  }
  .games-container {
    margin-bottom: 0;
  }
  .games-item-transition {
    &-enter {
      transform: rotateY(90deg);
    }
    &-leave-to {
      transform: rotateY(-90deg);
    }
  }
  .next-page-button-container {
    display: none;
  }
}
@media (max-width: 992px) {
  .gallery-container .gallery-wrap {
    height: 50vh;
  }
  .cooking-container,
  .games-container,
  .music-container {
    & .cooking-header,
    & .games-header,
    & .music-header {
      font-size: 38px;
    }
    & .cooking-text,
    & .games-text,
    & .music-text {
      font-size: 28px;
    }
    & .music-item {
      width: calc(96% / 2);
      margin-right: 0;
      &:first-child {
        margin-bottom: 4%;
      }
      &:nth-child(odd) {
        margin-right: 4%;
      }
    }
    & .games-item {
      & .games-item-name {
        font-size: 20px;
      }
      & .games-item-description {
        font-size: 13px;
      }
    }
    & .cooking-wrap {
      height: unset;
      width: 100%;
      margin: 0;

      & .cooking-item-container {
        display: flex;
        overflow-x: visible;
        height: 300px;
        margin-top: 2rem;
        padding: 0;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      & .cooking-item-wrap {
        top: 0;
        left: 110%;
        transform: translate(0%);
        min-width: calc(100% / 3);
        height: 260px;
        margin: 20px 0;
        padding: 0 2%;
        box-shadow: 0 0 0 0;
        @for $i from 1 through 5 {
          &:nth-child(#{$i}) {
            animation: cooking-item-animation 15s 3s * ($i - 3) linear infinite;
          }
        }
        & .cooking-item {
          padding: 10px;
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          & .cooking-item-name {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .cooking-container,
  .games-container,
  .music-container {
    & .cooking-header,
    & .games-header,
    & .music-header {
      font-size: 35px;
    }
    & .cooking-text,
    & .games-text,
    & .music-text {
      font-size: 25px;
    }
    & .games-item {
      width: calc(95% / 2);
      margin-right: 5%;
      margin-bottom: 3%;
      padding-top: calc(95% / 2);
      &:nth-child(3n) {
        margin-right: calc(5%);
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
      & .games-item-name {
        font-size: 22px;
      }
      & .games-item-description {
        font-size: 15px;
      }
    }
    & .cooking-wrap {
      & .cooking-item-wrap {
        min-width: calc(100% / 2);
        padding: 0 2%;
        & .cooking-item {
          & .cooking-item-name {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media (max-width: 576px) {
  .gallery-container .gallery-wrap {
    & .item {
      background-color: white;
      filter: blur(2px);
      &:hover {
        flex: 1;
        background-color: $primaryGrey;
      }
    }
    & .item-zoomed-container {
      display: unset;
    }
  }

  .cooking-container,
  .games-container,
  .music-container {
    & .cooking-header,
    & .games-header,
    & .music-header {
      font-size: 30px;
    }
    & .cooking-text,
    & .games-text,
    & .music-text {
      font-size: 22px;
    }
    & .music-item {
      width: 100%;
      margin-right: 0;
      margin-bottom: 4%;
      &:last-child {
        margin-bottom: 0;
      }
    }
    & .games-item-container,
    & .music-item-container {
      margin-top: 1rem;
    }
    & .games-item {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5%;
      padding-top: 100%;
      & .games-item-name {
        font-size: 28px;
      }
      & .games-item-description {
        font-size: 22px;
      }
    }
    & .cooking-wrap {
      & .cooking-item-wrap {
        min-width: 100%;
        padding: 0 5%;
        & .cooking-item {
          & .cooking-item-name {
            font-size: 15px;
          }
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .games-container {
    & .games-item {
      & .games-item-name {
        font-size: 22px;
      }
      & .games-item-description {
        font-size: 15px;
      }
    }
  }
}
</style>
