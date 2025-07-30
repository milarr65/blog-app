# Blog — Web Dev Project

<p align="center" style="margin: 0.3rem 0;">
  MADE WITH 
  <br />
  <a href="https://vite.dev">
    <picture>
      <img src="public/vite.svg" alt="vite logo" width="30" height="30"/>
    </picture>
  </a> 
  <a href="https://daisyui.com">
    <picture>
      <img src="https://img.daisyui.com/images/daisyui/mark-static.svg" alt="daisyUI logo" width="30" height="30"/>
    </picture>
  </a> 
  <a href="https://react.dev/">
    <picture>
      <img src="public/react-2.svg" alt="daisyUI logo" width="30" height="30"/>
    </picture>
  </a> 
  <a href="https://tailwindcss.com/">
    <picture>
      <img src="public/tailwind-css-2.svg" alt="daisyUI logo" width="30" height="30"/>
    </picture>
  </a> 
</p>

This project is an assignment from the online course _"The Complete Full-Stack Web Development Bootcamp"_ led by Angela Yu. We were given full creative control and no starting code.

I decided to make this with React and Tailwind CSS since I hadn't really built a proper project with these tools before. I had a lot of fun. 😅 I used a Tailwind plugin called [daisyUI](https://daisyui.com/) to style everything. I definitely recommend it; it's pretty good and has many options available.

I also used [TipTap](https://tiptap.dev/docs) as my rich text editor. This one was a challenge not gonna lie haha~ I had a hard time setting it up and getting it to work the way I wanted. But at the end I got it to work (mostly 😅) and I'm so happy I powered through all of it.

## Features

### ✏️ **Post Creation**

Anyone can create new posts on the blog. New posts will only last three hours; after that they'll be deleted permanently.

### 🗑️ **Edit and Delete**

Users can edit and delete any existing post, not just the ones they've created. All changes will be discarded after a page refresh.

### 💡 **Post Contents**

The post editor supports rich text editing (bold, italics, code blocks, quotes, etc.). It also supports embedded media. Currently only YouTube, Spotify, SoundCloud, images and GIFs embeds are allowed.

> [!Caution]
> **You cannot upload your own files from your device. This is not allowed.**
> Since I'm not using any sort of database, I have nowhere to store user's local files.
> **_You can only upload media via URL_**

## How to run this on your computer

> [!Note]
> If you don’t already have React and Vite installed or set up, you’ll need to install them first. This project uses:
> 
> - React version 19.1.0
> - Vite version 7.0.4
>
> I also recommend using [pnpm](https://pnpm.io/) (a fast, disk space–efficient alternative to npm and yarn), since that’s what I used to manage packages in this project.
> 
> If you don’t have pnpm installed yet, you can install it globally via:
>
> 
> ```bash
> npm install -g pnpm
> ```

### 🚀 Getting Started
Follow these steps to run the project locally:

1. **Clone this repository**  
    Use Git to clone the repo to your local machine:
    ```bash
      git clone https://github.com/milaar65/blog-app.git
      cd your-repo-name
    ```

2. **Install dependencies**    
    Install all required packages. You can use either pnpm (recommended) or npm:
    ```bash
      pnpm install # or npm install
    ```
3. **Start the development server**    
    Once the dependencies are installed, run the dev sver with:
    ```bash
      pnpm dev # or npm run dev
    ```
4. **Open the app in your browser**    
    By default, Vite serves your app at http://localhost:5173. You can open this link in your browser to view the app.


