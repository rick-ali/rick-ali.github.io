---
title: "Let the Heads Talk: Beyond Diagonal Graph Attention"
authors: ["Riccardo Ali*", "Alessio Borgi*", "Mario Severino*", "Alessio Gravina", "Davide Bacciu", "Pietro Liò", "Christopher Irwin*"]
year: 2026
venue: "arXiv preprint"
topic: "Graph learning & attention"
featured: true
order: 1
summary: "We connect matrix-valued transport in sheaf networks to communication between attention heads, motivating a graph attention mechanism that learns how heads interact along each edge."
image: /images/publications/let-the-heads-talk.webp
imageAlt: "Three graph diagrams compare convolutional scalar weights, diagonal multi-head attention, and cross-head transport in Topological Attention."
imageCaption: "Figure 1: from scalar weighting to matrix-valued transport. Cropped from the paper; colours and labels are unchanged."
imageSource: "https://arxiv.org/pdf/2610.01494v1#page=2"
links:
  - label: Paper
    url: https://arxiv.org/abs/2610.01494
  - label: PDF
    url: https://arxiv.org/pdf/2610.01494
---

Sheaf Neural Networks generalize scalar-weighted message passing by replacing scalar edge weights with linear transport maps between local feature spaces. Yet the role of this matrix-valued transport is entangled with the broader sheaf-diffusion construction. We isolate the transport primitive through quiver representations and establish a direct connection with multi-head attention. Treating attention heads as coordinates of a local transport space reveals that standard multi-head attention implements diagonal edge maps: along each directed interaction, a source head can contribute only to the corresponding receiver head. Allowing off-diagonal entries instead enables edge-conditioned communication across heads before neighborhood aggregation. We show that this operation cannot, in general, be absorbed into a single shared linear map applied after aggregation. Building on this characterization, we introduce Topological Attention (Top-A), a multi-head attention that learns edge-dependent off-diagonal routes while preserving the original same-head paths and exactly recovering vanilla attention when the additional routing vanishes. We evaluate Top-A on relational reasoning, heterogeneous graph learning, and algorithmic reasoning, including out-of-distribution generalization, with heterophilic node classification as a contrast setting. The results show that cross-head transport is most useful when the task benefits from interaction-dependent transformations, while heterophily alone provides no systematic advantage. These findings identify edge-conditioned cross-head communication as a distinct computational primitive of matrix-valued transport.
