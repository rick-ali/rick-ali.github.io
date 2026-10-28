---
title: "Entropy-Lens: Uncovering Decision Strategies in LLMs"
authors: ["Riccardo Ali*", "Francesco Caso*", "Christopher Irwin*", "Pietro Liò"]
year: 2026
venue: "ICLR Scientific Methods for Understanding Deep Learning Workshop"
topic: "Information & interpretability"
featured: true
order: 5
summary: "Layer-by-layer entropy of token predictions reveals how LLMs expand and prune candidate continuations, with patterns specific to model families and tasks."
imageAlt: "Entropy-Lens pipeline showing residual-stream projections, entropy computation, profile extraction, aggregation, and classification."
imageCaption: "Figure 2: the Entropy-Lens pipeline. Cropped from the paper; colours and labels are unchanged. Ali, Caso, Irwin and Liò, CC BY-SA 4.0."
imageSource: "https://arxiv.org/pdf/2502.16570v3#page=4"
image: /images/publications/entropy-lens.webp
links:
  - label: Paper
    url: https://arxiv.org/abs/2502.16570
  - label: PDF
    url: https://arxiv.org/pdf/2502.16570
  - label: Code
    url: https://github.com/christopher-irw/Entropy-Lens
---

In large language models (LLMs), each block operates on the residual stream to map input token sequences to output token distributions. However, most of the interpretability literature focuses on internal latent representations, leaving token-space dynamics underexplored. The high dimensionality and categoricity of token distributions hinder their analysis, as standard statistical descriptors are not suitable. We show that the entropy of logit-lens predictions overcomes these issues. In doing so, it provides a per-layer scalar, permutation-invariant metric. We introduce Entropy-Lens to distill the token-space dynamics of the residual stream into a low-dimensional signal. We call this signal the entropy profile. 

We apply our method to a variety of model sizes and families, showing that (i) entropy profiles uncover token prediction dynamics driven by expansion and pruning strategies; (ii) these dynamics are family-specific and invariant under depth rescaling; (iii) they are characteristic of task type and output format; (iv) these strategies have unequal impact on downstream performance, with the expansion strategy usually being more critical. Ultimately, our findings further enhance our understanding of the residual stream, enabling a granular assessment of how information is processed across model depth.
