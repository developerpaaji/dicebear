import type {
  ComponentGroup,
  ComponentPickCollection,
  ColorPickCollection,
} from '../static-types';

export const eyebrows: ComponentGroup = {
  angryNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M44.1 17.12ZM19.27 5.01a7.16 7.16 0 0 0-6.42 2.43c-.6.73-1.56 2.48-1.51 3.42.02.35.22.37 1.12.59 1.65.39 4.5-1.12 6.36-.98 2.58.2 5.04 1.4 7.28 2.68 3.84 2.2 8.35 6.84 13.1 6.6.35-.02 5.41-1.74 4.4-2.72-.31-.49-3.03-1.13-3.5-1.36-2.17-1.09-4.37-2.45-6.44-3.72C29.14 9.18 24.72 5.6 19.28 5ZM68.03 17.12ZM92.91 5.01c2.36-.27 4.85.5 6.42 2.43.6.73 1.56 2.48 1.51 3.42-.02.35-.22.37-1.12.59-1.65.39-4.5-1.12-6.36-.98-2.58.2-5.04 1.4-7.28 2.68-3.84 2.2-8.35 6.84-13.1 6.6-.35-.02-5.41-1.74-4.4-2.72.31-.49 3.03-1.13 3.5-1.36 2.17-1.09 4.36-2.45 6.44-3.72C83.05 9.18 87.46 5.6 92.91 5Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  defaultNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M26.55 6.15c-5.8.27-15.2 4.49-14.96 10.34.01.18.3.27.43.12 2.76-2.96 22.32-5.95 29.2-4.36.64.14 1.12-.48.72-.93-3.43-3.85-10.2-5.43-15.4-5.18ZM86.45 6.15c5.8.27 15.2 4.49 14.96 10.34-.01.18-.3.27-.43.12-2.76-2.96-22.32-5.95-29.2-4.36-.64.14-1.12-.48-.72-.93 3.43-3.85 10.2-5.43 15.4-5.18Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  flatNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M38.66 11.1c-5 .35-9.92.08-14.92-.13-3.83-.16-7.72-.68-11.37 1.01-.7.32-4.53 2.28-4.44 3.35.07.85 3.93 2.2 4.63 2.44 3.67 1.29 7.18.9 10.95.66 4.64-.27 9.25-.07 13.87-.2 3.12-.1 7.92-.63 9.46-4.4.46-1.14.1-3.42-.36-4.66-.19-.5-.72-.69-1.13-.4a15.04 15.04 0 0 1-6.68 2.32ZM73.34 11.1c5 .35 9.92.08 14.92-.13 3.83-.16 7.72-.68 11.37 1.01.7.32 4.53 2.28 4.44 3.35-.07.85-3.93 2.2-4.63 2.44-3.67 1.29-7.18.9-10.95.66-4.63-.27-9.24-.07-13.86-.2-3.12-.1-7.92-.63-9.46-4.4-.46-1.14-.1-3.42.36-4.66.18-.5.72-.69 1.13-.4a15.04 15.04 0 0 0 6.68 2.32Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  frownNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M36.37 6.88c-1.97 2.9-5.55 4.64-8.74 5.68-3.94 1.29-18.55 3.38-15.11 11.35.05.12.22.12.27 0 1.15-2.65 17.47-5.12 18.97-5.7 4.45-1.71 8.4-5.5 9.17-10.55.35-2.31-.64-6.05-1.55-7.55-.11-.18-.37-.13-.43.07-.36 1.33-1.41 4.97-2.58 6.7ZM75.63 6.88c1.97 2.9 5.55 4.64 8.74 5.68 3.94 1.29 18.55 3.38 15.11 11.35a.15.15 0 0 1-.27 0c-1.15-2.65-17.47-5.12-18.97-5.7-4.45-1.71-8.4-5.5-9.17-10.55-.35-2.31.64-6.05 1.55-7.55.11-.18.37-.13.43.07.36 1.33 1.41 4.97 2.58 6.7Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  raisedExcitedNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="m22.77 1.58.9-.4C28.93-.91 36.88-.03 41.73 2.3c.57.27.18 1.15-.4 1.1-14.92-1.14-24.96 8.15-28.37 14.45-.1.18-.41.2-.49.03-2.3-5.32 4.45-13.98 10.3-16.3ZM89.23 1.58l-.9-.4C83.07-.91 75.12-.03 70.27 2.3c-.57.27-.18 1.15.4 1.1 14.92-1.14 24.96 8.15 28.37 14.45.1.18.41.2.49.03 2.3-5.32-4.45-13.98-10.3-16.3Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  sadConcernedNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="m31.23 20.42-.9.4c-5.25 2.09-13.2 1.21-18.05-1.12-.57-.27-.18-1.15.4-1.1 14.92 1.14 24.96-8.15 28.37-14.45.1-.18.41-.2.49-.03 2.3 5.32-4.45 13.98-10.3 16.3ZM80.77 20.42l.9.4c5.25 2.09 13.2 1.21 18.05-1.12.57-.27.18-1.15-.4-1.1-14.92 1.14-24.96-8.15-28.37-14.45-.1-.18-.41-.2-.49-.03-2.3 5.32 4.45 13.98 10.3 16.3Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  unibrowNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <g fill-rule="evenodd" clip-rule="evenodd" fill="#DADADA">
    <path d="M57 12.82ZM96.12 7.6c1.46.56 9.19 6.43 7.86 9.16a.8.8 0 0 1-1.29.22 10.63 10.63 0 0 0-1.7-1.19c-5.1-2.84-11.3-1.93-16.73-.91-6.12 1.14-12.11 3.48-18.39 2.67-2.04-.26-6.08-1.22-7.63-2.96-.47-.53-.06-1.38.64-1.43 1.44-.11 2.86-.86 4.33-1.28 3.65-1.03 7.4-1.56 11.11-2.29 6.62-1.3 15.17-4.53 21.8-2Z"/>
    <path d="M58.76 12.76c-1.17.04-2.8 3.56-.56 3.68 2.23.11 1.73-3.72.56-3.68ZM55 12.8c0-.01 0-.01 0 0ZM15.88 7.56c-1.46.56-9.19 6.43-7.86 9.16.24.5.89.6 1.29.22.55-.52 1.58-1.11 1.71-1.18 5.1-2.84 11.3-1.93 16.73-.91 6.12 1.14 12.11 3.48 18.39 2.67 2.04-.26 6.08-1.22 7.63-2.96.47-.53.06-1.38-.64-1.43-1.44-.11-2.86-.86-4.33-1.28-3.65-1.03-7.4-1.56-11.11-2.29-6.62-1.3-15.17-4.53-21.8-2Z"/>
    <path d="M54.97 11.79c1.17.04 2.77 4.5.53 4.67-2.24.18-1.7-4.71-.53-4.67Z"/>
  </g>
`,
  upDownNatural: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="m22.77 1.58.9-.4C28.93-.91 36.88-.03 41.73 2.3c.57.27.18 1.15-.4 1.1-14.92-1.14-24.96 8.15-28.37 14.45-.1.18-.41.2-.49.03-2.3-5.32 4.45-13.98 10.3-16.3ZM87 12.07c5.75.77 14.74 5.8 13.99 11.6-.03.2-.31.26-.44.1-2.49-3.2-21.71-7.87-28.71-6.9-.64.1-1.07-.57-.63-.98 3.75-3.54 10.62-4.52 15.78-3.82Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>
`,
  angry: (components: ComponentPickCollection, colors: ColorPickCollection) => `
  <path d="M15.61 15.18c4.24-5.76 6.88-5.48 13.31-.62l.67.5C34.41 18.73 36.7 20 40 20a2 2 0 1 0 0-4c-2.07 0-3.9-1.02-7.99-4.12l-.68-.52C27.57 8.53 25.37 7.3 22.63 7c-3.68-.4-7.05 1.48-10.24 5.83a2 2 0 1 0 3.22 2.36ZM96.39 15.18c-4.24-5.76-6.88-5.48-13.31-.62l-.67.5C77.58 18.73 75.29 20 72 20a2 2 0 1 1 0-4c2.07 0 3.9-1.02 7.99-4.12l.68-.52c3.76-2.83 5.96-4.07 8.7-4.37 3.68-.4 7.05 1.48 10.24 5.83a2 2 0 1 1-3.22 2.36Z" fill="#000" fill-opacity=".6"/>
`,
  default: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M15.63 17.16c3.92-5.51 14.65-8.6 23.9-6.33a2 2 0 1 0 .95-3.88c-10.74-2.64-23.17.94-28.11 7.9a2 2 0 0 0 3.26 2.3ZM96.37 17.16c-3.91-5.51-14.65-8.6-23.9-6.33a2 2 0 1 1-.95-3.88c10.74-2.64 23.17.94 28.11 7.9a2 2 0 0 1-3.26 2.3Z" fill="#000" fill-opacity=".6"/>
`,
  raisedExcited: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M15.98 17.13C17.48 7.6 30.06 1.1 39.16 5.3a2 2 0 1 0 1.68-3.63c-11.5-5.3-26.9 2.66-28.82 14.84a2 2 0 0 0 3.96.63ZM96.02 17.13C94.52 7.6 81.94 1.1 72.84 5.3a2 2 0 1 1-1.68-3.63c11.5-5.3 26.9 2.66 28.82 14.84a2 2 0 0 1-3.96.63Z" fill="#000" fill-opacity=".6"/>
`,
  sadConcerned: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M38.03 5.6c-1.48 8.38-14.1 14.17-23.24 10.42a2.04 2.04 0 0 0-2.64 1c-.43.97.04 2.1 1.05 2.5 11.45 4.7 26.84-2.37 28.76-13.3a1.92 1.92 0 0 0-1.64-2.2 2 2 0 0 0-2.3 1.57ZM73.97 5.6c1.48 8.38 14.1 14.17 23.24 10.42 1.02-.41 2.2.03 2.63 1 .43.97-.04 2.1-1.05 2.5-11.44 4.7-26.84-2.37-28.76-13.3a1.92 1.92 0 0 1 1.64-2.2 2 2 0 0 1 2.3 1.57Z" fill="#000" fill-opacity=".6"/>
`,
  upDown: (
    components: ComponentPickCollection,
    colors: ColorPickCollection
  ) => `
  <path d="M15.6 14.16c4.49-6.32 14-9.5 23.75-6.36a2 2 0 1 0 1.23-3.81c-11.41-3.68-22.74.1-28.25 7.85a2 2 0 1 0 3.26 2.32ZM96.38 21.16c-3.92-5.51-14.65-8.6-23.9-6.33a2 2 0 0 1-.95-3.88c10.74-2.64 23.17.94 28.1 7.9a2 2 0 1 1-3.25 2.3Z" fill="#000" fill-opacity=".6"/>
`,
};
