/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseShape, PresetImage } from './types';

export const PRESET_SHAPES: BaseShape[] = [
  {
    id: 'shape_preset',
    name: '型 (Silhouette)',
    icon: '🔮',
    type: 'svg'
  },
  {
    id: 'custom_text',
    name: 'テキスト',
    icon: '✍️',
    type: 'text'
  }
];

export const SHAPE_SUB_PRESETS = [
  {
    id: 'heart',
    name: 'ハート型',
    icon: '❤️',
    svgPath: 'M50,25 C35,5 5,10 5,42 C5,70 45,95 50,95 C55,95 95,70 95,42 C95,10 65,5 50,25 Z'
  },
  {
    id: 'star',
    name: '星型',
    icon: '⭐',
    svgPath: 'M50,5 L63,38 L98,38 L70,58 L81,91 L50,70 L19,91 L30,58 L2,38 L37,38 Z'
  },
  {
    id: 'diamond',
    name: 'ダイヤ型',
    icon: '💎',
    svgPath: 'M50,5 L95,50 L50,95 L5,50 Z'
  },
  {
    id: 'circle',
    name: '円型',
    icon: '⚪',
    svgPath: 'M50,5 A45,45 0 1,1 49.9,5 Z'
  },
  {
    id: 'triangle',
    name: '三角形',
    icon: '🔺',
    svgPath: 'M50,10 L93,90 L7,90 Z'
  },
  {
    id: 'landscape_rect',
    name: '横長長方形',
    icon: '▭',
    svgPath: 'M5,25 L95,25 L95,75 L5,75 Z'
  },
  {
    id: 'portrait_rect',
    name: '縦長長方形',
    icon: '▯',
    svgPath: 'M25,5 L75,5 L75,95 L25,95 Z'
  },
  {
    id: 'square',
    name: '正方形',
    icon: '⬛',
    svgPath: 'M10,10 L90,10 L90,90 L10,90 Z'
  }
];

// Rich set of preloaded, copyright-free high-quality images for immediate beautiful outputs
export const SAMPLE_IMAGES: PresetImage[] = [
  {
    id: 'sample-1',
    url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
    label: '山の尾根と大自然'
  },
  {
    id: 'sample-2',
    url: 'https://images.unsplash.com/photo-1472214222541-d510753a4707?auto=format&fit=crop&w=600&q=80',
    label: '夕陽に照らされる草原'
  },
  {
    id: 'sample-3',
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80',
    label: '緑豊かな山脈'
  },
  {
    id: 'sample-4',
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80',
    label: '森のなかの吊り橋'
  },
  {
    id: 'sample-5',
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80',
    label: '霧のかかる高原の朝'
  },
  {
    id: 'sample-6',
    url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
    label: '木漏れ日と青空'
  },
  {
    id: 'sample-7',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    label: '木立を抜ける光のシャワー'
  },
  {
    id: 'sample-8',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    label: '南国の白い砂浜と海'
  },
  {
    id: 'sample-9',
    url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=600&q=80',
    label: '波打ち際のサンライズ'
  },
  {
    id: 'sample-10',
    url: 'https://images.unsplash.com/photo-1500627869374-13cd993b1115?auto=format&fit=crop&w=600&q=80',
    label: 'カラフルな秋の大地'
  },
  {
    id: 'sample-11',
    url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=600&q=80',
    label: '黄金色に染まる夕暮れ'
  },
  {
    id: 'sample-12',
    url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
    label: '野生のトラのクローズアップ'
  },
  {
    id: 'sample-13',
    url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=600&q=80',
    label: '雪化粧をまとった山頂'
  },
  {
    id: 'sample-14',
    url: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80',
    label: '水滴を蓄えた若緑の葉'
  },
  {
    id: 'sample-15',
    url: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80',
    label: '小枝にとまる愛らしい小鳥'
  },
  {
    id: 'sample-16',
    url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&q=80',
    label: '静謐な森の中の滝'
  }
];
