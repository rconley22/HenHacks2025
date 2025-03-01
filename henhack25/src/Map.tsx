import React, {useEffect, useRef} from "react";
import "@arcgis/core/assets/esri/themes/light/main.css";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

export const MapComponent = () => {
  const mapDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webmap = new WebMap({
        portalItem: {
          id: "150aea718b03456da3e76a287ded9eff"
        }
      });

      const view = new MapView({
        map: webmap,
        container: mapDiv.current
      });

    view.when(() => {
      console.log("Map and View are ready");
    }, (error: any) => {
      console.error("Error loading MapView: ", error);
    });
    }


    

    return () => {
        if (mapDiv.current) {
            mapDiv.current.innerHTML = "";
        }
    };
  }, []);

  return <div ref={mapDiv} style={{ height: "100vh", width: "100%" }} />;

}
export default MapComponent;