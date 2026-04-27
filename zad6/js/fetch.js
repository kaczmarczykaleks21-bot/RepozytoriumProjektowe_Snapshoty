"use strict";
// #region FETCHOWANIE DANYCH

// Skills
async function fetchSkills() {
  try {
    const res = await fetch("data/skills.json");
    // Sprawdzam czy fetch się udał
    if (!res.ok) {
      throw new Error("Błąd pobierania danych");
    }

    const data = await res.json();
    console.log("loading skills", data);
    return data;
  } catch (err) {
    console.log("ERROR! Could not get the data");
  }
}

// Education
async function fetchEducation() {
  try {
    const res = await fetch("data/education.json");
    if (!res.ok) {
      throw new Error("ERROR! Could not get the data");
    }
    const data = await res.json();
    console.log("loading education", data);
    return data;
  } catch (err) {
    console.log("ERROR! Could not get the data");
  }
}

// Experience
async function fetchExperience() {
  try {
    const res = await fetch("data/experience.json");
    if (!res.ok) {
      throw new Error("ERROR! Could not get the data");
    }

    const data = await res.json();
    console.log("loading experience", data);

    return data;
  } catch (err) {
    console.log("ERROR! Could not get the data");
  }
}
// #endregion

export { fetchSkills, fetchEducation, fetchExperience };
