---
title: "Algebraic Priors for Approximately Equivariant Networks"
date: "2026-04-26"
kind: "Oral presentation"
thumbnail: /images/talks/gram-iclr-2026.jpg
event: "GRaM workshop · ICLR 2026"
location: "Rio de Janeiro, Brazil"
summary: "An oral presentation of our workshop paper on algebraic priors for approximately equivariant neural networks."
links:
  - label: Paper overview
    url: /research/algebraic-priors/
  - label: Recording
    url: https://slideslive.com/39063187/algebraic-priors-for-approximately-equivariant-networks
  - label: Workshop
    url: https://gram-workshop.github.io/
---

Oral presentation of *Algebraic Priors for Approximately Equivariant Networks*, joint work with Pietro Liò and Jamie Vicary, at the Geometry-grounded Representation Learning and Generative Modeling (GRaM) workshop at ICLR 2026.

The talk was part of the workshop's contributed talks session on 26 April 2026.

<figure class="talk-photo">
  <img src="/images/talks/gram-iclr-2026.jpg" alt="A view from the audience of Riccardo Ali presenting Algebraic Priors for Approximately Equivariant Networks at the GRaM workshop at ICLR 2026." width="1600" height="1200" loading="lazy" />
</figure>

## Paper abstract

Equivariant neural networks incorporate symmetries through group actions, embedding them as an inductive bias to improve performance. Existing methods learn an equivariant action on the latent space, or design architectures that are equivariant by construction. These approaches often deliver strong empirical results but can involve architecture-specific constraints, large parameter counts, and high computational cost. We challenge the paradigm of complex equivariant architectures with a parameter-free approach grounded in group representation theory. We prove that for an equivariant encoder over a finite group, the latent space must almost surely contain one copy of its regular representation for each linearly independent data orbit, which we explore with a number of empirical studies. Leveraging this foundational algebraic insight, we impose the group’s regular representation as an inductive bias via an auxiliary loss, adding no learnable parameters. Our extensive evaluation shows that this method matches or outperforms specialized models in several cases, even those for infinite groups. We further validate our choice of the regular representation through an ablation study, showing it consistently outperforms defining and trivial group representation baselines.

