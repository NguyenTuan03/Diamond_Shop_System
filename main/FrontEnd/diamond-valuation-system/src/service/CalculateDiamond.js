export async function CalculateDiamond(
  shape,
  carat,
  color,
  cut,
  clarity,
  gradingLab,
  setValuationResult
) {
  try {
    const res = await fetch(
      `http://www.idexonline.com/DPService.asp?SID=4wp7go123jqtkdyd5f2e&cut=${shape}&carat=${carat}&color=${color}&clarity=${clarity}&make=${cut}&cert=${gradingLab}`
    );
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.status}`);
    }
    const data = await res.text();
    const xmlResult = new DOMParser().parseFromString(data, "text/xml");
    const jsonResult = {};
    for (const child of xmlResult.querySelector("pr").children) {
      jsonResult[child.tagName.toLowerCase()] = child.textContent;
    }
    setValuationResult = jsonResult;
  } catch (error) {
    console.error("Error: ", error);
  }
}
