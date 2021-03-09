<template>
  <transition name="router-view-transition" mode="out-in">
    <page-loader v-if="loading"></page-loader>
    <div v-else class="contact">
      <div class="main-container ">
        <div class="row m-0">
          <div class="col-xl-6 p-0 pr-xl-5 d-flex align-items-center">
            <form
              class="contact-form"
              @submit.prevent="sendEmail"
              novalidate="true"
            >
              <div class="contact-form-header">Napisz do mnie</div>
              <div class="errors-list">
                <transition-group name="errors-item-transition">
                  <div
                    v-for="(error, index) in errors"
                    :key="index"
                    class="error"
                  >
                    {{ error }}
                    <div
                      class="error-delete-icon"
                      @click="errors.splice(index, 1)"
                    >
                      <i class="fas fa-times"></i>
                    </div>
                  </div>
                </transition-group>
              </div>
              <div>
                <input
                  placeholder=" "
                  type="text"
                  name="name"
                  required
                  v-model="name"
                />
                <label>Imię / Firma</label>
              </div>
              <div>
                <input
                  placeholder=" "
                  type="email"
                  name="email"
                  required
                  v-model="email"
                />
                <label>Email</label>
              </div>
              <div>
                <textarea
                  placeholder=" "
                  name="message"
                  rows="8"
                  required
                  v-model="message"
                ></textarea>
                <label>Wiadomość</label>
              </div>
              <input class="button" type="submit" value="Wyślij" />
            </form>
          </div>
          <div class="col-xl-6 p-0 pl-xl-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1250 1150"
              heigth="100%"
              width="100%"
            >
              <defs>
                <path
                  id="a"
                  d="M1241.24 439.72c0 233.59-206.21 423.23-460.2 423.23-253.99 0-460.19-189.64-460.19-423.23 0-233.58 206.2-423.22 460.19-423.22s460.2 189.64 460.2 423.22z"
                />
                <path
                  id="b"
                  d="M518.65 790.39h120.28V569.8C520.17 468.19 445.94 404.68 416.25 379.28c-11.37-9.73-28.12-9.73-39.49 0-29.69 25.4-103.92 88.91-222.68 190.52v220.59h364.57z"
                />
                <path
                  id="c"
                  d="M564.87 406.95c7.43 0 13.45 6.02 13.45 13.45v335.03H214.69V420.4c0-7.43 6.02-13.45 13.45-13.45h336.73z"
                />
                <path
                  id="d"
                  d="M527 610.37c2.49 0 4.5 2.01 4.5 4.5 0 .9 0-.9 0 0 0 2.48-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.02-4.5-4.5 0-.9 0 .9 0 0 0-2.49 2.02-4.5 4.5-4.5h261z"
                />
                <path
                  id="e"
                  d="M527 632.24c2.49 0 4.5 2.02 4.5 4.5 0 .9 0-.9 0 0 0 2.49-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.01-4.5-4.5 0-.9 0 .9 0 0 0-2.48 2.02-4.5 4.5-4.5h261z"
                />
                <path
                  id="f"
                  d="M527 654.62c2.49 0 4.5 2.01 4.5 4.5 0 .9 0-.9 0 0 0 2.48-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.02-4.5-4.5 0-.9 0 .9 0 0 0-2.49 2.02-4.5 4.5-4.5h261z"
                />
                <path
                  id="g"
                  d="M361.86 448.62c2.09 0 3.78 1.69 3.78 3.78v1.44c0 2.09-1.69 3.78-3.78 3.78h-96.58c-2.08 0-3.78-1.69-3.78-3.78v-1.44c0-2.09 1.7-3.78 3.78-3.78h96.58z"
                />
                <path
                  id="h"
                  d="M527 494.49c2.49 0 4.5 2.02 4.5 4.5 0 .9 0-.9 0 0 0 2.49-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.01-4.5-4.5 0-.9 0 .9 0 0 0-2.48 2.02-4.5 4.5-4.5h261z"
                />
                <path
                  id="i"
                  d="M527 516.37c2.49 0 4.5 2.01 4.5 4.5 0 .9 0-.9 0 0 0 2.48-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.02-4.5-4.5 0-.9 0 .9 0 0 0-2.49 2.02-4.5 4.5-4.5h261z"
                />
                <path
                  id="j"
                  d="M433.78 561.12c2.49 0 4.5 2.01 4.5 4.5 0 .9 0-.9 0 0 0 2.48-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.02-4.5-4.5 0-.9 0 .9 0 0 0-2.49 2.02-4.5 4.5-4.5h167.78z"
                />
                <path
                  id="k"
                  d="M433.78 676.99c2.49 0 4.5 2.02 4.5 4.5 0 .9 0-.9 0 0 0 2.49-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.01-4.5-4.5 0-.9 0 .9 0 0 0-2.48 2.02-4.5 4.5-4.5h167.78z"
                />
                <path
                  id="l"
                  d="M154.08 571.1L396.5 757.43 638.93 571.1l-1.88-2.94c-118.13 85.26-191.96 138.55-221.49 159.87-11.38 8.21-26.73 8.2-38.1-.02-29.49-21.31-103.21-74.6-221.16-159.85l-2.22 2.94z"
                />
                <path
                  id="m"
                  d="M527 538.74c2.49 0 4.5 2.02 4.5 4.5 0 .9 0-.9 0 0 0 2.49-2.01 4.5-4.5 4.5H266c-2.48 0-4.5-2.01-4.5-4.5 0-.9 0 .9 0 0 0-2.48 2.02-4.5 4.5-4.5h261z"
                />
                <path id="n" d="M192.89 814.4h409.23v142.7H192.89V814.4z" />
                <path
                  id="o"
                  d="M154.08 570.72v225.64c0 24.34 19.73 44.06 44.06 44.06h397c24.18 0 43.79-19.6 43.79-43.79V570.72c-116.37 88.95-189.1 144.55-218.19 166.78-14.31 10.94-34.16 10.94-48.47 0-29.09-22.23-101.82-77.83-218.19-166.78z"
                />
                <path
                  id="p"
                  d="M929.98 996.43c-91.05 1.58-165.32-16.59-165.74-40.57-.41-23.97 73.17-44.73 164.22-46.32 91.06-1.59 165.32 16.59 165.73 40.56.42 23.98-73.16 44.74-164.21 46.33z"
                />
                <path
                  id="q"
                  d="M866.16 914.93c.26.64 11.19 10.25 25.91 8.24-.43-1.88 2.11-13.54 7.62-34.97h-31.93c-2.11 15.3-2.64 24.21-1.6 26.73z"
                />
                <path
                  id="r"
                  d="M839.19 935.99c-3.74 3.22-1.76 1.86-9.22 8.77-7.45 6.91-9.65 14.16-7.26 18.8 2.38 4.65 24.87 4.52 35.76 1.73 10.9-2.79 12.04-4.18 21.96-7.84 9.92-3.65 17.49-1.01 17.72-6.78.23-5.76.74-7-.55-15.22-1.3-8.21-3.24-13.41-4.06-13.31-4.39.53-5.48 2.28-10.51 1.08-5.02-1.19-5.49-3.04-9.59-5.87s-5.57-3.92-8.6-4.29c-.21-.03-1.73.97-4.57 3-3.69 2.63-7.12 5.63-10.23 8.93-5.5 5.84-9.11 9.51-10.85 11z"
                />
                <path
                  id="s"
                  d="M1003.4 184.8c.18 11.21 2.04 22.34 5.51 33l13.2 40.5-87 .8c10.13-26.1 16.46-42.42 19-48.94 2.68-6.92 4.19-14.24 4.46-21.66.27-7.52.95-26.32 2.04-56.41 2.8.02 16.78.11 41.94.26.49 30.3.77 47.79.85 52.45z"
                />
                <path
                  id="t"
                  d="M980.36 922.22l26.68 2.54 2.39-26.96-31.05-1.48 1.98 25.9z"
                />
                <path
                  id="u"
                  d="M1047.76 485.88l-6.37 100.72-10.23 135.18c-10.11 94.35-16.43 153.31-18.95 176.9-.19 1.71-1.56 3.05-3.27 3.19-6.68.55-23.88 1.97-30.59 2.52-1.51.13-2.8-1.07-2.78-2.58.52-67.01.27-117.34-.77-150.98-1.58-51.39-.54-37.75-3.12-69.45-1.66-20.39-4.67-43.28-9.04-68.66-.11-.59-.94-.63-1.1-.05-4.15 15.29-14.52 53.52-31.13 114.69-5.88 46.55-11.5 84.69-16.86 114.43-5.14 28.53-8.65 49-10.54 61.41-.22 1.4-1.6 2.3-2.97 1.93-4.45-1.2-15.57-4.2-33.35-9.01 3.42-79.39 6.39-141.73 8.92-187.02 2.52-45.29 4.6-73.53 6.23-84.72 3.84-27.26 6.24-44.31 7.2-51.13l1.2-17.1v-9.45c0-2.97.38-5.92 1.13-8.8 2.11-8.04 7.38-28.15 15.81-60.32l120.37-37.86 20.21 46.16z"
                />
                <path
                  id="v"
                  d="M930.36 149.25c-5.62-17.32-13.72-40.04-13.64-68.47.08-28.44 22.09-45.3 47.69-43.96 16.49.86 19.42 1.02 35.87 1.88 25.37 1.33 44.5 23.59 41.98 48.87-2.39 24.11-1.45 32.47-13.19 59.55s-26.09 43.11-51.77 42.77c-25.68-.34-38.52-14.65-46.94-40.64z"
                />
                <path
                  id="w"
                  d="M977.77 255.96c8.68-7.84 15.63-14.98 20.85-21.43 4.69-5.79 7.92-10.91 9.71-15.35.42-1.05 1.63-1.54 2.66-1.09 21.6 9.43 35.88 16.89 42.86 22.4 10.91 8.62-7.11 11.32-7.76 19.9-2.57 33.82-.22 110.71 1.67 172.21.87 28.28 3.39 53.31 2.18 69.39-.23 3.07-18.03 11.71-47.88 13.34-29.86 1.63-44.77-1.08-71.55-6.81-16.65-3.55-27.32-8.26-32-14.12-1.01-1.26-1.51-2.87-1.39-4.48 1.09-14.77 3.8-51.68 8.15-110.75-3.42-68.96-5.56-112.06-6.41-129.3-.16-3.12 1.49-6.05 4.25-7.53 9.55-5.13 35.64-19.15 45.67-24.54 1.07-.58 2.41-.03 2.77 1.13 1.85 6.05 4.78 12 8.8 17.85 4.48 6.55 10.29 12.94 17.42 19.18z"
                />
                <path
                  id="x"
                  d="M1097.95 563.92c.71 2.69-.5 5.52-2.94 6.86-10.88 6.01-37.58 20.77-48.02 26.53-3.26 1.8-7.36.1-8.39-3.49-2.15-7.48-7.1-24.73-9.37-32.67-.77-2.69.63-5.52 3.24-6.53 11.44-4.45 41.52-16.13 53.05-20.61 2.21-.86 4.69.4 5.29 2.7 1.67 6.36 5.49 20.91 7.14 27.21z"
                />
                <path
                  id="y"
                  d="M896.19 453.82l6.01 33.16c1.9 9.28 3.09 15.08 3.57 17.4.62 3.03.12 6.19-1.41 8.88-1.61 2.84-5.66 9.96-12.13 21.34-8.85-25-14.38-40.62-16.59-46.87-2.73-7.69-.4-16.27 5.84-21.53 1.96-1.65 6.86-5.78 14.71-12.38z"
                />
                <path
                  id="A"
                  d="M995.23 916.27c5.77-.72 10.78.22 15.02 2.83 3.08 1.89 13.8 42.6 8.56 46.5-5.24 3.9-12.09 5.57-21.86 7.12-5.1.81-10.79.8-17.05-.03-2.7-.35-4.75-2.6-4.86-5.32-.47-11.42-.44-19.68.11-24.78.58-5.51 1.26-12.57 2.03-21.18.12-1.26 1.06-2.29 2.31-2.49 2.1-.36 7.34-1.24 15.74-2.65z"
                />
                <path
                  id="B"
                  d="M1065.64 510.38c1.33 10.45.64 18.12-2.05 23.01-.62 1.12-1.58 2.02-2.74 2.57-2.37 1.11-4.06 2.38-5.06 3.79-1.23 1.72-1.62 3.64-1.19 5.78.05.24.31.38.54.3 5.54-2.08 9.44-3.01 11.69-2.8 1.83.18 6.48 9.18 9.05 18.02 2.38 8.16 3.37 15.57 2.94 17.3-.43 1.72-1.91 1.87-1.29 2.53.42.44 2.2 1.28 5.21.14 7.55-2.84 10.84-15 7.48-27.77-3.36-12.77-3.39-8.63-3.39-27.36 0-12.49 1.98-32.75 5.96-60.78l-37-5.03c5.12 22.18 8.41 38.95 9.85 50.3z"
                />
                <path
                  id="C"
                  d="M915.64 96.32c-1.35 6.89-.36 21.03 4.16 18.8 4.51-2.23 3.01-16.29 8.4-26.46 5.39-10.18 8.33-1.12 16.33-3.99 8-2.86 6.84-9.84 14.17-11.81 7.33-1.97 7.04 3.21 15.37 2.95 8.34-.27 15.29-6.09 22.76-5.71 7.47.37 8.54 9.08 18.25 11.21 9.71 2.12 9.82-6.82 16.95 5.35 7.14 12.16 3.26 24.48 7.41 27.56 4.16 3.08 4.54-4.9 8.59-15.23.94-2.4 1.62-3.97 2.06-4.7 3.09-5.27 3.97-11.56 2.42-17.48-.47-1.8-1-4.04-1.58-6.71-2.1-9.56-.26-16.87-3.9-23.58-3.64-6.71-5.95-4.27-15-8.3-9.05-4.03-4.38-14.27-16.95-16.75-12.56-2.48-10.99.08-22.21-.85-11.22-.93-15.2-8.82-28.25-5.15s-10.92 5.52-20.09 12.04c-9.17 6.51-16.38 1.26-21.98 9.76-5.6 8.5-2.65 13.13-5.37 19.49-2.71 6.36-8.36 8.56-8.24 16.1.13 7.53 8.05 16.57 6.7 23.46z"
                />
                <path
                  id="D"
                  d="M786.24 1051.11c0 49.82-174.18 90.26-388.74 90.26-214.55 0-388.74-40.44-388.74-90.26 0-49.82 174.19-90.26 388.74-90.26 214.56 0 388.74 40.44 388.74 90.26z"
                />
                <path
                  id="E"
                  d="M1039.01 310.35c-3.24 48.38-1.74 73.98 4.5 76.81 6.23 2.83 9.87 25.21 10.92 67.16-.7 12.03-1.13 19.54-1.3 22.55-.08 1.29 1 2.35 2.29 2.27 8.5-.57 31.86-2.13 40.43-2.7 1.16-.08 2.04-1.07 1.97-2.23-.57-9.18-1.99-32.14-4.27-68.87-2.44-39.3-4.9-66.02-7.39-80.16-7.68-43.71-8.94-63.52-26.77-80.58-11.89-11.38-25.85-12.48-41.88-3.3l21.5 69.05z"
                />
                <path
                  id="F"
                  d="M929.22 366.68c-19.45 3.73-30.63 18.38-33.55 43.97-1.08 9.55-.14 28.84 2.85 57.87-13.51 11.17-21.95 18.15-25.32 20.94-1.89 1.56-4.76.52-5.2-1.89-6.09-32.83-9.36-57.92-9.82-75.26-.34-13.19 1.25-35.45 8.51-82.59 4.04-26.28 10.52-49.31 19.44-69.07 3.71-8.24 10.26-14.87 18.44-18.7.78-.36-1.82.86.9-.41 1.5-.71 3.27.22 3.53 1.86 2.7 16.44 9.44 57.53 20.22 123.28z"
                />
                <path
                  id="G"
                  d="M720.07 992.9c8.42 6.72 5.43 28.83 5.43 36.18 0 42-147.42 76.1-329 76.1s-329-34.1-329-76.1c0-7.56-2.55-31.2 6.34-38.09 40.51-31.41 173.77-38.01 322.66-38.01 149.81 0 283.86 8.21 323.57 39.92z"
                />
                <path
                  id="H"
                  d="M725.5 1003.62c0 37.86-147.42 68.59-329 68.59s-329-30.73-329-68.59 147.42-68.59 329-68.59 329 30.73 329 68.59z"
                />
                <path
                  id="I"
                  class="svg-envelope-shadow"
                  d="M614.72 1003.62c0 15.67-97.78 28.39-218.22 28.39-120.43 0-218.21-12.72-218.21-28.39s97.78-28.39 218.21-28.39c120.44 0 218.22 12.72 218.22 28.39z"
                />
                <path
                  id="J"
                  d="M1051.69 586.94c0 2.96-2.42 5.35-5.4 5.35-2.99 0-5.41-2.39-5.41-5.35 0-2.95 2.42-5.34 5.41-5.34 2.98 0 5.4 2.39 5.4 5.34z"
                />
                <path
                  id="K"
                  d="M1048.03 587.13c0 1.04-.78 1.88-1.74 1.88-.97 0-1.75-.84-1.75-1.88s.78-1.89 1.75-1.89c.96 0 1.74.85 1.74 1.89z"
                />
                <path
                  id="L"
                  d="M1058.18 569.51c0 2.62-2.04 4.75-4.55 4.75s-4.55-2.13-4.55-4.75c0-2.63 2.04-4.76 4.55-4.76s4.55 2.13 4.55 4.76z"
                />
                <path
                  id="M"
                  d="M1230.49 465.71c0 33.11-26.89 60-60 60-11.73 0-22.68-3.37-31.93-9.2-1.29-.81-14.75 6.22-40.41 21.09 15.02-25.57 22.13-39.01 21.33-40.3-5.7-9.17-8.99-20-8.99-31.59 0-33.12 26.88-60 60-60 33.11 0 60 26.88 60 60z"
                />
                <path
                  id="N"
                  d="M1163.27 489.83c2.48 3.23 4.86 4.84 7.15 4.84s4.5-1.61 6.61-4.84h19.41c2.5 0 4.01-2.75 2.66-4.85-1.14-1.79-2.72-4.26-4.18-6.54-1.02-1.59-1.71-3.37-2.05-5.22-1.11-6.02-3.07-16.78-3.97-21.67-.97-5.27-4.52-9.69-9.45-11.77-.54-.23-1.89-.8-4.05-1.72-1.59-2.33-3.25-3.5-4.98-3.5-1.72 0-3.52 1.17-5.38 3.5-2.5 1.41-4.06 2.28-4.69 2.63-4.37 2.46-7.43 6.75-8.31 11.69-.86 4.73-2.57 14.23-3.56 19.74-.46 2.58-1.43 5.05-2.84 7.26-1.33 2.09-2.51 3.95-3.68 5.77-1.29 2.03.17 4.68 2.57 4.68h18.74z"
                />
              </defs>
              <use fill="#ededed" xlink:href="#a" />

              <g class="svg-envelope">
                <use fill="#494450" xlink:href="#b" />
                <g class="svg-letter">
                  <use fill="#059b96" xlink:href="#c" />
                  <use fill="#fff" xlink:href="#d" />
                  <use fill="#fff" xlink:href="#e" />
                  <use fill="#fff" xlink:href="#f" />
                  <use fill="#fff" xlink:href="#g" />
                  <use fill="#fff" xlink:href="#h" />
                  <use fill="#fff" xlink:href="#i" />
                  <use fill="#fff" xlink:href="#j" />
                  <use fill="#fff" xlink:href="#k" />
                  <use fill="#fff" xlink:href="#m" />
                </g>

                <use fill-opacity=".25" xlink:href="#l" />
                <use fill="#fff" xlink:href="#n" />
                <use fill="#37333c" xlink:href="#o" />
              </g>

              <use fill="#ededed" xlink:href="#p" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#p"
              />
              <use fill="#ffdbac" xlink:href="#q" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#q"
              />
              <use fill="#323232" xlink:href="#r" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#r"
              />
              <use fill="#f5d3a6" xlink:href="#s" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#s"
              />
              <use fill="#ffdbac" xlink:href="#t" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#t"
              />
              <use fill="#323232" xlink:href="#u" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#u"
              />
              <use fill="#ffdbac" xlink:href="#v" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#v"
              />
              <use fill="#059b96" xlink:href="#w" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#w"
              />
              <use fill="#059b96" xlink:href="#x" />
              <use fill="#ffdbac" xlink:href="#y" />
              <use fill-opacity="0" stroke="#000" xlink:href="#z" />
              <use fill="#323232" xlink:href="#A" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#A"
              />
              <use fill="#ffdbac" xlink:href="#B" />
              <use fill="#2a2626" xlink:href="#C" />
              <g>
                <use fill="#ededed" xlink:href="#D" />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#E" />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#F" />
              </g>
              <g>
                <use fill="#727272" xlink:href="#G" />
              </g>
              <g>
                <use fill="#8d8d8d" xlink:href="#H" />
              </g>
              <g>
                <use fill="#727272" xlink:href="#I" />
              </g>
              <g>
                <use fill="#323232" xlink:href="#J" />
              </g>
              <g>
                <use fill="#4a4a4a" xlink:href="#K" />
              </g>
              <g>
                <use fill="#4a4a4a" xlink:href="#L" />
              </g>
              <transition name="notification-svg-transition">
                <g v-if="showNotificationSvg">
                  <use fill="#05e9e1" xlink:href="#M" />
                  <use fill="#323232" xlink:href="#N" />
                </g>
              </transition>
            </svg>
          </div>
        </div>
      </div>
      <transition name="success-modal-overlay-transition">
        <div v-if="emailSent" class="success-modal-overlay">
          <div class="success-modal">
            <div class="col-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 230 200"
                width="100%"
                height="100%"
                class="success-modal-svg"
              >
                <defs>
                  <path
                    id="circle"
                    d="M200 100c0 55.19-44.81 100-100 100S0 155.19 0 100 44.81 0 100 0s100 44.81 100 100z"
                  />
                  <path
                    id="check"
                    d="M87.87 190.1 L218.68 59.24l-28.41-28.29-102.4 102.49-49.4-49.41-28.43 28.01 77.83 78.06z"
                  />
                </defs>
                <use fill="#19c69a" xlink:href="#circle" />
                <use fill="#008a67" xlink:href="#check" />
              </svg>
            </div>
            <div class="col-6 success-modal-text">
              Wiadomość wysłana pomyślnie
            </div>
            <div class="success-modal-button-container">
              <div class="success-modal-close-button" @click="hideSuccessModal">
                <i class="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import emailjs from "emailjs-com";
