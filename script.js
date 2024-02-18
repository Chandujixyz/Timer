
 const hhInput = document.querySelector(".hh");
 const mmInput = document.querySelector(".mm");
 const ssInput = document.querySelector(".ss");

hhInput.addEventListener("blur", typinghh);
mmInput.addEventListener("blur", typingmm);
ssInput.addEventListener("blur", typingss);



function typinghh() {
  const inputValue = hhInput.textContent.trim(); // Use textContent and trim any leading/trailing whitespace
  if (isNaN(parseInt(inputValue)) || parseInt(inputValue) <0) {
    alert("Please enter a correct hour (0 to infinit)");
    return;
  }

}

function typingmm() {
    const inputValue = mmInput.textContent.trim(); // Use textContent and trim any leading/trailing whitespace
    if (isNaN(parseInt(inputValue)) || parseInt(inputValue) < 0 || parseInt(inputValue) > 59) {
      alert("Please enter a correct minutes (0 to 59)");
      return;
    }
  }

  function typingss() {
    const inputValue = ssInput.textContent.trim(); // Use textContent and trim any leading/trailing whitespace
    if (isNaN(parseInt(inputValue)) || parseInt(inputValue) < 0 || parseInt(inputValue) > 59) {
      alert("Please enter a correct seconds (0 to 59)");
      return;
    }
  }

 
//////////////////////////////////////////////////////
 
/////////////////////////////
//************************************************************ */



const timersContainer = document.getElementById("timers");
const addButton = document.querySelector("button");
const hideP = document.getElementById("hideP");

addButton.addEventListener("click", setTimer);

function setTimer() {
  hideP.classList.add("hide");

  const timerDiv = document.createElement("div");
  timerDiv.classList.add("timeset");

  const h4 = document.createElement("h4");
  h4.innerText = "time Left :";

  const timerContent = document.createElement("div");
  timerContent.classList.add("time");

  const divColen1 = document.createElement("div");
  divColen1.classList.add("colen");
  divColen1.innerText = ":";

  const divColen2 = document.createElement("div");
  divColen2.classList.add("colen");
  divColen2.innerText = ":";

  let sschange = ssInput.textContent.trim();
  let ssc=parseInt(sschange);

  let mmchange = mmInput.textContent.trim();
  let mmc=parseInt(mmchange);

  let hhchange = hhInput.textContent.trim();
  let hhc=parseInt(hhchange);

  const divhh = document.createElement("div");
  divhh.classList.add("hh");
  divhh.innerText =hhc;

  const divmm = document.createElement("div");
  divmm.classList.add("mm");
  divmm.innerText =mmc;

  const divss = document.createElement("div");
  divss.classList.add("ss");
  divss.innerText = ssc;
 
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("button");
  deleteButton.addEventListener("click", deleteTimer);

  timerContent.append(divhh, divColen1, divmm, divColen2, divss);
  timerDiv.append(h4, timerContent, deleteButton);
  timersContainer.appendChild(timerDiv);

    // decreasing the time
//   // Create a timer to decrease the value of divss every second
//   const timerInterval = setInterval(() => {
//     ssc--;

//     if (ssc >= 0) {
//       divss.innerText = ssc;

//     } else { 
//       // Clear the interval when ssc reaches 0
//       clearInterval(timerInterval);
//     }
//   }, 1000); // 1000 milliseconds = 1 second

// Create a timer to decrease the value of divss every second
const timerInterval = setInterval(() => {
    ssc--;

    if (ssc >= 0) {
      divss.innerText = ssc;
    } else {
      // Decrease minutes when seconds reach 0
      mmc--;

      if (mmc >= 0) {
        divmm.innerText = mmc;
        ssc = 59; // Reset seconds to 59
      } else {
         
        hhc--;

      if (hhc >= 0) {
        divhh.innerText = hhc;
        mmc = 59; // Reset seconds to 59
      } else {
        // Clear the interval when hhc reaches 0
        h4.classList.add("hide");
        timerContent.classList.add("hide");
        deleteButton.innerText="Stop";
        deleteButton.classList.add("bb");
        deleteButton.classList.add("yc");
        timerDiv.classList.add("yb");

        const up=document.createElement("B");
        up.innerText="Timer is Up !";
        up.classList.add("bc");

        timerDiv.append(up, deleteButton);
        timersContainer.appendChild(timerDiv);

        
        clearInterval(timerInterval);

      }

      }
    }
  }, 1000); // 1000 milliseconds = 1 second

 

  // Reset input values
  hhInput.textContent = "HH";
  mmInput.textContent = "MM";
  ssInput.textContent = "SS";
}

function deleteTimer(event) {
  const timerDiv = event.target.closest(".timeset");
  if (timerDiv) {
    timerDiv.classList.add("hide");
  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 


