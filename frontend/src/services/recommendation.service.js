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
  getRecommendations(options = DEFAULT_RECOMMENDATION_OPTIONS, products) {
    const filters = new Set([
      ...(options.selectedFeatures ?? []),
      ...(options.selectedPreferences ?? []),
    ]);
    const isSingleProduct =
      options.selectedRecommendationType === RECOMMENDATION_TYPE.SingleProduct;

    const recommendations = [];
    for (const product of products) {
      const items = [...product.features, ...product.preferences];
      let matches = items.some((feature) => filters.has(feature));

      if (matches && isSingleProduct) {
        const currentLatest = recommendations.at(0);
        const isLatest = product.id > (currentLatest?.id ?? -1);

        if (isLatest) recommendations[0] = product;

        continue;
      }

      if (matches) recommendations.push(product);
    }

    return recommendations;
  }
}

export const recommendationService = new RecommendationService();
