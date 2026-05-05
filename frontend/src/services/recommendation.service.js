// getRecommendations.js

const RECOMMENDATION_TYPE = {
  SingleProduct: 'SingleProduct',
  MultipleProducts: 'MultipleProducts',
};
const DEFAULT_RECOMMENDATION_OPTIONS = {
  selectedPreferences: [],
  selectedFeatures: [],
  selectedRecommendationType: '',
};

export class RecommendationService {
  recommend(options = DEFAULT_RECOMMENDATION_OPTIONS, products) {
    const filters = new Set([
      ...(options.selectedFeatures ?? []),
      ...(options.selectedPreferences ?? []),
    ]);
    const isSingleProduct =
      options.selectedRecommendationType === RECOMMENDATION_TYPE.SingleProduct;
    const scores = this.#createMatchingScore(products, filters);
    const rank = this.#rankProducts(scores);

    return isSingleProduct ? [rank[0]] : rank;
  }

  #createMatchingScore(products, filters) {
    const scores = new Map();
    for (const product of products) {
      const features = [...product.features, ...product.preferences];

      let score = 0;
      for (const feature of features) {
        if (filters.has(feature)) {
          score += 1;
        }
      }

      if (score === 0) continue;
      scores.set(product.id, { ...product, score });
    }

    return scores;
  }

  #rankProducts(products) {
    const rank = [...products.values()].sort((productA, productB) => {
      if (productA.score === productB.score) return productB.id - productA.id;

      return productB.score - productA.score;
    });

    return rank;
  }
}

export const recommendationService = new RecommendationService();
