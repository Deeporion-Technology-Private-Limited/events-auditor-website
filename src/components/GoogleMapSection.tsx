import { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import AnimatedSection from "@/components/AnimatedSection";

const MAP_CENTER = { lat: 26.879841, lng: 75.711052 };
const DEFAULT_ZOOM = 15;

const GoogleMapSection = () => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-contact",
    googleMapsApiKey: apiKey || "",
  });

  const containerStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      minHeight: "300px",
    }),
    []
  );

  if (!apiKey) {
    return (
      <section className="section-padding" aria-labelledby="our-location-heading">
        <div className="container-narrow">
          <AnimatedSection className="mb-6">
            <div className="divider-line mb-4" />
            <h2 id="our-location-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Location
            </h2>
          </AnimatedSection>
          <div
            className="w-full rounded-xl shadow-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground font-body text-sm h-[300px] md:h-[425px]"
            title="Map placeholder – set VITE_GOOGLE_MAPS_API_KEY to show map"
          >
            Add VITE_GOOGLE_MAPS_API_KEY to .env to display the map
          </div>
        </div>
      </section>
    );
  }

  if (loadError) {
    return (
      <section className="section-padding" aria-labelledby="our-location-heading">
        <div className="container-narrow">
          <AnimatedSection className="mb-6">
            <div className="divider-line mb-4" />
            <h2 id="our-location-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Location
            </h2>
          </AnimatedSection>
          <div
            className="w-full rounded-xl shadow-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground font-body text-sm h-[300px] md:h-[425px]"
            title="Map failed to load"
          >
            Map could not be loaded. Please try again later.
          </div>
        </div>
      </section>
    );
  }

  if (!isLoaded) {
    return (
      <section className="section-padding" aria-labelledby="our-location-heading">
        <div className="container-narrow">
          <AnimatedSection className="mb-6">
            <div className="divider-line mb-4" />
            <h2 id="our-location-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Our Location
            </h2>
          </AnimatedSection>
          <div
            className="w-full rounded-xl shadow-lg overflow-hidden bg-muted flex items-center justify-center text-muted-foreground font-body text-sm h-[300px] md:h-[425px]"
            title="Loading map"
            aria-busy="true"
          >
            Loading map…
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding" aria-labelledby="our-location-heading">
      <div className="container-narrow">
        <AnimatedSection className="mb-6">
          <div className="divider-line mb-4" />
          <h2 id="our-location-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Location
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <div
            className="w-full h-[300px] md:h-[425px] rounded-xl shadow-lg overflow-hidden"
            title="Google Map showing Events Auditor office location"
            aria-label="Map showing Events Auditor office location in Jaipur"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={MAP_CENTER}
              zoom={DEFAULT_ZOOM}
              options={{
                disableDefaultUI: false,
                zoomControl: true,
                mapTypeControl: true,
                fullscreenControl: true,
              }}
            >
              <Marker position={MAP_CENTER} title="Events Auditor - AJCO" />
            </GoogleMap>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GoogleMapSection;
