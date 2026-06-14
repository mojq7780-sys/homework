export interface Structure {
  id: number;
  nameCN: string;
  nameEN: string;
  shortDesc: string;
  principle: string;
  image: string;
}

export const structures: Structure[] = [
  {
    id: 1,
    nameCN: '内凹蜂窝结构',
    nameEN: 'Re-entrant Honeycomb',
    shortDesc: '蜂巢壁向内弯曲——拉它时，材料反而膨胀',
    principle:
      '自然界中正常的蜂巢壁是直的或微向外凸。内凹六边形结构把所有蜂巢壁做成向内弯曲的弧形——拉它时，内凹的壁被拉向外翻，导致垂直于拉力方向反而膨胀。这是负泊松比最直观的几何机制。',
    image: 'images/objects/物一.png',
  },
  {
    id: 2,
    nameCN: '手性结构',
    nameEN: 'Chiral Structure',
    shortDesc: '螺旋丝线将拉力转化为侧向膨胀',
    principle:
      '手性结构由具有特定手性（左旋或右旋）的丝线周期性排列构成。当施加拉力时，丝线的手性旋转将拉力转化为侧向膨胀——材料不是变窄，而是变宽。手性方向决定了变形方向，且手性是不可逆的。',
    image: 'images/objects/物二.png',
  },
  {
    id: 3,
    nameCN: '旋转刚性单元结构',
    nameEN: 'Rotating Rigid Units',
    shortDesc: '刚体本身不变形，但铰链旋转使整体膨胀',
    principle:
      '由刚性多边形单元通过铰链在顶点处连接而成的网格。当材料被压缩时，铰链发生旋转——刚性单元本身不形变，但它们的旋转导致整个结构在一个方向被压缩的同时，在垂直方向上膨胀。刚性 + 旋转 = 柔性的宏观行为。',
    image: 'images/objects/物三 (2).png',
  },
  {
    id: 4,
    nameCN: '折纸与剪纸启发结构',
    nameEN: 'Origami & Kirigami Inspired',
    shortDesc: '精确的折叠使薄片在拉伸时厚度膨胀',
    principle:
      '通过在薄片上引入周期性的山折与谷折，构造出在拉伸时向Z轴方向膨胀的机制。经典的三浦折叠是其最简形式——拉开它，折叠展开，整体面积增大但材料本身不变。更复杂的折纸与剪纸组合可以产生各向异性的负泊松比行为。',
    image: 'images/objects/物四 (2).png',
  },
  {
    id: 5,
    nameCN: '拉胀纺织品与编织结构',
    nameEN: 'Auxetic Textiles & Woven Structures',
    shortDesc: '特殊编织使织物受拉时变厚而非变薄',
    principle:
      '通过特定的纱线排列、编织方式或织物结构设计，使织物在受拉时沿垂直于拉力方向膨胀。常见机制包括：螺旋纱线在拉伸时旋转并推开相邻纱线、双层织物的连接纱在拉伸时将两层撑开、以及针织结构中线圈在拉力下翻转展开。这是最贴近人体的负泊松比形态。',
    image: 'images/objects/物五.png',
  },
];
