export function AccueilFactory() {
  const service = {};
  
  service.calculateNumberOfelementsContainingThree = calculateNumberOfelementsContainingThree;
  
  return service;
  
  function calculateNumberOfelementsContainingThree(listeTaches) {
    let numberOfElementsContainingThree = 0;
    for(let i=0; i < listeTaches.length; i++) {
      if (listeTaches[i].includes("3")) {
        numberOfElementsContainingThree++;
      }
    }
    
    return numberOfElementsContainingThree;
  }
}