import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Tugas-TugasKelas10/',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        note: 'note.html'
      }
    }
  }
})
