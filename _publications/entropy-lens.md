---
title: "Entropy-Lens: The Information Signature of Transformer Computations"
collection: publications
category: manuscripts
permalink: /publication/entropy-lens
excerpt: 'We track the Shannon entropy of intermediate predictions in transformers and use them to uncover consistent computational patterns.'
date: 2025-02-23
venue: 'arXiv'
paperurl: 'https://arxiv.org/abs/2502.16570'
citation: 'Riccardo Ali*, Francesco Caso*, Christopher Irwin*, Pietro Liò'
---

Transformer models map input token sequences to output token distributions, layer by layer. While most interpretability work focuses on internal latent representations, we study the evolution of these token-level distributions directly in vocabulary space. However, such distributions are high-dimensional and defined on an unordered support, making common descriptors like moments or cumulants ill-suited. We address this by computing the Shannon entropy of each intermediate predicted distribution, yielding one interpretable scalar per layer. The resulting sequence, the entropy profile, serves as a compact, information-theoretic signature of the model's computation. We introduce Entropy-Lens, a model-agnostic framework that extracts entropy profiles from frozen, off-the-shelf transformers. We show that these profiles (i) reveal family-specific computation patterns invariant under depth rescaling, (ii) are predictive of prompt type and task format, and (iii) correlate with output correctness. We further show that Rényi entropies yield similar results within a broad range of  values, justifying the use of Shannon entropy as a stable and principled summary. Our results hold across different transformers, without requiring gradients, fine-tuning, or access to model internals.

