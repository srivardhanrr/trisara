import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve:{
    alias:{
      screens: '/src/screens',
      components: '/src/components',
    }
  }
})
