export const formatWind = (deg: number) => {
  if (deg > 20 && deg < 70) {
    return "юго-западный"
  }

  if (deg > 70 && deg < 110) {
    return "западный"
  }

  if (deg > 110 && deg < 160) {
    return "северо-западный"
  }

  if (deg > 160 && deg < 200) {
    return "северный"
  }

  if (deg > 200 && deg < 250) {
    return "северо-восточный"
  }

  if (deg > 250 && deg < 290) {
    return "восточный"
  }

  if (deg > 290 && deg < 340) {
    return "юго-восточный"
  }

  if (deg > 3400 && deg < 20) {
    return "южный"
  }
}