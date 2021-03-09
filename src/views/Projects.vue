<template>
  <transition name="router-view-transition" mode="out-in">
    <page-loader v-if="loading"></page-loader>
    <div v-else class="main-container">
      <div class="projects" id="projects">
        <div class="row projects-list-container">
          <div class="col-xl-6 p-0 pr-xl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1100 900"
              height="100%"
              width="100%"
            >
              <defs>
                <path
                  id="a"
                  d="M809.49 37.46c6.08 0 11.01 4.93 11.01 11.01V366.1c0 6.08-4.93 11-11.01 11H338.5c-6.08 0-11-4.92-11-11V48.47c0-6.08 4.92-11.01 11-11.01h470.99z"
                />
                <path id="b" d="M345.3 57.04h457v286.25h-457V57.04z" />
                <path
                  id="c"
                  d="M395.49 75.9c4.86 0 8.81 3.94 8.81 8.8v1.5c0 4.34-3.52 7.86-7.86 7.86h-22.28c-4.35 0-7.86-3.52-7.86-7.86v-1.97c0-4.6 3.73-8.33 8.33-8.33h20.86z"
                />
                <path
                  id="d"
                  d="M443.9 75.9c4.32 0 7.82 3.5 7.82 7.82v2.99c0 4.06-3.29 7.35-7.35 7.35H417.4c-4.24 0-7.68-3.43-7.68-7.67v-2.21c0-4.57 3.71-8.28 8.29-8.28h25.89z"
                />
                <path
                  id="e"
                  d="M566.12 75.9c4.85 0 8.78 3.93 8.78 8.78v1.34c0 4.44-3.6 8.04-8.04 8.04h-99.39c-4.84 0-8.77-3.92-8.77-8.76v-.72c0-4.8 3.89-8.68 8.68-8.68h98.74z"
                />
                <path
                  id="f"
                  d="M419.92 101.04c4.86 0 8.8 3.94 8.8 8.8v1.51c0 4.34-3.52 7.86-7.86 7.86h-22.28c-4.34 0-7.86-3.52-7.86-7.86v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.87z"
                />
                <path
                  id="g"
                  d="M469.77 101.04c4.32 0 7.83 3.5 7.83 7.82v2.99c0 4.06-3.3 7.36-7.36 7.36h-26.97c-4.24 0-7.67-3.44-7.67-7.68v-2.2c0-4.58 3.71-8.29 8.28-8.29h25.89z"
                />
                <path
                  id="h"
                  d="M544.02 101.04c4.85 0 8.78 3.93 8.78 8.78v1.34c0 4.44-3.6 8.05-8.05 8.05h-52.41c-4.84 0-8.76-3.93-8.76-8.77v-.72c0-4.79 3.88-8.68 8.68-8.68h51.76z"
                />
                <path
                  id="i"
                  d="M440.92 125.76c4.86 0 8.8 3.94 8.8 8.8v1.51c0 4.34-3.52 7.86-7.86 7.86h-22.28c-4.34 0-7.86-3.52-7.86-7.86v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.87z"
                />
                <path
                  id="j"
                  d="M490.77 125.76c4.32 0 7.83 3.51 7.83 7.83v2.99c0 4.06-3.3 7.35-7.36 7.35h-26.97c-4.24 0-7.67-3.44-7.67-7.68v-2.2c0-4.58 3.71-8.29 8.28-8.29h25.89z"
                />
                <path
                  id="k"
                  d="M612.88 125.76c4.85 0 8.78 3.93 8.78 8.79v1.33c0 4.45-3.6 8.05-8.04 8.05h-99.39c-4.84 0-8.77-3.92-8.77-8.77v-.72c0-4.79 3.89-8.68 8.68-8.68h98.74z"
                />
                <path
                  id="l"
                  d="M588.57 152.59c4.85 0 8.78 3.93 8.78 8.78v1.34c0 4.45-3.6 8.05-8.05 8.05H444.36c-4.84 0-8.76-3.92-8.76-8.77v-.72c0-4.79 3.88-8.68 8.68-8.68h144.29z"
                />
                <path
                  id="m"
                  d="M440.92 179.32c4.86 0 8.8 3.94 8.8 8.8v1.51c0 4.34-3.52 7.86-7.86 7.86h-22.28c-4.34 0-7.86-3.52-7.86-7.86v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.87z"
                />
                <path
                  id="n"
                  d="M419.92 205.11c4.86 0 8.8 3.94 8.8 8.8v1.51c0 4.34-3.52 7.85-7.86 7.85h-22.28c-4.34 0-7.86-3.51-7.86-7.85v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.87z"
                />
                <path
                  id="o"
                  d="M419.92 230.76c4.86 0 8.8 3.94 8.8 8.8v1.51c0 4.34-3.52 7.86-7.86 7.86h-22.28c-4.34 0-7.86-3.52-7.86-7.86v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.87z"
                />
                <path
                  id="p"
                  d="M469.77 230.76c4.32 0 7.83 3.5 7.83 7.82v2.99c0 4.06-3.3 7.36-7.36 7.36h-26.97c-4.24 0-7.67-3.44-7.67-7.68v-2.2c0-4.58 3.71-8.29 8.28-8.29h25.89z"
                />
                <path
                  id="q"
                  d="M544.02 230.76c4.85 0 8.78 3.93 8.78 8.78v1.34c0 4.44-3.6 8.05-8.05 8.05h-52.41c-4.84 0-8.76-3.93-8.76-8.77v-.72c0-4.79 3.88-8.68 8.68-8.68h51.76z"
                />
                <path
                  id="r"
                  d="M594.15 230.76c4.32 0 7.82 3.5 7.82 7.82v2.99c0 4.06-3.29 7.36-7.35 7.36h-26.97c-4.24 0-7.68-3.44-7.68-7.68v-2.2c0-4.58 3.71-8.29 8.29-8.29h25.89z"
                />
                <path
                  id="s"
                  d="M716.25 230.76c4.85 0 8.79 3.93 8.79 8.78v1.34c0 4.44-3.61 8.05-8.05 8.05H617.6c-4.84 0-8.76-3.93-8.76-8.77v-.72c0-4.79 3.88-8.68 8.68-8.68h98.73z"
                />
                <path
                  id="t"
                  d="M564.69 257.52c4.85 0 8.78 3.93 8.78 8.78v1.34c0 4.45-3.6 8.05-8.04 8.05H420.49c-4.85 0-8.77-3.92-8.77-8.77v-.72c0-4.79 3.89-8.68 8.68-8.68h144.29z"
                />
                <path
                  id="u"
                  d="M419.92 283.07c4.86 0 8.8 3.94 8.8 8.8v1.51c0 4.34-3.52 7.85-7.86 7.85h-22.28c-4.34 0-7.86-3.51-7.86-7.85v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.87z"
                />
                <path
                  id="v"
                  d="M395.49 308.37c4.86 0 8.81 3.94 8.81 8.8v1.51c0 4.34-3.52 7.86-7.86 7.86h-22.28c-4.35 0-7.86-3.52-7.86-7.86v-1.98c0-4.6 3.73-8.33 8.33-8.33h20.86z"
                />
                <path
                  id="w"
                  d="M579.5 47.6c0 2.62-2.23 4.75-4.97 4.75-2.74 0-4.96-2.13-4.96-4.75s2.22-4.75 4.96-4.75c2.74 0 4.97 2.13 4.97 4.75z"
                />
                <path
                  id="x"
                  d="M550 862.54c-299.84 0-543.27-40.59-543.27-90.56 0-49.98 243.43-90.56 543.27-90.56s543.27 40.58 543.27 90.56c0 49.97-243.43 90.56-543.27 90.56z"
                />
                <path
                  id="y"
                  d="M623.91 214.44c4.65 7.44 6.03 21.33 4.16 41.66-7.28 25.17-14 41.73-20.16 49.67-10.02 12.91-18 20.48-33.75 20.48-16.81 0-28.46-10.07-38.53-24.53-5.38-7.73-10.62-22.94-15.71-45.62-2.09-18.05-1.44-30.44 1.94-37.17 9.64-19.16 32.47-29.42 52.3-29.42 17.87 0 39.73 8.86 49.75 24.93z"
                />
                <path
                  id="z"
                  d="M590.58 297.76c1.55 12.76 2.52 20.73 2.91 23.92.97 8.03 2.75 15.93 5.3 23.6.42 1.26 1.47 4.41 3.14 9.45l-56.26-1.32c2.83-6.77 4.6-11 5.31-12.69 2.18-5.21 3.72-10.66 4.58-16.23.56-3.57 1.94-12.47 4.15-26.73h30.87z"
                />
                <path id="A" d="M124.53 509.09h87.18v263.96h-87.18V509.09z" />
                <path
                  id="B"
                  d="M508.85 246.05c2.65 1.58 4.4 4.3 4.76 7.36.45 3.78 1.12 9.49 1.55 13.08.43 3.64 2.56 6.86 5.75 8.68 2.57 1.46 4.84 2.76 7.32 4.17 3.65 2.08 6.71 5.05 8.9 8.62 1.34 2.2.3.49 1.21 1.98 3.48 5.68 9.32 9.51 15.92 10.44 3.95.55 8.2 1.15 12.86 1.81 4.56.64 9.18.56 13.72-.23 13.83-2.41 22.35-4.82 25.56-7.24 6.07-4.59 5-8.12 10.45-14.35 1.22-1.39 2.67-2.85 4.34-4.38 5.81-5.28 9.46-12.53 10.24-20.34.21-2 .06-.57.38-3.74.42-4.16 1.39-8.24 2.89-12.14 1.39-3.64.81-2.13 1.58-4.13 3.32-8.66 1.59-18.44-4.51-25.43-1.9-2.17.07.08-2.39-2.73-4.68-5.36-8.13-11.68-10.11-18.51-.82-2.82.6 2.07 0 0-2.36-8.14-10.25-13.39-18.67-12.42-3.8.43-6.27.72-11.49 1.32-4.69.54-9.33-1.32-12.35-4.95-2.35-2.84.97 1.16 0 0-6.71-8.07-18.41-9.82-27.18-4.05-3.77 2.47-4.58 3.01-9.58 6.29l-19.06 11.14c-4.98 2.56-8.31 4.27-12.85 6.61-6.07 3.12-7.52 11.16-2.93 16.21 1.2 1.32-1.82-2 0 0 3.54 3.9 4 9.69 1.12 14.09-2 3.06-2.63 4.02-4.51 6.89-3 4.58-1.59 10.73 3.1 13.55 1.63.98 1.47.88 3.98 2.4z"
                />
                <path
                  id="C"
                  d="M947.64 498.48l58 11.15v281.82l-58-65.41V498.48z"
                />
                <path
                  id="D"
                  d="M211.71 509.09l32.52-22.3V717.4l-32.52 55.65V509.09z"
                />
                <path
                  id="E"
                  d="M45.38 486.79h980.77v304.66h-20.51l-.14-281.29H45.38v-23.37z"
                />
                <path id="F" d="M124.53 510.16h87.18v2.07h-87.18v-2.07z" />
                <path
                  id="G"
                  d="M646.66 775.47c0 9.22-31.85 16.7-71.08 16.7-39.22 0-71.07-7.48-71.07-16.7 0-9.22 31.85-16.7 71.07-16.7 39.23 0 71.08 7.48 71.08 16.7z"
                />
                <path
                  id="H"
                  d="M144.29 441.99L961 435.56l65.15 51.25H45.38l98.91-44.82z"
                />
                <path
                  id="I"
                  d="M648.07 771.98c0 9.22-32.3 16.7-72.08 16.7s-72.07-7.48-72.07-16.7c0-9.22 32.29-16.71 72.07-16.71 39.78 0 72.08 7.49 72.08 16.71z"
                />
                <path
                  id="J"
                  d="M618.83 720.11l24.87 3.31-5.52 33.31-21.51-6.69 2.16-29.93z"
                />
                <path
                  id="K"
                  d="M504 720.11l27.75 4.66 2.12 26.53-21.44 2.21-8.43-33.4z"
                />
                <path
                  id="L"
                  d="M638.12 540.73c16.8 10.97 27.37 18.72 31.73 23.26 6.53 6.81 9.42 16.52 3.4 59.42-3.96 28.24-12.98 65.17-27.05 110.8-.24.78-1.03 1.28-1.84 1.15-3.57-.53-12.48-1.85-26.75-3.97 2.15-18.38 3.22-35.5 3.22-51.35 0-23.78-.73-27 4.45-43.75 3.45-11.16 6.37-17.27 8.75-18.32l-58.32-25.8-62.37 25.8c4.29 1.49 7.94 7.6 10.95 18.32 4.51 16.09 4.17 19.61 4.78 43.38.4 15.85 1.62 33.09 3.65 51.72-14.68 2.69-23.85 4.38-27.52 5.05-1.13.21-2.23-.48-2.53-1.59-4.13-15.34-14.47-53.67-31-115-5.51-27.03-5.51-44.31 0-51.86 5.51-7.54 17.86-17.05 37.06-28.52l129.39 1.26z"
                />
                <path
                  id="M"
                  d="M595.24 770.76c0 4.59-9.28 8.32-20.71 8.32-11.43 0-20.71-3.73-20.71-8.32 0-4.58 9.28-8.31 20.71-8.31 11.43 0 20.71 3.73 20.71 8.31z"
                />
                <path
                  id="N"
                  d="M715.98 444.07c-2.08-3.21-5.65-5.14-9.48-5.11-54.23.39-212.53 1.53-267.2 1.92-2.53.02-4.94 1.06-6.69 2.89-5.47 5.71-17.9 18.69-23.06 24.08-1.61 1.68-.42 4.47 1.9 4.47h317.22c2.41 0 3.87-2.67 2.56-4.7-3.72-5.74-11.59-17.9-15.25-23.55z"
                />
                <path
                  id="O"
                  d="M646.76 484.23l6.9-19.88c10.66 2.8 17.32 4.54 19.99 5.24 3.63.95 5.92 4.54 5.25 8.24-.76 4.2-1.79 9.85-2.53 13.95-.64 3.5-4.48 5.39-7.64 3.76-2.93-1.5-10.25-5.28-21.97-11.31z"
                />
                <path id="P" d="M562.4 543.23h24.27v228.75H562.4V543.23z" />
                <path
                  id="Q"
                  d="M464.5 471.95l20.39-5.26 10.17 17.67-18.05 11.67-12.51-24.08z"
                />
                <path
                  id="R"
                  d="M509.95 505.15c1.19-20.18.05-47.91-3.43-83.19-.15-1.49-2.14-1.87-2.83-.54-3.78 7.37-13.23 25.79-28.36 55.27 2.4 8.43 3.9 13.71 4.49 15.81.43 1.5-.31 3.07-1.73 3.7-1.64.72-.49.22-1.24.54-4.62 2.05-9.5 3.46-14.5 4.22-10.78 1.63-17.15-1.42-19.1-9.14-2.69-10.63 2.24-32.35 14.8-65.14 11.92-24.86 19.38-40.4 22.36-46.61 5.74-11.98 16.35-20.92 29.13-24.55 1.39-.4 4.86-1.38 10.41-2.96l27.84-5.74c8.26 2.82 16.77 4.23 25.55 4.24 8.78.01 17.82-1.39 27.12-4.19l24.72 4.19c3.45.72 5.6 1.17 6.46 1.35 14.55 3.05 26.91 12.56 33.59 25.84 3.25 6.45 11.36 22.6 24.34 48.43 9.78 24.67 14.43 43.47 13.96 56.38-.47 12.91-9.42 17.94-26.85 15.09-4.45-1.28-7.23-2.08-8.34-2.4-1.26-.36-2.03-1.64-1.75-2.92.75-3.46 2.78-12.83 3.6-16.61.09-.42.03-.86-.17-1.24-6.36-11.78-23.5-43.54-29.45-54.57-.74-1.35-2.78-.97-2.97.56-4.59 37.07-6.08 65.8-4.47 86.18 1.5 18.88 5.24 30.59 11.24 35.14 1.56 1.18.97 3.66-.96 4-14 2.52-14.82 2.67-19.79 3.56-33.2 5.98-67.19 6.05-100.42.23-5.35-.94-7.99-1.4-22.54-3.96-1.75-.3-2.41-2.46-1.13-3.69 5.81-5.59 9.29-18.01 10.42-37.28z"
                />
                <path
                  id="S"
                  d="M619.05 597.99c18.86-1.18 32.22-10.47 36.64-7.75 2.95 1.81 4.11 5.63 3.48 11.43l-8.22 13.86c-24.57 4.88-48.82 7.32-72.77 7.32-23.38 0-48.98-3.24-76.79-9.72l-10.11-13.62c.1-5.04 1.88-7.79 5.36-8.27 5.21-.71 5.01 2.29 24.98 5.38s21.28.21 53.13 0c31.84-.21 25.44 2.55 44.3 1.37z"
                />
                <path
                  id="T"
                  d="M491.17 597.88c9.58 3.87 21.7 6.22 36.34 7.05 21.95 1.25 24.86-2.67 45.98-2.3 21.13.38 25.64 4.96 46.26 3.3 13.74-1.11 26.94-4.5 39.6-10.18 2.48 11.04 1.45 18.34-3.09 21.9-6.81 5.35-19.87 9.38-45.47 12.28-9.81 1.11-22.21 1.62-37.18 1.52-18.29-.12-36.54-1.87-54.52-5.23-12.79-2.39-20.52-4.51-23.19-6.37-5.72-3.99-7.3-11.31-4.73-21.97z"
                />
                <path
                  id="U"
                  d="M664.62 478.74c4.95 29.98-17.1 57.68-47.43 59.57-9.24.57.67-.04-13.33.83l-65.8.33c-12.33-.65 2.49.13-5.11-.27-30.96-1.62-54.48-28.49-51.99-59.39.88-10.93-.35 4.3.71-8.73 2.35-29.15 17.2-55.87 40.72-73.25 10.19-7.53 1.13-.83 10.67-7.88 23.77-17.57 56.36-17.07 79.58 1.23 8.63 6.81-2.05-1.61 7.27 5.74 23.08 18.19 38.52 44.34 43.31 73.34 2.13 12.9-.37-2.23 1.4 8.48z"
                />
                <path
                  id="V"
                  d="M654.39 476.47c6.01 28.03-13.69 55.05-42.21 57.9-8.32.84 2.24-.22-10.56 1.06-20.63 2.07-41.42 1.97-62.02-.3-11.09-1.23 4.39.48-2.26-.25-29.42-3.24-50.69-29.65-47.6-59.09 1.01-9.58-.71 6.76.51-4.85 2.89-27.39 17.21-52.29 39.45-68.55 8.71-6.37-2.5 1.83 5.6-4.1 22.38-16.36 52.97-15.59 74.49 1.87 6.84 5.56-6.59-5.35.89.72 21.56 17.5 36.49 41.85 42.3 69 2.54 11.83-.66-3.12 1.41 6.59z"
                />
                <path
                  id="W"
                  d="M566.72 470.49c4.04-3.97 10.45-4.21 14.78-.54 1.31 1.11-1.27-1.07.32.28 3.95 3.35 6.23 8.26 6.23 13.44v128.42c0 4.71-2.06 9.19-5.64 12.26-1.61 1.38 1.06-.91-.09.08-4.56 3.9-11.3 3.87-15.81-.1-1.1-.96 1.34 1.18-.29-.25-3.31-2.9-5.2-7.09-5.2-11.49V483.78c0-4.91 1.97-9.62 5.47-13.06 1.47-1.45-.91.89.23-.23z"
                />
                <path
                  id="X"
                  d="M562.7 631.22c5.76.14 9.37.23 10.81.27l2.19.01c1.51-.03 5.26-.09 11.26-.18v1.16c-4.11.35-6.68.58-7.71.67-3.09.27-6.2.26-9.28-.02-.97-.08-3.4-.3-7.27-.65v-1.26z"
                />
                <path
                  id="Y"
                  d="M823.47 589.94l36 21.63-19.34 32.2-36-21.63 19.34-32.2z"
                />
                <path
                  id="Z"
                  d="M228.42 378.52c-22.33 18.53-41.04 39.61-56.14 63.23 27.36-11.07 52.2-25.87 74.52-44.4 22.33-18.54 42.14-40.8 59.43-66.79-29.55 13.44-55.49 29.43-77.81 47.96z"
                />
                <path
                  id="aa"
                  d="M791.49 597.62l41.69 5.12-4.58 37.28-41.68-5.12 4.57-37.28z"
                />
                <path
                  id="ab"
                  d="M130.61 395.05c21.26 16.23 44.45 28.64 69.56 37.24-14.79-22.4-32.81-41.72-54.08-57.96-21.26-16.23-45.76-29.38-73.5-39.46 17.42 23.88 36.75 43.94 58.02 60.18z"
                />
                <path
                  id="ac"
                  d="M825.2 614.04l32.64-26.43 23.64 29.19-32.64 26.43-23.64-29.19z"
                />
                <path
                  id="ad"
                  d="M154 325.17c6.58 38.33 19.01 74.52 37.3 108.56 6.47-38.45 6.41-76.85-.17-115.18-6.58-38.34-19.67-76.62-39.29-114.83-5.14 42.63-4.42 83.11 2.16 121.45z"
                />
                <path
                  id="ae"
                  d="M217.3 341.05c-17.82 34.58-29.67 70.96-35.55 109.16 28.31-26.82 51.37-57.52 69.19-92.1 17.82-34.57 30.39-73.02 37.72-115.35-29.75 30.95-53.54 63.72-71.36 98.29z"
                />
                <path
                  id="af"
                  d="M139.42 361.38c12.36 30.55 28.8 58.11 49.31 82.65-2.39-33.36-9.77-65.32-22.13-95.87-12.36-30.56-29.7-59.71-52.03-87.46 4.21 36.56 12.49 70.12 24.85 100.68z"
                />
                <path
                  id="ag"
                  d="M932.72 756.73c0 5.28-36.24 9.56-80.88 9.56-44.63 0-80.87-4.28-80.87-9.56s36.24-9.56 80.87-9.56c44.64 0 80.88 4.28 80.88 9.56z"
                />
                <path
                  id="ah"
                  d="M183.81 343.02c-3.86 33.95-2.28 67.49 4.73 100.6 14.82-30.95 24.16-63.4 28.01-97.35 3.86-33.95 2.24-69.41-4.87-106.37-14.73 34.8-24.02 69.17-27.87 103.12z"
                />
                <path
                  id="ai"
                  d="M853.81 594.66l41.94 2.2-1.96 37.51-41.95-2.2 1.97-37.51z"
                />
                <path
                  id="aj"
                  d="M866.37 608.56l41.48-6.57 5.88 37.09-41.49 6.57-5.87-37.09z"
                />
                <path
                  id="ak"
                  d="M902.42 744.2c-.79 7.13-6.82 12.53-14 12.53h-75.43c-5.79 0-10.7-4.27-11.49-10.02-3.36-24.17-12.79-92.14-16.33-117.68-.23-1.7 1.08-3.21 2.8-3.21h124.39c1.73 0 3.08 1.51 2.89 3.23-2.85 25.53-10.19 91.47-12.83 115.15z"
                />
                <path
                  id="al"
                  d="M913.61 625.82c1.41 0 2.51 1.23 2.35 2.63-.58 5.18-2.2 19.61-2.83 25.17-.04.4-.38.7-.78.7H788.89c-.36 0-.66-.26-.71-.61-.81-5.58-2.96-20.44-3.72-25.7-.16-1.16.73-2.19 1.9-2.19h127.25z"
                />
                <path
                  id="am"
                  d="M639.46 748.33c9.47 3.33 15.53 7.31 18.18 11.92 1.83 3.19 2.54 6.08 2.11 8.68-.39 2.33-2.1 4.23-4.38 4.85-4.69 1.27-13.44 3.64-17.73 4.8-3.77 1.02-7.7 1.25-11.56.66-2.93-.44-6.46-.98-9.54-1.44-2.91-.45-5.03-3-4.93-5.95.08-2.23.04-1.05.09-2.6.2-5.69 1-11.34 2.37-16.85.37-1.47.63-2.52 1.3-5.23.3-1.19 1.45-1.97 2.67-1.8 2.85.39 9.99 1.38 21.42 2.96z"
                />
                <path
                  id="an"
                  d="M264.28 465.67c.01 3.64-32.29 6.62-72.07 6.65-39.78.02-72.08-2.92-72.08-6.57 0-3.65 32.29-6.63 72.07-6.65 39.78-.02 72.08 2.92 72.08 6.57z"
                />
                <path
                  id="ao"
                  d="M168.72 460.93c.25-1.59.74-3.16 1.48-4.72h43.91c.79 1.29 1.31 2.73 1.57 4.31.18 1.09.22 2.27.13 3.55-.07.93-.84 1.64-1.77 1.64h-43.6c-.97 0-1.77-.75-1.84-1.72-.08-1.03-.04-2.05.12-3.06z"
                />
                <path id="ap" d="M165.83 419.81h52.76v36.62h-52.76v-36.62z" />
                <path
                  id="aq"
                  d="M169.7 457.18c.11-.34.23-.67.37-.97h44c.19.3.37.63.53.97.16.35.31.71.43 1.1h-45.65c.11-.39.22-.75.32-1.1z"
                />
                <path
                  id="ar"
                  d="M788.68 654.3h123.77l-.25 2.09H788.97l-.29-2.09z"
                />
                <path
                  id="as"
                  d="M534.32 745.63c-.26-.78-1.04-1.26-1.85-1.16-2.82.36-9.87 1.27-21.15 2.71-8.9 3.27-14.66 7.18-17.25 11.74-1.81 3.14-2.49 6-2.07 8.56.37 2.3 2.05 4.17 4.29 4.78 4.6 1.26 13.19 3.6 17.42 4.75 3.69 1 7.55 1.22 11.34.66 2.89-.45 6.51-1 9.58-1.46 2.78-.43 4.8-2.86 4.72-5.68-.1-3.82-.53-7.54-1.29-11.15-1-4.71-2.25-9.3-3.74-13.75z"
                />
              </defs>
              <use fill="#696969" xlink:href="#a" />
              <use fill="#37333c" xlink:href="#b" />

              <g class="line-1">
                <use fill="#033f89" xlink:href="#c" />
                <use fill="#10d6f3" xlink:href="#d" />
                <use fill="#ea9046" xlink:href="#e" />
              </g>
              <g class="line-2">
                <use fill="#033f89" xlink:href="#f" />
                <use fill="#10d6f3" xlink:href="#g" />
                <use fill="#ea9046" xlink:href="#h" />
              </g>
              <g class="line-3">
                <use fill="#033f89" xlink:href="#i" />
                <use fill="#10d6f3" xlink:href="#j" />
                <use fill="#ea9046" xlink:href="#k" />
              </g>
              <g class="line-4"><use fill="#fff" xlink:href="#l" /></g>
              <g class="line-5"><use fill="#033f89" xlink:href="#m" /></g>
              <g class="line-6"><use fill="#033f89" xlink:href="#n" /></g>
              <g class="line-7">
                <use fill="#033f89" xlink:href="#o" />
                <use fill="#10d6f3" xlink:href="#p" />
                <use fill="#ea9046" xlink:href="#q" />
                <use fill="#ecd957" xlink:href="#s" />
              </g>
              <g class="line-8"><use fill="#fff" xlink:href="#t" /></g>
              <g class="line-9"><use fill="#033f89" xlink:href="#u" /></g>
              <g class="line-10"><use fill="#033f89" xlink:href="#v" /></g>

              <use fill="#2a2626" xlink:href="#w" />
              <use fill="#ededed" xlink:href="#x" />
              <use
                fill-opacity="0"
                stroke="#000"
                stroke-opacity="0"
                xlink:href="#x"
              />
              <use fill="#ffdbac" xlink:href="#y" />
              <use fill="#ffdbac" xlink:href="#z" />
              <use fill="#828282" xlink:href="#A" />
              <use fill="#2a2626" xlink:href="#B" />
              <use fill="#b3b3b3" xlink:href="#C" />
              <use fill="#b3b3b3" xlink:href="#D" />
              <use fill="#828282" xlink:href="#E" />
              <use fill="#696969" xlink:href="#F" />
              <use fill="#696969" xlink:href="#G" />
              <use fill="#b3b3b3" xlink:href="#H" />
              <use fill="#828282" xlink:href="#I" />
              <use fill="#ffdbac" xlink:href="#J" />
              <use fill="#ffdbac" xlink:href="#K" />
              <use fill="#323232" xlink:href="#L" />
              <use fill="#696969" xlink:href="#M" />
              <use fill="#37333c" xlink:href="#N" />
              <use fill="#ffdbac" xlink:href="#O" />
              <use fill="#828282" xlink:href="#P" />
              <use fill="#ffdbac" xlink:href="#Q" />
              <use fill="#059b96" xlink:href="#R" />
              <use fill="#19c69a" xlink:href="#S" />
              <use fill="#828282" xlink:href="#T" />
              <use fill="#19c69a" xlink:href="#U" />
              <use fill="#828282" xlink:href="#V" />
              <use fill="#b3b3b3" xlink:href="#W" />
              <use fill="#696969" xlink:href="#X" />
              <use fill="#32f0e1" xlink:href="#Y" />
              <g>
                <use fill="#32f0e1" xlink:href="#Z" />
              </g>
              <g>
                <use fill="#19c69a" xlink:href="#aa" />
              </g>
              <g>
                <use fill="#32f0e1" xlink:href="#ab" />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#ac" />
              </g>
              <g>
                <use fill="#19c69a" xlink:href="#ad" />
              </g>
              <g>
                <use fill="#19c69a" xlink:href="#ae" />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#af" />
              </g>
              <g>
                <use fill="#e0e0e0" xlink:href="#ag" />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#ah" />
              </g>
              <g>
                <use fill="#32f0e1" xlink:href="#ai" />
              </g>
              <g>
                <use fill="#059b96" xlink:href="#aj" />
              </g>
              <g>
                <use fill="#b3b3b3" xlink:href="#ak" />
              </g>
              <g>
                <use fill="#828282" xlink:href="#al" />
              </g>
              <g>
                <use fill="#323232" xlink:href="#am" />
              </g>
              <g>
                <use fill="#9f9f9f" xlink:href="#an" />
              </g>
              <g>
                <use fill="#505050" xlink:href="#ao" />
              </g>
              <g>
                <use fill="#505050" xlink:href="#ap" />
              </g>
              <g>
                <use fill="#323232" xlink:href="#aq" />
              </g>
              <g>
                <use fill="#969696" xlink:href="#ar" />
              </g>
              <g>
                <use fill="#323232" xlink:href="#as" />
                <use
                  fill-opacity="0"
                  stroke="#000"
                  stroke-opacity="0"
                  xlink:href="#as"
                />
              </g>
            </svg>
          </div>
          <div class="col-xl-6 p-0 pl-xl-5 d-flex align-items-center">
            <div class="projects-list">
              <div
                v-for="(project, index) in projects"
                :key="index"
                class="projects-list-item"
                @click="scrollIntoView(`${project.divId}`)"
              >
                <span class="projects-list-item-icon">{{ index + 1 }}</span>
                <div class="projects-list-item-content">
                  <div class="projects-list-item-name">{{ project.name }}</div>
                  <div class="projects-list-item-description">
                    {{ project.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--food tracker-->
      <div class="food-tracker" id="foodTracker">
        <div class="project-container">
          <project-header
            projectName="Food tracker"
            projectLink="food-tracker"
            :technologiesArray="projects[0].technologies"
          >
            Aplikacja pozwala na stworzenie listy przepisów. Każdy przepis
            składa się z listy składników, instrukcji krok po kroku, zdjęcia
            dania, czasu przygotowania oraz oceny. Dla każdego przepisu liczona
            jest ilość kalorii. W kalendarzu układa sie jadłospis na aktulany
            tydzień oraz znajduje się dostęp do wszystkich poprzednio ułożonych
            tygodni. Dla każdego tygodnia tworzona jest lista zakupów. Wszystko
            przechowywane jest w bazie danych MySQL, która obsługiwana jest przy
            pomocy MySQLi (rozszerzenie do języka PHP).
          </project-header>

          <div class="row project-images-container">
            <div class="project-images food-tracker-images">
              <div
                v-for="(image, index) in projects[0].images"
                :key="index"
                class="project-images-item"
                @click="showImageModal(projects[0].images, index)"
              >
                <div class="project-images-item-img">
                  <img :src="require(`../assets/${image.src}`)" />
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="project-images-item-icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
                    />
                  </svg>
                </div>
                <div class="project-images-item-description">
                  {{ image.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--mini games app-->
      <div class="mini-games-app" id="miniGamesApp">
        <div class="project-container">
          <project-header
            projectName="Mini games app"
            projectLink="mini-games-app"
            :technologiesArray="projects[1].technologies"
          >
            Aplikacja daje możliwość zagrania w jedną z mini gier. Dostępne gry
            to:
            <br />
            Image puzzle - wybrane zdjęcie zostaje rozbite na 16 części, które
            są tasowane. Jeden z fragmentów zostaje usunięty, a zadaniem gracza
            jest przesuwanie pozostałych na powstałe wolne pole tak, aby zdjęcie
            wróciło do startowego ułożenia.
            <br />
            Memory card game - wybrana liczba par kart zostaje losowo rozłożona
            symbolami do dołu. Gracz wygrywa, gdy znajdzie wszystkie pary kart.
            <br />
            Hangman - klasyczna gra w wisielca. Każda litera wylosowanego wyrazu
            jest reprezentowana przez osobne pole. Gracz musi odgadnąc ukryty
            wyraz poprzez wskazywanie pojedyńczych liter. Liczba ruchów gracza
            jest ograniczona.
            <br />
            Sequence game - na ekranie zostaje wyświetlona sekwencja
            ponumerowanych pól. Zadaniem gracza jest powtórzenie wzoru po tym,
            gdy zniknie z ekranu. Do przejścia jest 13 poziomów, a z każdym
            kolejnym ilośc pól do zapamiętania rośnie.
          </project-header>

          <div class="row project-images-container">
            <div class="project-images mini-games-app-images">
              <div
                v-for="(image, index) in projects[1].images"
                :key="index"
                class="project-images-item"
                @click="showImageModal(projects[1].images, index)"
              >
                <div class="project-images-item-img">
                  <img :src="require(`../assets/${image.src}`)" />
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="project-images-item-icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
                    />
                  </svg>
                </div>
                <div class="project-images-item-description">
                  {{ image.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--quiz app-->
      <div class="quiz-app" id="quizApp">
        <div class="project-container">
          <project-header
            projectName="Quiz app"
            projectLink="quiz-app"
            :technologiesArray="projects[2].technologies"
          >
            Mała aplikacja pozwalająca na rozwiązywanie kilku quizów. Każdy quiz
            to określona liczba pytań, każde z maksymalnie czterema
            odpowiedziami. Do odpowiedzi przypisana jest liczba punktów. Punkty
            wybranych odpowiedzi zostają zsumowane. Każde rozwiązanie ma
            przedział puntkowy, jeżeli suma uzyskanych punktów znajduje sie w
            tym przedziale, rozwiązanie to staje sie wynikiem końcowym.
          </project-header>
          <div class="row project-images-container">
            <div class="project-images quiz-app-images">
              <div
                v-for="(image, index) in projects[2].images"
                :key="index"
                class="project-images-item"
                @click="showImageModal(projects[2].images, index)"
              >
                <div class="project-images-item-img">
                  <img :src="require(`../assets/${image.src}`)" />
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="project-images-item-icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
                    />
                  </svg>
                </div>
                <div class="project-images-item-description">
                  {{ image.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--tablut-->
      <div class="tablut" id="tablut">
        <div class="project-container">
          <project-header
            projectName="Tablut"
            projectLink="tablut"
            :technologiesArray="projects[3].technologies"
          >
            Tablut to pochodząca z Laponii strategiczna gra planszowa dla dwóch
            graczy. Do gry służy kwadratowa plansza podzielona na 81 pól (9x9)
            oraz zestaw pionów: 16 czarnych i 9 białych, wśród których jeden,
            specjalnie oznaczony, jest zwany królem. Wszystkie piony poruszają
            się w pionie lub poziomie o dowolną liczbę pustych pól. Pion zostaje
            pojmany i usunięty z planszy, gdy przeciwnik zajmie dwa sąsiednie
            pola w rzędzie lub kolumnie. Pion może jednak bezpiecznie wejść na
            puste pole pomiędzy pionami przeciwnika. Król zostaje pojmany gdy
            jest otoczony z czterech stron przez wrogie piony albo gdy jest
            otoczony nimi z trzech stron, a czwartą jest tron – środkowe pole
            planszy. To kończy grę wygraną atakujących. Obrońcy wygrywają, gdy
            król dotrze do krawędzi planszy.
          </project-header>

          <div class="row project-images-container">
            <div class="project-images tablut-images">
              <div
                v-for="(image, index) in projects[3].images"
                :key="index"
                class="project-images-item"
                @click="showImageModal(projects[3].images, index)"
              >
                <div class="project-images-item-img">
                  <img :src="require(`../assets/${image.src}`)" />
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="project-images-item-icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
                    />
                  </svg>
                </div>
                <div class="project-images-item-description">
                  {{ image.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--temtem bot-->
      <div class="temtem-bot" id="temtemBot">
        <div class="project-container">
          <project-header
            projectName="Temtem Bot"
            projectLink="temtem-bot"
            :technologiesArray="projects[4].technologies"
          >
            Program automatyzujący niektóre fragmenty rozgrywki w grze Temtem.
            Opiera się on głównie o śledzenie tego, co dzieje się na ekranie
            poprzez obserwację koloru pojedyńczych pikseli lub robienie screenów
            ekranu w odpowiednich momentach. Screeny są analizowane (szukane są
            na nich konkretne symbole lub z ich fragmentów rozpoznawane są
            napisy), w zależnosci od wyniku analizy symulowane są ruchy myszką
            bądź kliknięcia na klawiaturze.
          </project-header>

          <div class="row project-images-container">
            <div class="project-images temtem-bot-images">
              <div
                v-for="(image, index) in projects[4].images"
                :key="index"
                class="project-images-item"
                @click="showImageModal(projects[4].images, index)"
              >
                <div class="project-images-item-img">
                  <img :src="require(`../assets/${image.src}`)" />
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="project-images-item-icon"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
                    />
                  </svg>
                </div>
                <div class="project-images-item-description">
                  {{ image.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="image-modal-transition">
        <div v-if="imageModal" class="image-modal-overlay">
          <div class="image-modal-left-arrow" @click="previousModalImage">
            <i class="fas fa-chevron-left"></i>
          </div>
          <div class="image-modal-right-arrow" @click="nextModalImage">
            <i class="fas fa-chevron-right"></i>
          </div>
          <div class="image-modal-container">
            <div class="image-modal">
              <transition :name="modalImageTransitionDirection" mode="out-in">
                <img
                  class="image-modal-img"
                  :key="modalImageIndex"
                  :src="
                    require(`../assets/${modalImagesList[modalImageIndex].src}`)
                  "
                />
              </transition>
            </div>
          </div>
          <div class="modal-hide-button-container">
            <div class="modal-hide-button" @click="hideImageModal">
              <div class="bar1"></div>
              <div class="bar2"></div>
            </div>
          </div>
          <div class="image-modal-description">
            {{ modalImagesList[modalImageIndex].description }}
          </div>
        </div>
      </transition>

      <transition name="scroll-button-transition-1">
        <div
          v-if="scrollpx >= 0.75 * windowHeight"
          class="scroll-to-top-button-container"
        >
          <div class="scroll-to-top-button" @click="scrollIntoView('projects')">
            <div class="scroll-button-arrow up first"></div>
            <div class="scroll-button-arrow up second"></div>
          </div>
        </div>
      </transition>
      <transition name="scroll-button-transition-2">
        <div
          v-if="scrollpx >= 0.75 * windowHeight"
          class="scroll-up-button-container"
        >
          <div
            class="scroll-up-button"
            @click="
              inViewProjectIndex == 0
                ? scrollIntoView('projects')
                : scrollIntoView(`${projects[inViewProjectIndex - 1].divId}`)
            "
          >
            <div class="scroll-button-arrow up "></div>
          </div>
        </div>
      </transition>
      <transition name="scroll-button-transition-3">
        <div
          v-if="scrollpx >= 0.75 * windowHeight"
          class="scroll-down-button-container"
        >
          <div
            class="scroll-down-button"
            :class="{ 'in-active': inViewProjectIndex == 4 }"
            @click="
              inViewProjectIndex < 4
                ? scrollIntoView(`${projects[inViewProjectIndex + 1].divId}`)
                : ''
            "
          >
            <div class="scroll-button-arrow down"></div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import projectHeader from "../components/projectHeader.vue";
import PageLoader from "../components/pageLoader.vue";
export default {
  name: "Projects",
  components: { projectHeader, PageLoader },
  data() {
    return {
      projects: [
        {
          name: "Food tracker",
          description:
            "Aplikacja, która pozwala na przechowywanie własnych przepisów oraz zaplanowanie tygodniowego jadłospisu.",
          divId: "foodTracker",
          images: [
            { src: "food_tracker/1.png", description: "Lista przepisów" },
            { src: "food_tracker/2.png", description: "Szczegóły przepisu" },
            { src: "food_tracker/3.png", description: "Szczegóły przepisu" },
            {
              src: "food_tracker/4.png",
              description: "Filtrowanie listy przepisów",
            },
            { src: "food_tracker/5.png", description: "Dodaj nowy przepis" },
            { src: "food_tracker/6.png", description: "Kalendarz" },
            { src: "food_tracker/7.png", description: "Lista składników" },
          ],
          technologies: [
            "JavaScript",
            "CSS3",
            "HTML5",
            "VueJS",
            "PHP",
            "MySQL",
            "Bootstrap4",
          ],
        },
        {
          name: "Mini games app",
          description:
            "Aplikacja dająca możliwość zagrania w kilka mini gier takich jak ''Memory Card Game'' czy ''Hangman''",
          divId: "miniGamesApp",
          images: [
            { src: "mini_games_app/1.png", description: "Strona główna" },
            { src: "mini_games_app/2.png", description: "Image puzzle" },
            { src: "mini_games_app/3.png", description: "Memory card game" },
            { src: "mini_games_app/4.png", description: "Hangman" },
            { src: "mini_games_app/5.png", description: "Sequence game" },
          ],
          technologies: [
            "JavaScript",
            "CSS3",
            "HTML5",
            "VueJS",
            "Sass",
            "Bootstrap4",
          ],
        },
        {
          name: "Quiz app",
          description: "Aplikacja pozwalająca na rozwiązanie kilku quizów.",
          divId: "quizApp",
          images: [
            { src: "quiz_app/1.png", description: "Strona główna" },
            { src: "quiz_app/2.png", description: "Jedno z pytań" },
            { src: "quiz_app/3.png", description: "Wynik" },
          ],
          technologies: [
            "JavaScript",
            "CSS3",
            "HTML5",
            "VueJS",
            "Sass",
            "Bootstrap4",
          ],
        },
        {
          name: "Tablut",
          description: "JavaScriptowa wersja strategicznej gry planszowej",
          divId: "tablut",
          images: [
            { src: "tablut/1.png", description: "Rozłożenie startowe" },
            { src: "tablut/2.png", description: "Rozgrywka" },
            { src: "tablut/3.png", description: "Zwycięstwo białych" },
          ],
          technologies: ["JavaScript", "KineticJS", "HTML"],
        },
        {
          name: "Temtem bot",
          description: "Bot do gry ''Temtem''",
          divId: "temtemBot",
          images: [{ src: "temtem_bot/1.png", description: "UI programu" }],
          technologies: ["C#", ".NET", "WinForms", "SQL"],
        },
      ],
      imageModal: false,
      windowWidth: "",
      windowHeight: "",
      scrollpx: 0,
      modalImagesList: "",
      modalImageIndex: "",
      modalImageTransitionDirection: "",
      loading: true,
    };
  },
  methods: {
    scrollIntoView(target) {
      var yOffset = -120;
      if (this.windowWidth <= 576) {
        yOffset = -80;
      }
      const element = document.getElementById(target);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    },
    showImageModal(images, index) {
      this.imageModal = true;
      this.modalImagesList = images;
      this.modalImageIndex = index;
    },
    previousModalImage() {
      this.modalImageTransitionDirection = "modal-image-transition-slide-right";
      if (this.modalImageIndex == 0) {
        this.modalImageIndex = this.modalImagesList.length - 1;
      } else {
        this.modalImageIndex--;
      }
    },
    nextModalImage() {
      this.modalImageTransitionDirection = "modal-image-transition-slide-left";
      if (this.modalImageIndex == this.modalImagesList.length - 1) {
        this.modalImageIndex = 0;
      } else {
        this.modalImageIndex++;
      }
    },
    hideImageModal() {
      this.imageModal = false;
      this.imageShownInModal = "";
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    handleScroll() {
      this.scrollpx = window.scrollY;
    },
  },
  computed: {
    inViewProjectIndex: function() {
      return Math.floor((this.scrollpx - 200) / (this.windowHeight - 110));
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleScroll);
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
.temtem-bot,
.tablut,
.quiz-app,
.mini-games-app,
.food-tracker,
.projects {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 110px);
}
.projects-list-container {
  width: 100%;
  margin: 0;
}
.projects-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: -25px;
  &-item {
    cursor: pointer;
    display: flex;
    opacity: 0;
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        animation: projects-list-animation
          0.75s
          0.15s *
          ($i - 1)
          forwards
          ease-out;
      }
    }
    &:hover {
      & .projects-list-item-icon {
        color: $primaryGrey;
        background: $primaryBlue;
        box-shadow: 0 0 0 3px $primaryBlue;
      }
    }
    &-icon {
      @include flex-center;
      font-size: 20px;
      font-weight: 700;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-top: 8px;
      color: white;
      background: $darkBlue;
      transition: all 0.2s ease-in-out;
      box-shadow: 0 0 0 0 $darkBlue;
    }
    &-content {
      margin-left: 2rem;
      width: calc(100% - 2rem - 50px);
    }
    &-name {
      font-size: 25px;
      font-weight: 700;
      color: $primaryGrey;
    }
    &-description {
      font-size: 20px;
      font-weight: 300;
      color: $lightGrey;
    }
  }
}
.line {
  @for $i from 1 through 14 {
    &-#{$i} {
      opacity: 0;
      width: 0;
      animation: line-animation 0.2s 0.2s + 0.2s * $i ease-out forwards;
    }
  }
}
.project-container {
  margin-top: -35px;
}
.project-images-container {
  display: flex;
  justify-content: center;
  margin: 0;
}
.project-images {
  display: grid;
  gap: 2rem;
  max-width: 100%;
  margin-top: 2rem;
  &.food-tracker-images {
    grid-template-columns: repeat(4, 1fr);
  }
  &.mini-games-app-images {
    grid-template-columns: repeat(5, 1fr);
  }
  &.quiz-app-images {
    grid-template-columns: repeat(4, 1fr);
  }
  &.tablut-images {
    grid-template-columns: repeat(5, 1fr);
  }
  &.temtem-bot-images {
    grid-template-columns: repeat(4, 1fr);
  }
  &-item {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    overflow: hidden;
    position: relative;
    cursor: pointer;
    padding: 10px;
    background-color: rgb(245, 245, 245);

    &-img {
      position: relative;
      border: 1px solid rgb(200, 200, 200);
      & img {
        width: 100%;
        object-fit: cover;
      }
      &::after {
        @include flex-center;
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba($darkBlue, 0.95);
        transition: all 0.2s ease-in-out;
        opacity: 0;
        z-index: 3;
      }
    }
    &-description {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      padding: 12px 10px 0px 10px;
      font-size: 16px;
      font-weight: 400;
      color: rgb(140, 140, 140);
      background-color: rgb(245, 245, 245);
      z-index: 2;
    }
    &-icon {
      position: absolute;
      left: calc(50% - 30px);
      top: calc(50% - 30px);
      width: 60px;
      height: 60px;
      fill: white;
      z-index: 4;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      transform: translateY(25%);
    }
    &:hover {
      & .project-images-item-img::after {
        opacity: 1;
      }
      & .project-images-item-icon {
        opacity: 1;
        transform: translateY(0%);
      }
    }
  }
}

@media (orientation: landscape) {
  .image-modal-overlay {
    & .image-modal-container {
      max-width: 84vw;
      height: 68vh;
    }
  }
}
@media (orientation: portrait) {
  .image-modal-overlay {
    & .image-modal-container {
      width: 84vw;
      max-height: 68vh;
    }
  }
}
.image-modal-overlay {
  @include flex-center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  & .image-modal-right-arrow,
  & .image-modal-left-arrow {
    @include flex-center;
    position: absolute;
    height: 100%;
    width: 4vw;
    color: rgba($darkBlue, 0.4);
    font-size: 6vw;
    z-index: 1;
    cursor: pointer;
    &:hover {
      color: rgba($primaryBlue, 0.6);
    }
  }
  & .image-modal-left-arrow {
    left: 2vw;
  }
  & .image-modal-right-arrow {
    right: 2vw;
  }
  & .image-modal-container {
    & .image-modal {
      @include flex-center;
      opacity: 0;
      animation: image-modal-animation 0.25s ease-out forwards;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      &-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        border: 1px solid $primaryGrey;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
      }
    }
  }
  & .modal-hide-button-container {
    position: absolute;
    top: 3vh;
    left: calc(50% - 5vh);
    & .modal-hide-button {
      @include flex-center;
      position: relative;
      width: 10vh;
      height: 10vh;
      max-height: 120px;
      max-width: 120px;
      border-radius: 50%;
      background-color: rgba($darkBlue, 0.4);
      cursor: pointer;
      transition: background-color 0.2s ease-in-out color 0.4s ease-in-out;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
      & .bar1,
      & .bar2 {
        position: absolute;
        width: 60%;
        height: 2px;
        background-color: white;
        transition: all 0.4s ease-in-out;
      }
      & .bar1 {
        transform: rotate(45deg);
      }
      & .bar2 {
        transform: rotate(-45deg);
      }
      &:hover {
        background-color: rgba($primaryBlue, 0.6);
        & .bar1,
        & .bar2 {
          background-color: $primaryGrey;
        }
        & .bar1 {
          transform: rotate(225deg);
        }
        & .bar2 {
          transform: rotate(135deg);
        }
      }
    }
  }
  .image-modal-description {
    position: absolute;
    @include flex-center;
    bottom: 3vh;
    left: calc(50% - 150px);
    width: 300px;
    height: 9vh;
    background-color: rgba($darkBlue, 0.4);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    color: white;
    font-weight: 400;
    font-size: 20px;
  }
}

.scroll-to-top-button-container {
  position: fixed;
  bottom: calc(3vw + 200px);
  right: 3vw;
  z-index: 5;
}
.scroll-up-button-container {
  position: fixed;
  bottom: calc(3vw + 80px);
  right: 3vw;
  z-index: 5;
}
.scroll-down-button-container {
  position: fixed;
  bottom: 3vw;
  right: 3vw;
  z-index: 5;
}
.scroll-to-top-button,
.scroll-up-button,
.scroll-down-button {
  @include flex-center;
  position: relative;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3),
    inset 0px 0px 0px 3px $darkBlue;
  transition: all 0.2s ease-in-out;
  &.in-active {
    pointer-events: none;
    box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.3),
      inset 0px 0px 0px 3px $lightGrey;
    & .scroll-button-arrow {
      &.down {
        top: -2px;
        border-bottom: 3px solid $lightGrey;
        border-right: 3px solid $lightGrey;
      }
    }
  }

  & .scroll-button-arrow {
    height: 40%;
    width: 40%;
    position: relative;
    transition: all 0.2s ease-in-out;
    transform: rotate(45deg);
    &.up {
      border-top: 3px solid $darkBlue;
      border-left: 3px solid $darkBlue;
      top: 6px;
      &.first {
        position: absolute;
        left: 30%;
        top: 30%;
      }
      &.second {
        position: absolute;
        left: 30%;
        top: 50%;
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
    & .scroll-button-arrow {
      border-color: $primaryGrey;
    }
  }
}

@keyframes line-animation {
  0% {
    transform: translateY(-2%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
@keyframes projects-list-animation {
  0% {
    opacity: 0;
    transform: translateX(25%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}
@keyframes image-modal-animation {
  0% {
    opacity: 0;
    transform: scale(0.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.image-modal-transition {
  &-enter {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
  &-enter-active {
    transition: all 0.2s ease-in-out;
  }
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }
}
@for $i from 1 through 3 {
  .scroll-button-transition-#{$i} {
    &-enter {
      transform: translateY(-100%);
      opacity: 0;
    }
    &-leave-to {
      transform: translateY(100%);
      opacity: 0;
    }
    &-enter-active {
      transition: all 0.4s 0.15s * (3 - $i) ease-in-out;
    }
    &-leave-active {
      transition: all 0.4s ease-in-out;
    }
  }
}

.modal-image-transition-slide-left {
  &-enter {
    transform: translateX(200%);
  }
  &-leave-to {
    transform: translateX(-200%);
  }
  &-enter-active {
    transition: all 0.2s ease-in-out;
  }
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }
}
.modal-image-transition-slide-right {
  &-enter {
    transform: translateX(-100vw);
  }
  &-leave-to {
    transform: translateX(100vw);
  }
  &-enter-active {
    transition: all 0.2s ease-in-out;
  }
  &-leave-active {
    transition: all 0.2s ease-in-out;
  }
}

@media (max-width: 1200px) {
  .projects-list {
    margin-top: 2rem;
    &-item {
      user-select: none;
    }
  }
  .project-container {
    margin-top: 0px;
  }
  .project-images {
    &.food-tracker-images {
      grid-template-columns: repeat(3, 1fr);
    }
    &.mini-games-app-images {
      grid-template-columns: repeat(4, 1fr);
    }
    &.quiz-app-images {
      grid-template-columns: repeat(3, 1fr);
    }
    &.tablut-images {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  .temtem-bot,
  .tablut,
  .quiz-app,
  .mini-games-app,
  .food-tracker,
  .projects {
    min-height: unset;
    margin-bottom: 3rem;
  }
  .scroll-to-top-button-container {
    bottom: 3vw;
    right: 3vw;
  }
  .scroll-up-button-container {
    display: none;
  }
  .scroll-down-button-container {
    display: none;
  }
}
@media (max-width: 992px) {
  .project-images {
    &.food-tracker-images {
      grid-template-columns: repeat(2, 1fr);
    }
    &.mini-games-app-images {
      grid-template-columns: repeat(3, 1fr);
    }
    &.tablut-images {
      grid-template-columns: repeat(3, 1fr);
    }
    &.temtem-bot-images {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
@media (max-width: 768px) {
  .project-images {
    &.mini-games-app-images {
      grid-template-columns: repeat(2, 1fr);
    }
    &.quiz-app-images {
      grid-template-columns: repeat(2, 1fr);
    }
    &.tablut-images {
      grid-template-columns: repeat(2, 1fr);
    }
    &.temtem-bot-images {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media (max-width: 576px) {
  .projects-list {
    margin-top: 1rem;
    gap: 1rem;
    &-item {
      &-content {
        margin-left: 1rem;
        width: calc(100% - 1rem - 50px);
      }
    }
  }
  .temtem-bot,
  .tablut,
  .quiz-app,
  .mini-games-app,
  .food-tracker,
  .projects {
    min-height: unset;
  }
  .project-images {
    gap: 1rem;
    margin-top: 1rem;
    &.food-tracker-images {
      grid-template-columns: repeat(1, 1fr);
    }
    &.mini-games-app-images {
      grid-template-columns: repeat(1, 1fr);
    }
    &.quiz-app-images {
      grid-template-columns: repeat(1, 1fr);
    }
    &.tablut-images {
      grid-template-columns: repeat(1, 1fr);
    }
    &.temtem-bot-images {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
@media (max-width: 400px) {
  .projects-list {
    &-item {
      &-content {
        width: calc(100% - 1rem - 40px);
      }
      &-icon {
        width: 40px;
        height: 40px;
      }
      &-name {
        font-size: 20px;
      }
      &-description {
        font-size: 18px;
      }
    }
  }
}

@media (max-height: 900px) {
  .projects-list {
    margin-top: 1rem;
  }
  .project-container {
    margin-top: 0;
  }
  .temtem-bot,
  .tablut,
  .quiz-app,
  .mini-games-app,
  .food-tracker,
  .projects {
    min-height: unset;
    margin-bottom: 3rem;
  }
  .scroll-to-top-button-container {
    bottom: 3vw;
    right: 3vw;
  }
  .scroll-up-button-container {
    display: none;
  }
  .scroll-down-button-container {
    display: none;
  }
}
</style>
