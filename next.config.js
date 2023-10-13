/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  theme: {
    extend: {
      // Define tamaños de relleno personalizados
      padding: {
        '360px': '360px',
      },
    },
    // Define colores personalizados
    colors: {
      'Soft-Blue': 'hsl(231, 69%, 60%)',
      'Soft-Red': 'hsl(0, 94%, 66%)',
      'Grayish-Blue': 'hsl(229, 8%, 60%)',
      'Very-Dark-Blue': 'hsl(229, 31%, 21%)'
    }
  }
}
