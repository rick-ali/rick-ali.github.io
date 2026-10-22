---
title: "Remember to Forget: Gated Adaptive Positional Encoding"
authors: ["Riccardo Ali*", "Alessio Borgi*", "Mario Severino*", "Pietro Liò", "Christopher Irwin*"]
year: 2026
venue: "arXiv preprint"
topic: "Language models & long context"
featured: true
order: 2
summary: "We introduce GAPE, a mask that augments positional encodings with two mechanisms: one suppresses irrelevant distant context, while the other protects important tokens from that suppression."
image: /images/publications/remember-to-forget.webp
imageAlt: "GAPE diagram showing how a query gate contracts the effective context while a landmark gate protects a distant token from suppression."
imageCaption: "Figure 1: Gated Adaptive Positional Encoding. Cropped from the revised paper; colours and labels are unchanged."
imageSource: "https://arxiv.org/pdf/2605.10414v2#page=3"
links:
  - label: Paper
    url: https://arxiv.org/abs/2605.10414
  - label: PDF
    url: https://arxiv.org/pdf/2605.10414
---

Rotary Positional Encoding (RoPE) is widely used in modern large language models. However, when sequences are extended beyond the range seen during training, rotary phases can enter out-of-distribution regimes, leading to spurious long-range alignments, diffuse attention, and degraded retrieval. Existing remedies only partially address these failures, as they often trade local positional resolution for long-context stability. We propose GAPE (Gated Adaptive Positional Encoding), a drop-in augmentation for positional encodings that introduces a content-aware bias directly into the attention logits while preserving the rotary geometry. GAPE decouples distance-based suppression from token importance through a query-dependent gate that contracts irrelevant context and a key-dependent gate that preserves salient distant tokens. We show that weakly protected distant context is exponentially attenuated as a function of the query gate, while selected keys can remain accessible through landmark protection. We further show that GAPE can be implemented within standard scaled dot-product attention. Empirically, GAPE improves long-context robustness across controlled retrieval and language-modeling experiments, extrapolating up to 8× the training length. We further retrofit GAPE into a pretrained 7B model, maintaining performance on standard benchmarks and improving performance at the longest evaluated context. These results support adaptive context suppression as a complement to positional representation for long-context generalization.
