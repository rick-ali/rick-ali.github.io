---
title: "Algebraic Priors for Approximately Equivariant Networks"
authors: ["Riccardo Ali", "Pietro Liò", "Jamie Vicary"]
year: 2026
venue: "ICLR GRaM workshop"
topic: "Symmetry & representation"
featured: true
order: 4
summary: "We prove that, for finite groups, equivariant latent spaces almost surely contain copies of the regular representation, then use this structure as a parameter-free algebraic prior for approximate equivariance."
imageAlt: "Two digit orbits under horizontal flips are encoded into separate copies of the regular representation in latent space."
imageCaption: "Figure 2: the algebraic structure induced by independent data orbits. Cropped from the paper; colours and labels are unchanged."
imageSource: "https://arxiv.org/pdf/2506.08244v2#page=3"
image: /images/publications/algebraic-priors.webp
links:
  - label: Paper
    url: https://proceedings.mlr.press/v326/ali26a.html
  - label: PDF
    url: https://arxiv.org/pdf/2506.08244
  - label: Code
    url: https://github.com/rick-ali/parameter-free-approximate-equivariance
---

Equivariant neural networks incorporate symmetries through group actions, embedding them as an inductive bias to improve performance. Existing methods learn an equivariant action on the latent space, or design architectures that are equivariant by construction. These approaches often deliver strong empirical results but can involve architecture-specific constraints, large parameter counts, and high computational cost. We challenge the paradigm of complex equivariant architectures with a parameter-free approach grounded in group representation theory. We prove that for an equivariant encoder over a finite group, the latent space must almost surely contain one copy of its regular representation for each linearly independent data orbit, which we explore with a number of empirical studies. Leveraging this foundational algebraic insight, we impose the group’s regular representation as an inductive bias via an auxiliary loss, adding no learnable parameters. Our extensive evaluation shows that this method matches or outperforms specialized models in several cases, even those for infinite groups. We further validate our choice of the regular representation through an ablation study, showing it consistently outperforms defining and trivial group representation baselines.
