<template>
  <transition name="router-view-transition" mode="out-in">
    <page-loader v-if="loading"></page-loader>
    <div v-else class="home">
      <div class="main-container">
        <div class="row d-flex align-items-center">
          <div class="introduction-container col-lg-6">
            <div class="introduction-header">
              Kilka zdań wstępu
            </div>
            <div class="introduction-text first">
              Cześć, mam na imię Karol. Interesuję się muzyką, gotowaniem i
              grami strategicznymi. Wiecej na mój temat dowiesz się klikając
              przycisk poniżej
              <div class="router-link-container">
                <router-link
                  to="/about"
                  class="home-router-link"
                  @mouseover.native="
                    windowWidth >= 1200 ? setHoverPosition($event, 0) : ''
                  "
                  @mouseleave.native="
                    windowWidth >= 1200 ? setHoverPosition($event, 0) : ''
                  "
                >
                  O mnie
                  <div class="router-link-hover"></div>
                </router-link>
              </div>
            </div>
            <div class="introduction-text second">
              Od niedawna zajmuję się tworzeniem aplikacji webowych. Informacje
              na temat moich projektów znajdziesz tutaj:
              <div class="router-link-container">
                <router-link
                  to="/projects"
                  class="home-router-link"
                  @mouseover.native="
                    windowWidth >= 1200 ? setHoverPosition($event, 1) : ''
                  "
                  @mouseleave.native="
                    windowWidth >= 1200 ? setHoverPosition($event, 1) : ''
                  "
                >
                  Projekty
                  <div class="router-link-hover"></div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-6 home-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1250 1100"
              height="100%"
              width="100%"
            >
              <defs>
                <path
                  id="a"
                  d="M1127.08 497.6c0 273.2-221.8 495-495 495s-495-221.8-495-495c0-273.19 221.8-495 495-495s495 221.81 495 495z"
                />
                <path id="b" d="M289.55 81.68h901.58v636.37H289.55V81.68z" />
                <path id="c" d="M306.25 96.84h868.18v606.04H306.25V96.84z" />
                <path
                  id="e"
                  d="M372.98 179.07c.24-13.88-1.02-27.77-3.78-41.65l301.18 5.26c3.75 14.57 5.5 28.8 5.26 42.68-.25 13.89-2.48 27.43-6.71 40.63l-301.18-5.26c3.24-13.89 4.98-27.77 5.23-41.66z"
                />
                <path
                  id="f"
                  d="M182.6 1080.59c-91.06 0-165-19.47-165-43.45 0-23.98 73.94-43.45 165-43.45 91.07 0 165 19.47 165 43.45 0 23.98-73.93 43.45-165 43.45z"
                />
                <path
                  id="g"
                  d="M166.93 1004.13c.23.64.89 1.03 1.56.93 3.23-.51 11.29-1.76 24.2-3.77-.38-1.88-2.28-11.31-5.7-28.28l-30.29 2.74c5.9 16.4 9.31 25.86 10.23 28.38z"
                />
                <path
                  id="h"
                  d="M136.93 1008.92c-4.15 4.13-8.7 7.84-13.57 11.08-3.56 2.37-.08.06-1.93 1.29-5.27 3.51-3.2 11.69 3.11 12.26 1.56.15-1.57-.14 2.78.26 3.34.3 6.69.36 10.04.18 2.2-.12-.69.03.39-.02 7.05-.39 14.03-1.6 20.8-3.62.66-.19 2.3-.68 4.92-1.46 1.46-.3 13.17-2.7 14.64-3.01 6.57-1.34 10.68-2.18 12.32-2.51 3.66-.75 6.23-4.06 6.05-7.79-.05-1.13.04.68-.03-.77-.16-3.24-.54-6.47-1.16-9.65-.27-1.42-.66-3.4-1.05-5.45-.18-.94-1.06-1.58-2.01-1.46-2.02.24-3.36.4-4.62.55-3.47.42-6.95-.74-9.48-3.16-1.34-1.28.36.34-.55-.53-3.99-3.82-9.16-6.18-14.66-6.69-.56-.05 1.02.1-.85-.08-1.24-.11-2.47.26-3.44 1.03-8.86 7.05-13.94 11.41-15.25 13.06-.17.21-2.32 2.37-6.45 6.49z"
                />
                <path
                  id="i"
                  d="M232.32 273.98c.18 11.21 2.04 22.34 5.51 33l13.2 40.5-87 .8c10.13-26.1 16.46-42.42 19-48.94 2.68-6.92 4.19-14.24 4.46-21.66.27-7.52.95-26.32 2.04-56.41 2.79.02 16.77.1 41.94.26.48 30.3.77 47.78.85 52.45z"
                />
                <path
                  id="j"
                  d="M193.8 1014l22.69 4.54 7.31-23.21-27.63-2.73-2.37 21.4z"
                />
                <path
                  id="k"
                  d="M223.06 1009.84c.65 3.63.33 1.87.54 3 1.81 10.05 2.66 20.26 2.54 30.47-.03 1.87 0-.27-.04 3.5-.05 3.56-2.19 6.76-5.46 8.16-.85.36-.78.33-2.32.99l-3.94 1.39c-1.45.4-.26.07-.83.23-4.25 1.18-8.62 1.93-13.02 2.22-.5.04.35-.02-1.22.08l-2.57.1c-2.78.02-3.92.03-5.22.04-4.58.03-8.13-4-7.52-8.54.17-1.22.07-.48.38-2.74l1.17-6.64c1.61-7.42 5.95-27.28 7.61-34.93.28-1.28 1.37-2.24 2.68-2.37 2.33-.22 2.45-.23 3.61-.34 5.33-.5 10.7-.14 15.91 1.06 1.44.33 2.1.48 4.59 1.06 1.59.37 2.81 1.65 3.11 3.26z"
                />
                <path
                  id="l"
                  d="M273.56 576.23c-4.27 41.24-6.65 64.14-7.12 68.72.69 50.95-2.22 106.68-8.73 167.18-6.37 59.26-16.21 123.21-29.52 191.84-.4 2.07-2.59 3.25-4.54 2.45-5.66-2.32-21.14-8.68-27.37-11.24-.55-.23-.9-.78-.88-1.37 1.19-31.78 4.56-121.91 5.71-152.63l-.39-12.47c-2.36-23.6-9.04-90.23-11.46-114.34-.08-.83-1.24-.96-1.5-.16-2.87 8.73-5.15 24.43-7.44 31.41 0 0-2.32 8.07-6.97 24.2-4.19 13.97-6.81 22.69-7.86 26.18-.43 1.44-.4 2.98.09 4.4.63 1.84 1.25 3.41 1.85 4.7 2.05 4.35 2.81 8.98 3.56 13.73.83 5.21 1.66 10.48 2.36 14.9l2.92 22.41c2.5 24.31 9.68 93.94 12.39 120.23.07.73-.43 1.4-1.15 1.53-6.43 1.2-22.98 4.27-29.05 5.39-1.74.32-3.44-.76-3.89-2.48-1.1-4.25-3.86-14.87-8.27-31.87-19.84-72.34-32.24-117.56-37.2-135.64-1.12-4.08-1.77-10.37-1.94-18.85-.83-12.67.74-38.07 4.73-76.22 3.98-38.14 10.38-89.02 19.18-152.64l124.53-35.52 17.96 46.16z"
                />
                <path
                  id="m"
                  d="M153.27 234.93c-5.61-17.33-9.71-36.54-9.63-64.98.08-28.43 22.09-45.3 47.69-43.96 16.49.86 19.42 1.02 35.87 1.88 25.37 1.33 44.5 23.59 41.98 48.87-6.94 69.88-30.69 103.98-71.26 102.32-24.23-.99-36.22-18.14-44.65-44.13z"
                />
                <path
                  id="n"
                  d="M257.59 124.33c1.83 1.04-.02-.02 1.62.92 4.81 2.73 8.28 7.32 9.6 12.7.49 2.01.17.7.73 2.99l2.52 14.27c.05.49.19 1.69.4 3.62 1.12 8.01 1.83 13.01 2.11 15.01 1.75 12.49.75 25.21-2.93 37.27-.32 1.06 1.82-5.98.88-2.9-1.66 5.45-4.09 10.63-7.22 15.39-.28.43 1.92-2.92 1.22-1.86-1.76 2.68-3.79 5.16-6.08 7.41-.65.65.47-.46-.27.27-1.25 1.23-3.37.53-3.64-1.21-.28-1.79-.54-3.19-.79-4.2-.74-3.02 2.66-7.75 4.11-13.2 1.45-5.45 1.52-4.57 1.69-8.59.07-1.73-.28-3.41-1.06-5.04-.47-.97-1.87-.93-2.29.06-1.42 3.39-2.19 5.23-3.01 7.17-1.75 4.17-7.43 4.71-9.93.94-.76-1.14.56.85-.76-1.14a36.775 36.775 0 01-4.6-9.83c-1.39-4.64-2.87-9.58-3.97-13.29-1.74-5.82-7.26-9.68-13.32-9.33-2.72.16.33-.02-2.17.13-7.08.41-13.85-2.93-17.83-8.8-1.65-2.43-.83-1.21-2.64-3.88-3.09-4.57-9.29-5.77-13.86-2.69-2.42 1.63-2.93 1.98-5.73 3.86-3.54 2.39-8.33 1.54-10.84-1.92-1.33-1.83-.03-.04-1.16-1.6-2.83-3.9-8.53-4.24-11.79-.69-2.33 2.53-3.67 3.99-6.17 6.7-3.63 3.95-7.78 7.38-12.34 10.2-1.62 1-.98.61-2.94 1.82-2.53 1.56-5.85.19-6.53-2.71-.62-2.63-.08-.33-.44-1.89-1.69-7.19-.27-14.76 3.91-20.86 1.52-2.21 1.91-2.79 4.03-5.87 2.37-3.46 4.4-7.14 6.04-10.99 1.38-3.22 2.38-5.56 3.59-8.4 2.02-4.71 6.5-7.91 11.62-8.29 2.07-.15.01 0 2.1-.15 5.33-.39 10.34-2.71 14.09-6.51.92-.93.15-.15 1.64-1.67 1.89-1.92 4.37-3.15 7.04-3.5 1.25-.17-.7.09.16-.02 3.91-.52 7.88.51 11.05 2.87.8.6-.77-.58.27.2 2.45 1.82 5.41 2.81 8.46 2.82.82.01-.78 0 .19 0 2.57.02 5.08-.74 7.21-2.16 1.63-1.08.88-.58 1.91-1.27 4.02-2.68 8.87-3.82 13.65-3.21 2.75.35 1.38.17 3.58.45 6.51.82 12.43 4.19 16.46 9.37 1.17 1.5-.32-.42 1.17 1.49 3.08 3.96 6.9 7.27 11.26 9.74z"
                />
                <path
                  id="o"
                  d="M198.97 341.31c.03-.03.11-.12.24-.24 13.57-13.05 25.68-27.53 36.11-43.2.64-.77 1.77-.89 2.55-.28 9.95 7.76 30.97 24.14 39.06 30.45 6.68 5.21 10.3 13.42 9.65 21.86-3.74 48.54-14.44 187.34-18.31 237.55-.23 3.01-2.54 5.44-5.54 5.82-14.27 1.8-45.11 5.7-57.68 7.29-9.05 1.15-18.24.85-27.2-.88-6.42-1.24-10.93-2.11-17.05-3.29-9.95-1.92-19.51-5.47-28.3-10.52-4.02-2.31-12.47-7.15-18.9-10.85-.75-.42-1.18-1.24-1.11-2.09 1.26-16.46 4.4-57.61 9.44-123.45 6.54-55.82 10.63-90.71 12.26-104.66.1-.84.53-1.6 1.2-2.12 6.02-4.64 21-16.9 44.93-36.78l1.44 4.43c.87 2.57 1.42 4.17 1.64 4.81 2.61 7.66 6.24 14.92 10.78 21.61 1.44 2.12 2.34 3.55 2.71 4.29.4.82 1.5.95 2.08.25z"
                />
                <path
                  id="p"
                  d="M306.98 339.31c1.07 20.86 3.6 70.66 4.67 91.59.43 8.41-.48 16.82-2.68 24.94-2.68 9.89-9.39 34.6-20.12 74.15.59 26.4.96 42.91 1.11 49.51.27 12.16-8.66 22.57-20.72 24.16-18.23 2.41-57.43 7.58-77.09 10.17-6.98.92-12.86-5.19-11.67-12.13 1.44-8.43 5.04-29.52 10.81-63.26 11.09-41.8 18.03-67.93 20.8-78.38 2.81-10.58 4.17-21.5 4.03-32.45-.19-16.2-.66-55.32-.88-73.28-.06-5.06 1.26-10.04 3.81-14.4 5.57-9.53 18.53-31.68 24.14-41.27 1.77-3.03 6.05-3.28 8.17-.48 1.81 2.4 5.64 7.45 8.16 10.79.6.79 1.42 1.39 2.36 1.72 8.89 3.11 25.37 8.88 32.08 11.22 7.47 2.62 12.62 9.49 13.02 17.4z"
                />
                <path
                  id="q"
                  d="M253.13 458.35c20.89-17.16 33.95-27.89 39.17-32.18.32-.27.82-.13.95.27 4.84 14.33 18.14 53.74 22.74 67.38.88 2.61.16 5.49-1.85 7.38-3.36 3.16-2.46 2.32-3.9 3.67-8.1 7.62-19.35 10.91-30.28 8.87-4.81-.89-12.19-2.27-19.58-3.65-2.14-.4-4.01 1.47-3.61 3.61 2.75 14.69 10.61 56.53 13.47 71.77.12.67.96.9 1.41.39 2.39-2.72-1.1 1.25-1.1 1.25 8.65-9.82 18.78-18.25 30.02-24.97 1.8-1.07-1.46.88 2.42-1.44l12.95-8.21c3.49-2.34 2.62-1.76 4.87-3.27l25.37-16.61c3.32-2.13 2.02-1.29 5.72-3.66 6.72-4.3 10.62-11.88 10.19-19.85-.21-3.89-.08-1.48-.27-5.08l-3.51-28.47c-2.24-11.49-6.18-31.68-8.41-43.13l-7.36-28.13c-2.61-7.88-6.9-20.85-9.77-29.52l-7.79-19.28c-2.24-4.67-2.93-6.09-4.79-9.96a42.3479 42.3479 0 00-19.8-19.82c-2.19-1.06.26.12-3.01-1.46-5.23-2.52-10.93-3.93-16.73-4.14-4.73-.17-16.54-.59-35.44-1.28 1.58 27.91 7.13 125.57 7.92 139.52z"
                />
                <path
                  id="r"
                  d="M167.41 356.04c.05 17.87.18 61.76.22 78.58.02 7.08-1.46 14.08-4.35 20.54-2.2 4.94-4.08 9.15-6.2 13.89-3.21 7.19-5.6 14.72-7.12 22.46-4.61 23.39-16.96 86.16-21.77 110.61-.69 3.48-4.11 5.71-7.57 4.93-2.02-.46-4.39-1-7.06-1.61-1.95-.44-3.68-1.52-4.93-3.07-.98-1.21-1.8-2.24-2.74-3.39-1.41-1.75-2.34-3.84-2.71-6.06-2.26-13.53-7.01-42.09-8.91-53.46-1.56-9.4-1.39-19.01.51-28.35 2.28-11.17 7.97-39.1 17.08-83.78 5.09-38.61 8.28-62.75 9.55-72.4.79-5.95 3.8-11.37 8.43-15.18 2.81-2.31 5.47-4.51 8.64-7.11 3.59-2.96 7.5-5.49 11.66-7.56 2.41-1.2 5.12-2.55 7.96-3.96 2.64-1.31 4.7-3.54 5.81-6.27.66-1.62 1.41-3.46 2.19-5.38.69-1.69 2.23-2.88 4.03-3.12 1.45-.2 5.05-.68 10.82-1.45-.01 9.6-.01 15.6-.01 18 0 2.18-.67 4.31-1.91 6.11-1.37 1.99-2.45 3.56-3.54 5.14-2.2 3.18-4.06 6.59-5.54 10.17-.51 1.24.1-.23-.44 1.06-1.4 3.38-2.11 7-2.1 10.66z"
                />
                <path
                  id="t"
                  d="M495.6 340.61c0-23.5-2.42-47.17-7.28-71h-100c3.22 23.34 4.84 46.76 4.84 70.26 0 23.5-1.62 47.08-4.84 70.74h100c4.86-23.17 7.28-46.5 7.28-70z"
                />
                <path
                  id="v"
                  d="M811.73 188.87c-.24-13.89-1.98-27.71-5.22-41.49l301.18-5.26c4.25 14.43 6.5 28.59 6.74 42.47.24 13.89-1.52 27.5-5.29 40.84l-301.18 5.26c2.76-14 4.02-27.94 3.77-41.82z"
                />
                <path
                  id="x"
                  d="M567.84 366.48c-.82-23.48-4.07-47.05-9.76-70.7l-99.94 3.49c4.04 23.21 6.47 46.57 7.29 70.05.82 23.49.03 47.11-2.37 70.86l99.94-3.49c4.05-23.32 5.66-46.72 4.84-70.21z"
                />
                <path
                  id="z"
                  d="M607.42 356.21c3.18 17.74 5.06 34.93 5.64 51.59.59 16.66-.13 32.77-2.15 48.35l-69.96 2.44c1.98-17.73 2.68-34.93 2.1-51.59-.58-16.65-2.44-32.77-5.59-48.35l69.96-2.44z"
                />
                <path
                  id="B"
                  d="M501.19 531.25c-.41-23.49-3.26-47.11-8.53-70.86l-99.98 1.75c3.63 23.28 5.65 46.67 6.06 70.17.41 23.49-.79 47.1-3.6 70.8l99.98-1.74c4.46-23.25 6.48-46.62 6.07-70.12z"
                />
                <path
                  id="D"
                  d="M575.62 578.62c.82-23.48-.78-47.22-4.8-71.21l-99.94-3.49c2.41 23.45 3.2 46.91 2.38 70.4-.82 23.48-3.25 46.99-7.29 70.52l99.94 3.48c5.66-22.98 8.89-46.21 9.71-69.7z"
                />
                <path
                  id="F"
                  d="M622.76 518.71c3.18 17.73 5.06 34.93 5.64 51.59.58 16.65-.13 32.77-2.15 48.35l-69.96 2.44c1.98-17.73 2.68-34.93 2.1-51.59-.58-16.65-2.45-32.77-5.59-48.35l69.96-2.44z"
                />
                <path
                  id="H"
                  d="M882.69 352.78c.82-23.48-.79-47.22-4.81-71.21l-99.94-3.49c2.41 23.45 3.2 46.91 2.39 70.4-.82 23.48-3.26 46.99-7.3 70.52l99.94 3.48c5.66-22.98 8.9-46.21 9.72-69.7z"
                />
                <path
                  id="J"
                  d="M931.28 440.74c-.82-23.49-4.07-47.06-9.76-70.71l-99.94 3.5c4.04 23.22 6.47 46.57 7.29 70.05.82 23.49.04 47.11-2.36 70.86l99.94-3.49c4.04-23.32 5.65-46.73 4.83-70.21z"
                />
                <path
                  id="L"
                  d="M908.71 546.58c-.01-23.5-2.43-47.17-7.29-71.01l-100 .01c3.22 23.34 4.84 46.76 4.84 70.26 0 23.5-1.61 47.08-4.83 70.74l100-.01c4.85-23.16 7.28-46.49 7.28-69.99z"
                />
                <path
                  id="N"
                  d="M1061.04 343.55c-1.64-23.44-5.71-46.88-12.22-70.32l-99.75 6.98c4.84 23.06 8.08 46.31 9.72 69.75 1.64 23.45 1.68 47.08.11 70.9l99.76-6.97c3.23-23.45 4.02-46.89 2.38-70.34z"
                />
                <path
                  id="P"
                  d="M1114.4 438.78c-.41-23.49-3.25-47.12-8.52-70.86l-99.98 1.74c3.63 23.28 5.65 46.67 6.06 70.17.4 23.5-.8 47.1-3.61 70.81l99.99-1.74c4.45-23.25 6.47-46.62 6.06-70.12z"
                />
                <path
                  id="R"
                  d="M1122.38 481.68c2.56 17.84 3.84 35.09 3.84 51.76 0 16.67-1.28 32.75-3.84 48.24h-70c2.6-17.65 3.9-34.81 3.9-51.48 0-16.66-1.3-32.84-3.9-48.52h70z"
                />
              </defs>
              <use fill="#ededed" xlink:href="#a" />
              <use fill="#9e9e9e" xlink:href="#b" />
              <use fill="#46414d" xlink:href="#c" />
              <g class="paper-1">
                <filter
                  id="d"
                  width="347.91"
                  height="128.57"
                  x="352.75"
                  y="122.42"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M372.98 179.07c.24-13.88-1.02-27.77-3.78-41.65l301.18 5.26c3.75 14.57 5.5 28.8 5.26 42.68-.25 13.89-2.48 27.43-6.71 40.63l-301.18-5.26c3.24-13.89 4.98-27.77 5.23-41.66z"
                  filter="url(#d)"
                />
                <use fill="#19c69a" xlink:href="#e" />
              </g>

              <use fill="#ededed" xlink:href="#f" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#f"
              />
              <use fill="#ffdbac" xlink:href="#g" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#g"
              />
              <use fill="#323232" xlink:href="#h" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#h"
              />
              <use fill="#f5d3a6" xlink:href="#i" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#i"
              />
              <use fill="#ffdbac" xlink:href="#j" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#j"
              />
              <use fill="#323232" xlink:href="#k" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#k"
              />
              <use fill="#323232" xlink:href="#l" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#l"
              />
              <use fill="#ffdbac" xlink:href="#m" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#m"
              />
              <use fill="#2a2626" xlink:href="#n" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#n"
              />
              <use fill="#059b96" xlink:href="#o" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#o"
              />
              <use fill="#323232" xlink:href="#p" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#p"
              />
              <use fill="#323232" xlink:href="#q" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#q"
              />
              <g>
                <use fill="#323232" xlink:href="#r" />
                <use
                  fill-opacity="0"
                  stroke="#000"
                  stroke-opacity="0"
                  xlink:href="#r"
                />
              </g>
              <g class="paper-3">
                <filter
                  id="s"
                  width="147.28"
                  height="181"
                  x="373.32"
                  y="254.61"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M495.6 340.61c0-23.5-2.42-47.17-7.28-71h-100c3.22 23.34 4.84 46.76 4.84 70.26 0 23.5-1.62 47.08-4.84 70.74h100c4.86-23.17 7.28-46.5 7.28-70z"
                  filter="url(#s)"
                />
                <use fill="#059b96" xlink:href="#t" />
              </g>
              <g class="paper-2">
                <filter
                  id="u"
                  width="347.94"
                  height="128.57"
                  x="791.51"
                  y="127.12"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M811.73 188.87c-.24-13.89-1.98-27.71-5.22-41.49l301.18-5.26c4.25 14.43 6.5 28.59 6.74 42.47.24 13.89-1.52 27.5-5.29 40.84l-301.18 5.26c2.76-14 4.02-27.94 3.77-41.82z"
                  filter="url(#u)"
                />
                <use fill="#059b96" xlink:href="#v" />
              </g>
              <g class="paper-4">
                <filter
                  id="w"
                  width="149.9"
                  height="184.4"
                  x="443.14"
                  y="280.78"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M567.84 366.48c-.82-23.48-4.07-47.05-9.76-70.7l-99.94 3.49c4.04 23.21 6.47 46.57 7.29 70.05.82 23.49.03 47.11-2.37 70.86l99.94-3.49c4.05-23.32 5.66-46.72 4.84-70.21z"
                  filter="url(#w)"
                />
                <use fill="#32f0e1" xlink:href="#x" />
              </g>
              <g class="paper-5">
                <filter
                  id="y"
                  width="115.8"
                  height="142.38"
                  x="522.46"
                  y="341.21"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M607.42 356.21c3.18 17.74 5.06 34.93 5.64 51.59.59 16.66-.13 32.77-2.15 48.35l-69.96 2.44c1.98-17.73 2.68-34.93 2.1-51.59-.58-16.65-2.44-32.77-5.59-48.35l69.96-2.44z"
                  filter="url(#y)"
                />
                <use fill="#19c69a" xlink:href="#z" />
              </g>
              <g class="paper-6">
                <filter
                  id="A"
                  width="148.56"
                  height="182.72"
                  x="377.68"
                  y="445.39"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M501.19 531.25c-.41-23.49-3.26-47.11-8.53-70.86l-99.98 1.75c3.63 23.28 5.65 46.67 6.06 70.17.41 23.49-.79 47.1-3.6 70.8l99.98-1.74c4.46-23.25 6.48-46.62 6.07-70.12z"
                  filter="url(#A)"
                />
                <use fill="#32f0e1" xlink:href="#B" />
              </g>
              <g class="paper-7">
                <filter
                  id="C"
                  width="149.87"
                  height="184.4"
                  x="450.97"
                  y="488.92"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M575.62 578.62c.82-23.48-.78-47.22-4.8-71.21l-99.94-3.49c2.41 23.45 3.2 46.91 2.38 70.4-.82 23.48-3.25 46.99-7.29 70.52l99.94 3.48c5.66-22.98 8.89-46.21 9.71-69.7z"
                  filter="url(#C)"
                />
                <use fill="#19c69a" xlink:href="#D" />
              </g>
              <g class="paper-8">
                <filter
                  id="E"
                  width="115.8"
                  height="142.38"
                  x="537.8"
                  y="503.71"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M622.76 518.71c3.18 17.73 5.06 34.93 5.64 51.59.58 16.65-.13 32.77-2.15 48.35l-69.96 2.44c1.98-17.73 2.68-34.93 2.1-51.59-.58-16.65-2.45-32.77-5.59-48.35l69.96-2.44z"
                  filter="url(#E)"
                />
                <use fill="#059b96" xlink:href="#F" />
              </g>
              <g class="paper-9">
                <filter
                  id="G"
                  width="149.87"
                  height="184.4"
                  x="758.03"
                  y="263.08"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M882.69 352.78c.82-23.48-.79-47.22-4.81-71.21l-99.94-3.49c2.41 23.45 3.2 46.91 2.39 70.4-.82 23.48-3.26 46.99-7.3 70.52l99.94 3.48c5.66-22.98 8.9-46.21 9.72-69.7z"
                  filter="url(#G)"
                />
                <use fill="#19c69a" xlink:href="#H" />
              </g>
              <g class="paper-10">
                <filter
                  id="I"
                  width="149.91"
                  height="184.41"
                  x="806.58"
                  y="355.03"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M931.28 440.74c-.82-23.49-4.07-47.06-9.76-70.71l-99.94 3.5c4.04 23.22 6.47 46.57 7.29 70.05.82 23.49.04 47.11-2.36 70.86l99.94-3.49c4.04-23.32 5.65-46.73 4.83-70.21z"
                  filter="url(#I)"
                />
                <use fill="#32f0e1" xlink:href="#J" />
              </g>
              <g class="paper-11">
                <filter
                  id="K"
                  width="147.29"
                  height="181.01"
                  x="786.42"
                  y="460.57"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M908.71 546.58c-.01-23.5-2.43-47.17-7.29-71.01l-100 .01c3.22 23.34 4.84 46.76 4.84 70.26 0 23.5-1.61 47.08-4.83 70.74l100-.01c4.85-23.16 7.28-46.49 7.28-69.99z"
                  filter="url(#K)"
                />
                <use fill="#059b96" xlink:href="#L" />
              </g>
              <g class="paper-12">
                <filter
                  id="M"
                  width="152.8"
                  height="187.63"
                  x="934.07"
                  y="258.23"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M1061.04 343.55c-1.64-23.44-5.71-46.88-12.22-70.32l-99.75 6.98c4.84 23.06 8.08 46.31 9.72 69.75 1.64 23.45 1.68 47.08.11 70.9l99.76-6.97c3.23-23.45 4.02-46.89 2.38-70.34z"
                  filter="url(#M)"
                />
                <use fill="#059b96" xlink:href="#N" />
              </g>
              <g class="paper-13">
                <filter
                  id="O"
                  width="148.55"
                  height="182.72"
                  x="990.9"
                  y="352.92"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M1114.4 438.78c-.41-23.49-3.25-47.12-8.52-70.86l-99.98 1.74c3.63 23.28 5.65 46.67 6.06 70.17.4 23.5-.8 47.1-3.61 70.81l99.99-1.74c4.45-23.25 6.47-46.62 6.06-70.12z"
                  filter="url(#O)"
                />
                <use fill="#19c69a" xlink:href="#P" />
              </g>
              <g class="paper-14">
                <filter
                  id="Q"
                  width="113.84"
                  height="140"
                  x="1037.38"
                  y="466.68"
                  filterUnits="userSpaceOnUse"
                  primitiveUnits="userSpaceOnUse"
                >
                  <feFlood />
                  <feComposite in2="SourceAlpha" operator="in" />
                  <feGaussianBlur />
                  <feOffset dx="-5" dy="5" result="afterOffset" />
                  <feFlood flood-color="#000000" flood-opacity=".15" />
                  <feComposite in2="afterOffset" operator="in" />
                  <feMorphology operator="dilate" />
                  <feComposite in2="SourceAlpha" operator="out" />
                </filter>
                <path
                  fill="#fff"
                  d="M1122.38 481.68c2.56 17.84 3.84 35.09 3.84 51.76 0 16.67-1.28 32.75-3.84 48.24h-70c2.6-17.65 3.9-34.81 3.9-51.48 0-16.66-1.3-32.84-3.9-48.52h70z"
                  filter="url(#Q)"
                />
                <use fill="#32f0e1" xlink:href="#R" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PageLoader from "../components/pageLoader.vue";
