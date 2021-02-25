<template>
  <div class="home">
    <div class="main-container">
      <div class="row d-flex align-items-center">
        <div class="introduction-container col-lg-6">
          <div class="introduction-header">
            Kilka zdań wstępu
          </div>
          <div class="introduction-text first">
            Cześć, mam na imię Karol. Interesuję się muzyką, gotowaniem i grami
            strategicznymi. Wiecej na mój temat dowiesz się klikając przycisk
            poniżej
            <div class="router-link-container">
              <router-link
                to="/about"
                class="home-router-link"
                @mouseover.native="setHoverPosition($event, 0)"
                @mouseleave.native="setHoverPosition($event, 0)"
              >
                O mnie
                <div class="router-link-hover"></div>
              </router-link>
            </div>
          </div>
          <div class="introduction-text second">
            Od niedawna zajmuję się tworzeniem aplikacji webowych. Informacje na
            temat moich projektach znajdziesz tutaj:
            <div class="router-link-container">
              <router-link
                to="/projects"
                class="home-router-link"
                @mouseover.native="setHoverPosition($event, 1)"
                @mouseleave.native="setHoverPosition($event, 1)"
              >
                Projekty
                <div class="router-link-hover"></div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 figure-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            viewBox="0 0 1100 1200"
          >
            <defs>
              <path
                id="a"
                d="M1211.14 1055.63c0 30.66-239.53 55.56-534.57 55.56-295.04 0-534.57-24.9-534.57-55.56 0-30.66 239.53-55.56 534.57-55.56 295.04 0 534.57 24.9 534.57 55.56z"
              />
              <path id="b" d="M1043.3 282.61v213.28H321.42V282.61h721.88z" />
              <path id="c" d="M1043.3 36.52V249.8H321.42V36.52h721.88z" />
              <path id="d" d="M1043.3 529.94v213.28H321.42V529.94h721.88z" />
              <path
                id="e"
                d="M337.83 1037.34c0 9 7.38 16.36 16.4 16.36h49.22c9.03 0 19.71-6.58 23.75-14.63.61-1.21 3.64-7.27 9.11-18.18h-98.48v16.45z"
              />
              <path
                id="f"
                d="M937.52 1039.07c4.04 8.05 14.72 14.63 23.75 14.63h49.21c9.03 0 16.41-7.36 16.41-16.36v-16.45h-98.48c5.47 10.91 8.5 16.97 9.11 18.18z"
              />
              <path id="g" d="M1043.3 774.8v213.28H321.42V774.8h721.88z" />
              <path id="h" d="M682.36 348.23v49.22H485.48v-49.22h196.88z" />
              <path
                id="i"
                d="M322.05 69.61v180.47h32.81V135.23c0-36.24 29.38-65.62 65.62-65.62h622.94V36.8H322.05v32.81z"
              />
              <path
                id="j"
                d="M682.36 3.7H321.42c-18.04 0-32.81 14.77-32.81 32.82v951.56c0 18.05 14.77 32.81 32.81 32.81h721.88c18.04 0 32.81-14.76 32.81-32.81V36.52c0-18.05-14.77-32.82-32.81-32.82H682.36zm98.44 984.38H321.42V774.8h721.88v213.28H780.8zm-459.38-246.1V528.7h721.88v213.28H321.42zm0-246.09V282.61h721.88v213.28H321.42zm0-246.09V36.52h721.88V249.8H321.42z"
              />
              <path
                id="k"
                d="M321.61 315.86v180.47h32.81V381.48c0-36.24 29.38-65.62 65.63-65.62h622.93v-32.81H321.61v32.81z"
              />
              <path
                id="l"
                d="M321.73 561.42v180.47h32.81V627.05c0-36.24 29.38-65.63 65.62-65.63h622.94v-32.81H321.73v32.81z"
              />
              <path id="m" d="M895.64 889.64v49.22H698.77v-49.22h196.87z" />
              <path
                id="n"
                d="M321.42 807.61v180.47h32.81V873.23c0-36.24 29.39-65.62 65.63-65.62h622.94V774.8H321.42v32.81z"
              />
              <path id="o" d="M731.58 397.45v49.22H534.7v-49.22h196.88z" />
              <path id="p" d="M698.77 446.67v49.22H501.89v-49.22h196.88z" />
              <path id="q" d="M944.86 938.86v49.22H747.98v-49.22h196.88z" />
              <path id="r" d="M994.08 299.02v196.87h-49.22V299.02h49.22z" />
              <path id="s" d="M944.86 299.02v196.87h-49.22V299.02h49.22z" />
              <path id="t" d="M518.3 53.7v196.87h-49.22V53.7h49.22z" />
              <path id="u" d="M469.08 53.7v196.87h-49.22V53.7h49.22z" />
              <path id="v" d="M419.86 53.7v196.87h-49.22V53.7h49.22z" />
              <path id="w" d="M469.08 545.11v196.87h-49.22V545.11h49.22z" />
              <path id="x" d="M419.86 545.11v196.87h-49.22V545.11h49.22z" />
              <path
                id="y"
                d="M556.15 741.97c-52.02-106.06-80.92-164.97-86.7-176.76 26.51-13 41.24-20.23 44.19-21.67 52.02 106.05 80.92 164.97 86.7 176.75-26.51 13.01-41.24 20.23-44.19 21.68z"
              />
              <path
                id="z"
                d="M331.65 1153.61c0 23.98-73.93 43.45-165 43.45-91.06 0-165-19.47-165-43.45 0-23.98 73.94-43.45 165-43.45 91.07 0 165 19.47 165 43.45z"
              />
              <path
                id="A"
                d="M140.75 1092.22c5.46 15.13 8.86 24.59 10.23 28.38.23.64.89 1.03 1.56.93 3.23-.51 11.29-1.76 24.2-3.77l-5.7-28.28-30.29 2.74z"
              />
              <path
                id="B"
                d="M127.43 1118.9c-.17.21-2.32 2.37-6.45 6.49-4.15 4.13-8.7 7.84-13.57 11.08-3.56 2.37-.08.06-1.93 1.29-5.27 3.51-3.2 11.69 3.11 12.26 1.56.15-1.57-.14 2.78.26 3.34.3 6.69.36 10.04.18 2.2-.12-.69.03.39-.02 7.05-.39 14.03-1.6 20.8-3.62.66-.19 2.3-.68 4.92-1.46l14.64-3.01c6.57-1.34 10.68-2.18 12.32-2.51a7.583 7.583 0 006.05-7.79c-.05-1.13.04.68-.03-.77a67.97 67.97 0 00-1.16-9.65c-.27-1.42-.66-3.4-1.05-5.45a1.816 1.816 0 00-2.01-1.46l-4.62.55c-3.47.42-6.95-.74-9.48-3.16-1.34-1.28.36.34-.55-.53a24.474 24.474 0 00-14.66-6.69c-.56-.05 1.02.1-.85-.08-1.24-.11-2.47.26-3.44 1.03-8.86 7.05-13.94 11.41-15.25 13.06z"
              />
              <path
                id="C"
                d="M215.52 338.83c.45 27.97.73 45.45.85 52.45.18 11.21 2.04 22.34 5.51 33l13.2 40.5-87 .8c10.13-26.1 16.46-42.42 19-48.94a66.693 66.693 0 004.46-21.66c.27-7.52.95-26.32 2.04-56.41l41.94.26z"
              />
              <path
                id="D"
                d="M180.22 1109.07l-2.37 21.4 22.69 4.54 7.31-23.21-27.63-2.73z"
              />
              <path
                id="E"
                d="M204 1123.05c1.59.37 2.81 1.65 3.11 3.26.65 3.63.33 1.87.54 3 1.81 10.05 2.66 20.26 2.54 30.47-.03 1.87 0-.27-.04 3.5a9.014 9.014 0 01-5.46 8.16c-.85.36-.78.33-2.32.99l-3.94 1.39c-1.45.4-.26.07-.83.23a64.597 64.597 0 01-13.02 2.22c-.5.04.35-.02-1.22.08l-2.57.1c-2.78.02-3.92.03-5.22.04-4.58.03-8.13-4-7.52-8.54.17-1.22.07-.48.38-2.74l1.17-6.64c1.61-7.42 5.95-27.28 7.61-34.93a3.053 3.053 0 012.68-2.37l3.61-.34c5.33-.5 10.7-.14 15.91 1.06 1.44.33 2.1.48 4.59 1.06z"
              />
              <path
                id="F"
                d="M239.65 646.54l17.96 46.16-7.12 68.72c.69 50.95-2.22 106.68-8.73 167.18-6.37 59.26-16.21 123.21-29.52 191.84a3.331 3.331 0 01-4.54 2.45c-5.66-2.32-21.14-8.68-27.37-11.24-.55-.23-.9-.78-.88-1.37 1.19-31.78 4.56-121.91 5.71-152.63l-.39-12.47c-2.36-23.6-9.04-90.23-11.46-114.34-.08-.83-1.24-.96-1.5-.16-2.87 8.73-8.02 24.43-10.31 31.41l-8.82 24.2c-1.7 4.23-3.95 9.83-6.14 15.27-1.5 3.75-1.38 7.96.34 11.62 1.41 2.99 2.61 5.56 3.94 8.39 2.05 4.35 3.47 8.98 4.22 13.73.83 5.21 1.66 10.48 2.36 14.9l2.92 22.41c2.5 24.31 9.68 93.94 12.39 120.23.07.73-.43 1.4-1.15 1.53-6.43 1.2-22.98 4.27-29.05 5.39-1.74.32-3.44-.76-3.89-2.48-1.1-4.25-3.86-14.87-8.27-31.87-19.84-72.34-32.24-117.56-37.2-135.64a57.619 57.619 0 01-1.94-18.85c.63-10.16 2.21-35.57 4.73-76.22l19.18-152.64 124.53-35.52z"
              />
              <path
                id="G"
                d="M182.47 382.53c-40.38-1.65-58.81-38.02-55.28-109.11 1.27-25.6 23.09-45.3 48.69-43.96 16.49.86 19.42 1.02 35.87 1.88 25.37 1.33 44.5 23.59 41.98 48.87-6.94 69.88-30.69 103.98-71.26 102.32z"
              />

              <path
                id="J"
                d="M230.88 215.93c3.08 3.96 6.9 7.27 11.26 9.74 1.83 1.04-.02-.02 1.62.92 4.81 2.73 8.28 7.32 9.6 12.7l.73 2.99 2.52 14.27c.05.49.19 1.69.4 3.62 1.12 8.01 1.83 13.01 2.11 15.01a86.55 86.55 0 01-2.93 37.27c-.32 1.06 1.82-5.98.88-2.9a59.623 59.623 0 01-7.22 15.39c-.28.43 1.92-2.92 1.22-1.86a45 45 0 01-6.08 7.41c-.65.65.47-.46-.27.27-1.25 1.23-3.37.53-3.64-1.21-.28-1.79-.54-3.19-.79-4.2-.74-3.02 2.66-7.75 4.11-13.2 1.45-5.45 1.52-4.57 1.69-8.59.07-1.73-.28-3.41-1.06-5.04-.47-.97-1.87-.93-2.29.06-1.42 3.39-2.19 5.23-3.01 7.17-1.75 4.17-7.43 4.71-9.93.94-.76-1.14.56.85-.76-1.14a36.775 36.775 0 01-4.6-9.83c-1.39-4.64-2.87-9.58-3.97-13.29a13.117 13.117 0 00-13.32-9.33c-2.72.16.33-.02-2.17.13a20.13 20.13 0 01-17.83-8.8c-1.65-2.43-.83-1.21-2.64-3.88a9.989 9.989 0 00-13.86-2.69c-2.42 1.63-2.93 1.98-5.73 3.86a7.915 7.915 0 01-10.84-1.92c-1.33-1.83-.03-.04-1.16-1.6-2.83-3.9-8.53-4.24-11.79-.69-2.33 2.53-3.67 3.99-6.17 6.7a58.655 58.655 0 01-12.34 10.2c-1.62 1-.98.61-2.94 1.82-2.53 1.56-5.85.19-6.53-2.71-.62-2.63-.08-.33-.44-1.89a26.268 26.268 0 013.91-20.86c1.52-2.21 1.91-2.79 4.03-5.87 2.37-3.46 4.4-7.14 6.04-10.99 1.38-3.22 2.38-5.56 3.59-8.4 2.02-4.71 6.5-7.91 11.62-8.29 2.07-.15.01 0 2.1-.15 5.33-.39 10.34-2.71 14.09-6.51.92-.93.15-.15 1.64-1.67 1.89-1.92 4.37-3.15 7.04-3.5 1.25-.17-.7.09.16-.02 3.91-.52 7.88.51 11.05 2.87.8.6-.77-.58.27.2 2.45 1.82 5.41 2.81 8.46 2.82.82.01-.78 0 .19 0 2.57.02 5.08-.74 7.21-2.16 1.63-1.08.88-.58 1.91-1.27 4.02-2.68 8.87-3.82 13.65-3.21 2.75.35 1.38.17 3.58.45a24.78 24.78 0 0116.46 9.37c1.17 1.5-.32-.42 1.17 1.49z"
              />
              <path
                id="L"
                d="M180.94 457.53c.4.82 1.5.95 2.08.25 7.5-8.96 28.83-34.46 36.35-43.44.64-.77 1.77-.89 2.55-.28 9.95 7.76 30.97 24.14 39.06 30.45a25.263 25.263 0 019.65 21.86c-3.74 48.54-14.44 187.34-18.31 237.55a6.35 6.35 0 01-5.54 5.82c-14.27 1.8-45.11 5.7-57.68 7.29-9.05 1.15-18.24.85-27.2-.88-6.42-1.24-10.93-2.11-17.05-3.29a91.653 91.653 0 01-28.3-10.52c-4.02-2.31-12.47-7.15-18.9-10.85a2.19 2.19 0 01-1.11-2.09c1.26-16.46 4.4-57.61 9.44-123.45 6.54-55.82 10.63-90.71 12.26-104.66.1-.84.53-1.6 1.2-2.12 9.03-6.97 34.13-26.36 42.92-33.16 1.14-.88 2.81-.49 3.45.81 3.2 6.48 11.86 24.07 15.13 30.71z"
              />
              <path
                id="M"
                d="M278.01 438.38a19.484 19.484 0 0113.02 17.4c1.07 20.86 3.6 70.66 4.67 91.59a79.76 79.76 0 01-2.68 24.94c-2.68 9.89-9.39 34.6-20.12 74.15.59 26.4.96 42.91 1.11 49.51.27 12.16-8.66 22.57-20.72 24.16-18.23 2.41-57.43 7.58-77.09 10.17-6.98.92-12.86-5.19-11.67-12.13 1.44-8.43 5.04-29.52 10.81-63.26 11.09-41.8 18.03-67.93 20.8-78.38 2.81-10.58 4.17-21.5 4.03-32.45-.19-16.2-.66-55.32-.88-73.28a27.876 27.876 0 013.81-14.4c5.57-9.53 18.53-31.68 24.14-41.27 1.77-3.03 6.05-3.28 8.17-.48 1.81 2.4 5.64 7.45 8.16 10.79.6.79 1.42 1.39 2.36 1.72 8.89 3.11 25.37 8.88 32.08 11.22z"
              />
              <path
                id="N"
                d="M229.26 435.3l7.92 139.52c20.89-17.16 33.95-27.89 39.17-32.18.32-.27.82-.13.95.27 4.84 14.33 18.14 53.74 22.74 67.38.88 2.61.16 5.49-1.85 7.38-3.36 3.16-2.46 2.32-3.9 3.67a34.855 34.855 0 01-30.28 8.87c-4.81-.89-12.19-2.27-19.58-3.65-2.14-.4-4.01 1.47-3.61 3.61 2.75 14.69 10.61 56.53 13.47 71.77.12.67.96.9 1.41.39 2.39-2.72-1.1 1.25-1.1 1.25 8.65-9.82 18.78-18.25 30.02-24.97 1.8-1.07-1.46.88 2.42-1.44l12.95-8.21c3.49-2.34 2.62-1.76 4.87-3.27l25.37-16.61c3.32-2.13 2.02-1.29 5.72-3.66a22.156 22.156 0 0010.19-19.85c-.21-3.89-.08-1.48-.27-5.08l-3.51-28.47c-2.24-11.49-6.18-31.68-8.41-43.13l-7.36-28.13c-2.61-7.88-6.9-20.85-9.77-29.52l-7.79-19.28c-2.24-4.67-2.93-6.09-4.79-9.96a42.348 42.348 0 00-19.8-19.82c-2.19-1.06.26.12-3.01-1.46a42.06 42.06 0 00-16.73-4.14c-4.73-.17-16.54-.59-35.44-1.28z"
              />
              <path
                id="O"
                d="M153.56 461.85c-1.4 3.38-2.11 7-2.1 10.66.05 17.87.18 61.76.22 78.58.02 7.08-1.46 14.08-4.35 20.54-2.2 4.94-4.08 9.15-6.2 13.89-3.21 7.19-5.6 14.72-7.12 22.46-4.61 23.39-16.96 86.16-21.77 110.61a6.306 6.306 0 01-7.57 4.93c-2.02-.46-4.39-1-7.06-1.61a8.814 8.814 0 01-4.93-3.07c-.98-1.21-1.8-2.24-2.74-3.39a13.085 13.085 0 01-2.71-6.06c-2.26-13.53-7.01-42.09-8.91-53.46-1.56-9.4-1.39-19.01.51-28.35 2.28-11.17 7.97-39.1 17.08-83.78 5.09-38.61 8.28-62.75 9.55-72.4.79-5.95 3.8-11.37 8.43-15.18 2.81-2.31 5.47-4.51 8.64-7.11 3.59-2.96 7.5-5.49 11.66-7.56 2.41-1.2 5.12-2.55 7.96-3.96a12.06 12.06 0 005.81-6.27c.66-1.62 1.41-3.46 2.19-5.38a5.084 5.084 0 014.03-3.12c1.45-.2 5.05-.68 10.82-1.45-.01 9.6-.01 15.6-.01 18 0 2.18-.67 4.31-1.91 6.11-1.37 1.99-2.45 3.56-3.54 5.14-2.2 3.18-4.06 6.59-5.54 10.17-.51 1.24.1-.23-.44 1.06z"
              />
              <linearGradient
                id="neckGradient"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#ffdbac" />
                <stop offset="95%" stop-color="#eccda5" />
              </linearGradient>
            </defs>
            <use fill="#ededed" xlink:href="#a" />
            <use fill="#828282" xlink:href="#b" />
            <use fill="#828282" xlink:href="#c" />
            <use fill="#828282" xlink:href="#d" />
            <use fill="#323232" xlink:href="#e" />
            <use
              fill-opacity="0"
              stroke="#000"
              stroke-opacity="0"
              xlink:href="#e"
            />
            <use fill="#323232" xlink:href="#f" />
            <use
              fill-opacity="0"
              stroke="#000"
              stroke-opacity="0"
              xlink:href="#f"
            />
            <use fill="#828282" xlink:href="#g" />

            <use fill="#505050" xlink:href="#i" />
            <use
              fill-opacity="0"
              stroke="#000"
              stroke-opacity="0"
              xlink:href="#i"
            />
            <use fill="#c8c8c8" xlink:href="#j" />
            <use fill="#505050" xlink:href="#k" />
            <use
              fill-opacity="0"
              stroke="#000"
              stroke-opacity="0"
              xlink:href="#k"
            />
            <use fill="#505050" xlink:href="#l" />
            <use
              fill-opacity="0"
              stroke="#000"
              stroke-opacity="0"
              xlink:href="#l"
            />
            <use fill="#505050" xlink:href="#n" />
            <use
              fill-opacity="0"
              stroke="#000"
              stroke-opacity="0"
              xlink:href="#n"
            />
            <g class="book-2">
              <use fill="#059b96" xlink:href="#m" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#m"
              />
            </g>
            <g class="book-8">
              <use fill="#059b96" xlink:href="#h" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#h"
              />
            </g>
            <g class="book-7">
              <use fill="#32f0e1" xlink:href="#o" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#o"
              />
            </g>
            <g class="book-6">
              <use fill="#19c69a" xlink:href="#p" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#p"
              />
            </g>
            <g class="book-1">
              <use fill="#32f0e1" xlink:href="#q" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#q"
              />
            </g>
            <g class="book-10">
              <use fill="#19c69a" xlink:href="#r" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#r"
              />
            </g>
            <g class="book-9">
              <use fill="#059b96" xlink:href="#s" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#s"
              />
            </g>
            <g class="book-13">
              <use fill="#19c69a" xlink:href="#t" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#t"
              />
            </g>
            <g class="book-12">
              <use fill="#059b96" xlink:href="#u" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#u"
              />
            </g>
            <g class="book-11">
              <use fill="#32f0e1" xlink:href="#v" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#v"
              />
            </g>
            <g class="book-4">
              <use fill="#32f0e1" xlink:href="#w" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#w"
              />
            </g>
            <g class="book-3">
              <use fill="#059b96" xlink:href="#x" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#x"
              />
            </g>
            <g class="book-5">
              <use fill="#059b96" xlink:href="#y" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#y"
              />
            </g>
            <g>
              <use fill="#ededed" xlink:href="#z" />
              <use fill="#ffdbac" xlink:href="#A" />
              <use
                fill-opacity="0"
                stroke="#b14242"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#A"
              />
              <use fill="#323232" xlink:href="#B" />
              <use
                fill-opacity="0"
                stroke="#b14242"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#B"
              />
              <use class="figure-neck" xlink:href="#C" />
              <use
                fill-opacity="0"
                stroke="#b14242"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#C"
              />
              <use fill="#ffdbac" xlink:href="#D" />
              <use
                fill-opacity="0"
                stroke="#b14141"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#D"
              />
              <use fill="#323232" xlink:href="#E" />
              <use
                fill-opacity="0"
                stroke="#b14242"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#E"
              />
              <use fill="#323232" xlink:href="#F" />
              <use
                fill-opacity="0"
                stroke="#b14242"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#F"
              />
              <use fill="#ffdbac" xlink:href="#G" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                stroke-width="2"
                xlink:href="#G"
              />
              <g>
                <use fill="#2a2626" xlink:href="#J" />
                <use
                  fill-opacity="0"
                  stroke="#b14242"
                  stroke-opacity="0"
                  stroke-width="2"
                  xlink:href="#J"
                />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#L" />
                <use
                  fill-opacity="0"
                  stroke="#b14242"
                  stroke-opacity="0"
                  stroke-width="2"
                  xlink:href="#L"
                />
              </g>
              <g>
                <use fill="#323232" xlink:href="#M" />
                <use
                  fill-opacity="0"
                  stroke="#b14242"
                  stroke-opacity="0"
                  stroke-width="2"
                  xlink:href="#M"
                />
              </g>
              <g>
                <use fill="#323232" xlink:href="#N" />
                <use
                  fill-opacity="0"
                  stroke="#b14242"
                  stroke-opacity="0"
                  stroke-width="2"
                  xlink:href="#N"
                />
              </g>
              <g>
                <use fill="#323232" xlink:href="#O" />
                <use
                  fill-opacity="0"
                  stroke="#b14242"
                  stroke-opacity="0"
                  stroke-width="2"
                  xlink:href="#O"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
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
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.router-link-container {
  @include flex-center;
  margin-top: 0.6rem;
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
    left: 0;
    top: 0;
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
.introduction-header {
  font-size: 40px;
  font-weight: 700;
  color: $primaryGrey;
  text-align: center;
  opacity: 0;
  animation: introduction-animation 1s 0.4s ease-out forwards;
}
.introduction-text {
  font-size: 30px;
  font-weight: 300;
  color: $lightGrey;
  text-align: center;
  margin-top: 2rem;
  opacity: 0;
  &.first {
    animation: introduction-animation 1s 0.6s ease-out forwards;
  }
  &.second {
    animation: introduction-animation 1s 0.8s ease-out forwards;
  }
}
.figure-svg {
  height: 680px;
  padding-top: 3rem;
}
.figure-neck {
  fill: url(#neckGradient);
}
.book {
  @for $i from 1 through 13 {
    &-#{$i} {
      opacity: 0;
      animation: book-animation 0.2s 0.2s + 0.1s * $i ease-out forwards;
    }
  }
}
@keyframes introduction-animation {
  0% {
    opacity: 0;
    transform: translateX(-30%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes book-animation {
  0% {
    opacity: 0;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes router-link-animation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 1200px) {
  .home-router-link {
    padding: 10px 18px;
    width: 35%;
  }
}
@media (max-width: 992px) {
  .introduction-header {
    font-size: 38px;
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
    display: initial;
    position: initial;
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
  .figure-svg {
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
