const parcelYes = document.getElementById("parcel-yes");
const parcelNo = document.getElementById("parcel-no");
const subjOfEasement = document.getElementById("subject-of-easement");
const tenureYes = document.getElementById("tenure-yes");
const tenureNo = document.getElementById("tenure-no");
const standard = document.getElementById("standard");
// const tenureNo = document.getElementById("tenure-no");

const saleYes = document.getElementById("sale-yes");
const saleNo = document.getElementById("sale-no");

const municipality = document.getElementById("municipality");

const sectionA = document.getElementById("section-a");
const sectionB = document.getElementById("section-b");
const sectionC = document.getElementById("section-c");
const form = document.getElementById("form");
const formSectionB = document.getElementById("form-sectionB");
const formSectionC = document.getElementById("form-sectionC");
const resetBtn = document.getElementById("reset");
const print = document.getElementById("print");
const selectBox = document.getElementById("selectBox");
const optionsContainer = document.getElementById("optionsContainer");
const selected = document.getElementById("selected");
// const optionsList = optionsContainer.querySelectorAll(".option input ");
const specificReservation = document.getElementById("specific-reservations");
const specificReservationLabel = document.getElementById(
  "specific-reservations-label"
);
let selectedOptions = [];

document
  .getElementById("other-tenancy-text")
  .addEventListener("change", (e) => {
    if (e.target.value) {
      document.getElementById("tenancy").disabled = true;
      document.getElementById("other-tenancy").checked = true;
    } else {
      document.getElementById("tenancy").disabled = false;
      document.getElementById("other-tenancy").checked = false;
    }
  });
document.getElementById("other-tenancy").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("tenancy").disabled = true;
  } else {
    document.getElementById("tenancy").disabled = false;
    document.getElementById("other-tenancy-text").value = "";
  }
});

// specificReservationLabel.addEventListener("click", () => {
//   handleSpecificReservationCheckbox();
// });
// specificReservation.addEventListener("click", () => {
//   handleSpecificReservationCheckbox();
// });
// Toggle dropdown

// Update selected options
// optionsList.forEach((option) => {
//   option.addEventListener(
//     "change",
//     (e) => {
//       console.log(e);
//       e.stopPropagation();
//       updateSelectedOptions();
//     },
//     false
//   );
// });
print.addEventListener("click", () => {
  console.log("print", print);
  window.print();
});
// function updateSelectedOptions() {
//   optionsList.forEach((option) => {
//     if (selectedOptions.includes(option.value)) {
//       selectedOptions = selectedOptions.filter((val) => val !== option.value);
//     }
//     if (option.checked && !selectedOptions.includes(option.value)) {
//       selectedOptions.push(option.value);
//     }
//   });
//   handleSpecificReservationCheckbox();
//   selected.textContent =
//     selectedOptions.length > 0 ? selectedOptions.join(", ") : "Select options";
// // }
// const handleSpecificReservationCheckbox = function () {
//   console.log(selectedOptions);
//   if (selectedOptions.length > 0) {
//     specificReservation.checked = true;
//     return;
//   } else specificReservation.checked = false;
// };

// const selectSpecificReservation = document.getElementById("select");
// selectSpecificReservation.addEventListener("change", (e) => {
//   for (let i = 0; i < selectSpecificReservation.options.length; i++) {
//     console.log(selectSpecificReservation.options[i].selected);
//     if (
//       selectSpecificReservation.options[i].selected &&
//       !selectedOptions.includes(selectSpecificReservation.options[i].value)
//     ) {
//       selectedOptions.push(selectSpecificReservation.options[i].value);
//     }
//     if (
//       !selectSpecificReservation.options[i].selected &&
//       selectedOptions.includes(selectSpecificReservation.options[i].value)
//     ) {
//       selectedOptions = selectedOptions.filter(
//         (option) => option !== selectSpecificReservation.options[i].value
//       );
//     }
//   }
//   console.log(selectedOptions);
//   if (selectedOptions.length > 0) {
//     specificReservation.checked = true;
//   } else specificReservation.checked = false;
// });

document.getElementById("Flooding-clause").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("flooding-div").innerHTML =
      '       <div class="grid col-2 gap">      <div class="grid">       <div class="flex label-with-icon" style="align-items: center;">                  <label for="Contor-elevation">Contor Elevation </label>         <div class="info-wrapper">           <div id="info" style="margin-bottom: 5px;">i</div>           <div class="hide">       Indicate Contour Elevation either in meters or feet           </div>         </div>     </div>     <div class="">       <input type="text" id="contour-elevation" />       </div>      </div>     <div class="grid">       <div class="flex label-with-icon" style="align-items: center;">         <label for="Datums">Datum</label>         <div class="info-wrapper">           <div id="info" style="margin-bottom: 5px;">i</div>          <div class="hide"> Canadian Geodetic Vertical Datum 1928, or as indicated on the Plan of Survey. </div>        </div>                 </div>    <div class="">      <input type="text" id="datum" />     </div>  </div></div>';

    handleTooltip();
  } else document.getElementById("flooding-div").innerHTML = "";
});

// Close dropdown when clicking outside