export default {
  components: { PageLoader },
  name: "Home",
  data() {
    return {
      windowWidth: "",
      loading: true,
    };
  },
  methods: {
    setHoverPosition(e, index) {
      const x = e.clientX;
      const y = e.clientY;
      const targetX = e.target.getBoundingClientRect().left;
      const targetY = e.target.getBoundingClientRect().top;
      document.getElementsByClassName("router-link-hover")[index].style.top =
        y - targetY + "px";
      document.getElementsByClassName("router-link-hover")[index].style.left =
        x - targetX + "px";
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
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
.home {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 110px);
}
.router-link-container {
  @include flex-center;
  margin-top: 0.75rem;
}
.home-router-link {
  display: block;
  position: relative;
  width: 30%;
  font-size: 25px;
  font-weight: 700;
  color: $darkBlue;
  padding: 10px 20px;
  border-radius: 50px;
  transition: color 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: 5px 5px 12px 0px rgba(0, 0, 0, 0.2);
  & .router-link-hover {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0%;
    height: 0%;
    border-radius: 50%;
    background-color: $primaryBlue;
    transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  &:hover {
    text-decoration: none;
    color: $primaryGrey;
    & .router-link-hover {
      width: 300%;
      height: 300%;
    }
  }
}
.introduction-container {
  margin-top: -30px;
}
.introduction-header {
  font-size: 40px;
  font-weight: 700;
  color: $primaryGrey;
  text-align: center;
  opacity: 0;
  animation: introduction-animation 0.6s ease-out forwards;
}
.introduction-text {
  font-size: 30px;
  font-weight: 300;
  color: $lightGrey;
  text-align: center;
  margin-top: 2rem;
  opacity: 0;
  will-change: transform, opacity;
  &.first {
    animation: introduction-animation 0.6s ease-out forwards;
  }
  &.second {
    animation: introduction-animation 0.6s ease-out forwards;
  }
}
.paper {
  &-1 {
    opacity: 0;
    will-change: transform, opacity;
    animation: paper-animation-1 0.6s 0.5s ease-out forwards;
  }
  &-2 {
    opacity: 0;
    will-change: transform, opacity;
    animation: paper-animation-1 0.6s 0.6s ease-out forwards;
  }
  $i: 5;
  @while $i < 16 {
    &-#{$i - 2} {
      opacity: 0;
      will-change: transform, opacity;
      animation: paper-animation-3
        0.6s
        0.5s +
        (0.1s * ($i - 2))
        ease-out
        forwards;
    }
    &-#{$i - 1} {
      opacity: 0;
      will-change: transform, opacity;
      animation: paper-animation-1
        0.6s
        0.5s +
        (0.1s * ($i - 1))
        ease-out
        forwards;
    }
    &-#{$i} {
      opacity: 0;
      will-change: transform, opacity;
      animation: paper-animation-2 0.6s 0.5s + (0.1s * ($i)) ease-out forwards;
    }
    $i: $i + 3;
  }
}
@keyframes introduction-animation {
  0% {
    transform: translateX(-15%);
    opacity: 0;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes paper-animation-1 {
  0% {
    opacity: 0;
    transform: translateX(5%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes paper-animation-2 {
  0% {
    opacity: 0;
    transform: translate(5%, 5%);
  }
  100% {
    opacity: 1;
    transform: translate(0%);
  }
}
@keyframes paper-animation-3 {
  0% {
    opacity: 0;
    transform: translate(5%, -5%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@media (max-width: 1200px) {
  .home-router-link {
    padding: 10px 18px;
    width: 35%;
    &:hover {
      text-decoration: none;
      color: $darkBlue;
      & .router-link-hover {
        width: 0%;
        height: 0%;
      }
    }
  }
}
@media (max-width: 992px) {
  .introduction-header {
    font-size: 38px;
    margin-top: 2rem;
  }
  .introduction-text {
    font-size: 28px;
  }
  .home-router-link {
    font-size: 25px;
    width: 30%;
    padding: 10px 15px;
  }
  .home {
    height: unset;
  }
  .home-svg {
    padding-top: 3rem;
  }
  .paper {
    @for $i from 1 through 14 {
      &-#{$i} {
        opacity: 1;
        animation: none;
      }
    }
  }
}
@media (max-width: 768px) {
  .introduction-header {
    font-size: 35px;
  }
  .introduction-text {
    font-size: 22px;
    margin-top: 1.5rem;
  }
  .home-router-link {
    width: 35%;
    font-size: 25px;
    padding: 10px 12px;
  }
}
@media (max-width: 576px) {
  .introduction-header {
    font-size: 30px;
  }
  .introduction-text {
    font-size: 22px;
    margin-top: 1rem;
  }
  .home-svg {
    height: 100%;
    padding-top: 2rem;
  }
  .home-router-link {
    width: 50%;
    font-size: 20px;
    padding: 10px;
  }
}
</style>
