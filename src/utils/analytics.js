import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Initialize GA4
export const initGA = () => {
    const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (TRACKING_ID) {
        ReactGA.initialize(TRACKING_ID);
    } else {
        console.warn("GA_MEASUREMENT_ID is missing in .env");
    }
};

// Hook to track page views
export const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (TRACKING_ID) {
            ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
        }
    }, [location]);
};
