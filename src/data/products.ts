export type ProductStat = {
  percent: number;
  label: string;
};

export type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
  stats?: ProductStat[];
};

export const products: Product[] = [
  {
    name: "GLP-X3",
    description:
      "GLP-X3 is described in the source as an advanced injectable medicine being studied for",
    price: "DHS. 2,200.00",
    image: "/assets/99c8a.png",
    stats: [{ percent: 72, label: "Energy-balance protocol fit" }],
  },
  {
    name: "Glow",
    description:
      "A three-peptide formula combining GHK-Cu, BPC-157 and TB-500 for skin-quality, collagen-signalling and recovery-focused protocols.",
    price: "DHS. 1,099.00",
    image: "/assets/66c06.png",
  },
  {
    name: "Wolverine",
    description:
      "A two-peptide formula combining BPC-157 and TB-500 for muscle, tendon, ligament and recovery-focused protocols.",
    price: "DHS. 699.00",
    image: "/assets/c2f16.png",
    stats: [
      { percent: 90, label: "Recovery protocol fit" },
      { percent: 84, label: "Tissue-support focus" },
    ],
  },
  {
    name: "KISSpeptin 10-acetate",
    description:
      "A hormone-axis focused peptide designed for advanced vitality, reproductive wellness, and performance-optimisation protocol categories.",
    price: "DHS. 649.00",
    image: "/assets/8e069.png",
    stats: [{ percent: 90, label: "Hormone-axis focus" }],
  },
  {
    name: "Semax",
    description:
      "A cognitive-performance peptide for focus, clarity, and neuro-performance protocol categories.",
    price: "DHS. 720.00",
    image: "/assets/f1f75.png",
    stats: [
      { percent: 82, label: "Focus protocol fit" },
      { percent: 79, label: "Mental clarity focus" },
    ],
  },
  {
    name: "Selank",
    description:
      "A calm-focus peptide for cognitive wellness, stress-response, and daytime optimisation protocols.",
    price: "DHS. 660.00",
    image: "/assets/b907f.png",
    stats: [
      { percent: 84, label: "Calm-focus support" },
      { percent: 78, label: "Cognitive protocol fit" },
    ],
  },
];
