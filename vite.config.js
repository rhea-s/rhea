import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'your-repo-name' with the name of your GitHub repository.
  // For example, if your repo URL is https://github.com/rhea-s/my-resume,
  // then the base should be '/my-resume/'.
  base: '/your-repo-name/', 
})
