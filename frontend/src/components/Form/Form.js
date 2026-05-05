// Form.js

import React, { useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import { ClearFilterButton } from './ClearFilterButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form(props) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: 'MultipleProducts',
  });

  const { getRecommendations, recommendations, setRecommendations } =
    useRecommendations(products);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleFormReset = () => {
    resetForm();
    setRecommendations([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    setRecommendations(dataRecommendations);
    scrollToTop();
  };

  useEffect(() => {
    props?.onRecommendationChange?.(recommendations);
  }, [props, recommendations]);

  return (
    <form onSubmit={handleSubmit}>
      <Preferences
        preferences={preferences}
        selectedPreferences={formData.selectedPreferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        selectedFeatures={formData.selectedFeatures}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        selected={formData.selectedRecommendationType}
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <div className="flex flex-wrap gap-2">
        <SubmitButton
          disabled={
            formData.selectedPreferences.length === 0 &&
            formData.selectedFeatures.length === 0
          }
          text="Obter recomendação"
        />
        <ClearFilterButton onClick={handleFormReset} />
      </div>
    </form>
  );
}

export default Form;
