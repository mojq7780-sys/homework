export interface Hotspot {
  time: number; // seconds
  title: string;
  description: string;
  type: 'concept' | 'structure' | 'narrative';
  structureId?: number; // 1-5 for structure hotspots
}

export const hotspots: Hotspot[] = [
  {
    time: 4,
    title: '什么是泊松比？',
    description:
      '泊松比（Poisson\'s ratio）是材料力学的基本参数，描述材料在受力时横向变形与纵向变形的比值。普通材料受拉时横向收缩（泊松比为正），而负泊松比材料受拉时反而横向膨胀——这正是"受拉而扩"的物理本质。',
    type: 'concept',
  },
  {
    time: 9,
    title: '石碑：常法与异材',
    description: '碑文宣告"常法"——受拉则缩、受挤则胀——以及逆而行之的"异材"的存在。泊松比为负。',
    type: 'concept',
  },
  {
    time: 12,
    title: '纤维结节网络',
    description: '数百根纤维纵横交错形成三维网络，拉伸时结节间纤维滑动重排产生侧向膨胀——最接近生物组织的负泊松比机制。',
    type: 'structure',
    structureId: 5,
  },
  {
    time: 14,
    title: '折纸与剪纸启发结构',
    description: '精确的山折与谷折使薄片在拉伸时沿Z轴膨胀。纸的"表观厚度"可以增加数倍。',
    type: 'structure',
    structureId: 4,
  },
  {
    time: 15,
    title: '旋转刚性单元结构',
    description: '刚性多面体通过链连接。压缩时铰链旋转，刚体不变形，但整体结构在垂直方向膨胀。',
    type: 'structure',
    structureId: 3,
  },
  {
    time: 17,
    title: '手性结构',
    description: '螺旋丝线周期性排列，拉力转化为侧向膨胀。手性方向不可逆——左旋永远是左旋。',
    type: 'structure',
    structureId: 2,
  },
  {
    time: 22,
    title: '内凹蜂窝结构',
    description: '蜂巢壁向内弯曲——拉伸时，内凹的壁被拉向外翻，材料在垂直方向反而膨胀。',
    type: 'structure',
    structureId: 1,
  },
];
