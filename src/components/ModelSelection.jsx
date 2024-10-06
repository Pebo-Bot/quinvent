// src/components/ModelSelection.jsx
import React, { useState, useEffect } from 'react';
import { getConfig } from '../services/ConfigService';

const ModelSelection = () => {
  const [config, setConfig] = useState(null);
  const [selectedApi, setSelectedApi] = useState('');
  const [selectedModelFamily, setSelectedModelFamily] = useState('');
  const [selectedModelVersion, setSelectedModelVersion] = useState('');

  useEffect(() => {
    async function fetchConfig() {
      const apiConfig = await getConfig();
      setConfig(apiConfig);
    }
    fetchConfig();
  }, []);

  const handleApiChange = (event) => {
    setSelectedApi(event.target.value);
    setSelectedModelFamily('');
    setSelectedModelVersion('');
  };

  const handleModelFamilyChange = (event) => {
    setSelectedModelFamily(event.target.value);
    setSelectedModelVersion('');
  };

  const handleModelVersionChange = (event) => {
    setSelectedModelVersion(event.target.value);
  };

  if (!config) {
    return <p>Loading...</p>;
  }

  const apiOptions = Object.keys(config.apis);
  const modelFamilies = selectedApi ? Object.keys(config.apis[selectedApi].models) : [];
  const modelVersions = selectedModelFamily ? config.apis[selectedApi].models[selectedModelFamily].versions : [];

  return (
    <div>
      <h3>Select Model</h3>

      {/* API Provider Dropdown */}
      <select value={selectedApi} onChange={handleApiChange}>
        <option value="">Select API Provider</option>
        {apiOptions.map((api) => (
          <option key={api} value={api}>{api}</option>
        ))}
      </select>

      {/* Model Family Dropdown */}
      {selectedApi && (
        <select value={selectedModelFamily} onChange={handleModelFamilyChange}>
          <option value="">Select Model Family</option>
          {modelFamilies.map((family) => (
            <option key={family} value={family}>{family}</option>
          ))}
        </select>
      )}

      {/* Model Version Dropdown */}
      {selectedModelFamily && (
        <select value={selectedModelVersion} onChange={handleModelVersionChange}>
          <option value="">Select Model Version</option>
          {modelVersions.map((version) => (
            <option key={version} value={version}>{version}</option>
          ))}
        </select>
      )}

      {/* Display Selected Model */}
      {selectedModelVersion && (
        <div>
          <p>
            Selected Model: {selectedApi} - {selectedModelFamily} - {selectedModelVersion}
          </p>
        </div>
      )}
    </div>
  );
};

export default ModelSelection;
