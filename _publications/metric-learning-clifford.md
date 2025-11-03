---
title: "Metric Learning for Clifford Group Equivariant Neural Networks"
collection: publications
category: manuscripts
permalink: /publication/metric-learning-clifford
excerpt: 'We propose a metric learning scheme to enhance Clifford Group Equivariant Neural Networks, motivated using insights from category theory to guarantee its soundness.'
date: 2024-06-17
venue: 'ICML GRaM'
paperurl: 'https://openreview.net/forum?id=4tw1U41t6Q&referrer=%5Bthe%20profile%20of%20Pietro%20Lio%5D(%2Fprofile%3Fid%3D~Pietro_Lio1)'
citation: 'Riccardo Ali*, Paulina Kulytė*, Haitz Sáez de Ocáriz Borde, Pietro Liò'
---

Clifford Group Equivariant Neural Networks (CGENNs) leverage Clifford algebras and multivectors as an alternative approach to incorporating group equivariance to ensure symmetry constraints in neural representations. In principle, this formulation generalizes to orthogonal groups and preserves equivariance regardless of the metric signature. However, previous works have restricted internal network representations to Euclidean or Minkowski (pseudo-)metrics, handpicked depending on the problem at hand. In this work, we propose an alternative method that enables the metric to be learned in a data-driven fashion, allowing the CGENN network to learn more flexible representations. Specifically, we populate metric matrices fully, ensuring they are symmetric by construction, and leverage eigenvalue decomposition to integrate this additional learnable component into the original CGENN formulation in a principled manner. Additionally, we motivate our method using insights from category theory, which enables us to explain Clifford algebras as a categorical construction and guarantee the mathematical soundness of our approach. We validate our method in various tasks and showcase the advantages of learning more flexible latent metric representations. The code and data are available [here](https://github.com/rick-ali/Metric-Learning-for-CGENNs).
