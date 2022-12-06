console.log('hello')

// This should be your own API key
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJhYXNpdGgwNCIsImEiOiJja3g4ZDRmbHEwOXlvMm9zZWJzMjFidmp2In0.b8pBus-qjblp34X5OPLP6A';
      
          let caulfield = [145.0420733, -37.8770097];
      
          let map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v10',
              zoom: 8,
              center: caulfield
          });
  
          // Code added here will run whenthe page loads.
  
          function panToMonashClayton()
          {    
              // Code added here will run when the "Pan to Monash Clayton" button is clicked.
  
              map.panTo([145.1343136,  -37.9110467]);
  
          }
      
          function showPath()
          {
              // Code added here will run when the "Show Path" button is clicked.
          }
      
          function showPolygon()
          {
              // Code added here will run when the "Show Polygon" button is clicked.
          }
  
          // This function checks whether there is a map layer with id matching 
          // idToRemove.  If there is, it is removed.
          function removeLayerWithId(idToRemove)
          {
              let hasPoly = map.getLayer(idToRemove)
              if (hasPoly !== undefined)
              {
                  map.removeLayer(idToRemove)
                  map.removeSource(idToRemove)
              }
          }