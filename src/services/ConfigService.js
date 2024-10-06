// src/services/ConfigService.js

export const getConfig = async () => {
    const response = await fetch('/assets/config/api_config.json');
    const config = await response.json();
    return config;
};
