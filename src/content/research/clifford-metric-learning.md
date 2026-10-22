---
title: "Metric Learning for Clifford Group Equivariant Neural Networks"
authors: ["Riccardo Ali*", "Paulina Kulytė*", "Haitz Sáez de Ocáriz Borde", "Pietro Liò"]
year: 2024
order: 1
venue: "ICML GRaM workshop"
topic: "Geometry & equivariance"
summary: "We extend Clifford group equivariant networks to learn their latent metric from data, allowing the geometry of their representations to adapt to the task."
imageAlt: "Algorithm 1: eigendecompose the learned metric, embed and change basis, apply a Clifford network, then transform the output back."
imageCaption: "Algorithm 1: the forward pass with a learnable metric. This paper has no numbered figure; the method excerpt is used instead. Cropped from the published paper with text unchanged."
imageSource: "https://raw.githubusercontent.com/mlresearch/v251/main/assets/ali24a/ali24a.pdf#page=5"
image: /images/publications/clifford-metric-learning.webp
links:
  - label: Paper
    url: https://proceedings.mlr.press/v251/ali24a.html
  - label: PDF
    url: https://raw.githubusercontent.com/mlresearch/v251/main/assets/ali24a/ali24a.pdf
  - label: Code
    url: https://github.com/rick-ali/Metric-Learning-for-CGENNs
---

Clifford Group Equivariant Neural Networks (CGENNs) leverage Clifford algebras and multivectors as an alternative approach to incorporating group equivariance to ensure symmetry constraints in neural representations. In principle, this formulation generalizes to orthogonal groups and preserves equivariance regardless of the metric signature. However, previous works have restricted internal network representations to Euclidean or Minkowski (pseudo-)metrics, handpicked depending on the problem at hand. In this work, we propose an alternative method that enables the metric to be learned in a data-driven fashion, allowing the CGENN network to learn more flexible representations. Specifically, we populate metric matrices fully, ensuring they are symmetric by construction, and leverage eigenvalue decomposition to integrate this additional learnable component into the original CGENN formulation in a principled manner. Additionally, we motivate our method using insights from category theory, which enables us to explain Clifford algebras as a categorical construction and guarantee the mathematical soundness of our approach. We validate our method in various tasks and showcase the advantages of learning more flexible latent metric representations. The code and data are available at [https://github.com/rick-ali/Metric-Learning-for-CGENNs](https://github.com/rick-ali/Metric-Learning-for-CGENNs).
