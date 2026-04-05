import type { NextConfig } from "next";
import path from "path";


const root_dir = path.join(__dirname, '..');

const nextConfig: NextConfig = {
  turbopack:{
    root: root_dir,
    resolveAlias: {
      '@': '*',
    },
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    rules: {
      '*.svg': [
        {
          condition: 'browser',
          loaders: [
            {
              loader: '@svgr/webpack',
              options:{
                icon: true,
              }
            }
          ],
          as: '*.ts',
        },
      ]
    }
  },
  typescript:{
    ignoreBuildErrors: false,
    tsconfigPath: 'tsconfig.json'
  }
};

export default nextConfig;
