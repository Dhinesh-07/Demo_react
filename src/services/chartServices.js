export const getChartData = (count) => {
    const totalSections = 30;
  
    let yellowSections = totalSections;
    let blueSections = 0;
    let redSections = 0;
  
    if (count > 0) {
      blueSections = count;
      yellowSections = totalSections - blueSections;
    } else if (count < 0) {
      redSections = Math.abs(count);
      yellowSections = totalSections - redSections;
    }
  
    return [
      { name: "Yellow", value: yellowSections },
      { name: "Blue", value: blueSections },
      { name: "Red", value: redSections },
    ];
  };
  