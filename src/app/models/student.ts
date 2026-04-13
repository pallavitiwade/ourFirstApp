export interface Iplant{
    planetName: string;
    distanceFromSunKm: number;
    diameterKm: number;
    hasRings: boolean;
    numberOfMoons: number;
}

export interface Imounts{
  mountainName: string;
    heightMeters: number;
    locationContinent: string;
    firstAscentYear: number;
    isVolcano: boolean;
}
 
export interface Iunive{
    uniName: string;
    foundedYear: number;
    countryLocated: string;
    studentCount: number;
    worldRanking: number
}
export interface Ianimal{
    species: string;
    averageWeightKg: number;
    habitatType: string;
    lifespanYears: number;
    endangeredStatus: string;

}

export interface Iapp{
     appName: string;
    categoryType: string;
    downloadsMillion: number;
    developerCompany: string;
    subscriptionRequired: boolean;
}
export interface Icontinent{
continentLabel: string;
    surfaceAreaMillionSqKm: number;
    countriesCount: number;
    populationBillion: number;
    largestCountry: string;

}
export interface Idessert{
dessertName: string;
    sugarContentGrams: number;
    servingTemp: string;
    mainIngredient: string;
    calorieCount: number;
}
export interface Iocean{
 oceanTitle:string;
    avgDepthMeters: number;
    surfaceAreaMillionSqKm: number;
    borderingContinents: number;
    salinityPpt: number;
}
export interface Igadget{
 gadgetLabel: string;
    featuresCount: number;
    batteryLifeHours: number;
    connectivityType: string;
    weightGrams: number
}
export interface Ilandmark{
landmarkLabel: string;
    heightMeters: number;
    visitorCountYearMillion: number;
    countryLocation: string;
    constructionYear: number;
}
export interface Ivehicle{
vehicleType: string;
    maxSpeedKph: number;
    fuelCapacityLiters: number;
    wheelCount: number;
    manufacturerLocation: string;
}
export interface Iprofession{
professionName: string;
    avgSalaryUSD: number;
    yearsOfStudy: number;
    riskLevel: string;
    workEnvironment: string;
}
export interface Ibeverage{
beverageTitle: string;
    caffeineMg: number;
    servingSizeMl: number;
    servedHot: boolean;
    sugarContentG: number;
}
export interface Iflower{
flowerName: string;
    petalCount: number;
    fragranceLevel: string;
    bloomingSeason: string;
    stemLengthCm: number;
}
export interface Ihotel{
 hotelLabel: string;
    stars: number;
    totalRooms: number;
    poolAvailable: boolean;
    cityLoc: string;
}
export interface Iisland{
 islandLabel: string;
    areaSqKm: number;
    countryAdmin: string;
    inhabited: boolean;
    climateType: string;
}

export interface Iinsect{
 insectName: string;
    wingspanCm: number;
    legsCount: number;
    lifespanDays: number;
    canFly: boolean;
}
export interface Ifestival{
  festivalName: string;
    monthObserved: string;
    durationDays: number;
    originCountry: string;
    outdoorEvent: boolean;
}
export interface Iriver{
  riverLabel: string;
    lengthKm: number;
    flowsThroughCountries: number;
    avgDepthM: number;
    deltaExists: boolean;
}
export interface Ispice{
spiceName: string;
    colorHue: string;
    originRegion: string;
    pungencyLevel: string;
    isPowdered: boolean;
}
export interface Itool{
   toolName: string;
    weightKg: number;
    handleMaterial: string;
    manualTool: boolean;
    usageCategory: string;
}
export interface Imineral{
 mineralLabel: string;
    hardnessMoh: number;
    crystalSystem: string;
    isMetallic: boolean;
    marketPriceUSDkg: number;
}

export interface Imoon{
 moonLabel: string;
    orbitingPlanet: string;
    diameterKm: number;
    discoveredYear: number;
    surfaceMaterial: string;
}
export interface Ibands{
  bandLabel: string;
    originCity: string;
    formedYear: number;
    genreStyle: string;
    albumsCount: number;
}