// selectBox.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("clicked", optionsContainer.style.display);
//   if (
//     optionsContainer.style.display === "block" &&
//     e.target.tagName !== "INPUT" &&
//     !e.target.classList.contains("option")
//   )
//     optionsContainer.style.display = "none";
//   else optionsContainer.style.display = "block";
//   handleSpecificReservationCheckbox();
// });

const handleTooltip = function () {
  const allInfos = document.querySelectorAll("#info");
  allInfos.forEach((info) => {
    info.addEventListener("mouseenter", (e) => {
      info.nextElementSibling.classList.add("show");
      info.nextElementSibling.classList.remove("hide");
    });
    info.addEventListener("mouseleave", (e) => {
      info.nextElementSibling.classList.add("hide");
      info.nextElementSibling.classList.remove("show");
    });
  });
};
tenureYes.addEventListener("change", (e) => {
  if (e.target.checked) {
    renderSection("B");
    renderFormSection("B");
    handleTooltip();
  }
});

resetBtn.addEventListener("click", () => {
  document.querySelectorAll("input").forEach((input) => {
    input.target.value = "";
  });
  selectedOptions = [];
  updateSelectedOptions();
});

tenureNo.addEventListener("change", (e) => {
  if (e.target.checked) {
    unRenderFormSection("B");
  }
});

parcelYes.addEventListener("change", (e) => {
  if (e.target.checked) renderFormSection("subject-of-easement");
});
parcelNo.addEventListener("change", (e) => {
  if (e.target.checked) {
    unRenderFormSection("subject-of-easement");
  }
});
standard.addEventListener("change", (e) => {
  if (!e.target.checked) {
    document.getElementById("specific-reservations-list").innerHTML =
      '<div class="grid col-2"><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="mine-and-minerals" /><span class="checkmark"></span></div><label for="mine-and-minerals">Mine and Minerals</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="navigability" /><span class="checkmark"></span></div><label for="navigability">Navigability</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="access-to-shores" /><span class="checkmark"></span></div><label for="access-to-shores">Access to Shores</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="public-and-colonization-of-roads" /><span class="checkmark"></span></div><label for="public-and-colonization-of-roads">Public and Colonization of Roads</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="roads" /><span class="checkmark"></span></div><label for="roads">10% for Roads</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="right-to-construct" /><span class="checkmark"></span></div><label for="right-to-construct">Section 65 (Right to Construct)</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="refining-clause" /><span class="checkmark"></span></div><label for="refining-clause">Refining Clause (Section 62)</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="all-trees" /><span class="checkmark"></span></div><label for="all-trees">All Trees</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="pine-trees" /><span class="checkmark"></span></div><label for="pine-trees">Pine Trees</label></div><div class="flex" style="align-items: center;"><div class="checkmark-container"><input type="checkbox" class="reservation-checkbox" id="right-of-way" /><span class="checkmark"></span></div><label for="right-of-way">Right of Way for Public</label></div></div>';
  } 
  //Access to shores


  
  else {
    document.getElementById("specific-reservations-list").innerHTML = "";
  }
});
specificReservation.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.getElementById("specific-reservations-list").innerHTML =
      ' <div class="grid col-2"><div class="flex" style="align-items: center;">        <div class="checkmark-container">            <input type="checkbox" class="reservation-checkbox" id="mine-and-minerals" />            <span class="checkmark"></span>        </div>        <label for="mine-and-minerals">Mine and Minerals</label>    </div>    <div class="flex" style="align-items: center;">        <div class="checkmark-container">            <input type="checkbox" class="reservation-checkbox" id="access-to-shores" />            <span class="checkmark"></span>        </div>        <label for="access-to-shores">Access to Shores</label>    </div>  <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="navigability" />           <span class="checkmark"></span>       </div>       <label for="navigability">Navigability</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="roads" />           <span class="checkmark"></span>       </div>       <label for="roads">10% for Roads</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="public-and-colonization-of-roads" />           <span class="checkmark"></span>       </div>       <label for="public-and-colonization-of-roads">Public and Colonization of Roads</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="refining-clause" />           <span class="checkmark"></span>       </div>       <label for="refining-clause">Refining Clause (Section 62)</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="right-to-construct" />           <span class="checkmark"></span>       </div>       <label for="right-to-construct">Section 65 (Right to Construct)</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="all-trees" />           <span class="checkmark"></span>       </div>       <label for="all-trees">All Trees</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="pine-trees" />           <span class="checkmark"></span>       </div>       <label for="pine-trees">Pine Trees</label>   </div>   <div class="flex" style="align-items: center;">       <div class="checkmark-container">           <input type="checkbox" class="reservation-checkbox" id="right-of-way" />           <span class="checkmark"></span>       </div>       <label for="right-of-way">Right of Way for Public</label>   </div></div>';
  } else {
    document.getElementById("specific-reservations-list").innerHTML = "";
  }
});
saleYes.addEventListener("change", (e) => {
  if (e.target.checked) {
    municipality.style.display = "block";
    municipality.insertAdjacentHTML(
      "beforeend",
      '<div class="radio-group"> <input type="radio" name="municipality" id="municipality-yes" /><label for="municipality-yes">Yes</label><input type="radio" name="municipality" id="municipality-no" /> <label for="municipality-no">No</label> </div>'
    );

    const municipalityNo = document.getElementById("municipality-no");
    const municipalityYes = document.getElementById("municipality-yes");
    municipalityNo.addEventListener("change", (e) => {
      if (e.target.checked) {
        console.log("render c");
        renderSection("C");
        renderFormSection("C");
        handleTooltip();
      } else {
        unRenderFormSection("C");
      }
    });
    municipalityYes.addEventListener("change", (e) => {
      if (e.target.checked) {
        unRenderFormSection("C");
      } else {
        // renderSection("C");
        renderFormSection("C");
        handleTooltip();
      }
    });
  }
});
saleNo.addEventListener("change", (e) => {
  if (e.target.checked) {
    municipality.style.display = "none";

    municipality.innerHTML = "";
    unRenderFormSection("C");
  }
});