import PageLoader from "../components/pageLoader.vue";
export default {
  components: { PageLoader },
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errors: [],
      emailSent: false,
      showNotificationSvg: false,
      loading: true,
    };
  },
  methods: {
    sendEmail(e) {
      this.errors = [];

      if (!this.name || !this.email || !this.message) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (!this.name) {
          this.errors.push("Musisz podać imię / nazwę firmy");
        }
        if (!this.email) {
          this.errors.push("Musisz podać email");
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Email jest nieprawidłowy");
        }
        if (!this.message) {
          this.errors.push("Wiadomość nie może być pusta");
        }
      }

      if (!this.errors.length) {
        try {
          emailjs.sendForm(
            "service_dm43xeg",
            "template_xsoxe4q",
            e.target,
            "user_usfmzLBSXL1cUCpPmc07P",
            {
              name: this.name,
              email: this.email,
              message: this.message,
            }
          );
        } catch (error) {
          console.log({ error });
        }
        this.name = "";
        this.email = "";
        this.message = "";
        this.emailSent = true;
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    hideSuccessModal() {
      this.emailSent = false;
      this.showNotificationSvg = true;
      setTimeout(() => {
        this.showNotificationSvg = false;
      }, 2000);
    },
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  },
};
</script>

<style lang="scss">
.contact {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 110px);
}
.svg-letter {
  transform: translateY(20%);
  animation: svg-letter-animation 1s 0.2s ease-out forwards;
}
.svg-envelope {
  transform: translateY(5%);
  animation: svg-envelope-animation 3s 1.3s ease-in-out infinite;
}
.svg-envelope-shadow {
  transform: translate(0px, 0px) scale(1);

  animation: svg-envelope-shadow-animation 3s 1.25s ease-in-out infinite;
}
.contact-form {
  width: 100%;
  opacity: 0;
  animation: contact-form-animation 0.6s ease-out forwards;
  margin-top: -25px;
  &-header {
    font-size: 30px;
    font-weight: 700;
    color: $primaryGrey;
  }
  & div {
    position: relative;
    & input,
    & textarea {
      display: flex;
      width: 100%;
      margin-bottom: 2rem;
      padding: 0.75rem;
      outline: none;
      border: 0;
      border-bottom: 3px solid $lightGrey;
      transition: all 0.2s ease-in-out;
      &:not(:placeholder-shown),
      &:focus {
        outline: none;
        border: 0;
        border-bottom: 3px solid $darkBlue;
        & ~ label {
          top: -1.3rem;
          color: $darkBlue;
        }
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        transition: background-color 5000s;
      }
    }
    & textarea {
      resize: none;
    }
    & label {
      position: absolute;
      pointer-events: none;
      top: 0.75rem;
      left: 0.75rem;
      transition: all 0.2s ease-in-out;
      color: $lightGrey;
    }
  }
  & .button {
    display: flex;
    justify-content: center;
    background-color: $darkBlue;
    text-transform: uppercase;
    color: white;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 5px;
    padding: 15px 0;
    border-radius: 5px;
    outline: none;
    border: 0;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: $primaryBlue;
      color: $primaryGrey;
    }
  }
}
.errors-list {
  padding: 0.25rem 0 1.25rem 0;
  & .error {
    padding: 0.6rem 0.75rem 0.5rem 0.75rem;
    margin: 0.75rem 0;
    background-color: rgb(255, 220, 220);
    color: rgb(185, 0, 0);
    border-radius: 5px;
    overflow: hidden;
    & .error-delete-icon {
      color: rgb(185, 0, 0);
      float: right;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
.success-modal-overlay {
  @include flex-center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  & .success-modal {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    height: 220px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
    opacity: 0;
    animation: success-modal-animation 0.3s ease-out forwards;
    margin: 0 5%;
    & .success-modal-text {
      @include flex-center;
      font-size: 25px;
      font-weight: 300;
      color: $primaryGrey;
    }
    & .success-modal-button-container {
      position: absolute;
      top: 3px;
      right: 10px;

      & .success-modal-close-button {
        font-size: 25px;
        color: $primaryGrey;
        cursor: pointer;
        &:hover {
          color: $darkBlue;
        }
      }
    }
  }
}
@keyframes svg-letter-animation {
  0% {
    transform: translateY(20%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes svg-envelope-animation {
  0% {
    transform: translateY(5%);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(5%);
  }
}
@keyframes svg-envelope-shadow-animation {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  50% {
    transform: translate(80px, 200px) scale(0.8);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
@keyframes contact-form-animation {
  0% {
    opacity: 0;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes success-modal-animation {
  0% {
    opacity: 0;
    transform: translateY(-25%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.errors-item-transition {
  &-leave-to,
  &-enter {
    max-height: 0;
    opacity: 0;
    padding: 0 0.75rem !important;
    margin: 0 !important;
  }
  &-enter-to,
  &-leave {
    max-height: 40px;
  }
  &-enter-active {
    transition: all 0.3s ease-out;
  }
  &-leave-active {
    transition: all 0.3s ease-out;
  }
}
.success-modal-overlay-transition {
  &-leave-to,
  &-enter {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.2s ease-out;
  }
  &-leave-active {
    transition: all 0.2s ease-out;
  }
}
.notification-svg-transition {
  &-leave-to,
  &-enter {
    opacity: 0;
    transform: translate(-4%, 4%);
  }
  &-enter-active {
    transition: all 0.5s ease-out;
  }
  &-leave-active {
    transition: all 0.5s ease-out;
  }
}
@media (max-width: 1200px) {
  .contact-form {
    margin-top: 0;
    margin-bottom: 2rem;
  }
}
@media (max-width: 400px) {
  .success-modal-overlay {
    & .success-modal {
      height: 180px;
      & .success-modal-text {
        padding: 0 5px;
        font-size: 21px;
        font-weight: 300;
      }
    }
  }
}
</style>
