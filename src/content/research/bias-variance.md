---
title: "Bias/Variance is not the same as Approximation/Estimation"
authors: ["Gavin Brown", "Riccardo Ali"]
year: 2024
order: 2
venue: "TMLR"
topic: "Learning theory"
summary: "Two classical explanations of prediction error are often conflated. We establish precisely how bias–variance and approximation–estimation differ and how they connect."
imageAlt: "Diagram connecting expected risk to optimisation, estimation, approximation, and Bayes error, and relating these to variance, bias, and noise."
imageCaption: "Figure 2: the relationship between the two error decompositions. Cropped from the accepted manuscript; colours and labels are unchanged. Brown and Ali, CC BY."
imageSource: "https://pure.manchester.ac.uk/ws/portalfiles/portal/296307774/1623_bias_variance_is_not_the_same_.pdf#page=6"
image: /images/publications/bias-variance.webp
links:
  - label: Paper
    url: https://openreview.net/forum?id=4TnFbv16hK
  - label: PDF
    url: https://pure.manchester.ac.uk/ws/portalfiles/portal/296307774/1623_bias_variance_is_not_the_same_.pdf
---

We study the relation between two classical results: the bias-variance decomposition, and the approximation-estimation decomposition. Both are important conceptual tools in Machine Learning, helping us describe the nature of model fitting. It is commonly stated that they are “closely related”, or “similar in spirit”. However, sometimes it is said they are equivalent. In fact they are different, but have subtle connections cutting across learning theory, classical statistics, and information geometry, that (very surprisingly) have not been previously observed. We present several results for losses expressible as a Bregman divergence: a broad family with a known bias-variance decomposition. Discussion and future directions are presented for more general losses, including the 0/1 classification loss.
