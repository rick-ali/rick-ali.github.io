---
title: "Lyapunov Spectral Analysis of Loop Transformer Dynamics"
authors: ["Fynn Kiwitt", "Christopher Irwin", "Riccardo Ali", "Pietro Liò"]
year: 2026
venue: "ICML Mechanistic Interpretability workshop"
topic: "Interpretability & dynamical systems"
featured: true
order: 3
summary: "Lyapunov spectra distinguish mildly chaotic dynamics in Ouro from contracting dynamics in Huginn, tracing the difference to opposing layer contributions."
image: /images/publications/lyapunov-spectral-analysis.webp
imageAlt: "Running Lyapunov estimates across recurrent steps: Ouro remains above zero while Huginn converges to a negative exponent."
imageCaption: "Running Lyapunov estimates over 64 recurrent steps, cropped from the workshop poster’s Two Dynamical Regimes panel. Colours and labels are unchanged."
imageSource: "https://mechinterpworkshop.com/poster-pdfs/748.pdf"
links:
  - label: Paper
    url: https://openreview.net/forum?id=enDyNuSD3L
  - label: PDF
    url: https://openreview.net/pdf?id=enDyNuSD3L
  - label: Poster
    url: https://mechinterpworkshop.com/poster-pdfs/748.pdf
---

Loop Transformers iterate a shared block of layers, defining a discrete dynamical system over hidden states. Existing characterizations rely on attention or hidden-state similarity, which cannot distinguish slow convergence, marginal stability, and chaos. We compute the Lyapunov spectra of two loop transformers and find a dichotomy in dynamics: while Ouro-1.4B is mildly chaotic and rules out convergence under the measured finite-time dynamics, Huginn-0125 converges uniformly in all dimensions.

A per-sublayer attribution provides a mechanistic account of how each regime is produced. Both architectures exhibit near-cancellation between large opposing contributions of different layers, however the patterns differ significantly. Ouro distributes compression and expansion across 25 sublayers, with direction-selective late layers and direction-blind RMSNorm jointly producing a wide spectrum. Huginn concentrates the entire cancellation between the input-injection adapter and the first core block.

This supports the empirical observation that input injection encourages fixed-point convergence hinges on an architectural balance between two blocks. A measurement of the first Lyapunov exponent across 8 Huginn training checkpoints further shows the regime emerges early and remains stable. Ultimately, we establish Lyapunov spectra as a rigorous lens for characterizing the stability regimes and mechanistic behavior of loop transformers.
