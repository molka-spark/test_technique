export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      switch (drug.name) {
        case "Magic Pill":
          break;
        case "Herbal Tea":
          this.updateHerbalTea(drug);
          break;
        case "Fervex":
          this.updateFervex(drug);
          break;
        case "Dafalgan":
          this.updateUnoneDrug(drug, 2);
          break;
        default:
          this.updateUnoneDrug(drug);
          break;
      }
    });

    if (drug.name != "Magic Pill") {
      drug.expiresIn -= 1;
    }

    if (drug.expiresIn < 0) {
      this.handleExpiredDrug(drug);
    }

    return this.drugs;
  }

  updateHerbalTea(drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
  }

  updateFervex(drug) {
    if (drug.benefit < 50) {
      drug.benefit += 1;
    }
    if (drug.expiresIn < 11 && drug.benefit < 50) {
      drug.benefit += 1;
    }
    if (drug.expiresIn < 6 && drug.benefit < 50) {
      drug.benefit += 1;
    }
  }

  updateUnoneDrug(drug, val = 1) {
    drug.benefit = Math.max(0, drug.benefit - val);
  }

  handleExpiredDrug(drug) {
    switch (drug.name) {
      case "Magic Pill":
        break;
      case "Herbal Tea":
        if (drug.benefit < 50) drug.benefit += 1;
        break;
      case "Fervex":
        drug.benefit = 0;
        break;
      case "Dafalgan":
        this.updateUnoneDrug(drug, 2);
        break;
      default:
        this.updateUnoneDrug(drug);
        break;
    }
  }
}