const renderFormSection = function (sectionName) {
  if (sectionName === "B") {
    formSectionB.style.display = "block";
    formSectionB.insertAdjacentHTML(
      "afterbegin",
      '<h3> Section B: Cancellation of Lease or Licence</h3>   <div class=" grid col-2 gap">       <div class="form-group">           <label for="document-reference-type"> <div class="label-with-icon"><div>Document Reference Type </div><div class="info-wrapper"> <div id="info">i</div><div class="hide">From the dropdown select proper document type          </div> </div></div> </label>           <select id="document-reference-type">     <option value="">  </option>        <option value="Summer Resort Lease (SRL)">Summer Resort Lease (SRL) </option><option value="Crown Lease (CRL)">                   Crown Lease (CRL)               </option>     <option> Licence of Occupation (LO) / Land Licence Agreement (LLA) </option>      </select>       </div>       <div class="form-group">           <label for="document-number"><div class="label-with-icon"><div>Document No </div><div class="info-wrapper"><div id="info">i</div><div class="hide">  Insert the document number</div>  </div></div></label><input type="text" id="document-number" />  </div>   </div>  <div class="line"></div>  <div class="form-flex">      <div class="form-group">     <label for="expiry-date">   <div class="label-with-icon"><div>Expiry Date: (YEAR/MM/DD) </div><div class="info-wrapper">          <div id="info">i</div>          <div class="hide">         Insert an expiry date of the lease that is being cancelled          </div>        </div>      </div>   </label>     <input type="text"  id="expiry-date" />   </div>   <div class="form-group">       <label for="annual-rent">      <div class="label-with-icon">        <div>        Annual Rent                            </div>                <div class="info-wrapper">          <div id="info">i</div>          <div class="hide">Insert the most recent rent amount the lease was paying          </div>        </div>      </div>        </label>       <input type="number" id="annual-rent" step="any" />   </div>   <div class="form-group">       <label for="paid-to">            <div class="label-with-icon"><div>Paid To    </div><div class="info-wrapper">  <div id="info">i</div>  <div class="hide">Insert the month and year of which the lease made the last payment </div></div></div>        </label>       <input type="text" id="paid-to" />   </div>     </div>   <div class="line"></div>   <div class="form-group">     <label for="current-lease-name">        <div class="label-with-icon"><div>          Current Leaseholder    </div><div class="info-wrapper">  <div id="info">i</div><div class="hide">Insert owners name as shown on the leasehold PIN    </div></div></div>        </label>     <textarea type="text" id="current-lease-name" ></textarea>   </div>  <div class="line"></div>   <div class="form-group"><label for="property-description"       >Property Description as found on leasehold P.I.N</label     >     <input type="text" id="property-description" />       </div>      <div class="line"></div><div class="grid col-2 gap">      <div class="form-group">          <label for="leasehold-pin-number">          <div class="label-with-icon"><div>          Leasehold P.I.N No  </div><div class="info-wrapper"><div id="info">i</div>  <div class="hide">If applicable enter subject property identifier number</div></div></div></label>    <input type="number" id="leasehold-pin-number"  step="any"/>  </div>  <div class="form-group">  <label for="unused-funds"><div class="label-with-icon"><div>Disposition of Unused Funds</div><div class="info-wrapper">  <div id="info">i</div>  <div class="hide">If the "enlargement"  is to take place part way through the rental year then an exploration of how "unused" part of the annual  has been addressed must be entered. If the credit towards the purchase price or the refund has been/will be given to client, this must be entered. If no credit has been/will be provided then enter absorb. If the "enlargement" is to coincide with the anniversary date or expiry dat e of the lease, enter "n/a"     </div></div></div>          </label>    <input type="number" id="unused-funds" step="any" />  </div>  </div>  <div class="line"></div>  <h3><i>Crown Land Registry Use Only:</i> </h3>  <div class="bg"> <div class="grid col-2 gap">      <div class="form-group">  <label for="document-general-number">      <div class="label-with-icon">      <div>        Document General Number              </div>   </div></label>  <input type="number" id="document-general-number" step="any" />      </div>      <div class="form-group">     <label for="date-minister-order">  <div class="label-with-icon">  <div>        Date: (YEAR/MM/DD)    </div>  </div></label> <input type="text"  id="date" />      </div>  </div>  <div class="form-group">    <label for="notes">Notes</label><textarea id="notes"></textarea></div></div>'
    );
    handleTooltip();   //////////////////
  }
  if (sectionName === "C") {
    formSectionC.style.display = "block";
    formSectionC.insertAdjacentHTML(
      "afterbegin",
      '<div class="line"></div> <h3>Section C: Minister’s Order</h3><div>Sections 55.1 (1) and 55.1 (3) Public Lands Act, R.S.O. 1990, as amended </div><div>    <p>Road description to be put in by Crown or Road Allowance laid out        by a Crown Surveyor that <u>that is not within a municipality</u></p>        <div class="form-group">        <label for="road-description"      ><div class="label-with-icon">      <div>        Legal Description of Road Allowance                      </div>            <div class="info-wrapper">        <div id="info">i</div>        <div class="hide">Insert legal description of road allowance obtained from OSG. At a minimum include, Include the Crown Location or Mining Location Number, Parts and Deposited No. (ex: CL12345, Parts 1-3, 45R99999)           </div>      </div>    </div>      </label    >      <div class="form-group"><div> <label for="legal-description">Crown location/Mining Location:</label>  <input type="text"  id="crown-location-road"/>    </div>    <div>      <label for="legal-description">Parts:</label>      <input type="text" id="parts-road" />    </div>    <div>      <label for="legal-description">Deposited plan number:</label>      <input type="text" id="deposited-road" />    </div>     <div class="flex"> <input type="checkbox" id="other-road" />      <label for="other-road">Other:</label>      <input type="text" id="other-road-text" /></div>  </div>  <div class="line" ></div>  </div>  <div class="form-group">    <label for="road-closure-notice"      >        <div class="label-with-icon"><div>        Has appropriate notice been given to persons who will be affected      by the road closure?    </div><div class="info-wrapper">  <div id="info">i</div>  <div class="hide">Confirm that proper notice has been given. if you enter "no", the requisition package will be  returned to the file lead</div></div></div></label>    <div class="radio-group">      <input        type="radio"        name="road-closure-notice"        id="road-closure-yes"      />      <label for="road-closure-yes">Yes</label>       <input         type="radio"         name="road-closure-notice"         id="road-closure-no"       />       <label for="road-closure-no">No</label>     </div>   </div>   <h3><i>Crown Land Registry Use Only</i></h3>   <div class="bg">   <div >   <div class="form-group">   <label>Approved by Provincial Lands Specialist </label>       </div> <div class="signature"></div><div class="grid col-2 gap"> <div class="form-group">        <label for="date-minister-order">Date: (YEAR/MM/DD)</label>        <input type="text"  id="date-minister-order" />      </div>    <div class="form-group">      <label for="minister-order-number">      <div class="label-with-icon">      <div>                Minister\'s Order Number      </div>                      </div> </label>      <input type="text" id="minister-order-number" /> </div>    <div class="form-group">      <label for="date-minister-order">  <div class="label-with-icon">  <div>        Date: (YEAR/MM/DD)    </div>    <div class="info-wrapper">    <div id="info">i</div>    <div class="hide">    populated by CLR staff    </div>  </div> </div></label>      <input type="text"  id="date-minister-order" />    </div>    <div class="form-group">      <label for="minister-notes">Notes</label>      <textarea id="minister-notes"></textarea>    </div></div>    </div>'
    );
    handleTooltip();  ////////////////////
  }
  if (sectionName === "subject-of-easement") {
    subjOfEasement.innerHTML =
      '  <div class="form-group"><div class="label-with-icon"><div>Subject to Easement Must Include the following:</div> <div class="info-wrapper"> <div id="info">i</div> <div class="hide"> If applicable complete the following fields. Also include a copy of the easement in the list of attachments. </div> </div>  </div>    <div class="form-flex">      <div class="">                    <label for="easement-number">Easement Reference Number:</label>          <input type="text" id="easement-number" />      </div>            <div class="">                <label for="grantee">Grantee:</label>          <input type="text" id="grantee" />      </div>       <div class="">         <label for="instrument-number">Instrument Number:</label><input type="text" id="instrument-number" />      </div>      </div>  </div>   <div class="form-group form-flex">                 <div class="form-basis">        <label for="easement-purpose">Purpose:</label>              <textarea id="easement-purpose"></textarea>    </div>    <div class="form-basis">      <label for="legal-description-textarea">Legal Description:</label>      <textarea id="legal-description-textarea"></textarea>    </div> </div><div class="line"></div> <div class="form-flex">  <div class="form-basis">      <label for="special-conditions">  <div class="label-with-icon"><div>Special Conditions:      </div><div class="info-wrapper">  <div id="info">i</div>  <div class="hide">     Insert the type of Special Condition, for example, Municipal Purposes. </div>     </div>   </div> </label>      <textarea id="special-conditions"></textarea>    </div>  </div>    <div style="font-weight: bold; display:grid; place-items:left; margin-bottom: 10px;">            <div class="label-with-icon"> Land Use Codes:  <div class="info-wrapper"> <div id="info">i</div>  <div class="hide">Select the proper code for each of the following: User Class, Land Use Class, Land Use/Purpose, Improvement and Activity. The most popular codes have been listed but should the one you need not be in the populated list, then you will need to go to the "Listings" in LIS. </div></div> </div> </div> <div class="grid col-2 gap">     <div class="form-group"> <label for="land-use-class">User Class:</label>        <select id="land-use-codes">  <option  value="" selected></option> <option value="Commision/Agency">4 Commision/Agency</option><option value="External Government">7 External Government</option><option value="Federal">1 Federal</option><option value="Ministry of natural resources and forestry">5 Ministry of natural resources and forestry</option><option value="Municipal">2 Municipal</option><option value="Other ON Government Ministry">6 Other ON Government Ministry</option><option value="Private Sector">3 Private Sector</option> <option value="Unknown User Class">0 Unknown User Class</option> </select></div> <div class="form-group">   <label for="land-use-class">Land Use Class:</label>        <select id="land-use-class">   <option value="" selected></option>   <option value="Agricultural">1 Agricultural</option>   <option value="Commercial/Industry">3 Commercial/Industry</option>   <option value="Enviroment/Open Space">5 Enviroment/Open Space</option>   <option value="First Nation Reserve">7 First Nation Reserve</option>   <option value="Institutional">4 Institutional</option>   <option value="Recreational">6 Recreational</option>   <option value="Residential">2 Residential</option> <option value="Unknown Land Use Class">0 Unknown Land Use Class</option></select>     </div>      <div class="form-group">      <label for="land-use-Purpose">Land Use Purpose:</label>        <select id="land-use-purpose">  <option value="" selected> </option>  <option value="Accommodation">01 Accommodation</option>  <option value="Communication">13 Communication</option>  <option value="Education">11 Education</option>  <option value="Extraction">05 Extraction</option>  <option value="Harvesting/Growing">07 Harvesting/Growing</option>  <option value="Manufacturing/Processing">06 Manufacturing/Processing</option>  <option value="Protection/Conservation">09 Protection/Conservation</option>  <option value="Recreation">10 Recreation</option>  <option value="Religion">12 Religion</option>  <option value="Service/Retail">03 Service/Retail</option>  <option value="Transportation">04 Transportation</option>  <option value="Utilities">02 Utilities</option>  <option value="Waste Disposal">08 Waste Disposal</option></select></div>      <div class="form-group">      <label for="Improvement">Improvement:</label>        <select id="improvement">    <option value="" selected></option>    <option value="Boathouse">010 Boathouse</option>    <option value="Boathouse, Two storey">139 Boathouse, Two storey</option>    <option value="Boat Launch">063 Boat Launch</option>    <option value="Bridge">011 Bridge</option>    <option value="Cabin">015 Cabin</option>    <option value="Camp, Commercial Outpost">137 Camp, Commercial Outpost</option>    <option value="Camp, Private Recreation">136 Camp, Private Recreation</option>    <option value="Campground">016 Campground</option>    <option value="Cottage">029 Cottage</option>    <option value="Dam">033 Dam</option>    <option value="Dock">036 Dock</option>    <option value="Filed Land">061 Filed Land</option>    <option value="Generating Station, Hydro">081 Generating Station, Hydro</option>    <option value="Lawn">135 Lawn</option>    <option value="Line, Electrical Distribution">088 Line, Electrical Distribution</option>    <option value="Line, Electrical Transmission">099 Line, Electrical Transmission</option>    <option value="Line, Fiber Optic">133 Line, Fiber Optic</option>    <option value="Line, Telecommunication">065 Line, Telecommunication</option>    <option value="Marina">068 Marina</option>    <option value="Mine">071 Mine</option>    <option value="Other">- - - Other</option>    <option value="Pipeline, Natural Gas">079 Pipeline, Natural Gas</option>    <option value="Pipe, Water Intake">059 Pipe, Water Intake</option>    <option value="Road">092 Road</option>    <option value="Sewage Septic Field">134 Sewage Septic Field</option>    <option value="Sewage Septic System">012 Sewage Septic System</option>    <option value="Sewage System Pipe">073 Sewage System Pipe</option>    <option value="Station, Switching">126 Station, Switching</option>    <option value="Tower">111 Tower</option>    <option value="Waste Disposal, Garbage">127 Waste Disposal, Garbage</option> <option value="Unknown Improvement">000 Unknown Improvement</option> </select>   </div>      <div class="form-group">      <label for="activity">Activity:</label>      <select id="activity"> <option value="" selected></option> <option value="Accommodating">001 Accommodating</option> <option value="Communicating">019 Communicating</option> <option value="Disposing">026 Disposing</option> <option value="Extracting">033 Extracting</option> <option value="Generating">041 Generating</option> <option value="Maintaining">054 Maintaining</option> <option value="Manufacturing">055 Manufacturing</option> <option value="Mining">059 Mining</option> <option value="Other">- - - Other</option> <option value="Pumping">072 Pumping</option> <option value="Receiving">075 Receiving</option> <option value="Recreating">076 Recreating</option> <option value="Switching">099 Switching</option> <option value="Transmitting">102 Transmitting</option> <option value="Transporting">103 Transporting</option> <option value="Unknown Activity">000 Unknown Activity</option> </select>  </div>    </div>   <div class="form-group">     <div class="label-with-icon"> <div><h3>Attachment Check List </h3> </div>  <div class="info-wrapper"><div id="info">i</div><div class="hide">Select all boxes that apply to the current disposition of this requisition. </div> </div></div><div class="grid col-2">    <div class="flex">      <div class="checkmark-container">        <input type="checkbox" id="legal-description-schedule" />        <span class="checkmark"></span>      </div>        <label for="legal-description-schedule"        >Legal Description/Schedule</label        >      </div>      <div class="flex">        <div class="checkmark-container">          <input type="checkbox" id="current-pin-instruments" />         <span class="checkmark"></span>       </div>         <label for="current-pin-instruments">Current PIN/Instruments</label>     </div>     <div class="flex">       <div class="checkmark-container">         <input type="checkbox" id="corporate-profile" />         <span class="checkmark"></span>       </div>          <label for="corporate-profile">Corporate Profile</label>      </div>      <div class="flex">        <div class="checkmark-container">          <input type="checkbox" id="oic-briefing-notes" />          <span class="checkmark"></span>       </div>         <label for="oic-briefing-notes">OIC/Briefing Notes</label>     </div>     <div class="flex">       <div class="checkmark-container">         <input type="checkbox" id="lease-cancelled" />         <span class="checkmark"></span>       </div>         <label for="lease-cancelled">Copy of Lease to be Cancelled</label>     </div>       <div class="flex">   <div class="checkmark-container"><input type="checkbox" id="legal-approval" />    <span class="checkmark"></span>  </div>  <label for="legal-approval">Legal Services Approval</label></div> <div class="flex">   <div class="checkmark-container">      <input type="checkbox" id="plan" />      <span class="checkmark"></span>    </div> <label for="plan">Plan</label></div><div class="flex"> <div class="checkmark-container">   <input type="checkbox" id="other" /> <span class="checkmark"></span> </div> <label for="other">Other</label>  <input type="text" id="other-text" /></div></div>  </div>';
      handleTooltip();  ////////////////////////
    }
};
const unRenderFormSection = function (sectionName) {
  if (sectionName === "B") {
    formSectionB.innerHTML = "";
    formSectionB.style.display = "none";
  }
  if (sectionName === "C") {
    formSectionC.innerHTML = "";
    formSectionC.style.display = "none";
  }
  if (sectionName === "subject-of-easement") {
    subjOfEasement.innerHTML = "";
  }
};
const renderSection = function (sectionName) {
  if (sectionName === "B") {
    console.log(sectionB);
    sectionB.style.display = "block";
    sectionB.innerHTML =
      "<div>  <h3> Section B: Cancellation of Lease or License</h3>  <div>    Required Supporting Documents  </div><ul><li>Original Copy of Lease </li><li>P.I.N Printout of Current Lease holder</li></ul></div>";
  }
  if (sectionName === "C") {
    sectionC.style.display = "block";
    sectionC.innerHTML =
      " <h3> Section C: Minister's Order  </h3><div>  Required Supporting Documents </div><ul>  <li>Survey Plan </li><li>Legal Description</li></ul>";
  }
  handleTooltip();   ///////////////////////////
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {};

  // Function to capitalize the first letter of a string

  // Assign values to data object with modified keys
  data["Requisition"] = capitalizeFirstLetter(
    document.getElementById("requisition").value
  );
  data["Legal Names"] = capitalizeFirstLetter(
    document.getElementById("legal-names").value
  );
  data["Operating Names"] = capitalizeFirstLetter(
    document.getElementById("operating-names").value
  );

  data["Street"] = capitalizeFirstLetter(
    document.getElementById("street").value
  );
  data["City"] = capitalizeFirstLetter(document.getElementById("city").value);
  data["Province"] = capitalizeFirstLetter(
    document.getElementById("province").value
  );
  data["Postal Code"] = capitalizeFirstLetter(
    document.getElementById("postal-code").value
  );
  data["Jurisdiction"] = capitalizeFirstLetter(
    document.getElementById("jurisdiction").value
  );
  data["Tenancy"] = capitalizeFirstLetter(
    document.getElementById("tenancy").value
  );
  data["Other Tenancy"] = capitalizeFirstLetter(
    document.getElementById("other-tenancy").value
  );
  data["Other Tenancy Text"] = capitalizeFirstLetter(
    document.getElementById("other-tenancy-text").value
  );
  data["Sales Price"] = capitalizeFirstLetter(
    document.getElementById("sale-price").value
  );
  data["Was HST Collected"] = capitalizeFirstLetter(
    document.getElementById("hst-collected").value
  );
  data["HST"] = capitalizeFirstLetter(document.getElementById("hst").value);
  data["Patent Fee"] = capitalizeFirstLetter(
    document.getElementById("patent-fee").value
  );
  data["Market Value"] = capitalizeFirstLetter(
    document.getElementById("market-value").value
  );
  data["Sale Condition"] = capitalizeFirstLetter(
    document.getElementById("sale-conditions").value
  );
  data["Condition Date"] = capitalizeFirstLetter(
    document.getElementById("conditions-date").value
  );
  data["Purpose"] = capitalizeFirstLetter(
    document.getElementById("purpose").value
  );

  data["Crown location/Mining Location number Description"] =
    capitalizeFirstLetter(document.getElementById("crown-location").value);
  data["Parts"] = capitalizeFirstLetter(document.getElementById("parts").value);
  data["Deposited Plan Number"] = capitalizeFirstLetter(
    document.getElementById("deposited").value
  );
  data["Standard"] = document.getElementById("standard").checked ? "Yes" : "No";
  data["Specific Reservations"] = document.getElementById(
    "specific-reservations"
  ).checked
    ? "Yes"
    : "No";
  if (document.getElementById("specific-reservations").checked) {
    data["Mine and Minerals"] = document.getElementById("mine-and-minerals")
      .checked
      ? "Yes"
      : "No";
    data["Access to Shores"] = document.getElementById("access-to-shores")
      .checked
      ? "Yes"
      : "No";
    data["Navigability"] = document.getElementById("navigability").checked
      ? "Yes"
      : "No";
    data["10% for Roads"] = document.getElementById("roads").checked
      ? "Yes"
      : "No";
    data["Public and Colonization of Roads"] = document.getElementById(
      "public-and-colonization-of-roads"
    ).checked
      ? "Yes"
      : "No";
    data["Refining Clause (Section 62)"] = document.getElementById(
      "refining-clause"
    ).checked
      ? "Yes"
      : "No";
    data["Section 65 (Right to Construct)"] = document.getElementById(
      "right-to-construct"
    ).checked
      ? "Yes"
      : "No";
    data["All Trees"] = document.getElementById("all-trees").checked
      ? "Yes"
      : "No";
    data["Pine Trees"] = document.getElementById("pine-trees").checked
      ? "Yes"
      : "No";
    data["Right of Way for Public"] = document.getElementById("right-of-way")
      .checked
      ? "Yes"
      : "No";
    data["Flooding Clause"] = document.getElementById("flooding-clause").checked
      ? "Yes"
      : "No";

    data["Improvement"] = document.getElementById("improvement").value;
    data["Land use-codes"] = document.getElementById("land-use-codes").value;
    data["Land use purpose"] =
      document.getElementById("land-use-purpose").value;
    data["Land use class"] = document.getElementById("land-use-class").value;
    data["Activity"] = document.getElementById("activity").value;
    data["Land Use Codes"] = document.getElementById("land-use-code").value;
    data["Navigability"] = document.getElementById("navigability").checked
      ? "Yes"
      : "No";

    data["Guarantee"] = capitalizeFirstLetter(
      document.getElementById("grantee").value
    );
    data["Easement Purpose"] = capitalizeFirstLetter(
      document.getElementById("easement-purpose").value
    );
    data["Instrument Number"] = capitalizeFirstLetter(
      document.getElementById("instrument-number").value
    );
    data["Legal Description 2"] = capitalizeFirstLetter(
      document.getElementById("legal-description-textarea").value
    );
    data["Special Conditions"] = capitalizeFirstLetter(
      document.getElementById("special-conditions").value
    );
    data["Legal Description Schedule"] = document.getElementById(
      "legal-description-schedule"
    ).checked
      ? "Yes"
      : "No";
    data["Current PIN Instruments"] = document.getElementById(
      "current-pin-instruments"
    ).checked
      ? "Yes"
      : "No";
    data["Corporate Profile"] = document.getElementById("corporate-profile")
      .checked
      ? "Yes"
      : "No";
    data["OIC Briefing Notes"] = document.getElementById("oic-briefing-notes")
      .checked
      ? "Yes"
      : "No";
    data["Lease Cancelled"] = document.getElementById("lease-cancelled").checked
      ? "Yes"
      : "No";
    data["Legal Approval"] = document.getElementById("legal-approval").checked
      ? "Yes"
      : "No";
    data["Plan"] = document.getElementById("plan").checked ? "Yes" : "No";
    data["Other Easement"] = document.getElementById("other").checked
      ? "Yes"
      : "No";
    data["Other Easement Text"] = capitalizeFirstLetter(
      document.getElementById("other-text").value
    );
    if (document.getElementById("flooding-clause").checked) {
      data["Datum"] = capitalizeFirstLetter(
        document.getElementById("datum").value
      );
      data["Contour Elevation"] = capitalizeFirstLetter(
        document.getElementById("contour-elevation").value
      );
    }
    data["Easement Number"] = capitalizeFirstLetter(
      document.getElementById("easement-number").value
    );
  }

  data["Document Reference 1"] = capitalizeFirstLetter(
    document.getElementById("document-reference-1").value
  );
  data["Document Reference 2"] = capitalizeFirstLetter(
    document.getElementById("document-reference-2").value
  );
  data["Document Reference 3"] = capitalizeFirstLetter(
    document.getElementById("document-reference-3").value
  );
  data["Date 1"] = capitalizeFirstLetter(
    document.getElementById("date-1").value
  );
  data["Date 2"] = capitalizeFirstLetter(
    document.getElementById("date-2").value
  );
  data["Date 3"] = capitalizeFirstLetter(
    document.getElementById("date-3").value
  );
  data["Land File Number"] = capitalizeFirstLetter(
    document.getElementById("land-file-number").value
  );

  if (document.getElementById("tenure-yes")?.checked) {
    data["Document Reference Type"] = capitalizeFirstLetter(
      document.getElementById("document-reference-type").value
    );
    data["Document Number"] = capitalizeFirstLetter(
      document.getElementById("document-number").value
    );
    data["Expiry Date"] = capitalizeFirstLetter(
      document.getElementById("expiry-date").value
    );
    data["Annual Rent"] = capitalizeFirstLetter(
      document.getElementById("annual-rent").value
    );
    data["Paid To"] = capitalizeFirstLetter(
      document.getElementById("paid-to").value
    );
    data["Current Lease Name"] = capitalizeFirstLetter(
      document.getElementById("current-lease-name").value
    );
    data["Property Description"] = capitalizeFirstLetter(
      document.getElementById("property-description").value
    );
    data["Leasehold PIN Number"] = capitalizeFirstLetter(
      document.getElementById("leasehold-pin-number").value
    );
    data["Unused Funds"] = capitalizeFirstLetter(
      document.getElementById("unused-funds").value
    );
    data["Document General Number"] = capitalizeFirstLetter(
      document.getElementById("document-general-number").value
    );
    data["Date"] = capitalizeFirstLetter(document.getElementById("date").value);
    data["Notes"] = capitalizeFirstLetter(
      document.getElementById("notes").value
    );
  }

  if (document.getElementById("municipality-no")?.checked) {
    data[
      "Crown location/Mining Location number Description (of road allowance)"
    ] = capitalizeFirstLetter(
      document.getElementById("crown-location-road").value
    );
    data["Parts  (of road allowance)"] = capitalizeFirstLetter(
      document.getElementById("parts-road").value
    );
    data["Deposited Plan Number  (of road allowance)"] = capitalizeFirstLetter(
      document.getElementById("deposited-road").value
    );
    data["Other  (of road allowance)"] = capitalizeFirstLetter(
      document.getElementById("other-road-text").value
    );
    data["Road Closure Yes"] = document.getElementById("road-closure-yes")
      .checked
      ? "Yes"
      : "No";
    data["Road Closure No"] = document.getElementById("road-closure-no").checked
      ? "Yes"
      : "No";
    data["Date Minister Order"] = capitalizeFirstLetter(
      document.getElementById("date-minister-order").value
    );
    data["Minister Order Number"] = capitalizeFirstLetter(
      document.getElementById("minister-order-number").value
    );
    data["Minister Notes"] = capitalizeFirstLetter(
      document.getElementById("minister-notes").value
    );
  }

  // Function to capitalize first letter of each word in a string
  // sendEmail(data);
  generatePDF(data);
});
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Function to generate PDF and return it as a base64 string
const generatePDF = function (data) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let yPos = 20; // Initial Y position for content
  const lineHeight = 10; // Height of each line

  Object.entries(data).forEach(([key, value]) => {
    const text = `${key}: ${value}`;
    const textLines = doc.splitTextToSize(
      text,
      doc.internal.pageSize.width - 20
    ); // Adjust width as needed

    // Check if the text fits on the current page
    if (
      yPos + textLines.length * lineHeight >
      doc.internal.pageSize.height - 20
    ) {
      // Add new page if content exceeds the page height
      doc.addPage();
      yPos = 20; // Reset Y position for new page
    }

    // Output text lines
    textLines.forEach((line) => {
      doc.text(line, 10, yPos);
      yPos += lineHeight; // Increment Y position for the next line
    });
  });

  doc.save("document.pdf");
};

// // Function to send email with PDF attachment
// const sendEmail = async function (data) {
//   const message = Object.entries(data)
//     .map(([key, value]) => {
//       return `${key}: ${value}`;
//     })
//     .join("\n");
//   const params = {
//     name: "IDRIS",
//     email: "hedristemitope2001@gmail.com",
//     message: message,
//   };

//   // Generate the PDF and convert to Blob
//   //   const pdfBlob = await generatePDF(data);

//   // Convert the Blob to a Base64 string
//   //   const pdfBase64 = await convertBlobToBase64(pdfBlob);

//   // Prepare the attachment object for EmailJS

//   emailjs
//     .send("service_4e86o6x", "template_2xpyi8b", params)
//     .then(() => {
//       alert("sent");
//     })
//     .catch((error) => {
//       console.error("Failed to send email:", error);
//     });
// };

// Example usage
//   sendEmail();

// Example usage
//   sendEmail();
// const convertBlobToBase64 = (blob) => {
//   return new Promise((resolve, reject) => {
//     console.log(blob);
//     const reader = new FileReader();
//     reader.readAsDataURL(blob);
//     reader.onloadend = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

handleTooltip();
