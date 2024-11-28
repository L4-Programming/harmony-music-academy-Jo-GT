export function displayResults(output) {
    console.log("Displaying the final results...");
  
    let results = document.querySelector("#results");
  
    results.innerHTML = `
      <div class="card">
        <div class="card-header">${output.userEmail}</div>
        <div class="card-price">£${output.totalCost}</div>
        <div class="card-price-sub">per week</div>
        <div class="details">
          <div>
            <span>Level</span>
            <div>${output.userLevel}</div>
          </div>
          <div>
            <span>Hours</span>
            <div>${output.userHours}</div>
          </div>
        </div>
      </div>
    `;
  }
  